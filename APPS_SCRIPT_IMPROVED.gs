/**
 * PRARAMBH REHAB CENTER - IMPROVED VERSION
 * Static Website Form Handler with Enhanced Logging
 *
 * Handles:
 * 1. Appointment
 * 2. Enquiry
 * 3. Feedback
 *
 * Google Sheet + Email notification
 * PLUS: Detailed logging for debugging
 */

// ============================================================
// CONFIGURATION
// ============================================================

const CONFIG = {
  OWNER_EMAIL: "prarambhrehabilitationcenter@gmail.com",
  SHEET_NAME: "Submissions",
  MAX_NAME_LENGTH: 100,
  MAX_PHONE_LENGTH: 30,
  MAX_EMAIL_LENGTH: 150,
  MAX_MESSAGE_LENGTH: 3000,
  BUSINESS_NAME: "Prarambh Child Rehab Center",
  BUSINESS_PHONE: "+91 70238 78048",
  WEBSITE_URL: "",
  DEBUG_LOGGING: true, // Set to false in production
};

const HEADERS = [
  "Form Type",
  "ID",
  "Name",
  "Phone",
  "Email",
  "Child Name",
  "Child Age",
  "Service",
  "Preferred Date",
  "Preferred Time",
  "Message",
  "Feedback Role",
  "Feedback",
  "Status",
  "Follow-up Date",
  "Response Date",
  "Notes",
];

// ============================================================
// LOGGING HELPER
// ============================================================

function log(message, data = null) {
  if (CONFIG.DEBUG_LOGGING) {
    const timestamp = new Date().toLocaleString();
    console.log(`[${timestamp}] ${message}`, data || "");
  }
}

function logError(message, error) {
  console.error(`[ERROR] ${message}`, error);
}

// ============================================================
// GET REQUEST - Health Check
// ============================================================

function doGet(e) {
  log("GET request received");

  return ContentService.createTextOutput(
    JSON.stringify({
      success: true,
      message: "Prarambh form service is running.",
      timestamp: new Date().toISOString(),
    }),
  ).setMimeType(ContentService.MimeType.JSON);
}

// ============================================================
// POST REQUEST - Main Form Submission
// ============================================================

function doPost(e) {
  log("POST request received", "Processing form submission...");

  try {
    log("Received parameters", e.parameter);

    // --------------------------------------------------------
    // Validate request has data
    // --------------------------------------------------------

    if (!e || !e.parameter || Object.keys(e.parameter).length === 0) {
      log("ERROR: No form data received");
      return jsonResponse({
        success: false,
        message: "No form data received.",
      });
    }

    // --------------------------------------------------------
    // Read and normalize submitted values
    // --------------------------------------------------------

    const data = normalizeData(e.parameter);
    log("Normalized data", JSON.stringify(data));

    // --------------------------------------------------------
    // Honeypot spam protection
    // --------------------------------------------------------

    if (data.website) {
      log("WARNING: Honeypot field filled - spam detected");
      return jsonResponse({
        success: false,
        message: "Spam submission detected.",
      });
    }

    // --------------------------------------------------------
    // Validate submission
    // --------------------------------------------------------

    const validation = validateSubmission(data);

    if (!validation.valid) {
      log("Validation failed", validation.message);
      return jsonResponse({
        success: false,
        message: validation.message,
      });
    }

    log("Validation passed ✓");

    // --------------------------------------------------------
    // Get spreadsheet
    // --------------------------------------------------------

    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

    if (!spreadsheet) {
      logError("Spreadsheet not found", new Error("No active spreadsheet"));
      throw new Error("Spreadsheet could not be found.");
    }

    log("Spreadsheet found", spreadsheet.getName());

    // --------------------------------------------------------
    // Get/create submissions sheet
    // --------------------------------------------------------

    const sheet = getOrCreateSheet(spreadsheet);
    log("Sheet retrieved/created", sheet.getName());

    // --------------------------------------------------------
    // Generate ID
    // --------------------------------------------------------

    const submissionId = generateSubmissionId(data.formType);
    log("Generated submission ID", submissionId);

    // --------------------------------------------------------
    // Acquire lock to prevent race conditions
    // --------------------------------------------------------

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);

    try {
      // --------------------------------------------------------
      // Create row - Column order matching Google Sheet
      // --------------------------------------------------------

      const row = [
        data.formType,
        submissionId,
        data.name,
        data.phone,
        data.email,
        data.childName,
        data.childAge,
        data.service,
        data.preferredDate,
        data.preferredTime,
        data.message,
        data.feedbackRole,
        data.feedback,
        "New",
        "",
        "",
        "",
      ];

      log("Row created", JSON.stringify(row));

      // --------------------------------------------------------
      // Save to Google Sheet
      // --------------------------------------------------------

      sheet.appendRow(row);
      log("Row appended to sheet ✓");
    } finally {
      lock.releaseLock();
      log("Lock released");
    }

    // --------------------------------------------------------
    // Send owner notification
    // --------------------------------------------------------

    try {
      sendOwnerNotification(data, submissionId);
      log("Owner notification sent ✓", CONFIG.OWNER_EMAIL);
    } catch (emailError) {
      logError("Failed to send owner notification", emailError);
    }

    // --------------------------------------------------------
    // Send customer acknowledgement
    // --------------------------------------------------------

    if (data.email) {
      try {
        sendCustomerAcknowledgement(data, submissionId);
        log("Customer acknowledgement sent ✓", data.email);
      } catch (emailError) {
        logError("Failed to send customer acknowledgement", emailError);
      }
    }

    // --------------------------------------------------------
    // Return success
    // --------------------------------------------------------

    log("Form submission completed successfully ✓", submissionId);

    return jsonResponse({
      success: true,
      id: submissionId,
      message: "Submission received successfully.",
    });
  } catch (error) {
    logError("Unhandled error in doPost", error);

    return jsonResponse({
      success: false,
      message: "Unable to process submission. Error: " + error.message,
    });
  }
}

