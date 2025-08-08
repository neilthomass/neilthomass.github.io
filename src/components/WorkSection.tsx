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
      title: "LanePulse",
      bullets: [
        "Real-time Flutter speed tracking mobile app",
        "Multiple lane visualization with dynamic charts",
        "Vocal speed suggestions via text-to-speech"
      ],
      link: "https://github.com/neilthomass/LanePulse"
    },
    {
      title: "SignSight",
      bullets: [
        "Real-time American Sign Language recognition system",
        "MediaPipe-driven hand tracking for precise recognition",
        "CNN classifies 24 static ASL letters"
      ],
      link: "https://github.com/neilthomass/SignSight"
    }
  ];

  return (
    <section id="work" className="py-20 px-6 md:px-12 lg:px-24 bg-black text-white">
      <div className="max-w-8xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
            Projects
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Click to view
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-10 bg-transparent border-2 border-white rounded-lg hover:border-white/80 transition-all duration-300 hover:scale-105 w-full text-center flex flex-col items-center justify-start cursor-pointer"
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight group-hover:text-white/80 transition-colors">
                {project.title}
              </h3>
              <ul className="text-white text-lg text-left list-disc pl-6 space-y-3">
                {project.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
