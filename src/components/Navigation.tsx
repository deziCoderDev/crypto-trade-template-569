import { useState, useEffect } from "react";
import { Command, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { ThemeToggle } from "./ThemeToggle";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'testimonials') {
      const testimonialSection = document.querySelector('.animate-marquee');
      if (testimonialSection) {
        const yOffset = -100; // Offset to account for the fixed header
        const y = testimonialSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else if (sectionId === 'cta') {
      const ctaSection = document.querySelector('.button-gradient');
      if (ctaSection) {
        const yOffset = -100;
        const y = ctaSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { name: "Home", href: "/", type: "link" },
    { name: "Features", href: "#features", onClick: () => scrollToSection('features'), type: "scroll" },
    { name: "Pricing", href: "#pricing", onClick: () => scrollToSection('pricing'), type: "scroll" },
    { name: "Markets", href: "/start-trading", type: "link" },
  ];

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-2xl ${
        isScrolled 
          ? "h-16 glass backdrop-blur-xl scale-95 w-[90%] max-w-4xl" 
          : "h-16 glass w-[95%] max-w-5xl"
      }`}
    >
      <div className="mx-auto h-full px-6">
        <nav className="flex items-center justify-between h-full">
          <Link to="/" className="flex items-center gap-2">
            <Command className="w-6 h-6 text-primary" />
            <span className="font-bold text-lg">CryptoTrade</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              item.type === "link" ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-all duration-300 hover:text-primary ${
                    location.pathname === item.href ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.onClick && isHomePage) {
                      item.onClick();
                    }
                  }}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300"
                >
                  {item.name}
                </a>
              )
            ))}
            
            <ThemeToggle />
            
            <div className="flex items-center gap-3">
              <Link to="/start-trading">
                <Button variant="outline" size="sm" className="glass glass-hover">
                  Sign In
                </Button>
              </Link>
              <Link to="/create-account">
                <Button size="sm" className="button-gradient">
                  Create Account
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="glass">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="glass backdrop-blur-xl">
                <div className="flex flex-col gap-6 mt-8">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Navigation</span>
                    <ThemeToggle />
                  </div>
                  
                  {navItems.map((item) => (
                    item.type === "link" ? (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="text-lg font-medium hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsMobileMenuOpen(false);
                          if (item.onClick && isHomePage) {
                            item.onClick();
                          }
                        }}
                      >
                        {item.name}
                      </a>
                    )
                  ))}
                  
                  <div className="flex flex-col gap-3 mt-4">
                    <Link to="/start-trading" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button variant="outline" className="w-full glass glass-hover">
                        Sign In
                      </Button>
                    </Link>
                    <Link to="/create-account" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button className="w-full button-gradient">
                        Create Account
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;