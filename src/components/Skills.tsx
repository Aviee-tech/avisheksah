
import { Code, Database, Cpu, BookOpen } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: "Python", level: 70, color: "bg-blue-500" },
        { name: "Java", level: 65, color: "bg-orange-500" },
        { name: "C", level: 75, color: "bg-gray-600" },
      ]
    },
    {
      title: "Computer Science Fundamentals",
      icon: <Cpu className="w-8 h-8" />,
      skills: [
        { name: "Data Structures", level: 60, color: "bg-green-500" },
        { name: "Algorithms", level: 55, color: "bg-purple-500" },
        { name: "Problem Solving", level: 70, color: "bg-red-500" },
      ]
    },
    {
      title: "Academic Skills",
      icon: <BookOpen className="w-8 h-8" />,
      skills: [
        { name: "Mathematics", level: 85, color: "bg-indigo-500" },
        { name: "Computer Fundamentals", level: 80, color: "bg-teal-500" },
        { name: "Research & Learning", level: 90, color: "bg-pink-500" },
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Currently building my foundation in computer science with hands-on experience 
            in programming languages and core CS concepts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-teal-100 text-teal-600 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${skill.level}%`,
                          animation: `growWidth 2s ease-out ${skillIndex * 0.2}s both`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Future Skills Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Expanding My Skillset</h3>
            <p className="text-gray-600 mb-6">
              As I progress through my engineering studies, I'm continuously learning and 
              planning to add more technologies to my toolkit.
            </p>
            
            <div className="flex flex-wrap gap-3 justify-center">
              {['React', 'Node.js', 'Database Systems', 'Machine Learning', 'Web Development', 'Software Engineering'].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium hover:bg-teal-100 hover:text-teal-700 transition-colors duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
