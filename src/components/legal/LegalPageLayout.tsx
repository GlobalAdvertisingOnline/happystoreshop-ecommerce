import Link from "next/link";
import { LEGAL_LINKS } from "@/lib/constants";

interface Section {
  id: string;
  title: string;
  content: string;
}

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  sections: Section[];
}

export function LegalPageLayout({ title, lastUpdated, sections }: LegalPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50/50 to-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-slate-500">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[220px_1fr]">
            {/* Table of Contents */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  On this page
                </h3>
                <nav className="space-y-2">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="block text-sm text-slate-500 transition-colors hover:text-brand-blue"
                    >
                      {s.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Content */}
            <article className="prose prose-slate max-w-none">
              {sections.map((s) => (
                <div key={s.id} id={s.id} className="mb-10 scroll-mt-24">
                  <h2 className="text-xl font-bold text-slate-900">{s.title}</h2>
                  <div
                    className="mt-3 text-[15px] leading-relaxed text-slate-600 [&>p]:mb-4 [&>ul]:mb-4 [&>ul]:list-disc [&>ul]:pl-5 [&>ol]:mb-4 [&>ol]:list-decimal [&>ol]:pl-5 [&_a]:text-brand-blue [&_a]:underline-offset-2 [&_a:hover]:underline [&_table]:w-full [&_table]:border-collapse [&_table]:my-4 [&_table]:text-sm [&_th]:border [&_th]:border-slate-200 [&_th]:bg-slate-50 [&_th]:px-4 [&_th]:py-2 [&_th]:text-left [&_th]:font-semibold [&_th]:text-slate-700 [&_td]:border [&_td]:border-slate-200 [&_td]:px-4 [&_td]:py-2"
                    dangerouslySetInnerHTML={{ __html: s.content }}
                  />
                </div>
              ))}
            </article>
          </div>

          {/* Related Legal Pages */}
          <div className="mx-auto mt-16 max-w-5xl border-t border-slate-200 pt-8">
            <h3 className="mb-4 text-sm font-semibold text-slate-500">
              Other Legal Pages
            </h3>
            <div className="flex flex-wrap gap-3">
              {LEGAL_LINKS.map((link) => (
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
    </>
  );
}