// ============================================================
// NORMALIZE FORM DATA
// ============================================================

function normalizeData(params) {
  return {
    formType: clean(params.formType),
    name: clean(params.name),
    phone: clean(params.phone),
    email: clean(params.email),
    childName: clean(params.childName),
    childAge: clean(params.childAge),
    service: clean(params.service),
    preferredDate: clean(params.preferredDate),
    preferredTime: clean(params.preferredTime),
    message: clean(params.message),
    feedbackRole: clean(params.feedbackRole),
    feedback: clean(params.feedback),
    website: clean(params.website), // Honeypot
  };
}

// ============================================================
// VALIDATION
// ============================================================

function validateSubmission(data) {
  const allowedForms = ["Appointment", "Enquiry", "Feedback"];

  if (!allowedForms.includes(data.formType)) {
    return { valid: false, message: "Invalid form type." };
  }

  // Name validation
  if (!data.name) {
    return { valid: false, message: "Name is required." };
  }

  if (data.name.length > CONFIG.MAX_NAME_LENGTH) {
    return { valid: false, message: "Name is too long." };
  }

  // Phone validation (required for Appointment & Enquiry)
  if (data.formType !== "Feedback") {
    if (!data.phone) {
      return {
        valid: false,
        message: "Phone number is required for " + data.formType + ".",
      };
    }

    if (data.phone.length > CONFIG.MAX_PHONE_LENGTH) {
      return { valid: false, message: "Phone number is too long." };
    }
  }

  // Email validation
  if (data.email) {
    if (data.email.length > CONFIG.MAX_EMAIL_LENGTH) {
      return { valid: false, message: "Email address is too long." };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return { valid: false, message: "Invalid email address." };
    }
  }

  // Message validation
  if (data.message && data.message.length > CONFIG.MAX_MESSAGE_LENGTH) {
    return { valid: false, message: "Message is too long." };
  }

  // Feedback validation
  if (data.formType === "Feedback") {
    if (!data.feedback) {
      return { valid: false, message: "Feedback is required." };
    }

    if (data.feedback.length > CONFIG.MAX_MESSAGE_LENGTH) {
      return { valid: false, message: "Feedback is too long." };
    }
  }

  return { valid: true };
}

// ============================================================
// CREATE / GET SHEET
// ============================================================

function getOrCreateSheet(spreadsheet) {
  let sheet = spreadsheet.getSheetByName(CONFIG.SHEET_NAME);

  if (!sheet) {
    log("Sheet does not exist, creating...");
    sheet = spreadsheet.insertSheet(CONFIG.SHEET_NAME);
    log("Sheet created", CONFIG.SHEET_NAME);
  }

  // Add headers if missing
  if (sheet.getLastRow() === 0) {
    log("Adding headers to new sheet");
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    formatHeader(sheet);
  }

  // Verify headers are correct
  const firstRow = sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0];
  const headersMissing = HEADERS.some(
    (header, index) => firstRow[index] !== header,
  );

  if (headersMissing) {
    log("Headers mismatch, correcting...");
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    formatHeader(sheet);
  }

  return sheet;
}

