import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Dna } from "lucide-react";

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActiveLink = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  const NavLinks = () => (
    <>
      <Link href="/" data-testid="link-home">
        <span className={`font-medium transition-colors hover:text-primary ${
          isActiveLink("/") ? "text-foreground" : "text-muted-foreground"
        }`}>
          Home
        </span>
      </Link>
      <Link href="/services" data-testid="link-services">
        <span className={`font-medium transition-colors hover:text-primary ${
          isActiveLink("/services") ? "text-foreground" : "text-muted-foreground"
        }`}>
          Services
        </span>
      </Link>
      <Link href="/about" data-testid="link-about">
        <span className={`font-medium transition-colors hover:text-primary ${
          isActiveLink("/about") ? "text-foreground" : "text-muted-foreground"
        }`}>
          About Dr. Scheik
        </span>
      </Link>
      <Link href="/contact" data-testid="link-contact">
        <span className={`font-medium transition-colors hover:text-primary ${
          isActiveLink("/contact") ? "text-foreground" : "text-muted-foreground"
        }`}>
          Contact
        </span>
      </Link>
    </>
  );

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="container mx-auto px-4 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" data-testid="link-logo">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Dna className="text-primary-foreground text-xl" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">German Therapies</h1>
                <p className="text-sm text-muted-foreground">Juventas Revitalization Clinic</p>
              </div>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <Link href="/contact" data-testid="button-book-consultation">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Book Consultation
              </Button>
            </Link>
          </div>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" data-testid="button-mobile-menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-6 mt-6">
                <div onClick={() => setIsOpen(false)}>
                  <NavLinks />
                </div>
                <Link href="/contact" data-testid="button-mobile-consultation">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => setIsOpen(false)}>
                    Book Consultation
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
