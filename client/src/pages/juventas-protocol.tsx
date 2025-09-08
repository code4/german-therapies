import Header from "@/components/header";
import Footer from "@/components/footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Atom, Calendar, CheckCircle, Phone, ArrowRight } from "lucide-react";

const pillars = [
  "Advanced Diagnostic Assessment",
  "Hormonal Optimization",
  "Nutritional Medicine",
  "Cellular Regeneration",
  "Detoxification Protocols",
  "Immune System Modulation",
  "Metabolic Enhancement",
  "Stress Management",
  "Sleep Optimization",
  "Lifestyle Integration"
];

const benefits = [
  "Enhanced energy and vitality",
  "Improved cognitive function",
  "Better sleep quality",
  "Increased muscle mass and strength",
  "Enhanced immune function",
  "Improved skin health and appearance",
  "Better cardiovascular health",
  "Optimized metabolic function",
  "Reduced inflammation",
  "Enhanced longevity"
];

export default function JuventasProtocol() {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-primary">
                  <Atom className="mr-2 w-4 h-4" />
                  Signature Treatment
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                  Juventas Protocol™
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Our signature anti-aging program based on 10 core pillars, combining the latest regenerative technologies, epigenetics, and natural healing mechanisms for personalized health optimization.
                </p>
                <Link href="/contact" data-testid="button-book-consultation">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg">
                    <Calendar className="mr-2 w-5 h-5" />
                    Book Your Assessment
                  </Button>
                </Link>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Advanced regenerative medicine treatment room" 
                  className="rounded-2xl shadow-lg w-full h-auto"
                  data-testid="img-treatment-room"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">The Science of Longevity</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Juventas Protocol™ represents the pinnacle of anti-aging medicine, developed through decades of research and clinical experience. This comprehensive approach addresses the root causes of aging at the cellular level, combining cutting-edge German precision with personalized medicine to optimize your health and extend your healthspan.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Atom className="text-primary-foreground w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Personalized</h3>
                  <p className="text-muted-foreground">Tailored to your unique genetic profile, health history, and goals</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="text-secondary-foreground w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Evidence-Based</h3>
                  <p className="text-muted-foreground">Backed by the latest scientific research and clinical studies</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                    <ArrowRight className="text-accent-foreground w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Comprehensive</h3>
                  <p className="text-muted-foreground">Addresses all aspects of health and aging for optimal results</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Ten Pillars Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">The 10 Core Pillars</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Each pillar addresses a crucial aspect of aging and health optimization, working synergistically to deliver comprehensive results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {pillars.map((pillar, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow" data-testid={`pillar-${index}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
                        {index + 1}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">{pillar}</h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Expected Benefits</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  The Juventas Protocol™ delivers comprehensive improvements across all aspects of health and wellness, helping you achieve optimal vitality and extend your healthspan.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3" data-testid={`benefit-${index}`}>
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">Treatment Timeline</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">1</div>
                        <div>
                          <h4 className="font-semibold text-foreground">Initial Assessment</h4>
                          <p className="text-muted-foreground text-sm">Comprehensive health evaluation and diagnostic testing (Week 1)</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-semibold text-sm">2</div>
                        <div>
                          <h4 className="font-semibold text-foreground">Protocol Design</h4>
                          <p className="text-muted-foreground text-sm">Personalized treatment plan creation (Week 2)</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-semibold text-sm">3</div>
                        <div>
                          <h4 className="font-semibold text-foreground">Active Treatment</h4>
                          <p className="text-muted-foreground text-sm">Implementation of therapies and interventions (Weeks 3-12)</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">4</div>
                        <div>
                          <h4 className="font-semibold text-foreground">Optimization</h4>
                          <p className="text-muted-foreground text-sm">Protocol refinement and long-term maintenance (Ongoing)</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Ready to Begin Your Transformation?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schedule your comprehensive assessment with Dr. Scheik to discover how the Juventas Protocol™ can optimize your health and enhance your vitality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" data-testid="button-schedule-assessment">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg">
                  <Calendar className="mr-2 w-5 h-5" />
                  Schedule Your Assessment
                </Button>
              </Link>
              <Link href="/about" data-testid="button-meet-doctor">
                <Button variant="outline" size="lg" className="text-lg">
                  Meet Dr. Scheik
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
