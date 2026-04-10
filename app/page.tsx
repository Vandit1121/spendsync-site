"use client";

import { useEffect, useRef, useState } from "react";

const LOGO_SVG = (
  <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
    <path d="M4 11C4 8.79 5.79 7 8 7h16c2.21 0 4 1.79 4 4v10c0 2.21-1.79 4-4 4H8c-2.21 0-4-1.79-4-4V11z" fill="rgba(255,255,255,0.6)" />
    <path d="M4 11C4 8.79 5.79 7 8 7h16c2.21 0 4 1.79 4 4v2c0 4.5-6 7.5-12 7.5S4 17.5 4 13V11z" fill="#fff" />
    <path d="M16 10l1.2 3.2 3.3 1.3-3.3 1.3L16 19l-1.2-3.2L11.5 14.5l3.3-1.3L16 10z" fill="#4f46e5" />
  </svg>
);

const LOGO_SVG_LG = (
  <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
    <path d="M4 11C4 8.79 5.79 7 8 7h16c2.21 0 4 1.79 4 4v10c0 2.21-1.79 4-4 4H8c-2.21 0-4-1.79-4-4V11z" fill="rgba(255,255,255,0.6)" />
    <path d="M4 11C4 8.79 5.79 7 8 7h16c2.21 0 4 1.79 4 4v2c0 4.5-6 7.5-12 7.5S4 17.5 4 13V11z" fill="#fff" />
    <path d="M16 10l1.2 3.2 3.3 1.3-3.3 1.3L16 19l-1.2-3.2L11.5 14.5l3.3-1.3L16 10z" fill="#4f46e5" />
  </svg>
);

