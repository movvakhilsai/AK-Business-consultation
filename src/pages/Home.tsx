import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Globe, Lightbulb, LineChart, Settings, ShieldCheck, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="pt-20">
      {/* HERO SECTION */}
      <section className="relative bg-[var(--color-primary)] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
            alt="Business Meeting" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
              Data-Driven Strategies for <span className="text-[var(--color-accent)]">Scalable Business Growth</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              AK Business Consultation helps entrepreneurs and SMEs optimize operations, expand globally, and maximize profitability through practical, actionable advisory.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-8 py-4 rounded-md font-medium text-lg transition-colors text-center shadow-lg flex items-center justify-center gap-2">
                Book a Discovery Call <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/services" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-md font-medium text-lg transition-colors text-center">
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[var(--color-primary)] mb-4">
              Practical Solutions, Not Just Theoretical Advice
            </h2>
            <p className="text-lg text-[var(--color-secondary)]">
              We focus on measurable outcomes. Our consulting framework is designed to identify opportunities, eliminate inefficiencies, and drive sustainable growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Clear Growth Strategies", desc: "Develop actionable roadmaps that align with your long-term vision and market realities." },
              { icon: Settings, title: "Operations Optimization", desc: "Streamline workflows, reduce costs, and improve overall business efficiency." },
              { icon: Globe, title: "Market Expansion", desc: "Identify new opportunities and successfully navigate international trade and expansion." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-blue-100 text-[var(--color-primary)] rounded-lg flex items-center justify-center mb-6">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">{item.title}</h3>
                <p className="text-[var(--color-secondary)] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY SERVICES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-[var(--color-accent)] font-semibold tracking-wider uppercase text-sm mb-2 block">Our Expertise</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[var(--color-primary)]">
                Comprehensive Consulting Services
              </h2>
            </div>
            <Link to="/services" className="text-[var(--color-primary)] font-medium hover:text-[var(--color-accent)] transition-colors flex items-center gap-2">
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Lightbulb, title: "Business Strategy", desc: "Comprehensive planning to position your company for long-term success." },
              { icon: Users, title: "Startup Advisory", desc: "Guidance for early-stage companies to scale rapidly and securely." },
              { icon: BarChart3, title: "Market Research", desc: "Data-driven insights to understand competitors and customer needs." },
              { icon: LineChart, title: "Financial Planning", desc: "Optimize cash flow, secure funding, and improve profitability margins." },
              { icon: Settings, title: "Operations Optimization", desc: "Process improvement to reduce waste and increase productivity." },
              { icon: Globe, title: "Supply Chain & Trade", desc: "Logistics optimization and international expansion consulting." }
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-[var(--color-accent)] transition-colors group">
                <service.icon className="h-8 w-8 text-[var(--color-teal)] mb-5 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-heading font-bold mb-3">{service.title}</h3>
                <p className="text-[var(--color-secondary)] mb-6 text-sm leading-relaxed">{service.desc}</p>
                <Link to="/services" className="text-sm font-medium text-[var(--color-primary)] group-hover:text-[var(--color-accent)] flex items-center gap-1">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTING PROCESS */}
      <section className="py-20 bg-[var(--color-primary)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Proven Consulting Process
            </h2>
            <p className="text-gray-300">A systematic approach to diagnosing problems and implementing scalable solutions.</p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-700 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
              {[
                { step: "01", title: "Initial Consultation", desc: "Understanding your vision, challenges, and goals." },
                { step: "02", title: "Business Analysis", desc: "Deep dive into your data, operations, and market." },
                { step: "03", title: "Strategy Development", desc: "Creating a customized, actionable roadmap." },
                { step: "04", title: "Implementation", desc: "Hands-on guidance to execute the strategy." },
                { step: "05", title: "Optimization", desc: "Monitoring performance and refining tactics." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-primary-light)] border-2 border-[var(--color-accent)] flex items-center justify-center text-xl font-bold mb-6 shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-heading font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS & TRUST */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[var(--color-primary)] mb-6">
                Trusted by Growing Businesses Worldwide
              </h2>
              <p className="text-lg text-[var(--color-secondary)] mb-8">
                We don't just deliver reports; we deliver results. Our clients consistently see improved operational efficiency, higher profit margins, and successful market entries.
              </p>
              
              <div className="space-y-6">
                {[
                  "Over 150+ businesses scaled successfully",
                  "Average 35% increase in operational efficiency",
                  "Specialized expertise in international trade & logistics",
                  "Data-driven, transparent reporting"
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <ShieldCheck className="h-6 w-6 text-[var(--color-teal)] shrink-0" />
                    <span className="font-medium text-[var(--color-primary)]">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-8 md:p-10 rounded-2xl border border-gray-100 relative">
              <div className="absolute -top-6 -left-6 text-6xl text-gray-200 font-serif">"</div>
              <p className="text-lg md:text-xl italic text-[var(--color-secondary)] mb-8 relative z-10">
                "AK Business Consultation completely transformed our supply chain. Their data-driven approach helped us identify bottlenecks we didn't even know existed. Within 6 months, our operational costs dropped by 22%."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" alt="Client" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-primary)]">Michael Chen</h4>
                  <p className="text-sm text-gray-500">CEO, GlobalTech Logistics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-[var(--color-accent)] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Ready to Scale Your Business?
          </h2>
          <p className="text-lg md:text-xl mb-10 text-amber-50">
            Schedule a free 30-minute discovery call to discuss your challenges and see how our consulting services can drive your growth.
          </p>
          <Link to="/contact" className="inline-block bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white px-10 py-4 rounded-md font-bold text-lg transition-colors shadow-xl">
            Book Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
