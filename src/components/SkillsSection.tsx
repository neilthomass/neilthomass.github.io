const SkillsSection = () => {
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
    <section id="skills" className="py-12 px-6 md:px-12 lg:px-24 pb-40">
      <div className="w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-center text-white">
          Skills
        </h2>

        <div className="grid grid-cols-4 gap-8 w-full">
          {skills.map((skill, index) => (
            <div
              key={index}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
