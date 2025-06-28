
import { Code, BookOpen, Users, Lightbulb } from 'lucide-react';

const Services = () => {
  const futureServices = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Building responsive and modern web applications using latest technologies.",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Tutoring & Mentoring",
      description: "Helping fellow students with programming fundamentals and computer science concepts.",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description: "Contributing to team projects and collaborative software development initiatives.",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Problem Solving",
      description: "Applying algorithmic thinking to solve complex computational problems.",
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Services</h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Currently building my expertise. Here's what I'll be offering as I advance in my career.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {futureServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Current Status */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto border-l-4 border-teal-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Currently Focusing On Learning
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              I'm dedicating my time to mastering computer science fundamentals and building 
              practical programming skills. As I progress through my engineering program, 
              I'll be ready to offer these services professionally.
            </p>
            
            <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">
              Available for collaboration and learning opportunities
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
