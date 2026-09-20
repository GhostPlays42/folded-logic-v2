import Image from "next/image";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      
      {/* Simplified Dark Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image
              src="/folded-logic-logo-no-bg.svg"
              alt="Folded Logic Logo"
              width={80}
              height={80}
              className="w-16 h-16 md:w-20 md:h-20"
            />
            <span className="text-white font-bold text-lg md:text-xl tracking-tight">
              Folded Logic
            </span>
          </Link>
          <Link href="/" className="text-sm font-bold text-zinc-400 hover:text-white transition-colors">
            &larr; Back to Home
          </Link>
        </div>
      </header>

      {/* Legal Content Container */}
      <section className="flex-grow max-w-3xl mx-auto w-full px-6 pt-40 pb-24">
        <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-4 tracking-tight">Privacy Policy</h1>
        <p className="text-sm font-medium text-zinc-500 mb-12 border-b border-zinc-200 pb-8 uppercase tracking-widest">
          Effective Date: August 22, 2026
        </p>
        
        <div className="space-y-8 text-zinc-600 leading-relaxed text-lg">
          
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Overview</h2>
            <p>
              At Folded Logic (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), we respect your privacy and are committed to protecting any personal information you share with us through our website and project inquiry forms. This Privacy Policy outlines how we collect, use, and safeguard your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mt-10 mb-4">2. Information We Collect</h2>
            <p>
              When you use our project questionnaire or contact us directly, we may collect voluntary information such as your name, corporate email address, estimated project budget, and project specifications. We use this data solely to communicate with you and formulate tailored proposals.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mt-10 mb-4">3. Data Security & Confidentiality</h2>
            <p>
              All project inquiries, proprietary concepts, and business disclosures are handled under strict confidentiality. We do not sell, rent, or trade your personal information or business metrics to third parties under any circumstances.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mt-10 mb-4">4. Cookies and Analytics</h2>
            <p>
              Our site may use minimal technical cookies to ensure optimal performance and speed across standard browsers. You can choose to disable cookies through your individual browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mt-10 mb-4">5. Contact Us</h2>
            <p>
              If you have any questions or concerns regarding our privacy practices, please reach out directly at <a href="mailto:mat@foldedlogic.ca" className="text-blue-600 hover:text-blue-700 underline transition-colors">mat@foldedlogic.ca</a>.
            </p>
          </section>

        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-900 py-12 text-center text-zinc-500 text-sm">
        <p>© {new Date().getFullYear()} Folded Logic. All rights reserved.</p>
      </footer>
    </main>
  );
}