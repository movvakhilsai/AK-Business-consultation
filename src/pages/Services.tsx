import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Lightbulb, Users, BarChart3, Settings, Globe, LineChart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      id: "strategy",
      icon: Lightbulb,
      title: "Business Strategy Consulting",
      overview: "We help you define a clear, actionable roadmap for your business. From market positioning to long-term financial goals, we ensure your strategy is robust and scalable.",
      problems: ["Lack of clear direction", "Stagnant growth", "Misaligned team objectives"],
      outcomes: "A comprehensive 3-5 year strategic plan, clear KPIs, and a defined competitive advantage."
    },
    {
      id: "startup",
      icon: Users,
      title: "Startup Advisory",
      overview: "Navigate the critical early stages of your business with expert guidance. We assist with business model validation, pitch deck creation, and go-to-market strategies.",
      problems: ["High burn rate", "Unclear product-market fit", "Difficulty securing funding"],
      outcomes: "Validated business model, investor-ready materials, and a structured launch plan."
    },
    {
      id: "operations",
      icon: Settings,
      title: "Operations Optimization",
      overview: "Streamline your day-to-day processes to maximize efficiency and reduce costs. We analyze your workflows and implement lean methodologies.",
      problems: ["High operational costs", "Inefficient workflows", "Quality control issues"],
      outcomes: "Standardized operating procedures (SOPs), reduced waste, and improved profit margins."
    },
    {
      id: "market-research",
      icon: BarChart3,
      title: "Market Research & Analysis",
      overview: "Make informed decisions backed by hard data. We conduct deep-dive analyses into your industry, competitors, and target demographics.",
      problems: ["Entering new markets blindly", "Losing market share to competitors", "Misunderstanding customer needs"],
      outcomes: "Detailed market reports, competitor benchmarking, and actionable customer insights."
    },
    {
      id: "supply-chain",
      icon: LineChart,
      title: "Supply Chain Consulting",
      overview: "Build a resilient and cost-effective supply chain. We optimize sourcing, inventory management, and logistics networks.",
      problems: ["Frequent stockouts or overstock", "High shipping and warehousing costs", "Unreliable suppliers"],
      outcomes: "Optimized inventory turnover, reduced logistics costs, and diversified supplier networks."
    },
    {
      id: "international",
      icon: Globe,
      title: "International Expansion",
      overview: "Successfully navigate the complexities of global trade. We guide you through regulatory compliance, localized marketing, and cross-border logistics.",
      problems: ["Regulatory compliance risks", "Cultural misalignment in marketing", "Complex international logistics"],
      outcomes: "A localized market entry strategy, compliance frameworks, and established international partnerships."
    }
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-[var(--color-primary)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Our Consulting Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tailored, data-driven solutions designed to solve your most complex business challenges and accelerate growth.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((service, index) => (
            <div key={service.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-blue-100 text-[var(--color-primary)] rounded-lg flex items-center justify-center">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold text-[var(--color-primary)]">{service.title}</h2>
                </div>
                
                <p className="text-lg text-[var(--color-secondary)] leading-relaxed">
                  {service.overview}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                  <div>
                    <h4 className="font-bold text-[var(--color-primary)] mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span> Problems Solved
                    </h4>
                    <ul className="space-y-2">
                      {service.problems.map((prob, i) => (
                        <li key={i} className="text-sm text-[var(--color-secondary)] flex items-start gap-2">
                          <span className="text-gray-400 mt-0.5">•</span> {prob}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--color-primary)] mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span> Expected Outcomes
                    </h4>
                    <p className="text-sm text-[var(--color-secondary)]">
                      {service.outcomes}
                    </p>
                  </div>
                </div>

                <div className="pt-6">
                  <Link to="/contact" className="inline-flex items-center gap-2 text-[var(--color-accent)] font-semibold hover:text-[var(--color-accent-hover)] transition-colors">
                    Discuss this service <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Visual Placeholder */}
              <div className="flex-1 w-full">
                <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden shadow-lg relative group">
                  <img 
                    src={`https://picsum.photos/seed/${service.id}/800/600`} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-[var(--color-primary)]/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-[var(--color-primary)] mb-6">Not sure which service you need?</h2>
          <p className="text-lg text-[var(--color-secondary)] mb-8">
            Let's diagnose your business challenges together. Book a free discovery call and we'll recommend the best path forward.
          </p>
          <Link to="/contact" className="inline-block bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white px-8 py-4 rounded-md font-medium text-lg transition-colors shadow-md">
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </div>
  );
}
