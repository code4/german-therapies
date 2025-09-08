import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import TestimonialsSection from "@/components/testimonials-section";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, FileText } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />

        {/* About Doctor Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800" 
                  alt="Dr. Shams Scheik - Professional medical headshot" 
                  className="rounded-2xl shadow-lg w-full h-auto"
                  data-testid="img-doctor-headshot"
                />
                
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-primary">2010-2021</div>
                      <div className="text-muted-foreground text-sm">Germany Clinic</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-secondary">ABAARM</div>
                      <div className="text-muted-foreground text-sm">Board Certified</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div>
                <div className="inline-flex items-center bg-primary/10 text-primary rounded-full px-4 py-2 mb-6">
                  <Award className="mr-2 w-4 h-4" />
                  <span className="font-medium">Meet Our Founder</span>
                </div>
                
                <h2 className="text-4xl font-serif font-bold text-foreground mb-6">Dr. Shams Scheik</h2>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="text-primary w-5 h-5" />
                    <span className="text-muted-foreground">MBBS, MD (Internal Med), ABAARM(USA), Diplom Orthomol.Med.(Germany)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="text-secondary w-5 h-5" />
                    <span className="text-muted-foreground">American Board Certified in Anti-aging and Regenerative Medicine</span>
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Dr. Scheik is an award-winning, American Board-certified physician specializing in advanced anti-aging and regenerative medicine. With a distinguished career spanning over two decades, he founded and led the prestigious Juventas Revitalization Clinic in Lahr-Schwarzwald, Germany, from 2010 to 2021.
                </p>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  During this time, he delivered exceptional care to over 25,000 patients from 69 countries, establishing a reputation for pioneering highly effective therapeutic protocols that combine leading-edge German, American, and Russian regenerative medical technologies.
                </p>
                
                <Card className="p-6 mb-8">
                  <p className="text-foreground font-medium italic">
                    "His exclusive clientele includes national and international celebrities, C-suite executives, influential politicians, professional athletes, and global business magnates who trust his innovative, personalized approach to health and wellness."
                  </p>
                </Card>
                
                <Link href="/about" data-testid="button-read-biography">
                  <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    <FileText className="mr-2 w-5 h-5" />
                    Read Full Biography
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
