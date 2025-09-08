import { Link } from "wouter";
import { Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/attached_assets/400dpiLogo_1757363177677.jpg" 
                alt="Juventas Revitalization Clinic Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">German Therapies</h3>
                <p className="text-sm text-background/80">Juventas Revitalization Clinic</p>
              </div>
            </div>
            <p className="text-background/80 leading-relaxed mb-6">
              Advanced anti-aging and regenerative medicine treatments by Dr. Shams Scheik. 
              World-class, science-backed therapies now available in India with German precision and quality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary/90 transition-colors" data-testid="link-linkedin">
                <Linkedin className="text-primary-foreground w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary/90 transition-colors" data-testid="link-twitter">
                <Twitter className="text-primary-foreground w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary/90 transition-colors" data-testid="link-instagram">
                <Instagram className="text-primary-foreground w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Treatments</h4>
            <ul className="space-y-3 text-background/80">
              <li><Link href="/services/juventas-protocol" data-testid="footer-link-juventas"><span className="hover:text-background transition-colors">Juventas Protocol™</span></Link></li>
              <li><Link href="/services/androboost" data-testid="footer-link-androboost"><span className="hover:text-background transition-colors">Androboost Program</span></Link></li>
              <li><Link href="/services/iv-laser-therapy" data-testid="footer-link-iv-laser"><span className="hover:text-background transition-colors">IV Laser Therapy</span></Link></li>
              <li><Link href="/services/iv-ozone-therapy" data-testid="footer-link-iv-ozone"><span className="hover:text-background transition-colors">IV Ozone Therapy</span></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-background/80">
              <li><Link href="/about" data-testid="footer-link-about"><span className="hover:text-background transition-colors">About Dr. Scheik</span></Link></li>
              <li><Link href="/contact" data-testid="footer-link-contact"><span className="hover:text-background transition-colors">Contact</span></Link></li>
              <li><a href="#" className="hover:text-background transition-colors" data-testid="footer-link-privacy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/60">
          <p>&copy; 2024 German Therapies. All rights reserved. | Juventas Revitalization Clinic</p>
        </div>
      </div>
    </footer>
  );
}
