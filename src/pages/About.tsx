import { Award, Shield, Users, Plane } from 'lucide-react';
import { SEO } from '../components/SEO';

export function About() {
  const team = [
    {
      name: 'Michael Anderson',
      role: 'Founder & Chief Pilot',
      bio: 'Former USAF pilot with 15+ years aviation experience and FAA Part 107 certification.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
    },
    {
      name: 'Sarah Chen',
      role: 'Lead Surveyor',
      bio: 'Licensed land surveyor with expertise in photogrammetry and GIS analysis.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    },
    {
      name: 'James Kowalski',
      role: 'Technical Director',
      bio: 'Remote sensing specialist with background in environmental science and data analytics.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
    },
  ];

  const certifications = [
    {
      icon: Award,
      title: 'FAA Part 107 Certified',
      description: 'All our pilots hold valid FAA Part 107 Remote Pilot Certificates with comprehensive training.',
    },
    {
      icon: Shield,
      title: 'Fully Insured',
      description: '$2M general liability coverage and equipment insurance for complete client protection.',
    },
    {
      icon: Users,
      title: 'Professional Association',
      description: 'Members of AUVSI, ASPRS, and Alaska Professional Design Council.',
    },
    {
      icon: Plane,
      title: 'Safety First',
      description: 'Rigorous safety protocols, OSHA compliance, and Arctic-specific operational training.',
    },
  ];

  const timeline = [
    { year: '2018', event: 'Company founded in Anchorage, Alaska' },
    { year: '2019', event: 'First major mining survey project completed' },
    { year: '2020', event: 'Expanded fleet with thermal and LiDAR capabilities' },
    { year: '2021', event: 'Reached 500+ successful projects milestone' },
    { year: '2022', event: 'Launched emergency response division' },
    { year: '2023', event: 'Achieved 1000+ flight hours, zero incidents' },
  ];

  return (
    <>
      <SEO
        title="About Us - Our Team & Story"
        description="Alaska Drone Survey is Alaska's premier aerial surveying company. FAA certified pilots, fully insured, with 500+ completed projects across the Last Frontier."
        keywords="Alaska drone company, FAA certified pilots, professional drone services Alaska, aerial survey team"
        path="/about"
      />

      {/* Hero */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-sky-900 to-sky-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">About Alaska Drone Survey</h1>
          <p className="text-xl text-sky-100 max-w-3xl">
            Alaska's trusted partner for professional aerial surveying and mapping services
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Alaska Drone Survey, we're dedicated to providing the highest quality aerial data collection 
                and analysis services across Alaska's diverse and challenging terrain. Our mission is to leverage 
                cutting-edge drone technology to deliver actionable insights that help our clients make informed 
                decisions while maintaining the highest standards of safety and professionalism.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We understand Alaska's unique challenges – extreme weather, remote locations, and vast distances. 
                Our team brings specialized expertise in operating under these conditions, ensuring reliable results 
                when and where you need them.
              </p>
              <p className="text-lg text-gray-600">
                Whether you're surveying a mining site, inspecting critical infrastructure, or documenting 
                environmental changes, we bring the experience, equipment, and dedication to exceed your expectations.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
                alt="Alaska landscape"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Credentials</h2>
            <p className="text-xl text-gray-600">Licensed, certified, and fully insured for your peace of mind</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 text-center shadow-lg">
                <cert.icon className="w-16 h-16 text-sky-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">{cert.title}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600">Experienced professionals dedicated to excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition">
                <img src={member.image} alt={member.name} className="w-full h-80 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-sky-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Growing with Alaska since 2018</p>
          </div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, idx) => (
              <div key={idx} className="flex items-start mb-8 last:mb-0">
                <div className="flex-shrink-0 w-24">
                  <div className="bg-sky-600 text-white font-bold px-4 py-2 rounded-lg text-center">
                    {item.year}
                  </div>
                </div>
                <div className="ml-6 bg-white rounded-xl p-6 flex-grow shadow">
                  <p className="text-gray-800 font-semibold">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-sky-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Precision</h3>
              <p className="text-gray-600">
                We deliver survey-grade accuracy and meticulous attention to detail in every project.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-sky-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Safety</h3>
              <p className="text-gray-600">
                Safety is non-negotiable. We maintain rigorous protocols and a perfect safety record.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-sky-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Partnership</h3>
              <p className="text-gray-600">
                We work closely with clients as trusted partners to achieve their goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-sky-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-sky-100">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">1000+</div>
              <div className="text-sky-100">Flight Hours</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">50K+</div>
              <div className="text-sky-100">Acres Surveyed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-sky-100">Safety Record</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
