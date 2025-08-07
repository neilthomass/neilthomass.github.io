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

  const skills = [
    { name: "Python", icon: "/src/images/python.svg" },
    { name: "C++", icon: "/src/images/cplusplus.svg" },
    { name: "Java", icon: "/src/images/java.svg" },
    { name: "AWS", icon: "/src/images/amazonaws.svg" },
    { name: "Rust", icon: "/src/images/rust.svg" },
    { name: "NodeJS", icon: "/src/images/nodedotjs.svg" },
    { name: "ReactJS", icon: "/src/images/react.svg" },
    { name: "Next.js", icon: "/src/images/nextdotjs.svg" },
    { name: "MySQL", icon: "/src/images/mysql.svg" },
    { name: "Flask", icon: "/src/images/flask.svg" },
    { name: "PyTorch", icon: "/src/images/pytorch.svg" },
    { name: "TensorFlow", icon: "/src/images/tensorflow.svg" },
    { name: "Pandas", icon: "/src/images/pandas.svg" },
    { name: "NumPy", icon: "/src/images/numpy.svg" },
    { name: "HTML", icon: "/src/images/html5.svg" },
    { name: "TailwindCSS", icon: "/src/images/tailwindcss.svg" }
  ];

  return (
    <>
      <section id="work" className="section-padding bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
              Selected Work
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              A collection of projects that showcase my passion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-10 bg-transparent border-2 border-white rounded-lg hover:border-white/80 transition-all duration-300 hover:scale-105 w-full text-center flex flex-col items-center justify-center cursor-pointer"
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
                <div className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={skill.icon} 
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
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