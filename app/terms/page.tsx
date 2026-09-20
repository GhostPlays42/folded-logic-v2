import Image from "next/image";
import Link from "next/link";

export default function TermsPage() {
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
        <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-4 tracking-tight">Terms of Service</h1>
        <p className="text-sm font-medium text-zinc-500 mb-12 border-b border-zinc-200 pb-8 uppercase tracking-widest">
          Effective Date: August 22, 2026
        </p>
        
        <div className="space-y-8 text-zinc-600 leading-relaxed text-lg">
          
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Folded Logic website, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please refrain from using our digital services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mt-10 mb-4">2. Intellectual Property Rights</h2>
            <p>
              All code architecture, design systems, visual mockups, copy, and sample demo concepts displayed on foldedlogic.ca are the exclusive intellectual property of Folded Logic. Unauthorized reproduction, scraping, or commercial duplication is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mt-10 mb-4">3. Interactive Demos & Concepts</h2>
            <p>
              The sample websites linked throughout our portfolio (such as Vanguard Build, Nexus SaaS, etc.) are conceptual demonstrations of capability. They do not represent active commercial operations of third-party entities unless explicitly contracted.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mt-10 mb-4">4. Limitation of Liability</h2>
            <p>
              Folded Logic shall not be held liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services or website infrastructure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mt-10 mb-4">5. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with applicable regional laws, without regard to conflict of law principles.
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