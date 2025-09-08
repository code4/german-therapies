import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CalendarCheck, Award } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-24 pb-16 relative overflow-hidden" style={{backgroundColor: '#f8fafc'}}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-6">
              <Award className="text-blue-600 mr-2 w-4 h-4" />
              <span className="text-blue-800 text-sm font-medium">American Board Certified</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              Advanced Anti-Aging & Regenerative Medicine
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Until recently, the most advanced and truly transformative anti-aging treatments were the closely guarded secret of an elite few. Today, under the visionary leadership of <strong>Dr. Shams Scheik</strong>, these world-class, science-backed therapies are now available in India.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" data-testid="button-schedule-consultation">
                <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 text-lg">
                  <CalendarCheck className="mr-2 w-5 h-5" />
                  Schedule Your Consultation
                </Button>
              </Link>
              <Link href="/services" data-testid="button-learn-more">
                <Button variant="outline" size="lg" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-lg">
                  Learn More
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600" data-testid="stat-patients">25,000+</div>
                <div className="text-gray-600 text-sm">Patients Treated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600" data-testid="stat-countries">69</div>
                <div className="text-gray-600 text-sm">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600" data-testid="stat-experience">20+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern medical treatment room with advanced equipment" 
              className="rounded-2xl shadow-2xl w-full h-auto"
              data-testid="img-hero-treatment-room"
            />
            
            <div className="absolute -bottom-6 -left-6 bg-background rounded-xl p-6 shadow-lg border border-border">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Award className="text-accent-foreground w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">German Precision</div>
                  <div className="text-muted-foreground text-sm">World-Class Standards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
