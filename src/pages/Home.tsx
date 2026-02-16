import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Building2, Camera, HardHat, Leaf, Radio, CheckCircle } from 'lucide-react';
import { SEO } from '../components/SEO';

export function Home() {
  const services = [
    {
      icon: MapPin,
      title: 'Aerial Mapping & Surveying',
      description: 'High-precision topographic surveys and 3D mapping for land development and planning.',
    },
    {
      icon: Building2,
      title: 'Infrastructure Inspection',
      description: 'Safe, detailed inspections of bridges, towers, pipelines, and critical infrastructure.',
    },
    {
      icon: Camera,
      title: 'Real Estate Photography',
      description: 'Stunning aerial photography and videography for property listings and marketing.',
    },
    {
      icon: HardHat,
      title: 'Construction Monitoring',
      description: 'Regular site progress documentation and volumetric analysis for project management.',
    },
    {
      icon: Leaf,
      title: 'Environmental Assessment',
      description: 'Wildlife monitoring, habitat surveys, and environmental impact documentation.',
    },
    {
      icon: Radio,
      title: 'Emergency Response',
      description: 'Rapid deployment for search and rescue, disaster assessment, and emergency mapping.',
    },
  ];

  const portfolio = [
    {
      title: 'Denali Mining Survey',
      category: 'Mining & Resources',
      image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=800&h=600&fit=crop',
    },
    {
      title: 'Anchorage Bridge Inspection',
      category: 'Infrastructure',
      image: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b0?w=800&h=600&fit=crop',
    },
    {
      title: 'Coastal Property Development',
      category: 'Real Estate',
      image: 'https://images.unsplash.com/photo-1464146072230-91cabc968266?w=800&h=600&fit=crop',
    },
  ];

  const features = [
    'FAA Part 107 Certified Pilots',
    'Fully Insured Operations',
    '4K & Thermal Imaging',
    'Advanced LiDAR Mapping',
    'Real-time Data Processing',
    'Alaska-Specific Expertise',
  ];

  return (
    <>
      <SEO
        title="Professional Drone Services in Alaska"
        description="Alaska Drone Survey provides professional aerial surveying, mapping, inspection, and photography services across Alaska. FAA certified, fully insured."
        keywords="drone surveying Alaska, aerial mapping Alaska, drone inspection Anchorage, UAV services Alaska, aerial photography Alaska, drone services Fairbanks, Alaska aerial survey"
        path="/"
      />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-sky-900 to-sky-600 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=1920')] bg-cover bg-center" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Alaska Drone Survey
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-sky-100 max-w-3xl mx-auto">
            Professional aerial surveying, mapping, and inspection services across the Last Frontier
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-sky-900 px-8 py-4 rounded-lg font-semibold hover:bg-sky-50 transition inline-flex items-center justify-center"
            >
              Get a Quote <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/portfolio"
              className="bg-sky-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-sky-700 transition"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive drone solutions for Alaska's unique challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                <service.icon className="w-12 h-12 text-sky-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to="/services" className="text-sky-600 font-semibold inline-flex items-center hover:text-sky-700">
                  Learn more <ArrowRight className="ml-1" size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Projects</h2>
            <p className="text-xl text-gray-600">Showcasing our work across Alaska</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolio.map((project, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <p className="text-sky-600 font-semibold text-sm mb-2">{project.category}</p>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center text-sky-600 font-semibold hover:text-sky-700"
            >
              View Full Portfolio <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Alaska Drone Survey?</h2>
              <p className="text-xl text-gray-600 mb-8">
                We combine cutting-edge technology with deep Alaska expertise to deliver exceptional results in challenging conditions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-sky-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center text-sky-600 font-semibold hover:text-sky-700"
              >
                Learn More About Us <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop"
                alt="Drone in Alaska landscape"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sky-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Take Flight?</h2>
          <p className="text-xl mb-8 text-sky-100 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote for your project
          </p>
          <Link
            to="/contact"
            className="bg-white text-sky-900 px-8 py-4 rounded-lg font-semibold hover:bg-sky-50 transition inline-flex items-center"
          >
            Get Started <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
