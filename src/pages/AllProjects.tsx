import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import projectVilla from "@/assets/project-villa.jpg";
import projectPlaza from "@/assets/project-plaza.jpg";
import projectHome from "@/assets/project-home.jpg";
import projectMall from "@/assets/project-mall.jpg";
import projectApartments from "@/assets/project-apartments.jpg";
import projectOffice from "@/assets/project-office.jpg";

type ProjectCategory = "all" | "residential" | "commercial" | "mosques";

const AllProjects = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");

  const projects = [
    {
      image: projectVilla,
      title: "Modern Villa",
      location: "Hayatabad, Peshawar",
      description: "A luxury residential project featuring state-of-the-art amenities.",
      category: "residential" as const,
    },
    {
      image: projectPlaza,
      title: "Corporate Plaza",
      location: "University Road, Peshawar",
      description: "A multi-story commercial building with modern retail spaces.",
      category: "commercial" as const,
    },
    {
      image: projectHome,
      title: "Classic Family Home",
      location: "Warsak Road, Peshawar",
      description: "Elegant design with spacious interiors for comfortable family living.",
      category: "residential" as const,
    },
    {
      image: projectMall,
      title: "Grand Shopping Mall",
      location: "Ring Road, Peshawar",
      description: "A large-scale retail development project.",
      category: "commercial" as const,
    },
    {
      image: projectApartments,
      title: "City View Apartments",
      location: "Gulbahar, Peshawar",
      description: "A modern apartment complex with scenic views and luxury living.",
      category: "residential" as const,
    },
    {
      image: projectOffice,
      title: "Tech Tower",
      location: "Shami Road, Peshawar",
      description: "An office building designed for technology companies.",
      category: "commercial" as const,
    },
  ];

  const filters: { label: string; value: ProjectCategory }[] = [
    { label: "All", value: "all" },
    { label: "Residential", value: "residential" },
    { label: "Commercial", value: "commercial" },
    { label: "Mosques", value: "mosques" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-primary text-white py-4 sticky top-0 z-50 shadow-md">
        <nav className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-semibold">Back to Home</span>
          </Link>
        </nav>
      </header>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">All Our Projects</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Explore our complete portfolio of residential, commercial, and religious construction projects.
            </p>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {filters.map((filter) => (
                <Button
                  key={filter.value}
                  variant={activeFilter === filter.value ? "default" : "outline"}
                  onClick={() => setActiveFilter(filter.value)}
                  className={
                    activeFilter === filter.value
                      ? "bg-primary hover:bg-primary/90"
                      : ""
                  }
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-primary font-medium mb-2">
                    {project.location}
                  </p>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No projects found in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AllProjects;
