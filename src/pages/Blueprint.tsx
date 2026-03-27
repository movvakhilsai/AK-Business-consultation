import { CheckCircle2, Code, FileText, Search, Layout } from "lucide-react";

export default function Blueprint() {
  return (
    <div className="pt-20 bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <section className="bg-[var(--color-primary)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Website Blueprint & Strategy</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            The architectural, SEO, and content strategy driving the AK Business Consultation platform.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: SEO & Content */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* SEO Strategy */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <Search className="h-8 w-8 text-[var(--color-accent)]" />
              <h2 className="text-2xl font-heading font-bold text-[var(--color-primary)]">SEO Strategy</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-[var(--color-primary)] mb-2">Target Keywords</h3>
                <div className="flex flex-wrap gap-2">
                  {["business consulting services", "startup consulting", "business strategy consulting", "operations consulting", "international business consulting"].map(kw => (
                    <span key={kw} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-100">{kw}</span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[var(--color-primary)] mb-2">Meta Framework</h3>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <p className="text-sm font-mono text-gray-600 mb-1"><span className="font-bold text-gray-800">Title:</span> AK Business Consultation | Expert Strategy & Operations Consulting</p>
                  <p className="text-sm font-mono text-gray-600"><span className="font-bold text-gray-800">Desc:</span> Data-driven business consulting for startups and SMEs. We specialize in operational optimization, market research, and international expansion. Book a discovery call today.</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[var(--color-primary)] mb-2">Internal Linking Strategy</h3>
                <ul className="list-disc list-inside text-[var(--color-secondary)] space-y-1 text-sm">
                  <li>Homepage → Core Services (Contextual links in copy)</li>
                  <li>Blog Posts → Relevant Service Pages (Bottom CTA)</li>
                  <li>Service Pages → Case Studies (Proof of concept)</li>
                  <li>All Pages → Contact / Booking Form (Sticky header CTA)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Content Strategy */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-8 w-8 text-[var(--color-accent)]" />
              <h2 className="text-2xl font-heading font-bold text-[var(--color-primary)]">Blog & Insights Strategy</h2>
            </div>
            
            <p className="text-[var(--color-secondary)] mb-6">Content pillars designed to capture top-of-funnel search traffic and establish thought leadership.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  category: "Startup Strategy",
                  topics: ["5 Metrics Every Seed-Stage Startup Must Track", "How to Validate Your Business Model in 30 Days", "Pitch Deck Mistakes That Cost You Funding", "When to Pivot vs. Persevere"]
                },
                {
                  category: "Operational Efficiency",
                  topics: ["Lean Operations for SMEs: A Practical Guide", "Identifying Hidden Bottlenecks in Your Supply Chain", "Automating Workflows to Save 20 Hours a Week", "The Cost of Poor Quality Control"]
                },
                {
                  category: "International Business",
                  topics: ["A Checklist for Expanding into European Markets", "Navigating Cross-Border Logistics in 2026", "Cultural Nuances in B2B Sales", "Managing Currency Risk for Exporters"]
                },
                {
                  category: "Leadership & Growth",
                  topics: ["Transitioning from Founder to CEO", "Building a Data-Driven Company Culture", "How to Retain Top Talent During Rapid Scaling", "Effective Change Management Strategies"]
                }
              ].map((pillar, i) => (
                <div key={i}>
                  <h4 className="font-bold text-[var(--color-primary)] mb-3 border-b pb-2">{pillar.category}</h4>
                  <ul className="space-y-2">
                    {pillar.topics.map((topic, j) => (
                      <li key={j} className="text-sm text-[var(--color-secondary)] flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Tech Stack & Architecture */}
        <div className="space-y-8">
          
          {/* Tech Stack */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <Code className="h-8 w-8 text-[var(--color-accent)]" />
              <h2 className="text-2xl font-heading font-bold text-[var(--color-primary)]">Tech Stack</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Frontend Architecture</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center font-bold text-xs">Re</div>
                    <span className="font-medium text-[var(--color-primary)]">React 19 (Vite)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center font-bold text-xs text-blue-600">TW</div>
                    <span className="font-medium text-[var(--color-primary)]">Tailwind CSS v4</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center font-bold text-xs text-purple-600">FM</div>
                    <span className="font-medium text-[var(--color-primary)]">Framer Motion</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Recommended Integrations</h3>
                <ul className="space-y-2 text-sm text-[var(--color-secondary)]">
                  <li><span className="font-bold text-gray-800">Hosting:</span> Vercel or Google Cloud Run</li>
                  <li><span className="font-bold text-gray-800">Analytics:</span> Google Analytics 4 + PostHog</li>
                  <li><span className="font-bold text-gray-800">CRM:</span> HubSpot (Lead capture integration)</li>
                  <li><span className="font-bold text-gray-800">Booking:</span> Calendly embed on Contact page</li>
                </ul>
              </div>
            </div>
          </div>

          {/* UX Guidelines */}
          <div className="bg-[var(--color-primary)] text-white p-8 rounded-xl shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Layout className="h-8 w-8 text-[var(--color-accent)]" />
              <h2 className="text-2xl font-heading font-bold">UX Guidelines</h2>
            </div>
            
            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 shrink-0"></div>
                <p><strong className="text-white">F-Pattern Layout:</strong> Critical information and CTAs placed along the natural F-shaped reading pattern.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 shrink-0"></div>
                <p><strong className="text-white">Micro-interactions:</strong> Hover states on service cards and buttons to provide immediate tactile feedback.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 shrink-0"></div>
                <p><strong className="text-white">Trust Signals:</strong> Testimonials and metrics placed immediately after the value proposition.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 shrink-0"></div>
                <p><strong className="text-white">Frictionless Forms:</strong> Multi-step or clearly segmented lead capture forms to reduce cognitive load.</p>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
