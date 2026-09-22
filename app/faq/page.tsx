import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

// 1. Full SEO Metadata for the FAQ Page
export const metadata: Metadata = {
  title: "Frequently Asked Questions | Folded Logic Web Solutions",
  description: "Learn more about our custom web design, Next.js architecture, scalable databases, and SEO solutions for businesses in Peachland and the Central Okanagan.",
  openGraph: {
    title: "FAQ | Folded Logic Web Solutions",
    description: "Answers to your questions about custom web development, high-performance architecture, and SEO in BC.",
    url: "https://foldedlogic.ca/faq",
    images: ["/og-image.png"],
  },
};

// 2. FAQ Data Structure (Keeps your code clean and feeds the Schema markup)
const faqs = [
  {
    question: "What exactly is included in the \"Basic On-Page SEO\" setup?",
    answer: (
      <>
        <p className="mb-4 text-zinc-300">
          Think of on-page SEO as properly labeling the aisles in your digital storefront so search engines know exactly what you sell. If the aisles aren&apos;t labeled, Google won&apos;t know who to send to your site. Our basic setup lays the essential foundation, which includes:
        </p>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 mt-2 rounded-full bg-blue-600 shrink-0"></span>
            <p><strong>Custom Meta Titles & Descriptions:</strong> We write the custom headlines and short summary paragraphs that appear in Google Search results. This is your &quot;digital billboard&quot;—a well-written description is what convinces a customer to actually click your link instead of a competitor&apos;s.</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 mt-2 rounded-full bg-blue-600 shrink-0"></span>
            <p><strong>Clean, Semantic HTML Code:</strong> Unlike clunky drag-and-drop page builders that generate messy, hidden code, we custom-code your site from the ground up. We structure the code using a specific language that Google&apos;s search robots can easily read and categorize.</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 mt-2 rounded-full bg-blue-600 shrink-0"></span>
            <p><strong>Local SEO Groundwork:</strong> We structure your site to capture regional search traffic, signaling to Google that you are a verified business operating within the Central Okanagan.</p>
          </li>
        </ul>
      </>
    ),
    // A clean text string version specifically for Google's backend robots
    schemaAnswer: "Our basic on-page SEO setup includes custom meta titles and descriptions, clean semantic HTML code built from the ground up, and local SEO groundwork to capture regional search traffic in British Columbia."
  },
  {
    question: "What does \"Premium scalable cloud architecture with Next.js and Supabase\" actually mean for my business?",
    answer: (
      <>
        <p className="mb-4 text-zinc-300">
          Think of this as the difference between building a commercial skyscraper and pitching a temporary tent. Cheap website builders are fine for a basic digital brochure, but when you are handling user accounts, complex databases, or digital sales, you need industrial-strength infrastructure.
        </p>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 mt-2 rounded-full bg-blue-600 shrink-0"></span>
            <p><strong>Next.js (The Engine):</strong> This is a modern framework that makes your custom website load almost instantly. Instead of forcing your customer&apos;s phone or computer to do the heavy processing, our cloud edge servers do the heavy lifting ahead of time. This results in blazing-fast speeds.</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 mt-2 rounded-full bg-blue-600 shrink-0"></span>
            <p><strong>PostgreSQL & Supabase (The Vault):</strong> This is an enterprise-grade, highly secure database system. It acts as the heavy-duty digital filing cabinet that safely organizes and stores your customer profiles, sensitive data, inventory counts, and transaction records.</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 mt-2 rounded-full bg-blue-600 shrink-0"></span>
            <p><strong>True Scalability:</strong> Because your platform is custom-coded on this premium infrastructure, it won&apos;t break, crash, or slow down as your traffic increases. It is designed to seamlessly scale from 10 to 10,000 daily users without needing to be torn down and rebuilt.</p>
          </li>
        </ul>
      </>
    ),
    schemaAnswer: "It means building on industrial-strength infrastructure. Next.js provides blazing-fast load times via cloud edge servers, and PostgreSQL (Supabase) acts as a highly secure database for user accounts and sensitive data. This allows your platform to scale from 10 to 10,000 daily users without slowing down or needing a rebuild."
  },
  {
    question: "Why shouldn't I just use a standard template builder?",
    answer: (
      <p className="text-zinc-300">
        Standard template builders are designed for the masses, which means they come packed with bloated, unnecessary code that drastically slows down your load times. A slow website directly hurts your Google ranking and drives away customers. By engineering a bespoke solution, we eliminate the bloat, secure your platform against common template vulnerabilities, and deliver a digital asset uniquely tailored to your operational workflows rather than forcing your business to fit inside a pre-made box.
      </p>
    ),
    schemaAnswer: "Standard template builders contain bloated, unnecessary code that slows down load times, hurting Google rankings and driving away customers. A custom-engineered solution eliminates bloat, improves security, and is uniquely tailored to your business operations."
  },
  {
    question: "What does it mean to integrate third-party tools or APIs into my website?",
    answer: (
      <>
        <p className="mb-4 text-zinc-300">
          Most businesses already use specialized software to run their day-to-day operations. Instead of manually copying data between your website and your software, integrating these tools means we write custom code (APIs) that allows your new website to securely &quot;talk&quot; to the platforms you already rely on.
        </p>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 mt-2 rounded-full bg-blue-600 shrink-0"></span>
            <p><strong>Payment Gateways:</strong> Connecting platforms like Stripe directly into your web application so you can process custom checkouts or manage recurring subscriptions.</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 mt-2 rounded-full bg-blue-600 shrink-0"></span>
            <p><strong>Marketing & Email:</strong> Automatically routing new leads from your site&apos;s contact forms directly into your preferred CRM so your automated welcome sequences trigger instantly.</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 mt-2 rounded-full bg-blue-600 shrink-0"></span>
            <p><strong>Scheduling & Booking:</strong> Embedding specialized industry booking software seamlessly into your service pages so clients can book availability in real-time.</p>
          </li>
        </ul>
      </>
    ),
    schemaAnswer: "Integrating APIs allows your website to securely sync with software you already use. We can connect Stripe for payments, route leads directly into your CRM for email marketing, and embed real-time scheduling software directly into your service pages."
  },
  {
    question: "Do you offer ongoing website hosting and maintenance after launch?",
    answer: (
      <p className="text-zinc-300">
        Yes. Because a high-performing website is never truly &quot;finished,&quot; we offer Turnkey Website Care and managed edge hosting. We handle 24/7 uptime monitoring, routine security patches, automated backups, and core infrastructure updates. You focus on running your business while we ensure your digital asset remains fast, secure, and fully optimized.
      </p>
    ),
    schemaAnswer: "Yes. We offer Turnkey Website Care and managed edge hosting. This includes 24/7 uptime monitoring, routine security patches, automated backups, and core infrastructure updates so you can focus on your business."
  }
];

