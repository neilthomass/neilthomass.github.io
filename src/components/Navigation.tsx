import { Button } from "@/components/ui/button";

const Navigation = () => {
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
            asChild
            className="text-white hover:text-white/80 hover:bg-white/10"
          >
            <a href="#experiences">Experiences</a>
          </Button>
          <Button
            variant="ghost"
            asChild
            className="text-white hover:text-white/80 hover:bg-white/10"
          >
            <a href="#about-me">About Me</a>
          </Button>
          <Button
            variant="ghost"
            asChild
            className="text-white hover:text-white/80 hover:bg-white/10"
          >
            <a href="#skills">Skills</a>
          </Button>
          <Button
            variant="ghost"
            asChild
            className="text-white hover:text-white/80 hover:bg-white/10"
          >
            <a href="#work">Projects</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
