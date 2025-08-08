import React from "react";

const AboutMeSection = () => (
  <>
    <section id="about-me" className="w-full flex justify-start items-center my-12 px-6 md:px-12 lg:px-24">
      <div className="w-1/2 max-w-lg text-left py-16 ml-[50%]">
        <h2 className="text-5xl md:text-6xl font-extrabold uppercase mb-8 tracking-tight text-white">
          ABOUT ME
        </h2>
        <p className="text-xl md:text-2xl text-white/90 leading-relaxed whitespace-pre-line">
        As an Electrical Engineering and Computer Sciences major at the University of California, Berkeley, I aim to harness the power of machine learning to revolutionize traffic systems. I am passionate about developing intelligent models that optimize traffic flow, reduce congestion, and improve transportation safety. By combining rigorous EECS training with real-world mobility challenges, I seek to create adaptive, data-driven infrastructure that minimizes environmental impact and supports equitable urban development.
          </p>
      </div>
    </section>
    <section className="w-full flex justify-start items-center my-12 px-6 md:px-12 lg:px-24">
      <div className="w-1/2 max-w-lg text-left py-32 ml-[50%]">
        {/* Blank section with twice the height as About Me section */}
      </div>
    </section>
  </>
);

export default AboutMeSection;
