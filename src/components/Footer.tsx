const Footer = () => {
  const socialLinks = [
    { name: "Email", icon: "@", url: "mailto:neilthomas@berkeley.edu" },
    { name: "LinkedIn", icon: "in", url: "https://www.linkedin.com/in/neiltthomas/" },
    { name: "GitHub", icon: "gh", url: "https://github.com/neilthomass" },
  ];

  return (
    
    <footer className="">
      <section className="py-40 bg-transparent">
        {/* Blank section before footer */}
      </section>
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-0 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-xl font-bold tracking-tight mb-2 text-white">
              neiltthomas.com
            </div>
            <p className="text-white/80">
              © 2025 Neil Thomas. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                aria-label={social.name}
              >
                <span className="text-sm font-bold group-hover:scale-110 transition-transform">
                  {social.icon}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;