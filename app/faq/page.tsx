import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteFooter from "../components/SiteFooter";

// 1. SEO metadata for the FAQ page
export const metadata: Metadata = {
  title: "Website Design FAQ for BC Contractors and Small Businesses | Folded Logic",
  description:
    "Straight answers on website costs, timelines, Google, booking and quotes for BC trades and small businesses. Custom sites from $1,500. Based in Peachland, BC.",
  openGraph: {
    title: "Website Design FAQ for BC Contractors and Small Businesses | Folded Logic",
    description:
      "Straight answers on website costs, timelines, Google, booking and quotes for BC trades and small businesses.",
    url: "https://www.foldedlogic.ca/faq",
    siteName: "Folded Logic",
    locale: "en_CA",
    type: "website",
  },
  alternates: { canonical: "/faq" },
};

// 2. FAQ content. Each answer opens with a direct answer (what Google and AI
// search tools pull into summaries), followed by optional detail and bullets.
// The same data feeds both the page and the FAQPage schema, so they never drift apart.
type Bullet = { label?: string; text: string };
type Faq = { question: string; answer: string[]; bullets?: Bullet[] };
type FaqGroup = { title: string; faqs: Faq[] };

const faqGroups: FaqGroup[] = [
  {
    title: "Cost",
    faqs: [
      {
        question: "How much does a website cost for a small business in BC?",
        answer: [
          "At Folded Logic, a custom website costs between $1,500 and $4,800, depending on how many pages you need. Online stores and custom apps start at $6,500. All prices are in Canadian dollars.",
        ],
        bullets: [
          { label: "One-Page Site:", text: "$1,500" },
          { label: "Starter Site (up to 5 pages):", text: "$2,800" },
          { label: "On the Tools Package (Starter Site plus online booking, instant quotes and auto-posting):", text: "$3,950" },
          { label: "Full Business Site (up to 10 pages):", text: "$4,800" },
          { label: "Online Stores & Custom Apps:", text: "from $6,500" },
        ],
      },
      {
        question: "How much does a website cost for a contractor or tradesperson?",
        answer: [
          "Most trades businesses need a Starter Site ($2,800) or the On the Tools Package ($3,950). The On the Tools Package is built for trades. It lets customers book you and get a price range on the spot, even while you're out on a job.",
        ],
      },
      {
        question: "Are there monthly fees for a website?",
        answer: [
          "Yes, every website has some ongoing costs, like your domain name and hosting. You pay those directly to the providers. If you want me to look after the site, care plans start at $45 a month for hosting only, or $75 a month for updates, backups and security.",
        ],
      },
      {
        question: "How do I pay for my website?",
        answer: [
          "A 50% deposit books your spot and gets the project started. The other 50% is due when you've approved the finished site, before it goes live.",
        ],
      },
    ],
  },
  {
    title: "Timeline and Process",
    faqs: [
      {
        question: "How long does it take to build a website?",
        answer: [
          "Most websites take 3 to 5 weeks from start to launch. The biggest factor is how quickly I get your photos, text and feedback.",
        ],
      },
      {
        question: "What do I need to give you to get started?",
        answer: [
          "Your logo, photos of your work and some details about your business, like your services, hours and service area. I'll set up a shared folder with a short guide that walks you through it. You'll never need to send me a password.",
        ],
      },
      {
        question: "What if I don't like the design?",
        answer: [
          "Every package includes 2 rounds of design changes, so we can adjust it until it's right. Extra changes after that are $100 an hour.",
        ],
      },
      {
        question: "Do you work with businesses outside the Okanagan?",
        answer: [
          "Yes. Folded Logic is based in Peachland, BC, and builds websites for businesses across British Columbia.",
        ],
      },
    ],
  },
  {
    title: "Getting Found on Google",
    faqs: [
      {
        question: "How do I get my business to show up on Google?",
        answer: [
          "Start with a fast website that clearly says what you do and where you work, plus a complete Google Business Profile. Every Folded Logic site includes the Google basics: page titles and descriptions, clean code, and Google Analytics and Search Console. For more, I offer Local Search Setup and a Search Boost package.",
        ],
      },
      {
        question: "Can you guarantee my website will be first on Google?",
        answer: [
          "No, and be careful of anyone who promises that. Nobody controls Google's rankings. What I can do is build your site so Google can easily read it, understand what you do and where you work, and load it fast on a phone. Those are the things Google looks for.",
        ],
      },
      {
        question: "Do I need a Google Business Profile?",
        answer: [
          "If you serve local customers, yes. It's what puts you on Google Maps and in the local results when someone searches for your trade near them. I can set it up and fine-tune it as part of Local Search Setup.",
        ],
      },
      {
        question: "Will my website work on phones?",
        answer: [
          "Yes. Every site is built to work on phones, tablets and computers. Most of your customers will find you on their phone, so it's built with phones in mind first.",
        ],
      },
    ],
  },
  {
    title: "Features for Trades and Small Businesses",
    faqs: [
      {
        question: "Can customers book appointments on my website?",
        answer: [
          "Yes. I can connect the booking tool you already use, like Calendly, Square or Jobber, for $250. Or I can build you your own booking system, starting at $1,500, with no monthly booking subscription.",
        ],
      },
      {
        question: "Can my website give customers a quote automatically?",
        answer: [
          "Yes. An instant quote calculator ($900) lets customers pick a service and size and see a price range right away. Their details come straight to your inbox, so you get the lead even if you're on the tools.",
        ],
      },
      {
        question: "Can my website post to Facebook and Instagram for me?",
        answer: [
          "Yes. With Social Auto-Posting ($400 setup), new projects, photos and reviews on your site post themselves to Facebook, Instagram and your Google Business Profile.",
        ],
      },
      {
        question: "Can I sell products online?",
        answer: [
          "Yes. Online stores start at $6,500. They include secure card payments through Stripe, a dashboard to manage products and orders, and customer accounts.",
        ],
      },
      {
        question: "Can you redo my old website?",
        answer: [
          "Yes. If your current site is slow, outdated or not bringing in work, I can rebuild it from scratch with the same pricing as a new site.",
        ],
      },
    ],
  },
  {
    title: "Ownership, Hosting and Updates",
    faqs: [
      {
        question: "Do I own my website?",
        answer: [
          "Yes. Once the final payment is made, the site is 100% yours. I hand it over to your own GitHub and Vercel accounts, so if you ever move on, your website goes with you. No lock-in.",
        ],
      },
      {
        question: "Why don't you use WordPress, Wix or Squarespace?",
        answer: [
          "Because custom-built sites are faster and have less that can break. Those platforms are built to do everything for everyone, so your site carries a lot of extra code it doesn't need, and WordPress sites often rely on plugins that need constant updates. I build every site from scratch, so it loads fast and only has what your business needs.",
        ],
      },
      {
        question: "Can I update my website myself?",
        answer: [
          "On the Full Business Site, yes. It includes a simple way to add your own blog posts and project photos. For anything else, the Growth Care plan includes up to 2 hours of updates a month, or I can make changes at $100 an hour.",
        ],
      },
      {
        question: "What happens after my website goes live?",
        answer: [
          "You get 30 days of support to fix any problems with what we built. After that, you can join a monthly care plan, and I'll keep the site updated, backed up and running. Or you can call me when you need something, at $100 an hour.",
        ],
      },
      {
        question: "What's the difference between self-hosted and managed hosting?",
        answer: [
          "With self-hosted, you have your own hosting accounts and pay the providers directly. With managed hosting, I look after the hosting for you. Each care plan is available either way, and managed is $20 to $45 a month more.",
        ],
      },
    ],
  },
];

