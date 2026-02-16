import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export function Pricing() {
  const packages = [
    {
      name: 'Basic',
      price: '$500',
      unit: 'per flight',
      description: 'Perfect for simple aerial photography and small area surveys',
      features: [
        'Up to 1 hour flight time',
        'Standard 4K photography',
        'Basic photo editing',
        '20-30 deliverable images',
        'Standard delivery (5-7 days)',
        'Online gallery',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: '$1,500',
      unit: 'per day',
      description: 'Comprehensive surveying and mapping for most projects',
      features: [
        'Full day coverage',
        'RTK GPS positioning',
        'Orthomosaic mapping',
        '3D terrain models',
        'GIS-ready deliverables',
        'Progress reports',
        'Priority support',
        'Fast delivery (3-5 days)',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      unit: 'quote',
      description: 'Advanced solutions for large-scale and complex projects',
      features: [
        'Multi-day operations',
        'LiDAR mapping available',
        'Thermal imaging',
        'Custom deliverables',
        'Dedicated project manager',
        'Real-time data access',
        '24/7 support',
        'Same-day processing',
      ],
      popular: false,
    },
  ];

  const addons = [
    { name: 'Thermal Imaging', price: '$300/day' },
    { name: 'LiDAR Mapping', price: '$500/day' },
    { name: 'Video Production', price: '$400/day' },
    { name: 'Rush Processing (24hr)', price: '$200' },
    { name: '3D Modeling', price: '$300/project' },
    { name: 'Volume Calculations', price: '$150/site' },
  ];

  const servicePricing = [
    {
      service: 'Aerial Mapping & Surveying',
      starting: '$1,200',
      unit: 'per 100 acres',
      notes: 'Includes orthomosaic, DEM, and contour maps',
    },
    {
      service: 'Infrastructure Inspection',
      starting: '$800',
      unit: 'per structure',
      notes: 'Visual and thermal inspection with detailed report',
    },
    {
      service: 'Real Estate Photography',
      starting: '$400',
      unit: 'per property',
      notes: '15-20 edited photos and short video',
    },
    {
      service: 'Construction Monitoring',
      starting: '$1,000',
      unit: 'per month',
      notes: 'Weekly flights with progress documentation',
    },
    {
      service: 'Environmental Assessment',
      starting: '$1,500',
      unit: 'per project',
      notes: 'Custom surveys and analysis',
    },
    {
      service: 'Emergency Response',
      starting: '$2,000',
      unit: 'per deployment',
      notes: '24/7 availability, rapid mobilization',
    },
  ];

  return (
    <>
      <SEO
        title="Pricing & Packages"
        description="Transparent pricing for professional drone services in Alaska. From basic aerial photography to enterprise surveying solutions. Custom quotes available."
        keywords="drone service pricing Alaska, aerial survey cost, drone inspection rates, UAV mapping pricing"
        path="/pricing"
      />

      {/* Hero */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-sky-900 to-sky-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Pricing & Packages</h1>
          <p className="text-xl text-sky-100 max-w-3xl">
            Transparent, competitive pricing for professional drone services
          </p>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Packages</h2>
            <p className="text-xl text-gray-600">Choose the package that fits your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-8 ${
                  pkg.popular
                    ? 'bg-sky-600 text-white shadow-2xl scale-105 md:scale-110'
                    : 'bg-white border-2 border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <div className="bg-sky-800 text-white text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                    MOST POPULAR
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>
                  {pkg.name}
                </h3>
                <div className="mb-4">
                  <span className={`text-4xl font-bold ${pkg.popular ? 'text-white' : 'text-sky-600'}`}>
                    {pkg.price}
                  </span>
                  <span className={`text-lg ml-2 ${pkg.popular ? 'text-sky-100' : 'text-gray-600'}`}>
                    {pkg.unit}
                  </span>
                </div>
                <p className={`mb-6 ${pkg.popular ? 'text-sky-100' : 'text-gray-600'}`}>
                  {pkg.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start space-x-3">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${pkg.popular ? 'text-sky-200' : 'text-sky-600'}`} />
                      <span className={pkg.popular ? 'text-white' : 'text-gray-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center py-3 px-6 rounded-lg font-semibold transition ${
                    pkg.popular
                      ? 'bg-white text-sky-900 hover:bg-sky-50'
                      : 'bg-sky-600 text-white hover:bg-sky-700'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service-Based Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service-Based Pricing</h2>
            <p className="text-xl text-gray-600">Starting prices for common services</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-sky-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Service</th>
                    <th className="px-6 py-4 text-left">Starting At</th>
                    <th className="px-6 py-4 text-left">Unit</th>
                    <th className="px-6 py-4 text-left">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {servicePricing.map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">{item.service}</td>
                      <td className="px-6 py-4 text-sky-600 font-bold">{item.starting}</td>
                      <td className="px-6 py-4 text-gray-600">{item.unit}</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Available Add-ons</h2>
            <p className="text-xl text-gray-600">Enhance your service with additional capabilities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addons.map((addon, idx) => (
              <div key={idx} className="bg-sky-50 border border-sky-200 rounded-xl p-6 flex justify-between items-center">
                <span className="font-semibold text-gray-900">{addon.name}</span>
                <span className="text-sky-600 font-bold">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Quote CTA */}
      <section className="py-20 bg-sky-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Need a Custom Quote?</h2>
          <p className="text-xl mb-8 text-sky-100 max-w-2xl mx-auto">
            Every project is unique. Contact us for a detailed proposal tailored to your specific requirements.
          </p>
          <Link
            to="/contact"
            className="bg-white text-sky-900 px-8 py-4 rounded-lg font-semibold hover:bg-sky-50 transition inline-flex items-center"
          >
            Request Custom Quote <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* FAQ Note */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-sky-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Pricing Notes</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Prices are estimates and may vary based on project complexity, location, and requirements</li>
              <li>• Travel fees may apply for locations outside Anchorage area</li>
              <li>• Weather delays and rescheduling at no additional charge</li>
              <li>• Volume discounts available for recurring services</li>
              <li>• All prices include basic post-processing and standard deliverables</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
