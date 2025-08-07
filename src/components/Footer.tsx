const Footer = () => {
  const socialLinks = [
    { name: "Email", icon: "@", url: "mailto:neilthomas@berkeley.edu" },
    { name: "LinkedIn", icon: "in", url: "https://www.linkedin.com/in/neiltthomas/" },
    { name: "GitHub", icon: "gh", url: "https://github.com/neilthomass" },
  ];

  return (
    
<footer className="bg-transparent pt-40">
  <div className="w-full px-12 py-8">
    <div className="flex items-center justify-between">
      {/* Left content */}
      <div>
        <h2 className="text-xl font-bold tracking-tight text-white">
          neiltthomas.com
        </h2>
        <p className="text-white/80">© 2025 Neil Thomas. All rights reserved.</p>
      </div>

      {/* Right content */}
      <div className="flex gap-4">
        {socialLinks.map(({ name, url, icon }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-muted hover:bg-primary transition"
          >
            <span className="text-sm font-bold group-hover:scale-110 transition-transform">
              {icon}
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