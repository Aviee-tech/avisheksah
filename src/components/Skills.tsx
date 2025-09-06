
import { Code, Database, Cpu, BookOpen, Globe, Lightbulb } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: "Python", level: 75, color: "from-blue-400 to-blue-600" },
        { name: "Java", level: 70, color: "from-orange-400 to-orange-600" },
        { name: "C/C++", level: 80, color: "from-gray-400 to-gray-600" },
        { name: "JavaScript", level: 45, color: "from-yellow-400 to-yellow-600" },
      ]
    },
    {
      title: "Data Structures & Algorithms",
      icon: <Cpu className="w-8 h-8" />,
      skills: [
        { name: "Data Structures", level: 70, color: "from-green-400 to-green-600" },
        { name: "Algorithms", level: 65, color: "from-purple-400 to-purple-600" },
        { name: "Problem Solving", level: 80, color: "from-red-400 to-red-600" },
        { name: "Competitive Programming", level: 60, color: "from-pink-400 to-pink-600" },
      ]
    },
    {
      title: "Database & Web Technologies",
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: "SQL", level: 55, color: "from-cyan-400 to-cyan-600" },
        { name: "HTML/CSS", level: 65, color: "from-emerald-400 to-emerald-600" },
        { name: "React Basics", level: 40, color: "from-sky-400 to-sky-600" },
        { name: "Database Design", level: 50, color: "from-violet-400 to-violet-600" },
      ]
    },
    {
      title: "Academic Excellence",
      icon: <BookOpen className="w-8 h-8" />,
      skills: [
        { name: "Mathematics", level: 90, color: "from-indigo-400 to-indigo-600" },
        { name: "Computer Fundamentals", level: 85, color: "from-teal-400 to-teal-600" },
        { name: "Research & Analysis", level: 88, color: "from-rose-400 to-rose-600" },
        { name: "Technical Writing", level: 75, color: "from-amber-400 to-amber-600" },
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            As a 2nd-year Computer Science student, I'm actively developing my technical expertise 
            across programming, algorithms, and emerging technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-teal-50 to-teal-100 text-teal-600 rounded-xl">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700 text-sm">{skill.name}</span>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-sm`}
                        style={{ 
                          width: `${skill.level}%`,
                          animation: `growWidth 2s ease-out ${skillIndex * 0.15}s both`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Learning Path Section */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Learning Journey Ahead</h3>
              <p className="text-teal-100 text-lg">
                Currently exploring these technologies and planning to master them in the coming semesters.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  Web Development
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'MongoDB', 'Express.js', 'TypeScript'].map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium backdrop-blur-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  Advanced Topics
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Machine Learning', 'Cloud Computing', 'DevOps', 'System Design', 'AI/ML'].map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium backdrop-blur-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
