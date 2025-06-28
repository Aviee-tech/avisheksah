
import { ChevronDown, MapPin, Award, Code } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(14,165,233,0.05),transparent_50%)]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-teal-200 to-blue-200 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Enhanced Profile Section */}
          <div className="mb-12 flex justify-center">
            <div className="relative group">
              {/* Animated Ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 rounded-full opacity-30 group-hover:opacity-50 animate-spin-slow blur-sm"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-52 h-52 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl group-hover:scale-105 transition-all duration-500">
                <img
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=400&h=400"
                  alt="Avishek Sah"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
              
              {/* Status Indicator */}
              <div className="absolute -bottom-3 -right-3 flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-lg border-2 border-green-100">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Available</span>
              </div>
            </div>
          </div>

          {/* Enhanced Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm text-teal-700 text-sm font-medium rounded-full shadow-lg border border-teal-100">
              <MapPin className="w-4 h-4 mr-2" />
              Janakpur Dham, Nepal
            </div>
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm text-blue-700 text-sm font-medium rounded-full shadow-lg border border-blue-100">
              <Award className="w-4 h-4 mr-2" />
              Merit Scholar
            </div>
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm text-purple-700 text-sm font-medium rounded-full shadow-lg border border-purple-100">
              <Code className="w-4 h-4 mr-2" />
              CS Engineering
            </div>
          </div>

          {/* Enhanced Main Heading */}
          <div className="space-y-6 mb-12">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Hi, I'm{' '}
              <span className="relative">
                <span className="bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Avishek Sah
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 rounded-full transform scale-x-0 animate-[scale-x_2s_ease-out_0.5s_forwards] opacity-60"></div>
              </span>
            </h1>

            <div className="space-y-4">
              <p className="text-2xl sm:text-3xl text-gray-700 font-light">
                Aspiring Computer Science Engineer
              </p>
              
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Building the future through code • Currently pursuing BTech with Indian Government Merit Scholarship
              </p>
            </div>
          </div>

          {/* Enhanced Description Card */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 mb-12 shadow-xl border border-white/20 max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              I have a strong foundation in programming with experience in{' '}
              <span className="font-semibold text-teal-600">Python</span>,{' '}
              <span className="font-semibold text-blue-600">Java</span>,{' '}
              <span className="font-semibold text-purple-600">C</span>, and{' '}
              <span className="font-semibold text-indigo-600">data structures & algorithms</span>. 
              Currently in my first year of Computer Science Engineering with excellent academic performance.
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={scrollToAbout}
              className="group relative px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-full font-medium shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Learn More About Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full font-medium shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-teal-300 hover:text-teal-600 transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="relative">
            <button
              onClick={scrollToAbout}
              className="group flex flex-col items-center text-gray-400 hover:text-teal-600 transition-all duration-300"
            >
              <div className="animate-bounce group-hover:animate-pulse">
                <ChevronDown size={32} className="mb-2" />
              </div>
              <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Scroll to explore
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
