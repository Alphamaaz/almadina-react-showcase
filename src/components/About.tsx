import { Building2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Building2 className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About Al-Madina Constructions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Your trusted partner in construction and real estate, committed to
              shaping Peshawar's landscape with excellence.
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 md:p-12 shadow-lg border border-border">
            <h3 className="text-2xl font-bold mb-4 text-primary">Our Story</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Founded with a vision to deliver unparalleled construction services
              in Peshawar, Al-Madina Constructions has grown into a hallmark of
              quality and reliability. We blend modern techniques with traditional
              values to build not just structures, but lasting relationships with
              our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
