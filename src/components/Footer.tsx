import { Link } from "react-router-dom";
import { TrendingUp, Mail, Phone, MapPin, Linkedin, Twitter, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 text-white">
              <TrendingUp className="h-8 w-8 text-[var(--color-accent)]" />
              <span className="font-heading font-bold text-xl tracking-tight">
                AK Business
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Helping entrepreneurs, startups, and growing businesses build, scale, and optimize their operations with data-driven strategies.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-[var(--color-accent)] transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-[var(--color-accent)] transition-colors">Our Services</Link></li>
              <li><Link to="/blueprint" className="hover:text-[var(--color-accent)] transition-colors">Blueprint & SEO</Link></li>
              <li><Link to="/contact" className="hover:text-[var(--color-accent)] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-4">Core Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-[var(--color-accent)] transition-colors">Business Strategy</Link></li>
              <li><Link to="/services" className="hover:text-[var(--color-accent)] transition-colors">Startup Advisory</Link></li>
              <li><Link to="/services" className="hover:text-[var(--color-accent)] transition-colors">Operations Optimization</Link></li>
              <li><Link to="/services" className="hover:text-[var(--color-accent)] transition-colors">International Expansion</Link></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm mb-6">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[var(--color-accent)] shrink-0" />
                <span>Hochschulstraße 16<br/>01069 Dresden</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[var(--color-accent)] shrink-0" />
                <span>+491626442139</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[var(--color-accent)] shrink-0" />
                <span>hello@akconsultation.com</span>
              </li>
            </ul>
            
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-gray-800 border border-gray-700 text-sm rounded-md px-3 py-2 w-full focus:outline-none focus:border-[var(--color-accent)]"
              />
              <button className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-3 py-2 rounded-md transition-colors">
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>

        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} AK Business Consultation. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
