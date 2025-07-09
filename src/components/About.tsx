import { GraduationCap, Users, Trophy } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import profileImage from '@/assets/yesh-profile.jpg';

const About = () => {
  const roles = [
    {
      title: "Corporate Team Member",
      organization: "GitHub Community SRM",
      icon: <Users className="w-6 h-6" />,
      color: "from-primary to-primary-glow"  // Google Blue
    },
    {
      title: "Member",
      organization: "LitSoc",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-accent to-warning"  // Google Red to Yellow
    },
    {
      title: "Committee Member",
      organization: "Aaruush",
      icon: <Trophy className="w-6 h-6" />,
      color: "from-success to-primary"  // Google Green to Blue
    }
  ];

  return (
    <section id="about" className="py-20 section-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about technology, innovation, and making a meaningful impact through code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image and personal info */}
          <div className="text-center lg:text-left">
            <div className="mb-8 flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-primary rounded-2xl blur opacity-75"></div>
                <img 
                  src={profileImage} 
                  alt="Yesh Kumar Kochar" 
                  className="relative w-64 h-64 rounded-2xl object-cover border-4 border-white shadow-strong"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-medium border border-gray-100">
                <h3 className="text-xl font-semibold mb-2 gradient-text">Education</h3>
                <p className="text-foreground font-medium">B.Tech Computer Science and Business Systems</p>
                <p className="text-muted-foreground">SRM University</p>
              </div>
            </div>
          </div>

          {/* Right side - Bio and roles */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left">
                My <span className="gradient-text">Journey</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I am a dedicated engineering student with a strong interest in technology and innovation. 
                I enjoy learning new concepts, solving problems, and working on projects that make a difference. 
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In my free time, I like reading, exploring new ideas, and connecting with people who share 
                my curiosity about technology and its potential to transform the world.
              </p>
            </div>

            {/* Extracurricular roles */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left">
                <span className="gradient-text">Leadership</span> & Involvement
              </h3>
              <div className="space-y-4">
                {roles.map((role, index) => (
                  <Card key={index} className="project-card border-none">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${role.color} text-white`}>
                          {role.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{role.title}</h4>
                          <p className="text-muted-foreground">{role.organization}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;