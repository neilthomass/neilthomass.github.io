import { Button } from "@/components/ui/button";

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="w-full bg-transparent flex items-center h-16">
      {/* Logo flush left */}
      <div className="text-xl font-bold tracking-tight text-white pl-6 md:pl-12 lg:pl-24">
        neiltthomas.com
      </div>
      {/* Menu in container, pushed right */}
      <div className="flex-1">
        <div className="max-w-6xl ml-auto flex items-center h-16 px-6 md:px-12 lg:px-24 justify-end space-x-8">
          <Button
            variant="ghost"
            onClick={() => scrollToSection('experiences')}
            className="text-white hover:text-white/80 hover:bg-white/10"
          >
            Experiences
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection('about-me')}
            className="text-white hover:text-white/80 hover:bg-white/10"
          >
            About Me
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection('skills')}
            className="text-white hover:text-white/80 hover:bg-white/10"
          >
            Skills
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection('work')}
            className="text-white hover:text-white/80 hover:bg-white/10"
          >
            Projects
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
