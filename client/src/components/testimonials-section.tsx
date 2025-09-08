import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "The Juventas Protocol transformed my energy levels and overall vitality. Dr. Scheik's approach is truly revolutionary and personalized.",
    name: "Corporate Executive",
    title: "Fortune 500 Company",
    initials: "CE"
  },
  {
    text: "The IV therapies provided incredible results for my recovery and performance. World-class treatment with German precision.",
    name: "Professional Athlete", 
    title: "International Sports",
    initials: "PA"
  },
  {
    text: "Dr. Scheik's expertise in regenerative medicine is unmatched. The comprehensive approach delivered exceptional results.",
    name: "Business Leader",
    title: "Healthcare Industry", 
    initials: "BL"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Trusted by Global Leaders</h2>
          <p className="text-xl text-muted-foreground">
            Celebrities, executives, athletes, and discerning individuals choose German Therapies
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} data-testid={`testimonial-${index}`}>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-card-foreground mb-6 leading-relaxed" data-testid={`testimonial-text-${index}`}>
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                    {testimonial.initials}
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-card-foreground" data-testid={`testimonial-name-${index}`}>{testimonial.name}</div>
                    <div className="text-muted-foreground text-sm" data-testid={`testimonial-title-${index}`}>{testimonial.title}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
