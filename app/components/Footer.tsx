const LOGO_SVG = (
  <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
    <path d="M4 11C4 8.79 5.79 7 8 7h16c2.21 0 4 1.79 4 4v10c0 2.21-1.79 4-4 4H8c-2.21 0-4-1.79-4-4V11z" fill="rgba(255,255,255,0.6)" />
    <path d="M4 11C4 8.79 5.79 7 8 7h16c2.21 0 4 1.79 4 4v2c0 4.5-6 7.5-12 7.5S4 17.5 4 13V11z" fill="#fff" />
    <path d="M16 10l1.2 3.2 3.3 1.3-3.3 1.3L16 19l-1.2-3.2L11.5 14.5l3.3-1.3L16 10z" fill="#4f46e5" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="py-12 px-4 section-white" style={{ borderTop: "1px solid #e0e7ff" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl grad-btn flex items-center justify-center shadow-lg shadow-indigo-300/30">{LOGO_SVG}</div>
              <span className="font-bold" style={{ color: "#1e293b" }}>SpendSync</span>
            </div>
            <p className="text-sm" style={{ color: "#94a3b8" }}>India&apos;s free group expense splitter + personal finance tracker. Built for UPI users.</p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4" style={{ color: "#1e293b" }}>Product</h4>
            <ul className="space-y-2 text-sm" style={{ color: "#94a3b8" }}>
              <li><a href="/#features" className="hover:text-indigo-600 transition">Features</a></li>
              <li><a href="/#how-it-works" className="hover:text-indigo-600 transition">How it works</a></li>
              <li><a href="https://app.spendsync.in" className="hover:text-indigo-600 transition">Open App</a></li>
              <li><a href="/#compare" className="hover:text-indigo-600 transition">vs Splitwise</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4" style={{ color: "#1e293b" }}>Use Cases</h4>
            <ul className="space-y-2 text-sm" style={{ color: "#94a3b8" }}>
              <li><a href="https://app.spendsync.in" className="hover:text-indigo-600 transition">Split trip expenses</a></li>
              <li><a href="https://app.spendsync.in" className="hover:text-indigo-600 transition">Flatmate bills</a></li>
              <li><a href="https://app.spendsync.in" className="hover:text-indigo-600 transition">Office lunch groups</a></li>
              <li><a href="https://app.spendsync.in" className="hover:text-indigo-600 transition">Personal budget</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4" style={{ color: "#1e293b" }}>Company</h4>
            <ul className="space-y-2 text-sm" style={{ color: "#94a3b8" }}>
              <li><a href="#" className="hover:text-indigo-600 transition">About</a></li>
              <li><a href="/privacy" className="hover:text-indigo-600 transition">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-indigo-600 transition">Terms of Service</a></li>
              <li><a href="mailto:support@spendsync.in" className="hover:text-indigo-600 transition">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4" style={{ borderTop: "1px solid #e0e7ff" }}>
          <p className="text-sm" style={{ color: "#94a3b8" }}>© 2026 SpendSync. Made with ❤️ in India. All rights reserved.</p>
          <div className="flex items-center gap-3 text-xs" style={{ color: "#94a3b8" }}>
            <span>🔒 Secure</span><span>·</span><span>🆓 Free forever</span><span>·</span><span>🇮🇳 Built for India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
