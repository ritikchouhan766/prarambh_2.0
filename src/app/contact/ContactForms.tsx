"use client";

import { useState } from "react";
import { CONCERN_OPTIONS } from "@/lib/constants";

interface ContactFormsProps {
  appointmentFormUrl: string;
  enquiryFormUrl: string;
  showEnquiry?: boolean;
}

interface FormState {
  status: "idle" | "submitting" | "success";
}

export default function ContactForms({
  appointmentFormUrl,
  enquiryFormUrl,
  showEnquiry = true,
}: ContactFormsProps) {
  const [apptState, setApptState] = useState<FormState>({ status: "idle" });
  const [enquiryState, setEnquiryState] = useState<FormState>({
    status: "idle",
  });

  const handleAppointment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setApptState({ status: "submitting" });
    // Simulate submission — replace with actual API/form integration
    setTimeout(() => {
      setApptState({ status: "success" });
      // Open the Google Form in new tab as well
      window.open(appointmentFormUrl, "_blank", "noopener,noreferrer");
    }, 800);
  };

  const handleEnquiry = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnquiryState({ status: "submitting" });
    setTimeout(() => {
      setEnquiryState({ status: "success" });
      window.open(enquiryFormUrl, "_blank", "noopener,noreferrer");
    }, 800);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Appointment Form */}
      <div className="bg-white rounded-[20px] p-9 border border-border shadow-sm">
        <h3 className="font-serif text-[22px] text-slate mb-1">
          Book an Appointment
        </h3>
        <p className="text-[14px] text-muted mb-7">
          Fill in the details and we&apos;ll confirm your slot within 24 hours.
        </p>

        {apptState.status === "success" ? (
          <div className="bg-teal-pale border border-teal rounded-card p-5 text-center text-teal font-semibold text-[15px]">
            ✅ Your response has been recorded. Our team will contact you
            shortly!
          </div>
        ) : (
          <form onSubmit={handleAppointment} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="form-label">Parent&apos;s Name *</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  required
                  className="form-input"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="form-label">Phone Number *</label>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  required
                  className="form-input"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="form-label">Child&apos;s Name</label>
                <input
                  type="text"
                  placeholder="Child's name"
                  className="form-input"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="form-label">Child&apos;s Age</label>
                <input
                  type="text"
                  placeholder="e.g. 3 years 4 months"
                  className="form-input"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="form-label">Primary Concern / Service *</label>
              <select required className="form-input">
                <option value="">Select a service or concern</option>
                {CONCERN_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="form-label">Preferred Date / Time</label>
              <input
                type="text"
                placeholder="e.g. Mon–Wed mornings"
                className="form-input"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="form-label">Additional Notes</label>
              <textarea
                rows={3}
                placeholder="Any specific concerns, previous diagnoses, or questions..."
                className="form-input resize-y"
              />
            </div>

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
              ✅ Your enquiry has been recorded. Our team will contact you
              shortly!
            </div>
          ) : (
            <form onSubmit={handleEnquiry} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="form-label">Your Name *</label>
                  <input
                    type="text"
                    placeholder="Full name"
                    required
                    className="form-input"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="form-label">Phone / Email *</label>
                  <input
                    type="text"
                    placeholder="+91 or email address"
                    required
                    className="form-input"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="form-label">Your Question</label>
                <textarea
                  rows={4}
                  placeholder="What would you like to know about our services, therapy approach, or fees?"
                  className="form-input resize-y"
                />
              </div>

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
          )}
        </div>
      ) : null}
    </div>
  );
}
