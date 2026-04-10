import type { Metadata } from "next";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — SpendSync",
  description: "SpendSync terms of service — rules and guidelines for using the app.",
};

const LOGO_SVG = (
  <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
    <path d="M4 11C4 8.79 5.79 7 8 7h16c2.21 0 4 1.79 4 4v10c0 2.21-1.79 4-4 4H8c-2.21 0-4-1.79-4-4V11z" fill="rgba(255,255,255,0.6)" />
    <path d="M4 11C4 8.79 5.79 7 8 7h16c2.21 0 4 1.79 4 4v2c0 4.5-6 7.5-12 7.5S4 17.5 4 13V11z" fill="#fff" />
    <path d="M16 10l1.2 3.2 3.3 1.3-3.3 1.3L16 19l-1.2-3.2L11.5 14.5l3.3-1.3L16 10z" fill="#4f46e5" />
  </svg>
);

const sections = [
  {
    num: "01",
    title: "Acceptance of Terms",
    content: (
      <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
        By accessing or using SpendSync, you agree to be bound by these Terms of Service. If you do not agree to any part of these terms, please do not use the application. Continued use of SpendSync after any changes to these terms constitutes your acceptance of the revised terms.
      </p>
    ),
  },
  {
    num: "02",
    title: "Description of Service",
    content: (
      <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
        SpendSync provides tools for personal expense tracking, group bill splitting, UPI settle integration, and financial insights. The service is provided &quot;as-is&quot; without warranties of any kind. We reserve the right to modify, suspend, or discontinue any part of the service at any time with reasonable notice.
      </p>
    ),
  },
  {
    num: "03",
    title: "User Responsibilities",
    content: (
      <>
        <p className="text-sm leading-relaxed mb-3" style={{ color: "#64748b" }}>
          You are solely responsible for maintaining the security of your account credentials. By using SpendSync, you agree that you will not:
        </p>
        <ul className="space-y-2 text-sm" style={{ color: "#64748b" }}>
          <li className="flex items-start gap-2"><span className="mt-0.5 text-red-400 flex-shrink-0">✗</span> Use the service for any unlawful or fraudulent purpose</li>
          <li className="flex items-start gap-2"><span className="mt-0.5 text-red-400 flex-shrink-0">✗</span> Harass, abuse, or harm other users within Friend Circles</li>
          <li className="flex items-start gap-2"><span className="mt-0.5 text-red-400 flex-shrink-0">✗</span> Attempt to gain unauthorised access to other users&apos; data</li>
          <li className="flex items-start gap-2"><span className="mt-0.5 text-red-400 flex-shrink-0">✗</span> Reverse engineer or exploit any part of the application</li>
        </ul>
      </>
    ),
  },
  {
    num: "04",
    title: "Limitation of Liability",
    content: (
      <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
        SpendSync is an expense tracking and splitting tool — it is <strong style={{ color: "#1e293b" }}>not</strong> a registered financial advisor, bank, or payment processor. We are not responsible for any financial losses, disputes between users, or decisions made based on data or insights within the app. UPI transactions are processed entirely through third-party apps (GPay, PhonePe, Paytm) and SpendSync bears no responsibility for those transactions.
      </p>
    ),
  },
  {
    num: "05",
    title: "Circles & Group Expense Splitting",
    content: (
      <>
        <p className="text-sm leading-relaxed mb-3" style={{ color: "#64748b" }}>
          SpendSync&apos;s Circles feature allows you to create groups and log shared expenses with friends, flatmates, or travel companions. By using this feature, you acknowledge and agree to the following:
        </p>
        <ul className="space-y-2 text-sm mb-3" style={{ color: "#64748b" }}>
          <li className="flex items-start gap-2"><span className="mt-0.5 text-indigo-400 flex-shrink-0">→</span><span><strong style={{ color: "#1e293b" }}>Accuracy of expense data:</strong> You are solely responsible for the accuracy of expenses you log. SpendSync calculates splits based on the data you enter and cannot verify or validate real-world transactions.</span></li>
          <li className="flex items-start gap-2"><span className="mt-0.5 text-indigo-400 flex-shrink-0">→</span><span><strong style={{ color: "#1e293b" }}>Consent of group members:</strong> By adding a person to a Circle, you represent that you have their consent to share expense data related to them within that group.</span></li>
          <li className="flex items-start gap-2"><span className="mt-0.5 text-indigo-400 flex-shrink-0">→</span><span><strong style={{ color: "#1e293b" }}>Disputes between users:</strong> SpendSync is a recordkeeping tool, not a mediator or arbitrator. Any financial disputes between Circle members are entirely between those individuals. SpendSync bears no liability for unresolved debts or disagreements arising from shared expenses.</span></li>
          <li className="flex items-start gap-2"><span className="mt-0.5 text-indigo-400 flex-shrink-0">→</span><span><strong style={{ color: "#1e293b" }}>Debt simplification results:</strong> The debt simplification algorithm minimises the number of payments mathematically. The suggested settlements are a convenience feature — they are not legally binding obligations.</span></li>
          <li className="flex items-start gap-2"><span className="mt-0.5 text-indigo-400 flex-shrink-0">→</span><span><strong style={{ color: "#1e293b" }}>No payment processing:</strong> SpendSync does not process, hold, or transfer any money. UPI Settle opens a third-party UPI app (GPay, PhonePe, Paytm) with pre-filled details. All payments are governed by those apps&apos; own terms and SpendSync has no visibility into whether a payment was completed.</span></li>
        </ul>
        <div className="rounded-xl p-3 text-sm flex gap-2" style={{ background: "#fffbeb", border: "1px solid #fde68a" }}>
          <span>⚠️</span>
          <p style={{ color: "#92400e" }}>SpendSync marks a debt as settled only when a user manually confirms it. Always verify payments directly in your UPI app before considering a debt resolved.</p>
        </div>
      </>
    ),
  },
  {
    num: "06",
    title: "Intellectual Property",
    content: (
      <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
        All content, branding, and code within SpendSync is the property of SpendSync and protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without explicit written permission.
      </p>
    ),
  },
  {
    num: "07",
    title: "Governing Law",
    content: (
      <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
        These terms are governed by the laws of India. Any disputes arising from the use of SpendSync shall be subject to the exclusive jurisdiction of the courts of India.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      <div className="py-16 px-6" style={{ background: "#f8faff", minHeight: "100vh" }}>
        {/* Nav */}
        <div className="max-w-3xl mx-auto mb-8 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl grad-btn flex items-center justify-center shadow-lg shadow-indigo-300/30">{LOGO_SVG}</div>
            <span className="font-bold tracking-tight" style={{ color: "#1e293b" }}>SpendSync</span>
          </a>
          <a href="/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition">
            ← Back to Homepage
          </a>
        </div>

        {/* Main card */}
        <div className="max-w-3xl mx-auto card p-8 md:p-12 shadow-sm" style={{ borderRadius: "1.5rem" }}>
          {/* Header */}
          <div className="mb-10 pb-8" style={{ borderBottom: "1px solid #e0e7ff" }}>
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full text-xs font-semibold" style={{ background: "#ede9fe", color: "#5b21b6" }}>
              📄 Legal Document
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-3" style={{ color: "#1e293b" }}>
              Terms of <span className="grad-text">Service</span>
            </h1>
            <p className="text-sm" style={{ color: "#94a3b8" }}>
              Last updated: <span style={{ color: "#64748b", fontWeight: 600 }}>May 20, 2025</span> &nbsp;·&nbsp; Applies to app.spendsync.in
            </p>
          </div>

          {/* TL;DR */}
          <div className="rounded-2xl p-5 mb-10 flex gap-4" style={{ background: "#f1f5ff", border: "1px solid #c7d2fe" }}>
            <div className="text-2xl">💡</div>
            <div>
              <p className="text-sm font-bold mb-1" style={{ color: "#3730a3" }}>TL;DR — Plain English Summary</p>
              <p className="text-sm" style={{ color: "#4338ca" }}>SpendSync is a free expense-tracking tool. Use it honestly, keep your account secure, and remember it&apos;s not a licensed financial advisor. That&apos;s the gist.</p>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section, i) => (
              <div key={section.num}>
                {i > 0 && <div style={{ borderTop: "1px solid #f1f5ff" }} className="mb-8" />}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "#ede9fe" }}>
                    <span className="section-num">{section.num}</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-bold mb-2" style={{ color: "#1e293b" }}>{section.title}</h2>
                    {section.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
