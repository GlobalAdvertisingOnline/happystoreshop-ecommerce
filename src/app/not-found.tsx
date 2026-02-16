import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-blue-50/50 to-white py-20 md:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 text-center md:px-6 lg:px-8">
        {/* Decorative 404 */}
        <p className="select-none text-[10rem] font-extrabold leading-none tracking-tight text-slate-200 md:text-[14rem]">
          404
        </p>

        {/* Heading */}
        <h1 className="-mt-8 text-3xl font-bold tracking-tight text-slate-900 md:-mt-12 md:text-4xl lg:text-5xl">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-md text-lg text-slate-600">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-blue px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-blue/25 transition-all hover:bg-brand-blue-dark hover:shadow-xl sm:w-auto"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          <Link
            href="/tracking"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-slate-200 bg-white px-8 py-3.5 text-base font-semibold text-slate-700 transition-all hover:border-brand-blue hover:text-brand-blue sm:w-auto"
          >
            <Search className="h-4 w-4" />
            Track Your Order
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mx-auto mt-16 max-w-md border-t border-slate-200 pt-8">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
            Helpful Links
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { label: "Home", href: "/" },
              { label: "Track Order", href: "/tracking" },
              { label: "Contact Us", href: "/contact" },
              { label: "FAQ", href: "/faq" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-600 transition-colors hover:border-brand-blue hover:text-brand-blue"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
