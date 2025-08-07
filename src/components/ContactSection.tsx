const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-muted/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Let's Work Together
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind? I'd love to hear about it and explore how we can bring your vision to life.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
              <span className="text-primary-foreground font-bold">@</span>
            </div>
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground">hello@neiltthomas.com</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
              <span className="text-primary-foreground font-bold">#</span>
            </div>
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-muted-foreground">+1 (555) 123-4567</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
              <span className="text-primary-foreground font-bold">→</span>
            </div>
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-muted-foreground">Available Worldwide</p>
          </div>
        </div>
        
        <button className="px-12 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg text-lg font-medium">
          Start a Conversation
        </button>
      </div>
    </section>
  );
};

export default ContactSection;