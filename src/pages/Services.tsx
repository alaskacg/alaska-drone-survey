import { MapPin, Building2, Camera, HardHat, Leaf, Radio, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export function Services() {
  const services = [
    {
      icon: MapPin,
      title: 'Aerial Mapping & Surveying',
      description: 'Precision topographic surveys, orthomosaic maps, and 3D modeling for land development, mining, and infrastructure projects.',
      features: [
        'High-accuracy GPS/RTK positioning',
        'Digital elevation models (DEM)',
        'Contour mapping',
        'Volumetric calculations',
        'GIS data integration',
        'Survey-grade accuracy',
      ],
      applications: ['Land Development', 'Mining Operations', 'Civil Engineering', 'Urban Planning'],
    },
    {
      icon: Building2,
      title: 'Infrastructure Inspection',
      description: 'Safe, efficient inspections of bridges, towers, pipelines, and other critical infrastructure without disrupting operations.',
      features: [
        'Thermal imaging capabilities',
        'High-resolution photography',
        'Video documentation',
        'Defect detection',
        'Comprehensive reporting',
        'Minimal downtime',
      ],
      applications: ['Bridges & Roads', 'Cell Towers', 'Power Lines', 'Pipelines'],
    },
    {
      icon: Camera,
      title: 'Real Estate Photography',
      description: 'Stunning aerial photography and videography that showcases properties from unique perspectives.',
      features: [
        '4K video production',
        'HDR photography',
        'Virtual tours',
        'Twilight shoots',
        'Fast turnaround',
        'Professional editing',
      ],
      applications: ['Residential Sales', 'Commercial Properties', 'Land Listings', 'Development Marketing'],
    },
    {
      icon: HardHat,
      title: 'Construction Monitoring',
      description: 'Regular aerial documentation and progress tracking for construction projects of all sizes.',
      features: [
        'Progress documentation',
        'Volumetric analysis',
        'Site logistics planning',
        'Stakeholder reporting',
        'Time-lapse capabilities',
        'As-built verification',
      ],
      applications: ['Building Construction', 'Road Projects', 'Mining Sites', 'Energy Development'],
    },
    {
      icon: Leaf,
      title: 'Environmental Assessment',
      description: 'Comprehensive environmental monitoring and documentation for conservation and compliance.',
      features: [
        'Wildlife monitoring',
        'Habitat mapping',
        'Vegetation analysis',
        'Erosion assessment',
        'Wetland delineation',
        'Impact documentation',
      ],
      applications: ['Conservation Projects', 'Environmental Impact Studies', 'Habitat Restoration', 'Compliance Monitoring'],
    },
    {
      icon: Radio,
      title: 'Emergency Response',
      description: 'Rapid deployment for search and rescue operations, disaster assessment, and emergency mapping.',
      features: [
        'Quick mobilization',
        'Thermal imaging',
        'Real-time video feed',
        'Damage assessment',
        'Search patterns',
        '24/7 availability',
      ],
      applications: ['Search & Rescue', 'Disaster Response', 'Fire Assessment', 'Flood Mapping'],
    },
  ];

  return (
    <>
      <SEO
        title="Drone Services"
        description="Comprehensive drone services including aerial mapping, infrastructure inspection, real estate photography, construction monitoring, environmental assessment, and emergency response across Alaska."
        keywords="drone mapping Alaska, aerial survey services, infrastructure inspection drones, construction monitoring UAV, environmental drone survey, emergency response drones"
        path="/services"
      />

      {/* Hero */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-sky-900 to-sky-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-sky-100 max-w-3xl">
            Professional drone solutions tailored to Alaska's unique environment and challenges
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, idx) => (
              <div key={idx} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <service.icon className="w-16 h-16 text-sky-600 mb-6" />
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  
                  <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-semibold mb-4">Applications</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.applications.map((app, aidx) => (
                      <span key={aidx} className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm">
                        {app}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center text-sky-600 font-semibold hover:text-sky-700"
                  >
                    Request a Quote <ArrowRight className="ml-2" size={20} />
                  </Link>
                </div>

                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-gradient-to-br from-sky-100 to-sky-200 rounded-xl h-96 flex items-center justify-center">
                    <service.icon className="w-32 h-32 text-sky-600 opacity-50" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-sky-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-xl mb-8 text-sky-100 max-w-2xl mx-auto">
            We can tailor our services to meet your specific project requirements
          </p>
          <Link
            to="/contact"
            className="bg-white text-sky-900 px-8 py-4 rounded-lg font-semibold hover:bg-sky-50 transition inline-flex items-center"
          >
            Contact Us <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
