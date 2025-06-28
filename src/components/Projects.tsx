
import { ExternalLink, Github, Clock } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Currently focusing on building my foundational skills. Exciting projects coming soon!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder Project Cards */}
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 text-center border-2 border-dashed border-gray-300 hover:border-teal-300 transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-teal-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-700 mb-3">
                Project {index}
              </h3>
              
              <p className="text-gray-500 mb-6">
                Exciting project in development. Stay tuned for updates on my latest work and learning journey.
              </p>
              
              <div className="flex justify-center gap-3">
                <button 
                  disabled
                  className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-400 rounded-lg cursor-not-allowed"
                >
                  <Github className="w-4 h-4" />
                  Code
                </button>
                <button 
                  disabled
                  className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-400 rounded-lg cursor-not-allowed"
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Message */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Great Things Are Coming!
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              As I continue my studies and gain more hands-on experience, I'll be adding 
              exciting projects that showcase my growing skills in computer science and software development. 
              Check back soon for updates!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
