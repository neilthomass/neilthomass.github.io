import React from "react";

const AboutMeSection = () => (
  <section id="about-me" className="w-full flex justify-end items-center my-12 px-6 md:px-12 lg:px-24">
    <div className="w-1/2 max-w-lg text-left py-16">
      <h2 className="text-5xl md:text-6xl font-extrabold uppercase mb-8 tracking-tight text-white">
        ABOUT ME
      </h2>
      <p className="text-xl md:text-2xl text-white/90 leading-relaxed whitespace-pre-line">
        As a Computer Science student at UC Berkeley, I am fascinated by the power of algorithms and the potential of machine learning to transform the world. My academic journey has centered on building robust software, exploring data-driven solutions, and applying modern ML techniques to real-world problems.

        I am passionate about leveraging technology to solve complex challenges, from developing intelligent systems to creating impactful user experiences. At Berkeley, I thrive in a community that values innovation, collaboration, and pushing the boundaries of what is possible in computer science and artificial intelligence.
      </p>
    </div>
  </section>
);

export default AboutMeSection;
