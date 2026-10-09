"use client";

import { useState, useRef } from "react";
import { CONCERN_OPTIONS } from "@/lib/constants";

type FormStatus = "idle" | "submitting" | "success" | "error";

interface FormState {
  status: FormStatus;
  message?: string;
}

interface AppointmentFormData {
  formType: "Appointment";
  name: string;
  phone: string;
  email: string;
  childName: string;
  childAge: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
  website: string; // honeypot
}

interface EnquiryFormData {
  formType: "Enquiry";
  name: string;
  phone: string;
  email: string;
  message: string;
  website: string; // honeypot
}

interface FeedbackFormData {
  formType: "Feedback";
  name: string;
  feedback: string;
  feedbackRole: string;
  email: string;
  website: string; // honeypot
}

type SubmissionData = AppointmentFormData | EnquiryFormData | FeedbackFormData;

interface ContactFormsProps {
  appointmentFormUrl?: string;
  enquiryFormUrl?: string;
  showEnquiry?: boolean;
  showFeedback?: boolean;
}

export default function ContactForms({
  showEnquiry = true,
  showFeedback = false,
}: ContactFormsProps) {
  const [apptState, setApptState] = useState<FormState>({ status: "idle" });
  const [enquiryState, setEnquiryState] = useState<FormState>({
    status: "idle",
  });
  const [feedbackState, setFeedbackState] = useState<FormState>({
    status: "idle",
  });
  const [appointmentPhoneError, setAppointmentPhoneError] = useState("");
  const [enquiryPhoneError, setEnquiryPhoneError] = useState("");

  const appointmentFormRef = useRef<HTMLFormElement>(null);
  const enquiryFormRef = useRef<HTMLFormElement>(null);
  const feedbackFormRef = useRef<HTMLFormElement>(null);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    if (!/^[\d\s()+-]+$/.test(phone)) return false;
    const digits = phone.replace(/\D/g, "");
    return /^[6-9]\d{9}$/.test(digits) || /^91[6-9]\d{9}$/.test(digits);
  };

  const submitForm = async (
    submitData: SubmissionData,
    setState: (state: FormState) => void,
  ) => {
    setState({ status: "submitting" });

    try {
      const response = await fetch("/api/form-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submitData),
      });
      const result = await response.json();

      if (!response.ok || result.success !== true) {
        throw new Error(
          result.message || "The form service could not save your submission.",
        );
      }

      setState({
        status: "success",
        message: "Your submission recorded. Our team will contact you shortly!",
      });
      if (submitData.formType === "Appointment") {
        appointmentFormRef.current?.reset();
        setAppointmentPhoneError("");
      } else if (submitData.formType === "Enquiry") {
        enquiryFormRef.current?.reset();
        setEnquiryPhoneError("");
      } else {
        feedbackFormRef.current?.reset();
      }
    } catch (error) {
      setState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "We could not submit your form right now. Please try again.",
      });
    }
  };

  const handleAppointment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // Validation
    const name = (formData.get("name") as string)?.trim();
    const phone = (formData.get("phone") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const service = (formData.get("service") as string)?.trim();
    const website = (formData.get("website") as string)?.trim();

    console.log("📋 APPOINTMENT FORM VALIDATION:", {
      name,
      phone,
      email,
      service,
    });

    // Honeypot check
    if (website) {
      console.warn("⚠️ Honeypot field filled - spam detected");
      return;
    }

    if (!name || name.length < 2) {
      setApptState({
        status: "error",
        message: "❌ Please enter your full name (at least 2 characters).",
      });
      return;
    }

    if (!phone || !validatePhone(phone)) {
      setAppointmentPhoneError(
        phone
          ? "Enter a valid 10-digit mobile number."
          : "Phone number is required.",
      );
      return;
    }
    setAppointmentPhoneError("");

    if (!email) {
      setApptState({
        status: "error",
        message: "❌ Email address is required.",
      });
      return;
    }

    if (!validateEmail(email)) {
      setApptState({
        status: "error",
        message:
          "❌ Please enter a valid email address (e.g., yourname@example.com)",
      });
      return;
    }

    if (!service) {
      setApptState({
        status: "error",
        message: "❌ Please select a service or concern from the dropdown.",
      });
      return;
    }

    console.log("✅ APPOINTMENT FORM VALIDATION PASSED");

    const data: AppointmentFormData = {
      formType: "Appointment",
      name,
      phone,
      email,
      childName: (formData.get("childName") as string)?.trim() || "",
      childAge: (formData.get("childAge") as string)?.trim() || "",
      service,
      preferredDate: (formData.get("preferredDate") as string)?.trim() || "",
      preferredTime: (formData.get("preferredTime") as string)?.trim() || "",
      message: (formData.get("message") as string)?.trim() || "",
      website: "", // empty honeypot
    };

    submitForm(data, setApptState);
  };

  const handleEnquiry = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // Validation
    const name = (formData.get("name") as string)?.trim();
    const phone = (formData.get("phone") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const website = (formData.get("website") as string)?.trim();

    console.log("📋 ENQUIRY FORM VALIDATION:", { name, phone, email });

    // Honeypot check
    if (website) {
      console.warn("⚠️ Honeypot field filled - spam detected");
      return;
    }

    if (!name || name.length < 2) {
      setEnquiryState({
        status: "error",
        message: "❌ Please enter your full name (at least 2 characters).",
      });
      return;
    }

    if (!phone || !validatePhone(phone)) {
      setEnquiryPhoneError(
        phone
          ? "Enter a valid 10-digit mobile number."
          : "Phone number is required.",
      );
      return;
    }
    setEnquiryPhoneError("");

    if (!email) {
      setEnquiryState({
        status: "error",
        message: "❌ Email address is required.",
      });
      return;
    }

    if (!validateEmail(email)) {
      setEnquiryState({
        status: "error",
        message:
          "❌ Please enter a valid email address (e.g., yourname@example.com)",
      });
      return;
    }

    console.log("✅ ENQUIRY FORM VALIDATION PASSED");

    const data: EnquiryFormData = {
      formType: "Enquiry",
      name,
      phone,
      email,
      message: (formData.get("message") as string)?.trim() || "",
      website: "", // empty honeypot
    };

    submitForm(data, setEnquiryState);
  };

  const handleFeedback = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // Validation
    const name = (formData.get("name") as string)?.trim();
    const feedback = (formData.get("feedback") as string)?.trim();
    const website = (formData.get("website") as string)?.trim();

    console.log("📋 FEEDBACK FORM VALIDATION:", { name, feedback });

    // Honeypot check
    if (website) {
      console.warn("⚠️ Honeypot field filled - spam detected");
      return;
    }

    if (!name || name.length < 2) {
      setFeedbackState({
        status: "error",
        message: "❌ Please enter your full name (at least 2 characters).",
      });
      return;
    }

    if (!feedback || feedback.length < 5) {
      setFeedbackState({
        status: "error",
        message: "❌ Please enter your feedback (at least 5 characters).",
      });
      return;
    }

    console.log("✅ FEEDBACK FORM VALIDATION PASSED");

    const data: FeedbackFormData = {
      formType: "Feedback",
      name,
      feedback,
      feedbackRole: (formData.get("feedbackRole") as string)?.trim() || "",
      email: (formData.get("email") as string)?.trim() || "",
      website: "", // empty honeypot
    };

    submitForm(data, setFeedbackState);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Appointment Form */}
      <div className="bg-white rounded-[20px] p-9 border border-border shadow-sm">
        <h3 className="font-serif text-[22px] text-slate mb-1">
          Request an Appointment
        </h3>
        <p className="text-[14px] text-muted mb-7">
          Fill in the details and we&apos;ll confirm your appointment request
          within 24 hours.
        </p>

        {apptState.status === "success" ? (
          <div className="bg-teal-pale border border-teal rounded-card p-5 text-center text-teal font-semibold text-[15px]">
            {apptState.message}
          </div>
        ) : (
          <>
            {apptState.status === "error" && (
              <div className="bg-red-50 border-2 border-red-400 rounded-card p-4 mb-4 text-red-700 text-[15px] font-medium">
                <div>{apptState.message}</div>
              </div>
            )}
            <form
              ref={appointmentFormRef}
              onSubmit={handleAppointment}
              className="flex flex-col gap-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="form-label">Parent&apos;s Name *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    required
                    className="form-input"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 XXXXX XXXXX"
                    inputMode="tel"
                    aria-required="true"
                    aria-invalid={Boolean(appointmentPhoneError)}
                    aria-describedby="appointment-phone-error"
                    onBlur={(event) => {
                      const value = event.currentTarget.value.trim();
                      setAppointmentPhoneError(
                        !value
                          ? "Phone number is required."
                          : validatePhone(value)
                            ? ""
                            : "Enter a valid 10-digit mobile number.",
                      );
                    }}
                    onChange={(event) => {
                      if (appointmentPhoneError) {
                        const value = event.currentTarget.value.trim();
                        setAppointmentPhoneError(
                          value && !validatePhone(value)
                            ? "Enter a valid 10-digit mobile number."
                            : "",
                        );
                      }
                    }}
                    className={`form-input ${appointmentPhoneError ? "border-red-400" : ""}`}
                  />
                  <span
                    id="appointment-phone-error"
                    role="status"
                    className="text-[12px] text-red-600 min-h-4"
                  >
                    {appointmentPhoneError}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    className="form-input"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="form-label">
                    Primary Concern / Service *
                  </label>
                  <select name="service" required className="form-input">
                    <option value="">Select a service or concern</option>
                    {CONCERN_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="form-label">Child&apos;s Name</label>
                  <input
                    type="text"
                    name="childName"
                    placeholder="Child's name"
                    className="form-input"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="form-label">Child&apos;s Age</label>
                  <input
                    type="text"
                    name="childAge"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="Age in years"
                    onChange={(event) => {
                      event.currentTarget.value =
                        event.currentTarget.value.replace(/\D/g, "");
                    }}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="form-label">Preferred Date</label>
                  <input
                    type="date"
                    name="preferredDate"
                    className="form-input"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="form-label">Preferred Time</label>
                  <select name="preferredTime" className="form-input">
                    <option value="">Select preferred time slot</option>
                    <option value="10:00 AM - 12:00 PM">
                      Morning (10:00 AM - 12:00 PM)
                    </option>
                    <option value="3:00 PM - 8:00 PM">
                      Evening (3:00 PM - 8:00 PM)
                    </option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="form-label">Additional Notes</label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Any specific concerns, previous diagnoses, or questions..."
                  className="form-input resize-y"
                />
              </div>

              {/* Honeypot field - hidden from users */}
              <input
                type="text"
                name="website"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              <button
                type="submit"
                disabled={apptState.status === "submitting"}
                className="btn-primary justify-center w-full py-3.5 text-[16px] disabled:opacity-70"
              >
                {apptState.status === "submitting"
                  ? "⏳ Submitting..."
                  : "📅 Request Appointment"}
              </button>

              <p className="text-[12px] text-muted text-center">
                Your information is confidential and used only to confirm your
                appointment.
              </p>
            </form>
          </>
        )}
      </div>

      {/* Enquiry Form */}
      {showEnquiry ? (
        <div className="bg-white rounded-[20px] p-9 border border-border shadow-sm">
          <h3 className="font-serif text-[22px] text-slate mb-1">
            Send an Enquiry
          </h3>
          <p className="text-[14px] text-muted mb-7">
            Have a question before booking? We&apos;ll get back to you within a
            few hours.
          </p>

          {enquiryState.status === "success" ? (
            <div className="bg-teal-pale border border-teal rounded-card p-5 text-center text-teal font-semibold text-[15px]">
              {enquiryState.message}
            </div>
          ) : (
            <>
              {enquiryState.status === "error" && (
                <div className="bg-red-50 border-2 border-red-400 rounded-card p-4 mb-4 text-red-700 text-[15px] font-medium">
                  <div>{enquiryState.message}</div>
                </div>
              )}
              <form
                ref={enquiryFormRef}
                onSubmit={handleEnquiry}
                className="flex flex-col gap-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="form-label">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full name"
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 XXXXX XXXXX"
                      inputMode="tel"
                      aria-required="true"
                      aria-invalid={Boolean(enquiryPhoneError)}
                      aria-describedby="enquiry-phone-error"
                      onBlur={(event) => {
                        const value = event.currentTarget.value.trim();
                        setEnquiryPhoneError(
                          !value
                            ? "Phone number is required."
                            : validatePhone(value)
                              ? ""
                              : "Enter a valid 10-digit mobile number.",
                        );
                      }}
                      onChange={(event) => {
                        if (enquiryPhoneError) {
                          const value = event.currentTarget.value.trim();
                          setEnquiryPhoneError(
                            value && !validatePhone(value)
                              ? "Enter a valid 10-digit mobile number."
                              : "",
                          );
                        }
                      }}
                      className={`form-input ${enquiryPhoneError ? "border-red-400" : ""}`}
                    />
                    <span
                      id="enquiry-phone-error"
                      role="status"
                      className="text-[12px] text-red-600 min-h-4"
                    >
                      {enquiryPhoneError}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    className="form-input"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="form-label">Your Question</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="What would you like to know about our services, therapy approach, or fees?"
                    className="form-input resize-y"
                  />
                </div>

                {/* Honeypot field - hidden from users */}
                <input
                  type="text"
                  name="website"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <button
                  type="submit"
                  disabled={enquiryState.status === "submitting"}
                  className="btn-outline justify-center w-full py-3.5 text-[16px] disabled:opacity-70"
                >
                  {enquiryState.status === "submitting"
                    ? "⏳ Sending..."
                    : "📨 Send Enquiry"}
                </button>
              </form>
            </>
          )}
        </div>
      ) : null}

      {/* Feedback Form */}
      {showFeedback ? (
        <div className="bg-white rounded-[20px] p-9 border border-border shadow-sm">
          <h3 className="font-serif text-[22px] text-slate mb-1">
            Share Your Feedback
          </h3>
          <p className="text-[14px] text-muted mb-7">
            Your feedback helps us improve our services and support your child
            better.
          </p>

          {feedbackState.status === "success" ? (
            <div className="bg-teal-pale border border-teal rounded-card p-5 text-center text-teal font-semibold text-[15px]">
              {feedbackState.message}
            </div>
          ) : (
            <>
              {feedbackState.status === "error" && (
                <div className="bg-red-50 border-2 border-red-400 rounded-card p-4 mb-4 text-red-700 text-[15px] font-medium">
                  <div>{feedbackState.message}</div>
                </div>
              )}
              <form
                ref={feedbackFormRef}
                onSubmit={handleFeedback}
                className="flex flex-col gap-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="form-label">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full name"
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="form-label">Your Role</label>
                    <select name="feedbackRole" className="form-input">
                      <option value="">Select your role</option>
                      <option value="Parent">Parent</option>
                      <option value="Guardian">Guardian</option>
                      <option value="Patient">Patient</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com (optional)"
                    className="form-input"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="form-label">Your Feedback *</label>
                  <textarea
                    name="feedback"
                    rows={4}
                    placeholder="Tell us about your experience, suggestions for improvement, or any concerns..."
                    required
                    className="form-input resize-y"
                  />
                </div>

                {/* Honeypot field - hidden from users */}
                <input
                  type="text"
                  name="website"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <button
                  type="submit"
                  disabled={feedbackState.status === "submitting"}
                  className="btn-primary justify-center w-full py-3.5 text-[16px] disabled:opacity-70"
                >
                  {feedbackState.status === "submitting"
                    ? "⏳ Sending..."
                    : "💬 Submit Feedback"}
                </button>

                <p className="text-[12px] text-muted text-center">
                  Your feedback is valuable and helps us serve you better.
                </p>
              </form>
            </>
          )}
        </div>
      ) : null}
    </div>
  );
}