export default function FAQPage() {
  // 3. Generate JSON-LD Structured Data for Google
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.schemaAnswer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-400 font-sans selection:bg-blue-500/30">
      
      {/* Invisible Script Tag that injects the SEO Schema into the <head> */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Simple Header for Navigation */}
      <header className="border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image
              src="/folded-logic-logo-no-bg.svg"
              alt="Folded Logic Logo"
              width={48}
              height={48}
              className="w-12 h-12"
            />
            <span className="text-white font-bold tracking-tight hidden sm:block">Folded Logic</span>
          </Link>
          <Link 
            href="/#contact" 
            className="text-sm font-bold text-white bg-zinc-900 border border-zinc-800 hover:border-blue-500 hover:bg-zinc-800 px-5 py-2.5 rounded-full transition-all"
          >
            Start Your Project
          </Link>
        </div>
      </header>

      {/* Page Content */}
      <section className="max-w-4xl mx-auto px-6 py-24 md:py-32">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Folded Logic <span className="text-blue-600">Unfolded</span>.
          </h1>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto">
            Everything you need to know about our custom engineering, scalable infrastructure, and SEO processes.
          </p>
        </div>

        {/* Native HTML Accordions via <details> tag */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details 
              key={index} 
              className="group bg-zinc-900/30 border border-zinc-800/80 rounded-3xl p-6 open:bg-zinc-900/60 hover:border-zinc-700 transition-all cursor-pointer shadow-sm"
            >
              <summary className="flex items-center justify-between font-bold text-lg text-white outline-none [&::-webkit-details-marker]:hidden">
                <span className="pr-6">{faq.question}</span>
                {/* The plus/x icon that animates when opened */}
                <svg 
                  className="w-6 h-6 text-blue-500 shrink-0 group-open:rotate-45 transition-transform duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </summary>
              <div className="mt-6 text-zinc-400 text-base leading-relaxed border-t border-zinc-800/50 pt-6 cursor-text">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </section>
      
    </main>
  );
}