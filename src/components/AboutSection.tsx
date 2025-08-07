const AboutSection = () => {
  const experiences = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Google",
      term: "2023 - Present",
      link: "https://google.com",
      icon: "🔍"
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Meta",
      term: "2022 - 2023",
      link: "https://meta.com",
      icon: "📘"
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "Netflix",
      term: "2021 - 2022",
      link: "https://netflix.com",
      icon: "🎬"
    },
    {
      id: 4,
      title: "UI/UX Designer",
      company: "Apple",
      term: "2020 - 2021",
      link: "https://apple.com",
      icon: "🍎"
    }
  ];

  return (
    <section id="experiences" className="section-padding bg-black text-white">
      <div className="w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight text-center text-white">
          Experiences
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {experiences.map((experience) => (
            <a
              key={experience.id}
              href={experience.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-8 border-2 border-white rounded-lg hover:border-white/80 transition-all duration-300 hover:scale-105 w-full"
            >
              <div className="text-center">
                <div className="text-6xl md:text-7xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {experience.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white tracking-tight">
                  {experience.title}
                </h3>
                <p className="text-lg md:text-xl text-white/80 mb-2">
                  {experience.company}
                </p>
                <p className="text-base text-white/60">
                  {experience.term}
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