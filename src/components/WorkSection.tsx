import React from "react";

const WorkSection = () => {
  const projects = [
    {
      title: "AutoPlates",
      bullets: [
        "Real-time license plate detection platform",
        "Powered by YOLOv8 with SQLite storage",
        "Duplicate prevention and live visualization features"
      ],
      link: "https://github.com/neilthomass/AutoPlates"
    },
    {
      title: "Inte",
      bullets: [
        "Integration snippets browsing and delivery hub",
        "Dual-mode web app and MCP server",
        "Dynamic search with programmatic snippet access"
      ],
      link: "https://github.com/neilthomass/Inte"
    },
    {
      title: "Kowari",
      bullets: [
        "High-speed local vector database in Rust",
        "Features brute-force, LSH and HNSW search",
        "In-memory, binary file, SQLite storage"
      ],
      link: "https://github.com/neilthomass/kowari"
    },
    {
      title: "OSMdataprocessor",
      bullets: [
        "Transforms OpenStreetMap data into PostGIS database",
        "Imports ways, nodes, relationships; stores speeds",
        "Predictive speed recommendations and freeway import"
      ],
      link: "https://github.com/neilthomass/OSMdataprocessor"
    },
    {
      title: "SpeedApp",
      bullets: [
        "Real-time Flutter speed tracking mobile app",
        "Multiple lane visualization with dynamic charts",
        "Vocal speed suggestions via text-to-speech"
      ],
      link: "https://github.com/neilthomass/SpeedApp"
    },
    {
      title: "ComputerVisionASL",
      bullets: [
        "Real-time American Sign Language recognition system",
        "MediaPipe-driven hand tracking for precise recognition",
        "CNN classifies 24 static ASL letters"
      ],
      link: "https://github.com/neilthomass/ComputerVisionASL"
    }
  ];

  const skills = [
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "Python", icon: "🐍" },
    { name: "Node.js", icon: "🟢" },
    { name: "TypeScript", icon: "📘" },
    { name: "MongoDB", icon: "🍃" },
    { name: "AWS", icon: "☁️" },
    { name: "Docker", icon: "🐳" },
    { name: "Git", icon: "📝" },
    { name: "Figma", icon: "🎨" },
    { name: "SQL", icon: "🗄️" },
    { name: "GraphQL", icon: "🔗" },
    { name: "Redux", icon: "🔄" },
    { name: "Next.js", icon: "⚡" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Kubernetes", icon: "⚓" }
  ];

  return (
    <>
      <section id="work" className="section-padding bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
              Selected Work
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              A collection of projects that showcase my passion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-8 bg-transparent border-2 border-white rounded-lg hover:border-white/80 transition-all duration-300 hover:scale-105 w-full text-center flex flex-col items-center justify-center"
              >
                <h3 className="text-2xl font-bold mb-4 text-white tracking-tight group-hover:text-white/80 transition-colors">
                  {project.title}
                </h3>
                <ul className="text-white/80 text-lg text-left list-disc pl-6 space-y-3">
                  {project.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-12 px-6 md:px-12 lg:px-24">
        <div className="w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-center text-white">
            Skills
          </h2>
          
          <div className="grid grid-cols-4 gap-8 w-full">
            {skills.map((skill, index) => (
              <div key={index} className="text-center group p-6 bg-transparent border-2 border-white rounded-lg hover:border-white/80 transition-all duration-300 hover:scale-105">
                <div className="text-4xl md:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 bg-transparent">
        {/* Blank section before footer */}
      </section>
    </>
  );
};

export default WorkSection;