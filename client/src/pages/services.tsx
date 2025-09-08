import Header from "@/components/header";
import Footer from "@/components/footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Atom, Heart, Lightbulb, Stethoscope, ArrowRight, Phone } from "lucide-react";

const treatments = [
  {
    icon: Atom,
    title: "Juventas Protocol™",
    description: "Our signature anti-aging program based on 10 core pillars, combining the latest regenerative technologies, epigenetics, and natural healing mechanisms for personalized health optimization.",
    features: [
      "Personalized health assessment",
      "Advanced diagnostic testing", 
      "Regenerative therapies",
      "Nutritional optimization",
      "Lifestyle modifications"
    ],
    link: "/services/juventas-protocol",
    badge: "Signature Treatment",
    color: "bg-primary"
  },
  {
    icon: Heart,
    title: "Androboost Program",
    description: "A bespoke regenerative solution for male vitality and performance. This drug-free approach addresses erectile dysfunction and low libido by targeting root causes through advanced therapies.",
    features: [
      "Hormone optimization",
      "Vascular health improvement",
      "Energy enhancement",
      "Performance restoration",
      "Natural approaches"
    ],
    link: "/services/androboost",
    badge: "Male Vitality",
    color: "bg-secondary"
  },
  {
    icon: Lightbulb,
    title: "IV Laser Therapy",
    description: "Cutting-edge photomedicine delivering specific laser wavelengths directly into the bloodstream for enhanced cellular function, immune modulation, and systemic healing.",
    features: [
      "Direct bloodstream delivery",
      "Cellular rejuvenation",
      "Immune system boost",
      "Enhanced circulation",
      "Systemic healing"
    ],
    link: "/services/iv-laser-therapy",
    badge: "Photomedicine",
    color: "bg-accent"
  },
  {
    icon: Stethoscope,
    title: "IV Ozonated Saline Therapy",
    description: "Revolutionary oxidative medicine combining medical ozone with IV saline for immune system modulation, detoxification, and cellular regeneration with minimal side effects.",
    features: [
      "Immune modulation",
      "Detoxification",
      "Cellular regeneration",
      "Anti-inflammatory effects",
      "Minimal side effects"
    ],
    link: "/services/iv-ozone-therapy",
    badge: "Oxidative Medicine",
    color: "bg-primary"
  }
];

export default function Services() {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Revolutionary Treatments
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Advanced regenerative technologies and personalized protocols designed to optimize your health, enhance vitality, and promote longevity through German precision and scientific excellence.
            </p>
            <Link href="/contact" data-testid="button-book-consultation">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg">
                Book Your Consultation
              </Button>
            </Link>
          </div>
        </section>

        {/* Treatments Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {treatments.map((treatment, index) => {
                const IconComponent = treatment.icon;
                return (
                  <Card key={index} className="card-hover" data-testid={`treatment-card-${index}`}>
                    <CardHeader>
                      <div className={`w-16 h-16 ${treatment.color} rounded-xl flex items-center justify-center mb-4`}>
                        <IconComponent className="text-white w-8 h-8" />
                      </div>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-2xl font-serif">{treatment.title}</CardTitle>
                        <Badge variant="secondary">{treatment.badge}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {treatment.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Key Benefits:</h4>
                        <ul className="space-y-2">
                          {treatment.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-muted-foreground">
                              <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Link href={treatment.link} data-testid={`link-treatment-${index}`}>
                        <Button className="w-full" variant="outline">
                          Learn More About This Treatment <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schedule a comprehensive consultation to determine which treatments are best suited for your unique health goals and needs.
            </p>
            <Link href="/contact" data-testid="button-discuss-options">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg">
                <Phone className="mr-2 w-5 h-5" />
                Discuss Your Treatment Options
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