export default function Home() {
  const navRef = useRef<HTMLElement>(null);
  const navLogoTextRef = useRef<HTMLSpanElement>(null);
  const navLinksRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const nav = navRef.current;
    const navLogoText = navLogoTextRef.current;
    const navLinks = navLinksRef.current;
    if (!nav || !navLogoText || !navLinks) return;

    const heroEl = document.querySelector(".hero-dark") as HTMLElement | null;

    const handleScroll = () => {
      const heroHeight = heroEl ? heroEl.offsetHeight : 600;
      const isInHero = window.scrollY < heroHeight - 80;
      if (window.scrollY > 50) {
        if (isInHero) {
          nav.style.background = "rgba(10,8,25,0.9)";
          nav.style.backdropFilter = "blur(12px)";
          nav.style.boxShadow = "0 1px 0 rgba(99,102,241,0.2)";
          navLogoText.style.color = "#fff";
          navLinks.style.color = "#94a3b8";
        } else {
          nav.style.background = "rgba(255,255,255,0.92)";
          nav.style.backdropFilter = "blur(12px)";
          nav.style.boxShadow = "0 1px 0 rgba(99,102,241,0.12)";
          navLogoText.style.color = "#1e293b";
          navLinks.style.color = "#475569";
        }
      } else {
        nav.style.background = "transparent";
        nav.style.backdropFilter = "none";
        nav.style.boxShadow = "none";
        navLogoText.style.color = "#fff";
        navLinks.style.color = "#94a3b8";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleFaq = (idx: number) => {
    setOpenFaq((prev) => (prev === idx ? null : idx));
  };

  const faqs = [
    {
      q: "What is the best app to split expenses with friends in India?",
      a: "SpendSync is the best free app for splitting expenses with friends in India. Unlike Splitwise, it's 100% free with no premium tier, supports UPI settle directly, works as a PWA (no download from Play Store), and also tracks your personal finances. It's built specifically for Indians who use GPay, PhonePe, and Paytm daily.",
    },
    {
      q: "How do I settle UPI debts automatically?",
      a: 'In SpendSync, tap the "Settle" button next to any debt. Choose your UPI app — GPay, PhonePe, or Paytm — and SpendSync automatically opens it with the exact amount and the recipient\'s UPI ID pre-filled. You just confirm the payment. SpendSync then marks the debt as settled in your circle.',
    },
    {
      q: "Is SpendSync really free? What's the catch?",
      a: "SpendSync is genuinely, permanently free. No premium plan. No ads. No data selling. We believe managing money with friends shouldn't cost money. There's no catch — we're building this for the Indian user who's tired of Splitwise's paywall and WhatsApp calculator chaos.",
    },
    {
      q: "Do my friends need to download the app too?",
      a: "Not at all. You can add friends by name and manage the circle yourself. If friends want to see their balances or settle debts themselves, they can open SpendSync in any browser — no download, no account required for basic use. Just share the link.",
    },
    {
      q: "How does SpendSync's debt simplification work?",
      a: "SpendSync uses a greedy debt-minimization algorithm that looks at everyone's net balance across the group — who owes money overall, and who is owed money overall. It then generates the minimum number of payments needed to bring every balance to zero. In a 6-person group, this can reduce 15 individual debts to just 5 payments.",
    },
    {
      q: "Is SpendSync safe? Where is my data stored?",
      a: "Your data is stored securely with end-to-end encryption. SpendSync never has access to your actual bank account or UPI PIN — we only use UPI deep links that open your UPI app directly. Basic use requires no account at all, so you can use SpendSync without giving us any personal information.",
    },
  ];

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "SpendSync",
            url: "https://app.spendsync.in",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Any (PWA)",
            offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "1240",
            },
            description:
              "Free Indian personal finance and group expense splitting PWA with UPI settle, debt simplification, and personal budget tracking.",
            featureList: [
              "Group expense splitting",
              "UPI settle",
              "Debt simplification",
              "Personal finance tracking",
              "Offline PWA",
            ],
          }),
        }}
      />

      {/* NAV */}
      <nav
        ref={navRef}
        id="navbar"
        className="fixed top-0 w-full z-50 transition-all duration-300 py-4 px-4 md:px-8"
        style={{ background: "transparent" }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl grad-btn flex items-center justify-center shadow-lg shadow-indigo-900/30">
              {LOGO_SVG_LG}
            </div>
            <span ref={navLogoTextRef} className="text-lg font-bold tracking-tight" style={{ color: "#fff" }}>
              SpendSync
            </span>
          </a>
          <div ref={navLinksRef} className="hidden md:flex items-center gap-6 text-sm" style={{ color: "#94a3b8" }}>
            <a href="#features" className="hover:text-indigo-400 transition">Features</a>
            <a href="#expense-tracker" className="hover:text-indigo-400 transition">Expense Tracker</a>
            <a href="#how-it-works" className="hover:text-indigo-400 transition">How it works</a>
            <a href="#compare" className="hover:text-indigo-400 transition">vs Splitwise</a>
            <a href="#faq" className="hover:text-indigo-400 transition">FAQ</a>
          </div>
          <a
            href="https://app.spendsync.in"
            className="grad-btn text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 transition-all shadow-lg shadow-indigo-400/30"
          >
            Open App Free →
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero-dark relative min-h-screen flex items-center pt-28 pb-20 px-6 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div
                className="inline-flex items-center gap-2 upi-pill mb-6"
                style={{ background: "rgba(99,102,241,0.15)", color: "#a5b4fc", borderColor: "rgba(99,102,241,0.3)" }}
              >
                <span>✨</span> Free forever · No Play Store needed
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-white mb-6">
                Stop doing<br /><span className="grad-text">mental math.</span><br />Start splitting smarter.
              </h1>
              <p className="text-lg mb-8 max-w-lg mx-auto lg:mx-0" style={{ color: "#94a3b8" }}>
                SpendSync is India&apos;s smartest free group expense splitter + personal finance tracker. Settle debts via UPI in one tap. No app store. No storage wasted. Just install from your browser.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="https://app.spendsync.in"
                  className="grad-btn text-white font-bold px-8 py-4 rounded-xl text-lg hover:opacity-90 transition-all shadow-xl shadow-indigo-900/50 text-center"
                >
                  Open App Free →
                </a>
                <a
                  href="#how-it-works"
                  className="border text-sm font-semibold px-8 py-4 rounded-xl text-lg hover:border-indigo-400 transition-all text-center"
                  style={{ borderColor: "#334155", color: "#94a3b8" }}
                >
                  See how it works ↓
                </a>
              </div>
              <p className="mt-6 text-sm" style={{ color: "#64748b" }}>No account needed to get started · Works on Android &amp; iOS</p>
            </div>

            {/* Hero Mockup */}
            <div className="relative flex justify-center lg:justify-center animate-float mt-16 lg:mt-0 px-8">
              <div
                className="absolute -top-5 right-4 glass-dark rounded-2xl px-4 py-2 text-xs font-bold shadow-lg z-10 whitespace-nowrap"
                style={{ color: "#a5b4fc" }}
              >
                🧠 5 debts → 2 payments
              </div>
              <div className="mockup-screen rounded-3xl p-5 w-full max-w-sm shadow-2xl shadow-indigo-900/60 mx-auto">
                <div className="flex justify-between items-center mb-4 px-1">
                  <span className="text-xs" style={{ color: "#64748b" }}>9:41</span>
                  <div className="flex gap-1">
                    <div className="w-3 h-1.5 rounded" style={{ background: "#334155" }} />
                    <div className="w-4 h-1.5 rounded bg-indigo-400" />
                  </div>
                </div>
                <div className="rounded-2xl p-4 mb-3" style={{ background: "rgba(15,23,42,0.8)" }}>
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-xs mb-0.5" style={{ color: "#64748b" }}>Goa Trip 🏖️</p>
                      <p className="text-xl font-bold text-white">₹4,820 total</p>
                    </div>
                    <div className="w-11 h-11 rounded-xl grad-btn flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-indigo-900/50">3</div>
                  </div>
                  <div className="space-y-3">
                    {[
                      { initial: "R", name: "Rahul owes you", amount: "₹950", color: "rgba(16,185,129,0.2)", tc: "#34d399", bc: "rgba(16,185,129,0.3)", ac: "text-emerald-400" },
                      { initial: "P", name: "Priya owes you", amount: "₹1,240", color: "rgba(124,58,237,0.2)", tc: "#a78bfa", bc: "rgba(124,58,237,0.3)", ac: "text-emerald-400" },
                      { initial: "A", name: "You owe Aarav", amount: "₹620", color: "rgba(249,115,22,0.2)", tc: "#fb923c", bc: "rgba(249,115,22,0.3)", ac: "text-red-400" },
                    ].map((row) => (
                      <div key={row.name} className="flex justify-between items-center rounded-xl px-3 py-2" style={{ background: "rgba(255,255,255,0.04)" }}>
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: row.color, color: row.tc, border: `1px solid ${row.bc}` }}>
                            {row.initial}
                          </div>
                          <span className="text-sm" style={{ color: "#cbd5e1" }}>{row.name}</span>
                        </div>
                        <span className={`text-sm font-bold ${row.ac}`}>{row.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button className="w-full grad-btn text-white text-sm font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-indigo-900/50">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></svg>
                  Settle via UPI
                </button>
                <div className="mt-3 rounded-xl p-4" style={{ background: "rgba(79,70,229,0.12)", border: "1px solid rgba(99,102,241,0.2)" }}>
                  <p className="text-xs mb-1" style={{ color: "#94a3b8" }}>Net you&apos;re owed</p>
                  <p className="text-2xl font-black text-white">+₹1,570</p>
                  <div className="flex gap-1 mt-3">
                    <div className="h-1.5 rounded-full bg-emerald-400 flex-1" />
                    <div className="h-1.5 rounded-full bg-red-400 w-8" />
                  </div>
                </div>
              </div>
              <div
                className="absolute -bottom-5 left-4 glass-dark rounded-2xl px-4 py-2 text-xs font-bold shadow-lg whitespace-nowrap z-10"
                style={{ color: "#c4b5fd" }}
              >
                ⚡ UPI in 1 tap
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF BAR */}
      <div className="border-y py-4 px-4" style={{ background: "#ffffff", borderColor: "#e0e7ff" }}>
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6 text-sm text-center" style={{ color: "#64748b" }}>
          <span className="flex items-center gap-2">⭐ <strong style={{ color: "#1e293b" }}>4.8/5</strong> avg rating</span>
          <span style={{ color: "#c7d2fe" }}>|</span>
          <span className="flex items-center gap-2">👥 Trusted by <strong style={{ color: "#1e293b" }}>12,000+</strong> Indians</span>
          <span style={{ color: "#c7d2fe" }}>|</span>
          <span className="flex items-center gap-2">💚 <strong style={{ color: "#1e293b" }}>Free forever</strong> · No paywall</span>
          <span style={{ color: "#c7d2fe" }}>|</span>
          <span className="flex items-center gap-2">📱 <strong style={{ color: "#1e293b" }}>No Play Store</strong> needed</span>
          <span style={{ color: "#c7d2fe" }}>|</span>
          <span className="flex items-center gap-2">🌐 Works on <strong style={{ color: "#1e293b" }}>any device</strong></span>
        </div>
      </div>

      {/* PROBLEM */}
      <section className="py-24 px-4 section-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl sm:text-4xl font-black mb-4" style={{ color: "#1e293b" }}>Sound familiar? 😬</h2>
            <p className="text-lg max-w-xl mx-auto" style={{ color: "#64748b" }}>Every Indian friend group has these exact problems. You&apos;re not alone.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { emoji: "😬", title: 'The awkward "bhai, tu deda yaar" moment', text: "Asking your friend to pay back ₹340 from last month's dinner feels weird. So you just… don't. And it adds up." },
              { emoji: "🤯", title: "WhatsApp calculator hell", text: '"Wait, did you count the cab?" "Priya paid for lunch but Rahul didn\'t split the hotel." Six people, fourteen expenses, zero clarity.' },
              { emoji: "💸", title: "No idea where your money went", text: "You got paid on the 1st. It's the 15th. Your account says ₹4,200. You have absolutely no idea what happened." },
            ].map((item, i) => (
              <div key={i} className="card p-6 reveal card-hover transition-all duration-300" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#1e293b" }}>{item.title}</h3>
                <p className="text-sm" style={{ color: "#64748b" }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24 px-4 section-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-3">Everything you need</p>
            <h2 className="text-3xl sm:text-4xl font-black mb-4" style={{ color: "#1e293b" }}>One app. Two superpowers.</h2>
            <p className="text-lg max-w-xl mx-auto" style={{ color: "#64748b" }}>Split group expenses <em>and</em> track personal finances — in the same beautiful app.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                bg: "#ede9fe",
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8 12h8M12 8v8" /></svg>,
                title: "Circles",
                text: "Create a group for flatmates, a Goa trip, or your regular dinner crew. Add friends, log expenses, see everyone's balance instantly.",
              },
              {
                bg: "#e0e7ff",
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>,
                title: "Debt Simplification",
                text: "Our algorithm collapses complex webs of debt into the fewest possible payments. 5 transactions become 2. Settle faster, stress less.",
              },
              {
                bg: "#d1fae5",
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>,
                title: "UPI Settle",
                text: "One tap opens GPay, PhonePe, or Paytm with the exact amount pre-filled. No account numbers, no screenshots, no confusion.",
              },
              {
                bg: "#ffedd5",
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
                title: "Personal Budget",
                text: "Track income vs expenses by category. Set monthly budgets with visual progress bars. Finally understand where your salary goes.",
              },
              {
                bg: "#fce7f3",
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#db2777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" /></svg>,
                title: "Activity Feed",
                text: "Full history of every transaction across all circles and personal accounts. Find that ₹340 from 3 months ago in seconds.",
              },
              {
                bg: "#cffafe",
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
                title: "Works Offline",
                text: "Log expenses on a Himachal trip with no signal. SpendSync syncs when you're back online. A true PWA built for India's patchy networks.",
              },
            ].map((f, i) => (
              <div key={i} className="card p-6 reveal card-hover transition-all duration-300 group" style={{ transitionDelay: `${i * 0.05}s` }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: f.bg }}>
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#1e293b" }}>{f.title}</h3>
                <p className="text-sm" style={{ color: "#64748b" }}>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEBT SIMPLIFICATION */}
      <section className="py-24 px-4 section-dark">
        <div className="max-w-4xl mx-auto reveal">
          <div className="rounded-3xl p-8 md:p-12" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(99,102,241,0.2)" }}>
            <div className="text-center mb-10">
              <p className="text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-3">Smart Algorithm</p>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">5 payments → 2 payments.<br /><span className="grad-text">Automatically.</span></h2>
              <p className="max-w-xl mx-auto" style={{ color: "#94a3b8" }}>After a group trip, everyone owes everyone something. SpendSync untangles the mess so you settle with the fewest payments possible.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <div className="space-y-2">
                <p className="text-center text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#64748b" }}>Before (5 payments)</p>
                {[["Rahul → Priya", "₹300"], ["Priya → Aarav", "₹450"], ["Aarav → Rahul", "₹200"], ["Meera → Priya", "₹180"], ["Aarav → Meera", "₹270"]].map(([from, amt]) => (
                  <div key={from} className="rounded-xl p-3 text-xs flex justify-between items-center" style={{ background: "#0f172a", border: "1px solid rgba(239,68,68,0.2)" }}>
                    <span style={{ color: "#94a3b8" }}>{from}</span>
                    <span className="font-bold text-red-400">{amt}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl grad-btn flex items-center justify-center shadow-xl shadow-indigo-900/50 mb-3">
                  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                    <path d="M4 11C4 8.79 5.79 7 8 7h16c2.21 0 4 1.79 4 4v10c0 2.21-1.79 4-4 4H8c-2.21 0-4-1.79-4-4V11z" fill="rgba(255,255,255,0.6)" />
                    <path d="M4 11C4 8.79 5.79 7 8 7h16c2.21 0 4 1.79 4 4v2c0 4.5-6 7.5-12 7.5S4 17.5 4 13V11z" fill="#fff" />
                    <path d="M16 10l1.2 3.2 3.3 1.3-3.3 1.3L16 19l-1.2-3.2L11.5 14.5l3.3-1.3L16 10z" fill="#4f46e5" />
                  </svg>
                </div>
                <p className="text-indigo-400 font-bold text-sm text-center">SpendSync<br />Simplification</p>
                <svg className="mt-3 hidden md:block" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </div>
              <div className="space-y-2">
                <p className="text-center text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#64748b" }}>After (2 payments ✨)</p>
                {[["Rahul → Priya", "₹250"], ["Meera → Aarav", "₹150"]].map(([from, amt]) => (
                  <div key={from} className="rounded-xl p-4 text-sm flex justify-between items-center" style={{ background: "rgba(79,70,229,0.15)", border: "1px solid rgba(16,185,129,0.3)" }}>
                    <span className="font-semibold text-white">{from}</span>
                    <span className="font-bold text-emerald-400">{amt}</span>
                  </div>
                ))}
                <div className="text-center pt-4">
                  <span className="font-bold text-lg text-emerald-400">3 fewer payments</span><br />
                  <span className="text-xs" style={{ color: "#64748b" }}>= less awkward &quot;pay me back&quot; texts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UPI CALLOUT */}
      <section className="py-20 px-4 section-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center reveal">
            <div>
              <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-3">Built for India 🇮🇳</p>
              <h2 className="text-3xl sm:text-4xl font-black mb-5" style={{ color: "#1e293b" }}>Pay in one tap.<br /><span className="grad-text">No copy-pasting.</span></h2>
              <p className="text-lg mb-6" style={{ color: "#64748b" }}>SpendSync knows your friend&apos;s UPI ID. Tap &quot;Settle&quot; and it opens your UPI app — GPay, PhonePe, or Paytm — with the exact amount already filled in. You just hit Send.</p>
              <div className="space-y-3">
                {[
                  "Supports GPay, PhonePe, Paytm, and all UPI apps",
                  "Amount is pre-filled — no manual entry, no mistakes",
                  "Marks the debt as settled automatically after payment",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center text-xs" style={{ background: "#d1fae5", color: "#059669" }}>✓</div>
                    <span style={{ color: "#475569" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="card rounded-3xl p-6 w-full max-w-xs shadow-lg shadow-indigo-100">
                <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#94a3b8" }}>Settle with Rahul</p>
                <div className="rounded-2xl p-4 mb-4 text-center" style={{ background: "#f8faff", border: "1px solid #e0e7ff" }}>
                  <p className="text-4xl font-black mb-1" style={{ color: "#1e293b" }}>₹950</p>
                  <p className="text-sm" style={{ color: "#94a3b8" }}>via rahul@okicici</p>
                </div>
                <p className="text-xs text-center mb-4" style={{ color: "#94a3b8" }}>Open with your UPI app:</p>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[["G", "#4f46e5", "GPay"], ["P", "#7c3aed", "PhonePe"], ["₹", "#4f46e5", "Paytm"]].map(([label, color, name]) => (
                    <button key={name} className="rounded-xl py-3 flex flex-col items-center gap-1 hover:bg-indigo-50 transition" style={{ background: "#f1f5ff", border: "1px solid #e0e7ff" }}>
                      <span className="text-xl font-bold" style={{ color }}>{label}</span>
                      <span className="text-xs" style={{ color: "#64748b" }}>{name}</span>
                    </button>
                  ))}
                </div>
                <div className="text-center text-xs font-semibold text-emerald-600">✅ Debt auto-cleared on payment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPENSE TRACKER */}
      <section id="expense-tracker" className="py-24 px-4 section-light">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center reveal">
            <div className="flex justify-center order-2 md:order-1">
              <div className="card rounded-3xl p-6 w-full max-w-xs shadow-lg shadow-indigo-100">
                <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#94a3b8" }}>April Overview</p>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="rounded-2xl p-3 text-center" style={{ background: "#d1fae5", border: "1px solid #a7f3d0" }}>
                    <p className="text-xs mb-1" style={{ color: "#065f46" }}>Income</p>
                    <p className="text-lg font-black" style={{ color: "#047857" }}>₹62,000</p>
                  </div>
                  <div className="rounded-2xl p-3 text-center" style={{ background: "#fee2e2", border: "1px solid #fecaca" }}>
                    <p className="text-xs mb-1" style={{ color: "#7f1d1d" }}>Spent</p>
                    <p className="text-lg font-black" style={{ color: "#dc2626" }}>₹38,450</p>
                  </div>
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#94a3b8" }}>Top Categories</p>
                <div className="space-y-2.5">
                  {[
                    { label: "🍕 Food & Dining", amount: "₹12,200", width: "72%", color: "bg-orange-400" },
                    { label: "🚕 Transport", amount: "₹6,800", width: "45%", color: "bg-blue-400" },
                    { label: "🛍️ Shopping", amount: "₹9,400", width: "58%", color: "bg-violet-400" },
                    { label: "🎬 Entertainment", amount: "₹3,200", width: "22%", color: "bg-pink-400" },
                  ].map((cat) => (
                    <div key={cat.label}>
                      <div className="flex justify-between text-xs mb-1">
                        <span style={{ color: "#475569" }}>{cat.label}</span>
                        <span style={{ color: "#94a3b8" }}>{cat.amount}</span>
                      </div>
                      <div className="h-1.5 rounded-full" style={{ background: "#e2e8f0" }}>
                        <div className={`h-1.5 ${cat.color} rounded-full`} style={{ width: cat.width }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-xl p-3 flex items-center gap-2" style={{ background: "#fffbeb", border: "1px solid #fde68a" }}>
                  <span className="text-lg">⚠️</span>
                  <div>
                    <p className="text-xs font-bold" style={{ color: "#92400e" }}>Food budget 88% used</p>
                    <p className="text-xs" style={{ color: "#a16207" }}>₹1,800 remaining this month</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">Personal Finance Tracker 📊</p>
              <h2 className="text-3xl sm:text-4xl font-black mb-5" style={{ color: "#1e293b" }}>Know exactly where<br /><span className="grad-text">your money goes.</span></h2>
              <p className="text-lg mb-6" style={{ color: "#64748b" }}>Log every income and expense across multiple accounts — bank, cash, credit card. Set category budgets and get alerted before you overspend. No more &quot;where did my salary go?&quot; moments.</p>
              <div className="space-y-3">
                {[
                  "Track income, expenses & transfers across all accounts",
                  "Set monthly budgets per category with visual progress bars",
                  "See spending trends — weekly, monthly, by category",
                  "Credit card, bank & cash accounts all in one place",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center text-xs" style={{ background: "#d1fae5", color: "#059669" }}>✓</div>
                    <span style={{ color: "#475569" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARE */}
      <section id="compare" className="py-24 px-4 section-dark">
        <div className="max-w-4xl mx-auto reveal">
          <div className="text-center mb-12">
            <p className="text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-3">vs the competition</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Why not just use Splitwise?</h2>
            <p style={{ color: "#94a3b8" }}>Good question. Here&apos;s what you&apos;re missing.</p>
          </div>
          <div className="rounded-3xl overflow-hidden" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(99,102,241,0.2)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(99,102,241,0.15)" }}>
                  <th className="text-left font-semibold py-4 pl-6" style={{ color: "#64748b" }}>Feature</th>
                  <th className="text-center">
                    <div className="inline-flex items-center gap-2 py-4 px-4">
                      <div className="w-6 h-6 rounded grad-btn flex items-center justify-center">{LOGO_SVG}</div>
                      <span className="font-bold text-white">SpendSync</span>
                    </div>
                  </th>
                  <th className="text-center font-semibold py-4 pr-6" style={{ color: "#64748b" }}>Splitwise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Price", <span key="p" className="text-emerald-400 font-bold">100% Free</span>, "Free tier + $3.99/mo"],
                  ["UPI Integration", <span key="u" className="text-emerald-400 text-lg">✓</span>, <span key="u2" className="text-red-400 text-lg">✗</span>],
                  ["Personal Finance Tracking", <span key="pf" className="text-emerald-400 text-lg">✓</span>, <span key="pf2" className="text-red-400 text-lg">✗</span>],
                  ["Debt Simplification", <span key="ds" className="text-indigo-400 font-semibold">Advanced</span>, "Basic"],
                  ["No App Store Required (PWA)", <span key="pwa" className="text-emerald-400 text-lg">✓</span>, <span key="pwa2" className="text-red-400 text-lg">✗</span>],
                  ["Offline Support", <span key="os" className="text-emerald-400 text-lg">✓</span>, <span key="os2" className="text-red-400 text-lg">✗</span>],
                  ["Ads", <span key="ad" className="text-emerald-400 font-semibold">None, ever</span>, "Yes (free tier)"],
                  ["Built for Indian users", <span key="in" className="text-emerald-400 text-lg">✓</span>, <span key="in2" className="text-red-400 text-lg">✗</span>],
                ].map(([feature, ss, sw], i) => (
                  <tr key={i} style={{ borderBottom: i < 7 ? "1px solid rgba(99,102,241,0.08)" : undefined }}>
                    <td className="pl-6 py-3" style={{ color: "#cbd5e1" }}>{feature}</td>
                    <td className="text-center py-3">{ss}</td>
                    <td className="text-center py-3 pr-6" style={{ color: typeof sw === "string" ? "#64748b" : undefined }}>{sw}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-8">
            <a href="https://app.spendsync.in" className="grad-btn text-white font-bold px-8 py-4 rounded-xl inline-block hover:opacity-90 transition-all shadow-xl shadow-indigo-900/40">
              Switch to SpendSync — It&apos;s Free →
            </a>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24 px-4 section-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-3">Super simple</p>
            <h2 className="text-3xl sm:text-4xl font-black mb-4" style={{ color: "#1e293b" }}>Up and running in 60 seconds</h2>
            <p className="text-lg" style={{ color: "#64748b" }}>No tutorials. No onboarding videos. Just open and go.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: "1", title: "Create a Circle", text: 'Name your group — "Goa Trip," "Flat 4B," "Office Lunch Crew" — and add your friends by name or phone number.' },
              { n: "2", title: "Log Expenses", text: "Who paid, how much, and who was involved. SpendSync calculates everyone's share and updates balances in real time." },
              { n: "3", title: "Settle via UPI", text: "When it's time to square up, tap Settle. SpendSync opens your UPI app with the exact amount. Done. No drama." },
            ].map((step, i) => (
              <div key={i} className="text-center reveal" style={{ transitionDelay: `${i * 0.15}s` }}>
                <div className="w-16 h-16 rounded-2xl grad-btn flex items-center justify-center mx-auto mb-6 shadow-xl shadow-indigo-300/40 text-2xl font-black text-white">{step.n}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "#1e293b" }}>{step.title}</h3>
                <p style={{ color: "#64748b" }}>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-4 section-light">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-3">Real users · Real love</p>
            <h2 className="text-3xl sm:text-4xl font-black" style={{ color: "#1e293b" }}>Indians are obsessed with it.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { initial: "A", name: "Arjun Sharma", sub: "3rd year, IIT Delhi · Flatmate circle", bg: "#e0e7ff", tc: "#4f46e5", text: '"Used to fight with my roommates every month about rent and utilities. SpendSync literally fixed our friendship. The UPI settle button is pure genius — Rahul can\'t pretend he forgot anymore 😂"' },
              { initial: "M", name: "Meera Krishnan", sub: "Product Designer, Bengaluru · Travel group", bg: "#ede9fe", tc: "#7c3aed", text: '"We did a 12-day Rajasthan trip with 7 friends. I was dreading the \'who paid what\' calculation at the end. SpendSync turned 23 expenses into 4 payments. I nearly cried. Absolute lifesaver."' },
              { initial: "K", name: "Kabir Mehta", sub: "Software Engineer, Pune · Personal budget user", bg: "#ffedd5", tc: "#ea580c", text: '"Bro. I didn\'t even know I was spending ₹8,000 on Zomato every month. SpendSync\'s personal budget tracker showed me that chart and I physically felt sick. Changed my life ngl."' },
            ].map((t, i) => (
              <div key={i} className="card p-6 reveal card-hover transition-all duration-300 shadow-sm" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="flex gap-1 mb-4 text-yellow-400 text-lg">★★★★★</div>
                <p className="mb-5 text-sm leading-relaxed" style={{ color: "#475569" }}>{t.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold" style={{ background: t.bg, color: t.tc }}>{t.initial}</div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#1e293b" }}>{t.name}</p>
                    <p className="text-xs" style={{ color: "#94a3b8" }}>{t.sub}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PWA INSTALL */}
      <section className="py-24 px-4 section-dark">
        <div className="max-w-4xl mx-auto reveal">
          <div className="rounded-3xl p-8 md:p-12 text-center" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(99,102,241,0.2)" }}>
            <div className="text-5xl mb-4">📱</div>
            <p className="text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-3">Install the PWA</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Add to your home screen.<br />Takes 2 taps.</h2>
            <p className="text-lg max-w-xl mx-auto mb-10" style={{ color: "#94a3b8" }}>SpendSync is a Progressive Web App — it lives in your browser but acts like a native app. No Play Store. No App Store. Zero storage wasted on your phone.</p>
            <div className="grid sm:grid-cols-2 gap-6 max-w-lg mx-auto mb-10">
              {[
                { letter: "A", lbg: "rgba(99,102,241,0.2)", lc: "#a5b4fc", title: "On Android", text: 'Open Chrome → tap the three dots menu → "Add to Home Screen." Done.' },
                { letter: "i", lbg: "rgba(124,58,237,0.2)", lc: "#c4b5fd", title: "On iPhone", text: 'Open Safari → tap the Share icon → "Add to Home Screen." Just like a real app.' },
              ].map((inst) => (
                <div key={inst.title} className="rounded-2xl p-5 text-left" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(99,102,241,0.15)" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 font-bold" style={{ background: inst.lbg, color: inst.lc }}>{inst.letter}</div>
                  <h3 className="text-white font-bold mb-1 text-sm">{inst.title}</h3>
                  <p className="text-xs" style={{ color: "#64748b" }}>{inst.text}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8" style={{ color: "#64748b" }}>
              <span>✅ No storage used</span><span>✅ Works offline</span><span>✅ Native-like experience</span><span>✅ Instant updates</span>
            </div>
            <a href="https://app.spendsync.in" className="grad-btn text-white font-bold px-10 py-4 rounded-xl inline-block hover:opacity-90 transition-all shadow-xl shadow-indigo-900/40 text-lg">Open &amp; Install Free →</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-4 section-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-black" style={{ color: "#1e293b" }}>Questions we get a lot.</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-2xl overflow-hidden reveal cursor-pointer" style={{ background: "#fff", border: "1px solid #e0e7ff", transitionDelay: `${i * 0.05}s` }}>
                <button
                  className="w-full text-left px-6 py-5 flex justify-between items-center"
                  onClick={() => toggleFaq(i)}
                >
                  <span className="font-semibold pr-4" style={{ color: "#1e293b" }}>{faq.q}</span>
                  <svg
                    className="w-5 h-5 flex-shrink-0 transition-transform duration-200"
                    style={{ color: "#6366f1", transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)" }}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "#64748b" }}>{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-4 section-dark">
        <div className="max-w-4xl mx-auto reveal">
          <div className="relative rounded-3xl overflow-hidden text-center p-12 md:p-16" style={{ background: "linear-gradient(135deg,#4f46e5 0%,#7c3aed 50%,#4f46e5 100%)" }}>
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-5 leading-tight">Your friend group deserves<br />better than WhatsApp math.</h2>
              <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "#c7d2fe" }}>Join 12,000+ Indians who&apos;ve stopped fighting about money. Free forever. No download. Just open and go.</p>
              <a href="https://app.spendsync.in" className="bg-white font-black px-12 py-5 rounded-2xl text-lg inline-block hover:bg-indigo-50 transition-all shadow-2xl hover:-translate-y-1" style={{ color: "#4f46e5" }}>Open SpendSync Free →</a>
              <p className="text-sm mt-5" style={{ color: "#a5b4fc" }}>No account needed · No credit card · Works on any device</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
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
                <li><a href="#features" className="hover:text-indigo-600 transition">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-indigo-600 transition">How it works</a></li>
                <li><a href="https://app.spendsync.in" className="hover:text-indigo-600 transition">Open App</a></li>
                <li><a href="#compare" className="hover:text-indigo-600 transition">vs Splitwise</a></li>
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
    </>
  );
}
