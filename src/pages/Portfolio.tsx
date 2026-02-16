import { useState } from 'react';
import { SEO } from '../components/SEO';

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Mapping', 'Infrastructure', 'Real Estate', 'Construction', 'Environmental'];

  const projects = [
    {
      id: 1,
      title: 'Denali Mining Survey',
      category: 'Mapping',
      location: 'Interior Alaska',
      image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=800&h=600&fit=crop',
      description: '500-acre precision topographic survey for mining expansion',
    },
    {
      id: 2,
      title: 'Glenn Highway Bridge',
      category: 'Infrastructure',
      location: 'Palmer, AK',
      image: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b0?w=800&h=600&fit=crop',
      description: 'Comprehensive structural inspection using thermal imaging',
    },
    {
      id: 3,
      title: 'Eagle River Estate',
      category: 'Real Estate',
      location: 'Eagle River, AK',
      image: 'https://images.unsplash.com/photo-1464146072230-91cabc968266?w=800&h=600&fit=crop',
      description: '4K aerial photography and video for luxury property listing',
    },
    {
      id: 4,
      title: 'Port MacKenzie Development',
      category: 'Construction',
      location: 'Matanuska-Susitna, AK',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop',
      description: 'Monthly progress monitoring and volumetric analysis',
    },
    {
      id: 5,
      title: 'Kenai Wildlife Refuge',
      category: 'Environmental',
      location: 'Kenai Peninsula, AK',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
      description: 'Habitat mapping and wildlife population assessment',
    },
    {
      id: 6,
      title: 'Trans-Alaska Pipeline',
      category: 'Infrastructure',
      location: 'North Slope, AK',
      image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&h=600&fit=crop',
      description: 'Annual inspection of remote pipeline sections',
    },
    {
      id: 7,
      title: 'Fairbanks Commercial Complex',
      category: 'Real Estate',
      location: 'Fairbanks, AK',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      description: 'Marketing package with aerial photography and 3D modeling',
    },
    {
      id: 8,
      title: 'Arctic Tundra Research',
      category: 'Environmental',
      location: 'North Slope, AK',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop',
      description: 'Climate change impact documentation and permafrost mapping',
    },
    {
      id: 9,
      title: 'Anchorage Road Construction',
      category: 'Construction',
      location: 'Anchorage, AK',
      image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&h=600&fit=crop',
      description: 'Weekly progress tracking and earthwork calculations',
    },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <>
      <SEO
        title="Portfolio - Our Work"
        description="Explore Alaska Drone Survey's portfolio of aerial mapping, inspection, photography, and surveying projects across Alaska."
        keywords="drone photography Alaska, aerial survey portfolio, Alaska drone projects, UAV mapping examples"
        path="/portfolio"
      />

      {/* Hero */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-sky-900 to-sky-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-sky-100 max-w-3xl">
            Showcasing our expertise across diverse projects throughout Alaska
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  selectedCategory === cat
                    ? 'bg-sky-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat === 'all' ? 'All Projects' : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-sky-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sky-600 text-sm mb-3">{project.location}</p>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-sky-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sky-600 mb-2">50K+</div>
              <div className="text-gray-600">Acres Surveyed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sky-600 mb-2">1000+</div>
              <div className="text-gray-600">Flight Hours</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sky-600 mb-2">100%</div>
              <div className="text-gray-600">Safety Record</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
