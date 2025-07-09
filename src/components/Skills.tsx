import { Code, Database, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      color: "from-primary to-primary-glow",  // Google Blue
      skills: ["C", "C++", "Python", "Java"]
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      color: "from-success to-success",  // Google Green
      skills: ["SQL", "MongoDB"]
    },
    {
      title: "Tools",
      icon: <Palette className="w-6 h-6" />,
      color: "from-warning to-accent",  // Google Yellow to Red
      skills: ["Canva"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="text-center">
              {/* Category Header */}
              <div className="mb-6">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${category.color} text-white mb-4 shadow-medium`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="skill-badge transform hover:scale-105 transition-all duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills as badges */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">
            <span className="gradient-text">Technical</span> Proficiencies
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Problem Solving", "Data Structures", "Algorithms", "Object-Oriented Programming",
              "Database Design", "Computer Vision", "Web Development", "Project Management",
              "Team Collaboration", "Technical Documentation"
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-muted to-secondary text-foreground rounded-full text-sm font-medium hover:from-primary/20 hover:to-accent/20 hover:text-primary transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;