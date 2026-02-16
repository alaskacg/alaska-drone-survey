import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { SEO } from '../components/SEO';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const serviceAreas = [
    'Anchorage',
    'Fairbanks',
    'Juneau',
    'Kenai Peninsula',
    'Mat-Su Valley',
    'North Slope',
    'Interior Alaska',
    'Southeast Alaska',
  ];

  return (
    <>
      <SEO
        title="Contact Us - Get a Quote"
        description="Contact Alaska Drone Survey for professional aerial surveying, mapping, and inspection services. Serving all of Alaska. Free consultations available."
        keywords="contact drone survey Alaska, get drone quote Alaska, book aerial survey, Alaska UAV services contact"
        path="/contact"
      />

      {/* Hero */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-sky-900 to-sky-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-sky-100 max-w-3xl">
            Ready to get started? Get in touch for a free consultation and quote
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-600 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-600 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-600 focus:border-transparent"
                    placeholder="(907) 555-0000"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-600 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="mapping">Aerial Mapping & Surveying</option>
                    <option value="inspection">Infrastructure Inspection</option>
                    <option value="realestate">Real Estate Photography</option>
                    <option value="construction">Construction Monitoring</option>
                    <option value="environmental">Environmental Assessment</option>
                    <option value="emergency">Emergency Response</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-600 focus:border-transparent"
                    placeholder="Tell us about your project, location, timeline, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-sky-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-sky-700 transition inline-flex items-center justify-center"
                >
                  Send Message <Send className="ml-2" size={20} />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-sky-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">(907) 555-DRONE</p>
                    <p className="text-gray-600">(907) 555-3766</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-sky-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@alaskadronesurvey.com</p>
                    <p className="text-gray-600">quotes@alaskadronesurvey.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-sky-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">Anchorage, Alaska</p>
                    <p className="text-gray-600">Serving all of Alaska</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-sky-50 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-gray-900 mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                  <div className="pt-4 border-t border-sky-200">
                    <p className="text-sm">Emergency services available 24/7</p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gray-100 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Response Time</h3>
                <p className="text-gray-600">
                  We typically respond to all inquiries within 24 hours during business days. 
                  For urgent requests or emergency services, please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Areas</h2>
            <p className="text-xl text-gray-600">We serve all of Alaska</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {serviceAreas.map((area, idx) => (
              <div key={idx} className="bg-white border border-sky-200 rounded-lg p-4 text-center">
                <MapPin className="w-6 h-6 text-sky-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-900">{area}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-sky-100 to-sky-200 rounded-xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-24 h-24 text-sky-600 mx-auto mb-4" />
              <p className="text-xl font-semibold text-gray-900">Alaska-Wide Coverage</p>
              <p className="text-gray-600 mt-2">Interactive map placeholder</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Travel fees may apply for locations outside the Anchorage area. Contact us for details.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