// ============================================================
// FORMAT HEADER
// ============================================================

function formatHeader(sheet) {
  const headerRange = sheet.getRange(1, 1, 1, HEADERS.length);
  headerRange.setFontWeight("bold");
  sheet.setFrozenRows(1);

  // Add basic filters
  if (!sheet.getFilter()) {
    sheet
      .getRange(1, 1, Math.max(sheet.getLastRow(), 1), HEADERS.length)
      .createFilter();
  }

  // Resize columns
  sheet.autoResizeColumns(1, HEADERS.length);
}

// ============================================================
// GENERATE UNIQUE SUBMISSION ID
// ============================================================

function generateSubmissionId(formType) {
  const prefixMap = {
    Appointment: "APT",
    Enquiry: "ENQ",
    Feedback: "FDB",
  };

  const prefix = prefixMap[formType] || "WEB";
  const timestamp = new Date().getTime().toString().slice(-6);
  const random = Math.floor(100 + Math.random() * 900);

  return "PR-" + prefix + "-" + timestamp + random;
}

// ============================================================
// OWNER EMAIL
// ============================================================

function sendOwnerNotification(data, submissionId) {
  const subject = "New " + data.formType + " Submission - " + submissionId;
  const body = buildOwnerEmail(data, submissionId);

  MailApp.sendEmail({
    to: CONFIG.OWNER_EMAIL,
    subject: subject,
    body: body,
    name: CONFIG.BUSINESS_NAME,
  });
}

// ============================================================
// OWNER EMAIL CONTENT
// ============================================================

function buildOwnerEmail(data, submissionId) {
  let body = "";

  body += CONFIG.BUSINESS_NAME + "\n";
  body += "New website form submission\n";
  body += "====================================\n\n";

  body += "Submission ID: " + submissionId + "\n";
  body += "Timestamp: " + new Date().toLocaleString() + "\n";
  body += "Form Type: " + data.formType + "\n";
  body += "Name: " + data.name + "\n";

  if (data.phone) body += "Phone: " + data.phone + "\n";
  if (data.email) body += "Email: " + data.email + "\n";

  if (data.childName) body += "Child Name: " + data.childName + "\n";
  if (data.childAge) body += "Child Age: " + data.childAge + "\n";
  if (data.service) body += "Service: " + data.service + "\n";
  if (data.preferredDate)
    body += "Preferred Date: " + data.preferredDate + "\n";
  if (data.preferredTime)
    body += "Preferred Time: " + data.preferredTime + "\n";
  if (data.feedbackRole) body += "Feedback Role: " + data.feedbackRole + "\n";

  if (data.message) body += "\nMessage:\n" + data.message + "\n";
  if (data.feedback) body += "\nFeedback:\n" + data.feedback + "\n";

  body += "\nStatus: New\n";
  body +=
    "\nPlease update the Status column in the Google Sheet after follow-up.\n";

  return body;
}

// ============================================================
// CUSTOMER ACKNOWLEDGEMENT
// ============================================================

function sendCustomerAcknowledgement(data, submissionId) {
  if (!data.email) return;

  const subject = "We received your request - " + CONFIG.BUSINESS_NAME;
  let body = "";

  body += "Dear " + data.name + ",\n\n";
  body += "Thank you for contacting " + CONFIG.BUSINESS_NAME + ".\n\n";
  body +=
    "We have received your " +
    data.formType.toLowerCase() +
    " request successfully.\n\n";
  body += "Reference ID: " + submissionId + "\n\n";
  body += "Our team will contact you shortly.\n";

  if (CONFIG.BUSINESS_PHONE) {
    body +=
      "\nFor urgent assistance, please call: " + CONFIG.BUSINESS_PHONE + "\n";
  }

  body += "\nRegards,\n" + CONFIG.BUSINESS_NAME;

  MailApp.sendEmail({
    to: data.email,
    subject: subject,
    body: body,
    name: CONFIG.BUSINESS_NAME,
    replyTo: CONFIG.OWNER_EMAIL,
  });
}

// ============================================================
// CLEAN INPUT
// ============================================================

function clean(value) {
  if (value === undefined || value === null) return "";
  return String(value)
    .trim()
    .replace(/\u0000/g, "");
}

// ============================================================
// JSON RESPONSE
// ============================================================

function jsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
