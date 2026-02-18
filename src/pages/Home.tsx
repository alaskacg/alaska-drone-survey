import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { SEO } from '../components/SEO';

const services = [
  { icon: '⛏️', title: 'Mining Survey', desc: 'High-precision topographic surveys, volumetric analysis, and 3D pit modeling for mining operations across Alaska.', features: ['Stockpile measurement', 'Pit progression tracking', 'Haul road planning'] },
  { icon: '🏠', title: 'Real Estate Aerial', desc: 'Stunning aerial photography and videography for property listings, developments, and land sales marketing.', features: ['4K video tours', 'Orthomosaic maps', 'Virtual staging'] },
  { icon: '🏗️', title: 'Construction Monitoring', desc: 'Regular site progress documentation, volumetric analysis, and as-built verification for project management.', features: ['Weekly progress reports', 'BIM integration', 'Earthwork calculations'] },
  { icon: '🌿', title: 'Environmental Assessment', desc: 'Wildlife monitoring, habitat surveys, wetland delineation, and environmental impact documentation.', features: ['Species counting', 'Habitat mapping', 'Change detection'] },
  { icon: '🛢️', title: 'Oil & Gas Pipeline', desc: 'Pipeline corridor inspection, right-of-way monitoring, and leak detection using thermal imaging.', features: ['Thermal anomaly detection', 'Vegetation encroachment', 'Access road assessment'] },
  { icon: '🦌', title: 'Wildlife Survey', desc: 'Non-invasive aerial wildlife population surveys, migration tracking, and habitat assessment.', features: ['Population counting', 'Migration patterns', 'Nesting site identification'] },
];

const techStack = [
  { name: 'DJI Matrice 350 RTK', category: 'Enterprise Drones', desc: 'Survey-grade positioning with RTK accuracy for centimeter-level mapping precision.' },
  { name: 'L2 LiDAR Sensor', category: 'LiDAR Technology', desc: '5 returns per pulse, 240,000 pts/sec. Penetrates vegetation canopy for true ground surface mapping.' },
  { name: 'H20T Thermal Camera', category: 'Thermal Imaging', desc: 'Radiometric thermal imaging for pipeline inspection, wildlife detection, and building diagnostics.' },
  { name: 'Zenmuse P1', category: '4K Aerial Video', desc: 'Full-frame 45MP camera for photogrammetry with mechanical shutter and interchangeable lenses.' },
];

const portfolio = [
  { title: 'Donlin Gold Mine Survey', client: 'Donlin Gold LLC', type: 'Mining Survey', desc: 'Complete topographic survey of 400-acre mine site with weekly progress monitoring and volumetric analysis.' },
  { title: 'Kenai Peninsula Pipeline Inspection', client: 'Alaska Gas Pipeline Co.', type: 'Oil & Gas', desc: '85-mile pipeline corridor thermal inspection identifying 12 anomalies requiring maintenance.' },
  { title: 'Anchorage Real Estate Portfolio', client: 'RE/MAX Alaska', type: 'Real Estate', desc: '4K aerial video tours and orthomosaic maps for 45+ premium property listings.' },
  { title: 'Tongass Salmon Habitat Assessment', client: 'USFS Alaska Region', type: 'Environmental', desc: 'Multispectral analysis of 200 stream miles identifying critical salmon spawning habitat.' },
  { title: 'Trans-Alaska Pipeline Monitoring', client: 'Alyeska Pipeline', type: 'Oil & Gas', desc: 'Quarterly thermal and visual inspection of 50-mile pipeline section with automated anomaly detection.' },
  { title: 'Fairbanks Airport Expansion', client: 'FAA / DOT&PF', type: 'Construction', desc: 'Bi-weekly aerial progress documentation and earthwork volume calculations for runway extension project.' },
];