// Plain-text version of an answer for the schema markup
function schemaText(faq: Faq): string {
  const bullets = (faq.bullets ?? []).map((b) => (b.label ? `${b.label} ${b.text}` : b.text));
  return [...faq.answer, ...bullets].join(" ");
}

export default function FAQPage() {
  // 3. JSON-LD structured data so Google and AI search tools can read each question and answer
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqGroups.flatMap((group) =>
      group.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: schemaText(faq),
        },
      }))
    ),
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-400 font-sans selection:bg-blue-500/30">

      {/* Invisible script tag that injects the SEO schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      {/* Simple header for navigation */}
      <header className="border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image
              src="/folded-logic-logo.png"
              alt="Folded Logic Logo"
              preload
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

      {/* Page content */}
      <section className="max-w-4xl mx-auto px-6 py-24 md:py-32">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Folded Logic <span className="text-blue-600">Unfolded</span>.
          </h1>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto">
            Straight answers to the questions BC contractors and small business owners ask most about getting a website built.
          </p>
        </div>

        <div className="space-y-14">
          {faqGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">{group.title}</h2>

              {/* Native HTML accordions via the <details> tag */}
              <div className="space-y-4">
                {group.faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group bg-zinc-900/30 border border-zinc-800/80 rounded-3xl p-6 open:bg-zinc-900/60 hover:border-zinc-700 transition-all cursor-pointer shadow-sm"
                  >
                    <summary className="flex items-center justify-between font-bold text-lg text-white outline-none [&::-webkit-details-marker]:hidden">
                      <h3 className="pr-6">{faq.question}</h3>
                      {/* The plus/x icon that animates when opened */}
                      <svg
                        className="w-6 h-6 text-blue-500 shrink-0 group-open:rotate-45 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    </summary>
                    <div className="mt-6 text-zinc-400 text-base leading-relaxed border-t border-zinc-800/50 pt-6 cursor-text">
                      {faq.answer.map((para) => (
                        <p key={para} className="mb-4 last:mb-0 text-zinc-300">{para}</p>
                      ))}
                      {faq.bullets && (
                        <ul className="space-y-3 mt-4">
                          {faq.bullets.map((b) => (
                            <li key={b.text + (b.label ?? "")} className="flex items-start gap-3">
                              <span className="w-2 h-2 mt-2 rounded-full bg-blue-600 shrink-0"></span>
                              <p>{b.label && <strong className="text-zinc-200">{b.label}</strong>} {b.text}</p>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <p className="text-lg text-zinc-300 mb-6">
            Didn&apos;t see your question? Call Mat at{" "}
            <a href="tel:+12503009463" className="text-blue-500 hover:text-blue-400 font-bold">250-300-9463</a>{" "}
            or send a message.
          </p>
          <Link
            href="/#contact"
            className="inline-block text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-full transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
