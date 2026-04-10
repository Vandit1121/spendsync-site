import type { Metadata } from "next";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — SpendSync",
  description: "SpendSync privacy policy — how we collect, use, and protect your data.",
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
    title: "Overview",
    content: (
      <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
        SpendSync is a personal finance and group expense tool built for Indians. We value your privacy and only collect data strictly necessary to provide our services. This policy explains what we collect, how we use it, and how you can control it. By using SpendSync, you agree to the practices described here.
      </p>
    ),
  },
  {
    num: "02",
    title: "Data We Collect via Google OAuth",
    content: (
      <>
        <p className="text-sm leading-relaxed mb-4" style={{ color: "#64748b" }}>
          When you sign in using Google, we request the minimum scopes required to create and personalise your account:
        </p>
        <div className="space-y-3 mb-4">
          {[
            { icon: "📧", title: "Email Address", desc: "Used to identify your unique account and for login verification." },
            { icon: "👤", title: "Display Name", desc: "Used to personalise your dashboard and identify you within Circles to other members." },
            { icon: "🖼️", title: "Profile Picture", desc: "Displayed as your avatar within the app UI and in group Circles." },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-3 rounded-xl p-3" style={{ background: "#f8faff", border: "1px solid #e0e7ff" }}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "#e0e7ff" }}>{item.icon}</div>
              <div>
                <p className="text-sm font-semibold" style={{ color: "#1e293b" }}>{item.title}</p>
                <p className="text-xs" style={{ color: "#64748b" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-xl p-3 text-sm flex gap-2" style={{ background: "#fffbeb", border: "1px solid #fde68a" }}>
          <span>⚠️</span>
          <p style={{ color: "#92400e" }}>We do <strong>not</strong> access your Google Drive, Gmail, Contacts, Calendar, or any other Google data beyond the three fields listed above.</p>
        </div>
      </>
    ),
  },
  {
    num: "03",
    title: "Financial Data You Enter",
    content: (
      <>
        <p className="text-sm leading-relaxed mb-3" style={{ color: "#64748b" }}>
          All expenses, balances, income records, and budget data you manually enter into SpendSync are stored securely in <strong style={{ color: "#1e293b" }}>Supabase</strong> with encryption at rest. This data belongs to you.
        </p>
        <ul className="space-y-2 text-sm" style={{ color: "#64748b" }}>
          <li className="flex items-start gap-2"><span className="mt-0.5 text-indigo-400 flex-shrink-0">→</span> Your financial data is <strong style={{ color: "#1e293b" }}>never sold</strong> to third parties or advertisers.</li>
          <li className="flex items-start gap-2"><span className="mt-0.5 text-indigo-400 flex-shrink-0">→</span> Data is only shared within a Circle with members you have explicitly added.</li>
          <li className="flex items-start gap-2"><span className="mt-0.5 text-indigo-400 flex-shrink-0">→</span> We do not connect to your bank, UPI account, or any payment instrument. All figures are manually entered by you.</li>
        </ul>
      </>
    ),
  },
  {
    num: "04",
    title: "UPI & Third-Party Apps",
    content: (
      <>
        <p className="text-sm leading-relaxed mb-3" style={{ color: "#64748b" }}>
          When you use UPI Settle, SpendSync opens a deep link to your chosen UPI app (GPay, PhonePe, or Paytm) with the amount and recipient pre-filled. We want to be completely transparent about this:
        </p>
        <ul className="space-y-2 text-sm" style={{ color: "#64748b" }}>
          <li className="flex items-start gap-2"><span className="mt-0.5 text-indigo-400 flex-shrink-0">→</span> SpendSync does <strong style={{ color: "#1e293b" }}>not</strong> process, initiate, or receive any payment.</li>
          <li className="flex items-start gap-2"><span className="mt-0.5 text-indigo-400 flex-shrink-0">→</span> We have no access to your UPI PIN, bank account, or transaction history.</li>
          <li className="flex items-start gap-2"><span className="mt-0.5 text-indigo-400 flex-shrink-0">→</span> We have no confirmation of whether a payment was completed — that happens entirely in the third-party app.</li>
          <li className="flex items-start gap-2"><span className="mt-0.5 text-indigo-400 flex-shrink-0">→</span> UPI IDs stored in SpendSync (if you save a friend&apos;s UPI ID for quick settle) are encrypted and never shared outside the app.</li>
        </ul>
      </>
    ),
  },
  {
    num: "05",
    title: "Cookies & Analytics",
    content: (
      <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
        SpendSync uses minimal, privacy-respecting analytics to understand how the app is used in aggregate (e.g. which features are popular). We do not use advertising cookies, cross-site tracking pixels, or fingerprinting. Session cookies are used solely to keep you logged in.
      </p>
    ),
  },
  {
    num: "06",
    title: "Data Deletion",
    content: (
      <>
        <p className="text-sm leading-relaxed mb-3" style={{ color: "#64748b" }}>
          You have full control over your data. You can delete your account and all associated records at any time:
        </p>
        <div className="flex items-start gap-3 rounded-xl p-4" style={{ background: "#f8faff", border: "1px solid #e0e7ff" }}>
          <div className="text-xl">🗑️</div>
          <div>
            <p className="text-sm font-semibold mb-1" style={{ color: "#1e293b" }}>How to delete your account</p>
            <p className="text-sm" style={{ color: "#64748b" }}>Go to <strong style={{ color: "#1e293b" }}>Profile → Settings → Delete Account</strong> inside the app. This permanently and immediately removes your Google profile data, all expense records, all Circle memberships, and all budget data from our servers. This action cannot be undone.</p>
          </div>
        </div>
      </>
    ),
  },
  {
    num: "07",
    title: "Changes to This Policy",
    content: (
      <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
        We may update this Privacy Policy occasionally. If we make material changes, we will notify you via the app or by email before the changes take effect. Continued use of SpendSync after the update constitutes acceptance of the revised policy.
      </p>
    ),
  },
];

export default function PrivacyPage() {
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
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full text-xs font-semibold" style={{ background: "#d1fae5", color: "#065f46" }}>
              🔒 Privacy Document
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-3" style={{ color: "#1e293b" }}>
              Your Privacy, <span className="grad-text">Our Priority</span>
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
              <p className="text-sm" style={{ color: "#4338ca" }}>We collect only what&apos;s needed to run the app. We never sell your data. You can delete everything, permanently, at any time. That&apos;s it.</p>
            </div>
          </div>

          {/* Promises */}
          <div className="rounded-2xl p-5 mb-10 flex gap-4" style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}>
            <div className="text-2xl">✅</div>
            <div>
              <p className="text-sm font-bold mb-2" style={{ color: "#14532d" }}>SpendSync promises:</p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm" style={{ color: "#166534" }}>
                <span className="flex items-center gap-1.5">✓ No selling your data to advertisers</span>
                <span className="flex items-center gap-1.5">✓ No tracking across other websites</span>
                <span className="flex items-center gap-1.5">✓ No access to your bank or UPI PIN</span>
                <span className="flex items-center gap-1.5">✓ No spam emails or push notifications</span>
              </div>
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
