const AboutSection = () => {
  const experiences = [
    {
      id: 1,
      company: "BAIR",
      title: "Machine Learning Research",
      term: "Spring 2025, Summer 2025",
      team: "Mobile sensing lab",
      link: "https://bair.berkeley.edu",
      logo: new URL("../images/BAIR_white.png", import.meta.url).href
    },
    {
      id: 2,
      company: "Arista Networks",
      title: "Contract Software Engineer",
      term: "Spring 2025",
      team: "RAG chatbot team",
      link: "https://arista.com",
      logo: new URL("../images/Arista_white_only.png", import.meta.url).href
    },
    {
      id: 3,
      company: "Stealth Startup",
      title: "Software Engineering Intern",
      term: "Spring 2025",
      team: "Natural Language to SQL team",
      link: "#",
      logo: new URL("../images/stealth.png", import.meta.url).href
    },
    {
      id: 4,
      company: "Cascade",
      title: "Software Engineering Intern",
      term: "Summer 2024",
      team: "Financial Automation",
      link: "#",
      logo: new URL("../images/Cascade_white_bg_removed_denoised.png", import.meta.url).href
    }
  ];

  return (
    <section id="experiences" className="py-20 px-6 md:px-12 lg:px-24 bg-black text-white">
      <div className="w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight text-center text-white">
          Experiences
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {experiences.map((experience) => (
            <a
              key={experience.id}
              href={experience.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-10 border-2 border-white rounded-lg hover:border-white/80 transition-all duration-300 hover:scale-105 w-full"
            >
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-1 text-white tracking-tight">
                  {experience.company}
                </h3>
                <p className="text-lg md:text-xl text-white mb-1">
                  {experience.title}
                </p>
                <p className="text-base text-white mb-3">
                  {experience.term}
                </p>
                <div className="w-24 h-24 md:w-32 md:h-32 mb-2 mx-auto group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  <img 
                    src={experience.logo} 
                    alt={`${experience.company} logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <p className="text-base text-white font-medium">
                  {experience.team}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;