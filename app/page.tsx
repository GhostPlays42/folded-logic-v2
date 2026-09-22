"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from './lib/supabase';

export default function Home() {
  // --- Form State ---
  const [isMounted, setIsMounted] = useState(false);
  const [activeService, setActiveService] = useState("");
  const [activeBudget, setActiveBudget] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Hydration fix for dynamic form buttons
  useEffect(() => {
    setIsMounted(true);
  }, []);

// Real Form Submit Handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Save the form reference immediately before any await calls
    const form = e.currentTarget; 
    
    setIsSubmitting(true);
    setStatusMessage("");

    // Grab the data from the form fields
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    try {
      const { error } = await supabase
        .from('leads')
        .insert([
          {
            name: name,
            email: email,
            service_requested: activeService,
            budget: activeBudget,
            project_details: message,
          }
        ]);

      if (error) throw error;

      // Success state
      setStatusMessage("Project request sent! We'll be in touch shortly.");
      form.reset(); // Clears the form using the saved reference
      setActiveService("");
      setActiveBudget("");
      
    } catch (error) {
      console.error("Error submitting lead:", error);
      setStatusMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- Scroll Animation Observer ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove(
              "opacity-0",
              "translate-y-24",
              "translate-y-16",
              "translate-y-12",
              "translate-y-8",
              "-translate-x-24",
              "-translate-x-12",
              "translate-x-24",
              "translate-x-12",
              "scale-90",
              "scale-95",
              "-rotate-2",
              "rotate-2"
            );
            entry.target.classList.add(
              "opacity-100",
              "translate-y-0",
              "translate-x-0",
              "scale-100",
              "rotate-0"
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll(".reveal-init");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="flex flex-col">
      
      {/* 1. FIXED HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo - Clicks close the menu in case it's open */}
          <a href="#" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
            <Image
              src="/folded-logic-logo-no-bg.svg"
              alt="Folded Logic Logo"
              width={80}
              height={80}
              className="w-16 h-16 md:w-20 md:h-20"
            />
            <span className="text-white font-bold text-lg md:text-xl tracking-tight">
              Folded Logic <span className="hidden lg:inline text-zinc-500 font-normal">| Intelligent Web Solutions</span>
            </span>
          </a>

          {/* Desktop Nav (Hidden on Mobile) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#work" className="hover:text-white transition">Work</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            <Link href="/faq" className="hover:text-white transition font-bold text-blue-500">FAQ</Link>
          </nav>

          {/* Mobile Hamburger Button */}
          <button 
            className="md:hidden text-zinc-300 hover:text-white transition-colors p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {/* Swaps between a Hamburger icon and an X icon based on state */}
            {isMobileMenuOpen ? (
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-64 opacity-100 border-b border-zinc-800" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-6 px-6 py-8 bg-zinc-950/95 backdrop-blur-md text-center">
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-zinc-300 hover:text-white transition">Services</a>
            <a href="#work" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-zinc-300 hover:text-white transition">Work</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-zinc-300 hover:text-white transition">About</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-blue-500 hover:text-blue-400 transition">Contact</a>
            <Link href="/faq" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-zinc-300 hover:text-white transition">FAQ</Link>
          </div>
        </div>
      </header>

{/* 2. HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center fade-in pt-20 overflow-hidden">
        
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/fl-landing-page.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 -mt-32">
          <div className="max-w-3xl text-left md:ml-[10%] animate-slide-left">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white">
              Custom Web <span className="text-blue-500 inline-block animate-slide-right">Design</span> & <br className="hidden md:block" /> Full-Stack <span className="text-blue-500 inline-block animate-slide-right">Development</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 mb-10 max-w-2xl">
              At Folded Logic, we believe a website should be more than just a digital brochure—it should be a working asset that actually grows your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-start mt-4">
              
              <a 
                href="#contact" 
                className="group relative px-8 py-4 bg-blue-600 text-white rounded-full font-bold shadow-lg hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Start Your Project</span>
                <svg className="w-4 h-4 transform group-hover:rotate-180 translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>

              {/* Secondary Button - Updated for Dark Background */}
              <a 
                href="#services" 
                className="group relative px-8 py-4 rounded-full font-bold border border-white/20 text-white backdrop-blur-md bg-white/10 hover:bg-white/20 hover:border-white/40 hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
              >
                <span>View Our Services</span>
                <svg className="w-4 h-4 text-zinc-300 group-hover:text-white transform group-hover:translate-y-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

{/* 3. SERVICES SECTION */}
      <section id="services" className="relative min-h-screen py-32 px-6 bg-zinc-50 text-zinc-900 scroll-mt-20 overflow-hidden">
        
{/* --- Ambient Background Effects (Locked to the very back) --- */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          
          {/* Subtle Technical Dot Grid */}
          <div 
            className="absolute inset-0 opacity-50" 
            style={{ 
              backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', 
              backgroundSize: '32px 32px' 
            }}
          ></div>

          {/* Soft Gradient Light Leaks (Burnt Orange Hue) */}
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[800px] bg-orange-500/15 rounded-full blur-[120px] mix-blend-multiply"></div>
          <div className="absolute top-[40%] right-[-10%] w-[40%] h-[600px] bg-amber-600/10 rounded-full blur-[120px] mix-blend-multiply"></div>
          <div className="absolute bottom-[-5%] left-[20%] w-[50%] h-[500px] bg-orange-700/10 rounded-full blur-[120px] mix-blend-multiply"></div>
          
        </div>

        {/* Foreground Content Wrapper */}
        <div className="relative z-10 max-w-7xl mx-auto w-full space-y-24">
           {/* ... rest of your Services content remains exactly the same ... */}
          
          <div className="text-center max-w-3xl mx-auto reveal-init opacity-0 translate-y-8 scale-95 transition-all duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">What We <span className="text-blue-600">Do</span></h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              All of our solutions are custom-coded for high performance and hosted on top-tier cloud infrastructure, bypassing the bloat of traditional page builders to deliver fast, scalable digital assets.
            </p>
          </div>

          <div className="w-full">
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center border-b border-zinc-200 pb-4 w-fit px-8 mx-auto relative z-20 reveal-init opacity-0 translate-y-8 transition-all duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]">
              Core Web Solutions
            </h3>
            <div className="relative z-10 p-8 md:p-12 bg-white rounded-3xl shadow-lg border border-zinc-200 hover:shadow-2xl hover:border-blue-300 transition-all duration-500 reveal-init opacity-0 translate-y-24 scale-95 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-zinc-600">
                <li className="group"><strong className="text-zinc-900 group-hover:text-blue-600 transition-colors block text-lg mb-1">Custom UI/UX Design</strong> Full site mapping, competitor analysis, and flawless mobile-to-desktop responsive rendering.</li>
                <li className="group"><strong className="text-zinc-900 group-hover:text-blue-600 transition-colors block text-lg mb-1">High-Performance Architecture</strong> Premium, scalable cloud infrastructure utilizing Next.js for lightning-fast load times.</li>
                <li className="group"><strong className="text-zinc-900 group-hover:text-blue-600 transition-colors block text-lg mb-1">Dynamic Content Management (CMS)</strong> Custom backend integrations for easily updatable blogs, case studies, and portfolios.</li>
                <li className="group"><strong className="text-zinc-900 group-hover:text-blue-600 transition-colors block text-lg mb-1">Interactive Engagement</strong> Modern layouts, custom animations, and interactive micro-interactions designed to convert.</li>
                <li className="group"><strong className="text-zinc-900 group-hover:text-blue-600 transition-colors block text-lg mb-1">E-Commerce & Monetization</strong> Secure payment gateway integrations (Stripe) for physical products, digital sales, or subscriptions.</li>
                <li className="group"><strong className="text-zinc-900 group-hover:text-blue-600 transition-colors block text-lg mb-1">Complex Web Applications</strong> Robust backend databases (PostgreSQL/Supabase), user authentication, and custom admin dashboards.</li>
                <li className="group"><strong className="text-zinc-900 group-hover:text-blue-600 transition-colors block text-lg mb-1">Technical SEO Foundation</strong> Semantic HTML, meta-data configurations, performance tweaks, and detailed Google Analytics tracking.</li>
                <li className="group"><strong className="text-zinc-900 group-hover:text-blue-600 transition-colors block text-lg mb-1">Lead Generation & Routing</strong> Tailored call-to-action (CTA) routing, embedded standard forms, and seamless interactive workflows.</li>
              </ul>
            </div>
          </div>

          <div className="w-full">
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center border-b border-zinc-200 pb-4 w-fit px-8 mx-auto relative z-20 reveal-init opacity-0 translate-y-8 transition-all duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]">
              Brand, Content & Marketing
            </h3>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-white rounded-3xl border border-zinc-200 shadow-md hover:-translate-y-3 hover:shadow-2xl hover:border-blue-500 hover:ring-2 hover:ring-blue-500/20 transition-all duration-500 reveal-init opacity-0 -translate-x-24 -rotate-2 scale-90 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]">
                <h4 className="text-xl font-bold text-zinc-900 mb-4 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                  Branding & Design
                </h4>
                <ul className="space-y-4 text-sm text-zinc-600">
                  <li><strong className="text-blue-600 block mb-1">Logo Modernization</strong> Refining and exporting existing assets into proper high-res web and vector formats.</li>
                  <li><strong className="text-blue-600 block mb-1">Brand Identity Kits</strong> Curated color palettes, web typography guidelines, and secondary marks.</li>
                  <li><strong className="text-blue-600 block mb-1">Custom Iconography</strong> Bespoke vector icon sets designed exclusively to match your brand's unique aesthetic.</li>
                </ul>
              </div>

              <div className="p-8 bg-white rounded-3xl border border-zinc-200 shadow-md hover:-translate-y-3 hover:shadow-2xl hover:border-blue-500 hover:ring-2 hover:ring-blue-500/20 transition-all duration-500 reveal-init opacity-0 translate-y-24 scale-90 delay-100 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]">
                <h4 className="text-xl font-bold text-zinc-900 mb-4 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                  Content Creation
                </h4>
                <ul className="space-y-4 text-sm text-zinc-600">
                  <li><strong className="text-blue-600 block mb-1">Professional Copywriting</strong> Engaging, keyword-optimized text written specifically for your target audience.</li>
                  <li><strong className="text-blue-600 block mb-1">Lead Magnets</strong> Design and formatting of downloadable PDFs (guides, checklists) to capture email leads.</li>
                  <li><strong className="text-blue-600 block mb-1">Scalable Pages</strong> Continually expanding your site's footprint with beautifully formatted sub-pages.</li>
                </ul>
              </div>

              <div className="p-8 bg-white rounded-3xl border border-zinc-200 shadow-md hover:-translate-y-3 hover:shadow-2xl hover:border-blue-500 hover:ring-2 hover:ring-blue-500/20 transition-all duration-500 reveal-init opacity-0 translate-x-24 rotate-2 scale-90 delay-200 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]">
                <h4 className="text-xl font-bold text-zinc-900 mb-4 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                  Growth Integrations
                </h4>
                <ul className="space-y-4 text-sm text-zinc-600">
                  <li><strong className="text-blue-600 block mb-1">Advanced SEO Campaigns</strong> In-depth keyword research, schema markup implementation, and meta-data optimization.</li>
                  <li><strong className="text-blue-600 block mb-1">Local SEO Foundations</strong> Setup and optimization of your Google Business Profile and local directory citations.</li>
                  <li><strong className="text-blue-600 block mb-1">Email Marketing</strong> Integration of marketing platforms, custom template design, and automated welcome sequence routing.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 border border-zinc-200 shadow-lg text-center max-w-4xl mx-auto hover:shadow-2xl transition-all duration-500 reveal-init opacity-0 translate-y-24 scale-95 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]">
            <svg className="w-12 h-12 text-blue-600 mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <h3 className="text-2xl font-bold mb-4 text-zinc-900">Turnkey Website Care & Managed Hosting</h3>
            <p className="text-zinc-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Protecting your digital investment. Our professional oversight ensures your site remains fast, secure, and fully optimized long after launch day. Choose to self-manage your infrastructure, or let us handle everything.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-left">
              <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200 hover:border-blue-300 transition-colors">
                <strong className="text-zinc-900 block mb-2 text-base">Reliable Infrastructure</strong>
                <p className="text-zinc-600">High-performance managed cloud hosting, automated SSL certificates, and DNS management.</p>
              </div>
              <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200 hover:border-blue-300 transition-colors">
                <strong className="text-zinc-900 block mb-2 text-base">Security & Maintenance</strong>
                <p className="text-zinc-600">24/7 uptime monitoring, code dependency updates, automated backups, and routine security patches.</p>
              </div>
              <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200 hover:border-blue-300 transition-colors">
                <strong className="text-zinc-900 block mb-2 text-base">Continuous Development</strong>
                <p className="text-zinc-600">Dedicated monthly development hours for content updates, design tweaks, or new component additions.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. OUR WORK SECTION */}
      <section id="work" className="py-32 bg-white text-zinc-900 scroll-mt-20 border-t border-zinc-200 overflow-hidden flex flex-col gap-12">
        
        {/* Section Header */}
        <div className="max-w-7xl mx-auto text-center px-6 reveal-init opacity-0 translate-y-8 transition-all duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Our <span className="text-blue-600">Work</span></h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            A selection of high-performance digital solutions designed, developed, and deployed by Folded Logic.
          </p>
        </div>

        {/* 1st Track: Portfolio Images (Scrolls Right to Left) */}
        <div className="relative w-full group reveal-init opacity-0 translate-y-12 transition-all duration-1000 delay-100 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] mt-8">
          <div className="absolute top-0 left-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div className="flex w-max animate-scroll-infinite group-hover:[animation-play-state:paused] gap-6">
            {/* Duplicated 4 times to ensure it covers massive 4K ultrawide monitors */}
            {[
              '01', '02', '03', '04', '05', '06', '07', 
              '01', '02', '03', '04', '05', '06', '07',
              '01', '02', '03', '04', '05', '06', '07', 
              '01', '02', '03', '04', '05', '06', '07'
            ].map((num, index) => (
              <div 
                key={`work-${index}`} 
                className="relative w-[280px] md:w-[450px] aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-zinc-200 flex-shrink-0 cursor-pointer"
              >
                <Image
                  src={`/work-${num}.png`}
                  alt={`Folded Logic Portfolio Project ${num}`}
                  fill
                  sizes="(max-width: 768px) 280px, 450px"
                  className="object-cover hover:scale-110 transition-transform duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* 2nd Track: Tech Stack Logos (Scrolls Left to Right) */}
        <div className="relative w-full group reveal-init opacity-0 translate-y-12 transition-all duration-1000 delay-200 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]">
          <div className="absolute top-0 left-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div className="flex w-max animate-scroll-infinite-reverse group-hover:[animation-play-state:paused] gap-4 py-4">
            {/* Because the text pills are smaller, duplicated 6 times for safety */}
            {[
              "VS Code", "Next.js", "React", "Tailwind CSS", "TypeScript", "Supabase", "PostgreSQL", "Vercel", "GitHub", "Canva Pro", "Inkscape", "Stripe",
              "VS Code", "Next.js", "React", "Tailwind CSS", "TypeScript", "Supabase", "PostgreSQL", "Vercel", "GitHub", "Canva Pro", "Inkscape", "Stripe",
              "VS Code", "Next.js", "React", "Tailwind CSS", "TypeScript", "Supabase", "PostgreSQL", "Vercel", "GitHub", "Canva Pro", "Inkscape", "Stripe",
              "VS Code", "Next.js", "React", "Tailwind CSS", "TypeScript", "Supabase", "PostgreSQL", "Vercel", "GitHub", "Canva Pro", "Inkscape", "Stripe",
              "VS Code", "Next.js", "React", "Tailwind CSS", "TypeScript", "Supabase", "PostgreSQL", "Vercel", "GitHub", "Canva Pro", "Inkscape", "Stripe",
              "VS Code", "Next.js", "React", "Tailwind CSS", "TypeScript", "Supabase", "PostgreSQL", "Vercel", "GitHub", "Canva Pro", "Inkscape", "Stripe"
            ].map((tech, index) => (
              <div 
                key={`tech-${index}`}
                className="flex items-center justify-center px-8 py-4 bg-zinc-50 border border-zinc-200 rounded-full shadow-sm flex-shrink-0 hover:border-blue-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                <span className="text-zinc-600 font-bold tracking-wide">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONTACT, ABOUT & FOOTER SECTION */}
      <section id="contact" className="relative z-10 w-full bg-zinc-950 border-t border-zinc-900 pt-32 pb-12 px-6 overflow-hidden">
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 mb-32">
          
          {/* Left Side: Contact CTA */}
          <div className="w-full lg:w-5/12 flex flex-col reveal-init opacity-0 -translate-x-12 transition-all duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Ready to upgrade your digital presence?
            </h2>
            <p className="text-lg text-zinc-400 font-light mb-12 leading-relaxed">
              Skip the endless email threads. Use our quick project builder to tell us exactly what you need, and we'll get back to you with a tailored action plan within 24 hours.
            </p>
            
            <a 
              href="mailto:mat@foldedlogic.ca" 
              className="group flex items-center gap-5 mt-auto p-6 bg-zinc-900/50 hover:bg-zinc-900 transition-colors duration-300 rounded-3xl border border-zinc-800 cursor-pointer w-fit"
            >
                <div className="w-14 h-14 bg-zinc-950 rounded-2xl flex items-center justify-center shrink-0 border border-zinc-800 group-hover:border-blue-500/50 transition-colors">
                <Image 
                  src="/folded-logic-logo-no-bg.svg" 
                  alt="Folded Logic Logo" 
                  width={100} 
                  height={100} 
                  className="w-12 h-12 scale-175 object-contain group-hover:scale-200 transition-transform duration-300"
                />
              </div>
              <div>
                <p className="text-sm text-zinc-500 group-hover:text-blue-400 transition-colors duration-300 tracking-wider uppercase font-medium mb-1">Direct Contact</p>
                <p className="text-lg font-bold text-zinc-200 group-hover:text-white transition-colors duration-300">mat@foldedlogic.ca</p>
              </div>
            </a>
          </div>

          {/* Right Side: Interactive Form */}
          <div className="w-full lg:w-7/12 bg-zinc-900/30 backdrop-blur-xl border border-zinc-800/80 rounded-[2rem] p-8 md:p-10 shadow-2xl reveal-init opacity-0 translate-x-12 transition-all duration-700 delay-100 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:border-zinc-700 transition-colors">
            <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
              
              <div>
                <label className="block text-sm font-bold text-zinc-400 mb-4 tracking-wider uppercase">What do you need help with?</label>
                <div className="flex flex-wrap gap-3">
                  {isMounted && ["New Website", "Redesign", "E-Commerce", "SEO / Marketing"].map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => setActiveService(service)}
                      className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border 
                        ${activeService === service 
                          ? 'bg-blue-600 text-white border-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.4)] scale-105' 
                          : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:border-zinc-600 hover:text-zinc-200 hover:-translate-y-0.5'}`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-zinc-400 mb-4 tracking-wider uppercase">Estimated Budget</label>
                <div className="flex flex-wrap gap-3">
                  {isMounted && ["<$1k", "$3k - $5k", "$5k - $10k", "$10k+"].map((budgetOption) => (
                    <button
                      key={budgetOption}
                      type="button"
                      onClick={() => setActiveBudget(budgetOption)}
                      className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border 
                        ${activeBudget === budgetOption 
                          ? 'bg-blue-600 text-white border-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.4)] scale-105' 
                          : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:border-zinc-600 hover:text-zinc-200 hover:-translate-y-0.5'}`}
                    >
                      {budgetOption}
                    </button>
                  ))}
                </div>
              </div> 

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-zinc-500 mb-2 uppercase tracking-widest">Name</label>
                  <input required name="name" type="text" placeholder="John Doe" className="w-full bg-zinc-950/50 border border-zinc-800 rounded-2xl px-5 py-4 text-zinc-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-zinc-700" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-500 mb-2 uppercase tracking-widest">Email</label>
                  <input required name="email" type="email" placeholder="john@example.com" className="w-full bg-zinc-950/50 border border-zinc-800 rounded-2xl px-5 py-4 text-zinc-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-zinc-700" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-500 mb-2 uppercase tracking-widest">Project Details</label>
                <textarea required name="message" rows={4} placeholder="Tell us a bit more about your vision..." className="w-full bg-zinc-950/50 border border-zinc-800 rounded-2xl px-5 py-4 text-zinc-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none placeholder:text-zinc-700"></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 mt-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:-translate-y-1 disabled:opacity-50 disabled:hover:translate-y-0"
              >
                {isSubmitting ? "Sending Request..." : "Submit Project Request"}
              </button>

              {statusMessage && (
                <p className={`text-sm text-center font-bold mt-2 ${statusMessage.includes("wrong") ? "text-red-400" : "text-emerald-400"}`}>
                  {statusMessage}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* About Us & Partnership Bottom Section */}
        <div id="about" className="max-w-7xl mx-auto pt-24 border-t border-zinc-900 scroll-mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <div className="reveal-init opacity-0 -translate-x-12 transition-all duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]">
              <h3 className="text-sm font-bold text-zinc-500 mb-4 tracking-widest uppercase">About Us</h3>
              <h4 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">Your website should be an asset, not an expense.</h4>
              <p className="text-zinc-400 leading-relaxed mb-6 text-lg">
                Based out of Peachland, BC, we believe a website should be more than just a digital brochure—it should be a working asset that actually grows your business. 
              </p>
              <p className="text-zinc-400 leading-relaxed text-lg">
                A lot of agencies will build a site, hand over the keys, and disappear. We do things differently. We partner with our clients for the long haul. We focus on results-driven design—optimizing your site to turn the right visitors into paying customers—and we do it all with transparent, jargon-free communication.
              </p>
            </div>

            <div className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8 md:p-10 reveal-init opacity-0 translate-x-12 transition-all duration-700 delay-100 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]">
              <h5 className="text-2xl font-bold text-white mb-4">Ongoing Partnership</h5>
              <p className="text-zinc-400 leading-relaxed mb-8">
                Because your website is never truly &quot;finished,&quot; we offer dedicated hosting, ongoing support, and maintenance programs. You focus on running your business; we&apos;ll make sure your website stays fast, secure, and up-to-date.
              </p>
              
              <ul className="space-y-5">
                <li className="flex items-center gap-4 text-zinc-300 font-medium">
                  <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0 shadow-[0_0_10px_rgba(37,99,235,0.8)]"></span>
                  Lightning-fast Vercel edge hosting
                </li>
                <li className="flex items-center gap-4 text-zinc-300 font-medium">
                  <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0 shadow-[0_0_10px_rgba(37,99,235,0.8)]"></span>
                  Routine security and performance updates
                </li>
                <li className="flex items-center gap-4 text-zinc-300 font-medium">
                  <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0 shadow-[0_0_10px_rgba(37,99,235,0.8)]"></span>
                  Priority support for content changes
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Copyright Footer */}
        <div className="max-w-7xl mx-auto mt-32 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-zinc-600 reveal-init opacity-0 transition-opacity duration-1000 delay-300">
          <p>© {new Date().getFullYear()} Folded Logic. All rights reserved.</p>
          <div className="flex gap-8 font-medium">
            <Link href="/privacy" className="hover:text-zinc-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-zinc-300 transition-colors">Terms of Service</Link>
          </div>
        </div> 
      </section>

    </main>
  );
}