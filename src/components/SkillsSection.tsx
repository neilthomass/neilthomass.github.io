const SkillsSection = () => {
  const skills = [
    { name: "Python", icon: new URL("../images/python.svg", import.meta.url).href, link: "https://www.python.org/" },
    { name: "C++", icon: new URL("../images/cplusplus.svg", import.meta.url).href, link: "https://isocpp.org/" },
    { name: "Java", icon: new URL("../images/java.svg", import.meta.url).href, link: "https://www.java.com/" },
    { name: "AWS", icon: new URL("../images/amazonaws.svg", import.meta.url).href, link: "https://aws.amazon.com/" },
    { name: "Rust", icon: new URL("../images/rust.svg", import.meta.url).href, link: "https://www.rust-lang.org/" },
    { name: "NodeJS", icon: new URL("../images/nodedotjs.svg", import.meta.url).href, link: "https://nodejs.org/" },
    { name: "ReactJS", icon: new URL("../images/react.svg", import.meta.url).href, link: "https://react.dev/" },
    { name: "Next.js", icon: new URL("../images/nextdotjs.svg", import.meta.url).href, link: "https://nextjs.org/" },
    { name: "MySQL", icon: new URL("../images/mysql.svg", import.meta.url).href, link: "https://www.mysql.com/" },
    { name: "Flask", icon: new URL("../images/flask.svg", import.meta.url).href, link: "https://flask.palletsprojects.com/" },
    { name: "PyTorch", icon: new URL("../images/pytorch.svg", import.meta.url).href, link: "https://pytorch.org/" },
    { name: "TensorFlow", icon: new URL("../images/tensorflow.svg", import.meta.url).href, link: "https://www.tensorflow.org/" },
    { name: "Pandas", icon: new URL("../images/pandas.svg", import.meta.url).href, link: "https://pandas.pydata.org/" },
    { name: "NumPy", icon: new URL("../images/numpy.svg", import.meta.url).href, link: "https://numpy.org/" },
    { name: "HTML", icon: new URL("../images/html5.svg", import.meta.url).href, link: "https://developer.mozilla.org/docs/Web/HTML" },
    { name: "TailwindCSS", icon: new URL("../images/tailwindcss.svg", import.meta.url).href, link: "https://tailwindcss.com/" }
  ];

  return (
    <section id="skills" className="py-12 px-6 md:px-12 lg:px-24 pb-40">
      <div className="w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-center text-white">
          Skills
        </h2>

        <div className="grid grid-cols-4 gap-8 w-full">
          {skills.map((skill) => (
            <a
              key={skill.name}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center group p-6 bg-transparent border-2 border-white rounded-lg hover:border-white/80 transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
