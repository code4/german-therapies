import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Atom, Heart, Lightbulb, Stethoscope, Phone, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Atom,
    title: "Juventas Protocol™",
    description: "Our signature anti-aging program based on 10 core pillars, combining the latest regenerative technologies, epigenetics, and natural healing mechanisms for personalized health optimization.",
    link: "/services/juventas-protocol",
    badge: "Signature Treatment",
    badgeVariant: "default" as const,
    color: "primary"
  },
  {
    icon: Heart,
    title: "Androboost Program",
    description: "A bespoke regenerative solution for male vitality and performance. This drug-free approach addresses erectile dysfunction and low libido by targeting root causes through advanced therapies.",
    link: "/services/androboost",
    badge: "Male Vitality",
    badgeVariant: "secondary" as const,
    color: "secondary"
  },
  {
    icon: Lightbulb,
    title: "IV Laser Therapy",
    description: "Cutting-edge photomedicine delivering specific laser wavelengths directly into the bloodstream for enhanced cellular function, immune modulation, and systemic healing.",
    link: "/services/iv-laser-therapy",
    badge: "Photomedicine",
    badgeVariant: "outline" as const,
    color: "accent"
  },
  {
    icon: Stethoscope,
    title: "IV Ozonated Saline Therapy",
    description: "Revolutionary oxidative medicine combining medical ozone with IV saline for immune system modulation, detoxification, and cellular regeneration with minimal side effects.",
    link: "/services/iv-ozone-therapy",
    badge: "Oxidative Medicine",
    badgeVariant: "outline" as const,
    color: "primary"
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Our Revolutionary Treatments</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advanced regenerative technologies and personalized protocols designed to optimize your health and vitality.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="card-hover" data-testid={`card-service-${index}`}>
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-${service.color} rounded-xl flex items-center justify-center mb-6`}>
                    <IconComponent className="text-white text-2xl w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-card-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <Link href={service.link} data-testid={`link-service-${index}`}>
                      <Button variant="ghost" className="text-primary font-semibold hover:text-primary/80 p-0">
                        Learn More <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                    <Badge variant={service.badgeVariant} data-testid={`badge-service-${index}`}>
                      {service.badge}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/contact" data-testid="button-discuss-treatments">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg">
              <Phone className="mr-2 w-5 h-5" />
              Discuss Your Treatment Options
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
