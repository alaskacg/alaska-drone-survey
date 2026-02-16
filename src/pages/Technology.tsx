import { Camera, Cpu, Map, Radio, Thermometer, Cloud } from 'lucide-react';
import { SEO } from '../components/SEO';

export function Technology() {
  const drones = [
    {
      name: 'DJI Matrice 300 RTK',
      type: 'Professional Mapping',
      specs: ['55-min flight time', 'RTK positioning', '15km transmission', 'IP45 rating'],
      applications: ['Surveying', 'Mapping', 'Inspection'],
    },
    {
      name: 'DJI Mavic 3 Enterprise',
      type: 'Thermal & Inspection',
      specs: ['45-min flight time', 'Thermal camera', 'RTK module', 'All-weather'],
      applications: ['Infrastructure', 'Emergency Response', 'Thermal Imaging'],
    },
    {
      name: 'DJI Inspire 3',
      type: 'Cinematography',
      specs: ['8K ProRes RAW', '28-min flight time', 'Centimeter-level RTK', 'Omnidirectional obstacle sensing'],
      applications: ['Real Estate', 'Marketing', 'Video Production'],
    },
  ];

  const sensors = [
    {
      icon: Camera,
      name: '4K/8K Cameras',
      description: 'High-resolution RGB cameras for detailed aerial photography and videography',
      specs: ['Up to 8K resolution', 'HDR capability', 'RAW format support'],
    },
    {
      icon: Thermometer,
      name: 'Thermal Imaging',
      description: 'Advanced thermal sensors for infrastructure inspection and wildlife monitoring',
      specs: ['640×512 resolution', 'Temperature measurement', 'FLIR integration'],
    },
    {
      icon: Map,
      name: 'LiDAR Sensors',
      description: 'Precision laser scanning for accurate 3D mapping and terrain modeling',
      specs: ['300k points/sec', 'Survey-grade accuracy', 'Penetrates vegetation'],
    },
    {
      icon: Radio,
      name: 'RTK/PPK GPS',
      description: 'Real-time kinematic positioning for centimeter-level accuracy',
      specs: ['<2cm accuracy', 'Multi-constellation', 'Post-processing capable'],
    },
  ];

  const software = [
    {
      icon: Cpu,
      name: 'DJI Terra',
      description: 'Professional photogrammetry and 3D modeling software',
    },
    {
      icon: Map,
      name: 'Pix4D',
      description: 'Advanced mapping and analytics platform',
    },
    {
      icon: Cloud,
      name: 'DroneDeploy',
      description: 'Cloud-based processing and project management',
    },
  ];

  const capabilities = [
    {
      title: 'Survey-Grade Accuracy',
      description: 'RTK/PPK positioning ensures centimeter-level precision for professional surveying and mapping applications.',
    },
    {
      title: 'All-Weather Operations',
      description: 'IP-rated aircraft and specialized training allow us to operate safely in Alaska\'s challenging weather conditions.',
    },
    {
      title: 'Extended Range',
      description: 'Long-range transmission systems and extended battery life enable coverage of large and remote areas.',
    },
    {
      title: 'Real-Time Processing',
      description: 'On-site data processing capabilities provide immediate results and verification during field operations.',
    },
    {
      title: 'Multi-Sensor Integration',
      description: 'Combine RGB, thermal, and LiDAR data for comprehensive analysis and insights.',
    },
    {
      title: 'Secure Data Handling',
      description: 'Encrypted transmission and secure storage protocols protect sensitive client data.',
    },
  ];

  return (
    <>
      <SEO
        title="Technology & Equipment"
        description="Alaska Drone Survey uses advanced drone technology including DJI Matrice, thermal imaging, LiDAR sensors, and RTK GPS for professional aerial surveying and mapping."
        keywords="drone technology Alaska, LiDAR mapping, thermal imaging drones, RTK GPS surveying, professional UAV equipment"
        path="/technology"
      />

      {/* Hero */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-sky-900 to-sky-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Our Technology</h1>
          <p className="text-xl text-sky-100 max-w-3xl">
            State-of-the-art equipment and software for professional results
          </p>
        </div>
      </section>

      {/* Drone Fleet */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Drone Fleet</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {drones.map((drone, idx) => (
              <div key={idx} className="bg-white border-2 border-sky-200 rounded-xl p-6 hover:border-sky-400 transition">
                <div className="bg-gradient-to-br from-sky-100 to-sky-200 rounded-lg h-48 mb-6 flex items-center justify-center">
                  <Radio className="w-24 h-24 text-sky-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{drone.name}</h3>
                <p className="text-sky-600 font-semibold mb-4">{drone.type}</p>
                <ul className="space-y-2 mb-6">
                  {drone.specs.map((spec, sidx) => (
                    <li key={sidx} className="text-gray-600 text-sm">• {spec}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {drone.applications.map((app, aidx) => (
                    <span key={aidx} className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-xs">
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sensors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Advanced Sensors</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sensors.map((sensor, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8">
                <sensor.icon className="w-12 h-12 text-sky-600 mb-4" />
                <h3 className="text-2xl font-bold mb-3">{sensor.name}</h3>
                <p className="text-gray-600 mb-4">{sensor.description}</p>
                <ul className="space-y-2">
                  {sensor.specs.map((spec, sidx) => (
                    <li key={sidx} className="text-sm text-gray-700">✓ {spec}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Processing Software</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {software.map((sw, idx) => (
              <div key={idx} className="bg-gradient-to-br from-sky-50 to-white border border-sky-200 rounded-xl p-6 text-center">
                <sw.icon className="w-16 h-16 text-sky-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{sw.name}</h3>
                <p className="text-gray-600">{sw.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Technical Capabilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">{cap.title}</h3>
                <p className="text-gray-600">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-sky-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Certifications & Compliance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">✓</div>
              <h3 className="text-xl font-bold mb-2">FAA Part 107</h3>
              <p className="text-sky-100">All pilots fully certified</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">✓</div>
              <h3 className="text-xl font-bold mb-2">Fully Insured</h3>
              <p className="text-sky-100">$2M liability coverage</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">✓</div>
              <h3 className="text-xl font-bold mb-2">Safety Certified</h3>
              <p className="text-sky-100">OSHA & Arctic safety training</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