const pricingTiers = [
  { name: 'Basic', price: '$500', period: 'per project', desc: 'Perfect for small properties and simple surveys', features: ['Up to 20 acres', '2D orthomosaic map', '4K aerial photos (25+)', 'Basic report', '48-hour turnaround', 'Digital delivery'], cta: 'Get Started' },
  { name: 'Professional', price: '$1,500', period: 'per project', desc: 'Comprehensive surveys for commercial projects', features: ['Up to 100 acres', '3D point cloud + DTM', 'LiDAR data collection', '4K video + photos', 'Detailed analysis report', 'Thermal imaging add-on', '1-week turnaround', 'GIS-ready deliverables'], cta: 'Most Popular', popular: true },
  { name: 'Enterprise', price: 'Custom', period: 'contract', desc: 'Ongoing monitoring and large-scale operations', features: ['Unlimited acreage', 'All sensor modalities', 'Recurring flight schedules', 'Dedicated project manager', 'API data integration', 'Real-time dashboards', 'Priority scheduling', '24/7 emergency response'], cta: 'Contact Us' },
];

export function Home() {
  const [contactForm, setContactForm] = useState({ name: '', email: '', company: '', message: '' });

  return (
    <>
      <SEO
        title="Professional Aerial Survey & Mapping Services — Alaska Drone Survey"
        description="Alaska Drone Survey provides professional aerial surveying, mapping, inspection, and photography services across Alaska. FAA certified, LiDAR, thermal imaging."
        keywords="drone surveying Alaska, aerial mapping, LiDAR Alaska, mining survey drone, pipeline inspection drone, real estate aerial photography Alaska"
        path="/"
      />

      <div className="bg-slate-950 text-white">
        {/* Hero */}
        <section className="relative py-24 md:py-36 bg-gradient-to-br from-slate-950 via-sky-950 to-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-900/20 via-transparent to-transparent" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sky-400 font-semibold mb-4 text-sm tracking-wider uppercase">FAA Part 107 Certified · Fully Insured</p>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
                Professional Aerial Survey & Mapping Services
              </h1>
              <p className="text-xl text-slate-300 mb-10">
                Enterprise-grade drone services for mining, oil & gas, construction, and environmental projects across Alaska.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-sky-600 hover:bg-sky-500 px-8 py-4 rounded-xl font-semibold transition text-lg text-center">
                  Get a Free Quote
                </a>
                <a href="#portfolio" className="bg-slate-800 hover:bg-slate-700 border border-slate-600 px-8 py-4 rounded-xl font-semibold transition text-lg text-center">
                  View Portfolio
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <section className="py-12 bg-slate-900/50 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-center text-slate-500 text-sm font-medium mb-6 tracking-wider uppercase">Trusted by Alaska's Leading Companies</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {['Alaska DOT&PF', 'ConocoPhillips Alaska', 'Donlin Gold', 'USFS Alaska', 'Alyeska Pipeline', 'RE/MAX Alaska'].map(name => (
                <span key={name} className="text-slate-500 font-semibold text-sm md:text-base whitespace-nowrap">{name}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Services</h2>
            <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">Comprehensive aerial solutions for Alaska's most demanding industries</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((svc) => (
                <div key={svc.title} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-slate-600 transition group">
                  <span className="text-4xl block mb-4">{svc.icon}</span>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-sky-400 transition">{svc.title}</h3>
                  <p className="text-slate-400 text-sm mb-4">{svc.desc}</p>
                  <ul className="space-y-1">
                    {svc.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-sky-400 flex-shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology */}
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Enterprise Technology Stack</h2>
            <p className="text-slate-400 text-center mb-12">Industry-leading equipment for survey-grade results</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {techStack.map((tech) => (
                <div key={tech.name} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center hover:border-sky-600/50 transition">
                  <span className="text-xs font-medium bg-sky-900/50 text-sky-400 px-3 py-1 rounded-full">{tech.category}</span>
                  <h3 className="text-lg font-bold mt-4 mb-2">{tech.name}</h3>
                  <p className="text-sm text-slate-400">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="py-20 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Project Portfolio</h2>
            <p className="text-slate-400 text-center mb-12">Selected projects showcasing our capabilities</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolio.map((project) => (
                <div key={project.title} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-600 transition group">
                  <div className="h-40 bg-gradient-to-br from-sky-900/30 to-slate-800 flex items-center justify-center">
                    <span className="text-5xl opacity-40 group-hover:opacity-70 transition">📸</span>
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-medium bg-sky-900/50 text-sky-400 px-2 py-1 rounded-full">{project.type}</span>
                    <h3 className="text-lg font-bold mt-3 mb-1">{project.title}</h3>
                    <p className="text-sm text-slate-500 mb-2">{project.client}</p>
                    <p className="text-sm text-slate-400">{project.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Transparent Pricing</h2>
            <p className="text-slate-400 text-center mb-12">Flexible plans for projects of any scale</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingTiers.map((tier) => (
                <div key={tier.name} className={`bg-slate-900 rounded-2xl p-8 relative ${tier.popular ? 'border-2 border-sky-500 ring-1 ring-sky-500/20' : 'border border-slate-800'}`}>
                  {tier.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sky-600 text-white text-xs font-bold px-4 py-1 rounded-full">Most Popular</span>}
                  <h3 className="text-2xl font-bold mb-1">{tier.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-sky-400">{tier.price}</span>
                    <span className="text-slate-400 text-sm ml-1">/{tier.period}</span>
                  </div>
                  <p className="text-slate-400 text-sm mb-6">{tier.desc}</p>
                  <ul className="space-y-2 mb-8">
                    {tier.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" /> {f}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className={`block w-full text-center py-3 rounded-xl font-semibold transition ${tier.popular ? 'bg-sky-600 hover:bg-sky-500 text-white' : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-600'}`}>
                    {tier.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-20 bg-slate-950">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Get a Free Quote</h2>
            <p className="text-slate-400 text-center mb-10">Tell us about your project and we'll provide a detailed proposal within 24 hours.</p>
            <form onSubmit={(e) => e.preventDefault()} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                  <input type="text" value={contactForm.name} onChange={(e) => setContactForm({...contactForm, name: e.target.value})} className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-sky-500" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                  <input type="email" value={contactForm.email} onChange={(e) => setContactForm({...contactForm, email: e.target.value})} className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-sky-500" placeholder="you@company.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Company</label>
                <input type="text" value={contactForm.company} onChange={(e) => setContactForm({...contactForm, company: e.target.value})} className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-sky-500" placeholder="Company name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Project Details</label>
                <textarea value={contactForm.message} onChange={(e) => setContactForm({...contactForm, message: e.target.value})} rows={4} className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 resize-none" placeholder="Describe your project, location, and timeline..." />
              </div>
              <button type="submit" className="w-full bg-sky-600 hover:bg-sky-500 py-4 rounded-xl font-semibold transition text-lg">
                Request Quote
              </button>
              <p className="text-center text-xs text-slate-500">Or call us directly: (907) 555-DRONE · info@alaskadronesurvey.com</p>
            </form>
          </div>
        </section>

        {/* Cross Promotion */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Partner Network</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a href="https://alaskamineralsexploration.com" className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-amber-600/50 transition text-center group">
                <span className="text-3xl block mb-2">⛏️</span>
                <h3 className="font-bold text-amber-400">Alaska Minerals Exploration</h3>
                <p className="text-sm text-slate-400 mt-1">Mineral exploration & development</p>
              </a>
              <a href="https://alaskamininggroup.com" className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-emerald-600/50 transition text-center group">
                <span className="text-3xl block mb-2">🏔️</span>
                <h3 className="font-bold text-emerald-400">Alaska Mining Group</h3>
                <p className="text-sm text-slate-400 mt-1">Mining operations & equipment</p>
              </a>
              <a href="https://alaskaconsultinggroup.com" className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-600/50 transition text-center group">
                <span className="text-3xl block mb-2">📋</span>
                <h3 className="font-bold text-blue-400">Alaska Consulting Group</h3>
                <p className="text-sm text-slate-400 mt-1">Professional consulting services</p>
              </a>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-12 bg-slate-900 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-lg">Alaska Drone Survey</p>
              <p className="text-sm text-slate-400">Professional aerial services since 2015 · FAA Part 107 Certified · Fully Insured</p>
            </div>
            <p className="text-sm text-slate-500">© 2024 Alaska Drone Survey. All rights reserved.</p>
          </div>
        </section>
      </div>
    </>
  );
}
