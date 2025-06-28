
import { GraduationCap, Award, MapPin } from 'lucide-react';

const About = () => {
  const educationData = [
    {
      level: "BTech Computer Science Engineering",
      institution: "National Institute of Technology",
      grade: "Currently Pursuing",
      year: "2024 - 2028",
      note: "Indian Government Merit Scholarship",
      icon: <Award className="w-6 h-6 text-yellow-500" />
    },
    {
      level: "Higher Secondary (+2)",
      institution: "Prasadi Academy, Lalitpur Jawalkhel",
      grade: "CGPA 3.90",
      year: "2021 - 2023",
      icon: <GraduationCap className="w-6 h-6 text-blue-500" />
    },
    {
      level: "Secondary Education (10th)",
      institution: "Modern English Secondary Boarding School",
      grade: "CGPA 3.95",
      year: "2009 - 2021",
      icon: <GraduationCap className="w-6 h-6 text-green-500" />
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-teal-600 mb-6">
              <MapPin className="w-5 h-5" />
              <span className="text-lg font-medium">Janakpur Dham, Nepal</span>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              My Journey in Computer Science
            </h3>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              I'm Avishek Sah, a passionate computer science engineering student from the beautiful 
              city of Janakpur Dham, Nepal. My academic journey has been marked by consistent 
              excellence and a deep commitment to learning.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              I'm currently pursuing my BTech in Computer Science Engineering at the National Institute 
              of Technology on a fully funded Indian government merit scholarship, which is a testament 
              to my academic achievements and potential. This prestigious opportunity allows me to focus 
              entirely on my studies and skill development.
            </p>

            <p className="text-gray-600 leading-relaxed">
              My programming journey includes hands-on experience with Python, Java, and C, along 
              with a solid foundation in data structures and algorithms. I believe in continuous 
              learning and am always eager to take on new challenges that help me grow as a developer.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Educational Background</h3>
            
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-2 bg-white rounded-lg shadow-sm">
                      {edu.icon}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-gray-900">{edu.level}</h4>
                        <span className="text-sm text-gray-500 font-medium">{edu.year}</span>
                      </div>
                      
                      <p className="text-gray-700 mb-1">{edu.institution}</p>
                      <p className="text-teal-600 font-semibold">{edu.grade}</p>
                      
                      {edu.note && (
                        <div className="mt-2 inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                          {edu.note}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
