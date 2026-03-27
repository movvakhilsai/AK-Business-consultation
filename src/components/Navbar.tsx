import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, TrendingUp } from "lucide-react";
import { cn } from "../lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Blueprint & SEO", path: "/blueprint" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-3" : "bg-white/90 backdrop-blur-sm py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <TrendingUp className="h-8 w-8 text-[var(--color-accent)]" />
            <span className="font-heading font-bold text-xl text-[var(--color-primary)] tracking-tight">
              AK Business<br/><span className="text-sm font-medium text-[var(--color-secondary)]">Consultation</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[var(--color-accent)]",
                  location.pathname === link.path ? "text-[var(--color-accent)]" : "text-[var(--color-secondary)]"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white px-6 py-2.5 rounded-md font-medium transition-colors shadow-sm"
            >
              Book Consultation
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-[var(--color-primary)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "block px-3 py-3 rounded-md text-base font-medium",
                  location.pathname === link.path
                    ? "text-[var(--color-accent)] bg-amber-50"
                    : "text-[var(--color-secondary)] hover:bg-gray-50 hover:text-[var(--color-primary)]"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block w-full text-center mt-4 bg-[var(--color-primary)] text-white px-6 py-3 rounded-md font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
