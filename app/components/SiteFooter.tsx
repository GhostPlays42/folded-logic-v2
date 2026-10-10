import Link from "next/link";
import { business } from "../lib/business";

// Shared footer with consistent name, phone and service area (NAP) on every page.
export default function SiteFooter() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 px-6 py-12 text-sm text-zinc-400">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <p className="text-white font-bold text-base mb-2">{business.name}</p>
          <p>Web design &amp; development based in {business.locality}, {business.region}.</p>
          <p className="mt-2">Serving {business.areasServed.join(", ")} and the Okanagan.</p>
        </div>
        <div>
          <p className="text-white font-bold text-base mb-2">Contact</p>
          <p>
            <a href={`tel:${business.phoneE164}`} className="hover:text-white transition-colors">{business.phone}</a>
          </p>
          <p>
            <a href={`mailto:${business.email}`} className="hover:text-white transition-colors">{business.email}</a>
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-col gap-2">
          <p className="text-white font-bold text-base mb-0">Explore</p>
          <Link href="/#services" className="hover:text-white transition-colors">Services</Link>
          <Link href="/#work" className="hover:text-white transition-colors">Work</Link>
          <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
          <Link href="/#contact" className="hover:text-white transition-colors">Start a project</Link>
        </nav>
      </div>
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
        <div className="flex gap-8 font-medium">
          <Link href="/privacy" className="hover:text-zinc-200 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-zinc-200 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
