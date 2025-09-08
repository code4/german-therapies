import Header from "@/components/header";
import Footer from "@/components/footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Calendar, CheckCircle, Shield, Target, Activity } from "lucide-react";

const benefits = [
  "Improved erectile function",
  "Enhanced libido and sexual desire",
  "Increased energy and vitality",
  "Better physical performance", 
  "Improved cardiovascular health",
  "Enhanced muscle strength",
  "Better mood and confidence",
  "Optimized hormone levels"
];

const approaches = [
  {
    icon: Target,
    title: "Root Cause Analysis",
    description: "Comprehensive evaluation to identify underlying factors contributing to male vitality issues"
  },
  {
    icon: Activity,
    title: "Vascular Optimization",
    description: "Advanced therapies to improve blood flow and vascular health for enhanced performance"
  },
  {
    icon: Shield,
    title: "Hormone Balancing",
    description: "Natural approaches to optimize testosterone and other key hormones for male vitality"
  }
];

export default function Androboost() {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-secondary">
                  <Heart className="mr-2 w-4 h-4" />
                  Male Vitality Program
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                  Androboost Program
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  A bespoke regenerative solution for male vitality and performance. This drug-free approach addresses erectile dysfunction and low libido by targeting root causes through advanced therapies.
                </p>
                <Link href="/contact" data-testid="button-book-consultation">
                  <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg">
                    <Calendar className="mr-2 w-5 h-5" />
                    Schedule Consultation
                  </Button>
                </Link>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Male vitality and wellness concept" 
                  className="rounded-2xl shadow-lg w-full h-auto"
                  data-testid="img-male-vitality"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Drug-Free Male Enhancement</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Androboost Program takes a revolutionary approach to male vitality by addressing the underlying physiological factors that affect performance and libido. Rather than relying on temporary pharmaceutical solutions, our program focuses on regenerative therapies that restore natural function and enhance overall male health.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {approaches.map((approach, index) => {
                const IconComponent = approach.icon;
                return (
                  <Card key={index} className="text-center" data-testid={`approach-${index}`}>
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="text-secondary-foreground w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{approach.title}</h3>
                      <p className="text-muted-foreground">{approach.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Treatment Components */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Treatment Components</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our comprehensive approach combines multiple therapeutic modalities to address all aspects of male vitality and performance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="mr-3 w-6 h-6 text-secondary" />
                    Vascular Enhancement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary mr-3" />
                      <span className="text-muted-foreground">IV therapies for improved circulation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary mr-3" />
                      <span className="text-muted-foreground">Nitric oxide optimization</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary mr-3" />
                      <span className="text-muted-foreground">Endothelial function restoration</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary mr-3" />
                      <span className="text-muted-foreground">Advanced peptide therapies</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="mr-3 w-6 h-6 text-primary" />
                    Hormonal Optimization
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-3" />
                      <span className="text-muted-foreground">Comprehensive hormone assessment</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-3" />
                      <span className="text-muted-foreground">Natural testosterone support</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-3" />
                      <span className="text-muted-foreground">Adrenal function optimization</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-3" />
                      <span className="text-muted-foreground">Stress hormone balancing</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="mr-3 w-6 h-6 text-accent" />
                    Lifestyle Integration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent mr-3" />
                      <span className="text-muted-foreground">Personalized nutrition plans</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent mr-3" />
                      <span className="text-muted-foreground">Targeted exercise protocols</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent mr-3" />
                      <span className="text-muted-foreground">Stress management techniques</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent mr-3" />
                      <span className="text-muted-foreground">Sleep optimization strategies</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="mr-3 w-6 h-6 text-secondary" />
                    Advanced Therapies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary mr-3" />
                      <span className="text-muted-foreground">Regenerative injections</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary mr-3" />
                      <span className="text-muted-foreground">Low-intensity shockwave therapy</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary mr-3" />
                      <span className="text-muted-foreground">IV laser therapy applications</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary mr-3" />
                      <span className="text-muted-foreground">Ozone therapy protocols</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Expected Results</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  The Androboost Program delivers comprehensive improvements in male vitality and performance through natural, regenerative approaches that address root causes rather than just symptoms.
                </p>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3" data-testid={`benefit-${index}`}>
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
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
                        <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-semibold text-sm">1</div>
                        <div>
                          <h4 className="font-semibold text-foreground">Comprehensive Assessment</h4>
                          <p className="text-muted-foreground text-sm">Detailed evaluation of vascular, hormonal, and overall health status</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">2</div>
                        <div>
                          <h4 className="font-semibold text-foreground">Treatment Initiation</h4>
                          <p className="text-muted-foreground text-sm">Begin targeted therapies and lifestyle modifications (Weeks 1-4)</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-semibold text-sm">3</div>
                        <div>
                          <h4 className="font-semibold text-foreground">Progressive Improvement</h4>
                          <p className="text-muted-foreground text-sm">Noticeable improvements in energy and function (Weeks 4-12)</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-semibold text-sm">4</div>
                        <div>
                          <h4 className="font-semibold text-foreground">Optimization Phase</h4>
                          <p className="text-muted-foreground text-sm">Fine-tuning and maintenance protocols (Month 3+)</p>
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
              Reclaim Your Vitality
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Take the first step towards enhanced male vitality with a confidential consultation. Our drug-free approach addresses root causes for lasting results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" data-testid="button-private-consultation">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg">
                  <Calendar className="mr-2 w-5 h-5" />
                  Book Private Consultation
                </Button>
              </Link>
              <Link href="/services" data-testid="button-explore-treatments">
                <Button variant="outline" size="lg" className="text-lg">
                  Explore All Treatments
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
