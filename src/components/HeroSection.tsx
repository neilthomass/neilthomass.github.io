const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-start justify-start relative overflow-hidden pt-12">
      
      <div className="relative z-10 text-left max-w-4xl ml-6 md:ml-12 lg:ml-24 section-padding">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          <span className="text-white">Hi, my name is Neil Thomas</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
          I am currently studying Electrical Engineering and Computer Science at the UC Berkeley.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-start">
          <button 
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;