import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    industry: "",
    challenge: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-[var(--color-primary)] mb-6">
              Let's Discuss Your Business Growth
            </h1>
            <p className="text-lg text-[var(--color-secondary)] mb-12 leading-relaxed">
              Whether you're a startup looking to scale or an established SME optimizing operations, our team is ready to help you achieve measurable results.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 text-[var(--color-primary)] rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-[var(--color-primary)] mb-1">Our Office</h3>
                  <p className="text-[var(--color-secondary)]">Hochschulstraße 16<br/>01069 Dresden</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 text-[var(--color-primary)] rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-[var(--color-primary)] mb-1">Call Us</h3>
                  <p className="text-[var(--color-secondary)]">+491626442139<br/>Mon-Fri, 9am - 6pm CET</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 text-[var(--color-primary)] rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-[var(--color-primary)] mb-1">Email Us</h3>
                  <p className="text-[var(--color-secondary)]">hello@akconsultation.com<br/>support@akconsultation.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <Send className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-[var(--color-primary)] mb-4">Inquiry Received!</h3>
                <p className="text-[var(--color-secondary)] mb-8">
                  Thank you for reaching out. One of our senior consultants will contact you within 24 hours to schedule your discovery call.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-[var(--color-accent)] font-medium hover:underline"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-heading font-bold text-[var(--color-primary)] mb-6">Book a Discovery Call</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
                      <input required type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition-all" placeholder="Acme Corp" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Work Email *</label>
                      <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition-all" placeholder="john@acmecorp.com" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition-all" placeholder="+1 (555) 000-0000" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
                    <select id="industry" name="industry" value={formData.industry} onChange={handleChange} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition-all bg-white">
                      <option value="">Select an industry...</option>
                      <option value="technology">Technology & Software</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="retail">Retail & E-commerce</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="finance">Financial Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="challenge" className="block text-sm font-medium text-gray-700 mb-1">Primary Business Challenge *</label>
                    <textarea required id="challenge" name="challenge" value={formData.challenge} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition-all resize-none" placeholder="Briefly describe the main challenge you're looking to solve..."></textarea>
                  </div>

                  <button type="submit" className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white font-bold py-4 rounded-md transition-colors shadow-md flex justify-center items-center gap-2">
                    Request Consultation <Send className="h-4 w-4" />
                  </button>
                  <p className="text-xs text-gray-500 text-center mt-4">
                    By submitting this form, you agree to our privacy policy. We will never share your information.
                  </p>
                </form>
              </>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
