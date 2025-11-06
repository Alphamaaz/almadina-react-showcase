import { Award, Users, CheckCircle } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: Award,
      value: "6+",
      label: "Years of Experience",
    },
    {
      icon: Users,
      value: "6+",
      label: "Skilled Team Members",
    },
    {
      icon: CheckCircle,
      value: "6+",
      label: "Projects Completed",
    },
  ];

  return (
    <section className="py-20 bg-secondary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Our experience, dedication, and commitment to quality make us the ideal
            partner for your next project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-lg text-white/90">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
