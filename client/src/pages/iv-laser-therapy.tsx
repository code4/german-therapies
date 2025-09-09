import Header from "@/components/header";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Calendar, CheckCircle, Zap, Shield, Activity } from "lucide-react";

const benefits = [
  "Enhanced cellular energy production",
  "Improved immune system function",
  "Better circulation and oxygenation",
  "Accelerated healing and recovery",
  "Reduced inflammation",
  "Enhanced detoxification",
  "Improved cognitive function",
  "Better sleep quality",
  "Increased energy and vitality",
  "Enhanced athletic performance"
];

const mechanisms = [
  {
    icon: Zap,
    title: "Photobiomodulation",
    description: "Specific laser wavelengths stimulate cellular energy production and enhance mitochondrial function"
  },
  {
    icon: Activity,
    title: "Systemic Delivery",
    description: "Direct intravenous application ensures optimal absorption and systemic therapeutic effects"
  },
  {
    icon: Shield,
    title: "Immune Modulation",
    description: "Enhances immune system response while reducing inflammatory processes throughout the body"
  }
];

const applications = [
  "Chronic fatigue syndrome",
  "Autoimmune conditions",
  "Cardiovascular health optimization",
  "Post-surgical recovery",
  "Athletic performance enhancement",
  "Anti-aging protocols",
  "Neurological support",
  "Metabolic optimization"
];

export default function IVLaserTherapy() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    "name": "IV Laser Therapy",
    "description": "Advanced intravenous laser therapy for cellular regeneration, enhanced energy production, and comprehensive healing using cutting-edge photobiomodulation technology.",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "German Therapies",
      "founder": {
        "@type": "Person",
        "name": "Dr. Shams Scheik"
      }
    },
    "medicalSpecialty": ["IV Therapy", "Laser Medicine", "Regenerative Medicine"]
  };

  return (
    <>
      <SEO 
        title="IV Laser Therapy - Advanced Photobiomodulation Treatment | German Therapies"
        description="Experience cutting-edge IV Laser Therapy by Dr. Shams Scheik. Advanced photobiomodulation for cellular regeneration, enhanced energy production, and comprehensive healing."
        keywords="IV laser therapy, photobiomodulation, intravenous laser, cellular regeneration, laser medicine, advanced IV therapy, light therapy"
        canonicalUrl="https://german-therapies.vercel.app/services/iv-laser-therapy"
        structuredData={structuredData}
      />
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-accent">
                  <Lightbulb className="mr-2 w-4 h-4" />
                  Photomedicine
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                  IV Laser Therapy
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Cutting-edge photomedicine delivering specific laser wavelengths directly into the bloodstream for enhanced cellular function, immune modulation, and systemic healing.
                </p>
                <Link href="/contact" data-testid="button-book-consultation">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg">
                    <Calendar className="mr-2 w-5 h-5" />
                    Schedule Treatment
                  </Button>
                </Link>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Advanced laser therapy equipment in medical setting" 
                  className="rounded-2xl shadow-lg w-full h-auto"
                  data-testid="img-laser-therapy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Revolutionary Photomedicine</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                IV Laser Therapy (IVLT) represents a breakthrough in photomedicine, utilizing specific wavelengths of light delivered directly into the bloodstream to stimulate cellular regeneration, enhance immune function, and promote systemic healing. This non-invasive treatment harnesses the power of photobiomodulation to optimize cellular energy production and support the body's natural healing mechanisms.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {mechanisms.map((mechanism, index) => {
                const IconComponent = mechanism.icon;
                return (
                  <Card key={index} className="text-center" data-testid={`mechanism-${index}`}>
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="text-accent-foreground w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{mechanism.title}</h3>
                      <p className="text-muted-foreground">{mechanism.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">How IV Laser Therapy Works</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The therapy uses precisely calibrated laser light delivered through a specialized catheter system directly into the bloodstream.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lightbulb className="mr-3 w-6 h-6 text-accent" />
                    Light Wavelengths
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent mr-3" />
                      <span className="text-muted-foreground">Red light (630-700nm) for cellular energy</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent mr-3" />
                      <span className="text-muted-foreground">Near-infrared (700-1000nm) for deep penetration</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent mr-3" />
                      <span className="text-muted-foreground">Blue light (400-470nm) for antimicrobial effects</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent mr-3" />
                      <span className="text-muted-foreground">Green light (520-550nm) for vascular effects</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="mr-3 w-6 h-6 text-primary" />
                    Cellular Effects
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-3" />
                      <span className="text-muted-foreground">Mitochondrial stimulation and ATP production</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-3" />
                      <span className="text-muted-foreground">Enhanced oxygen utilization</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-3" />
                      <span className="text-muted-foreground">Improved cellular membrane function</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-3" />
                      <span className="text-muted-foreground">Activation of cellular repair mechanisms</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="mr-3 w-6 h-6 text-secondary" />
                    Immune Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary mr-3" />
                      <span className="text-muted-foreground">Enhanced white blood cell function</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary mr-3" />
                      <span className="text-muted-foreground">Improved cytokine balance</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary mr-3" />
                      <span className="text-muted-foreground">Reduced inflammatory markers</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary mr-3" />
                      <span className="text-muted-foreground">Enhanced antioxidant production</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="mr-3 w-6 h-6 text-accent" />
                    Systemic Effects
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent mr-3" />
                      <span className="text-muted-foreground">Improved circulation and microcirculation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent mr-3" />
                      <span className="text-muted-foreground">Enhanced lymphatic drainage</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent mr-3" />
                      <span className="text-muted-foreground">Optimized tissue oxygenation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent mr-3" />
                      <span className="text-muted-foreground">Accelerated healing processes</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Applications and Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Therapeutic Benefits</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  IV Laser Therapy provides comprehensive health benefits through enhanced cellular function, improved circulation, and optimized immune response, making it effective for a wide range of health conditions and wellness goals.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3" data-testid={`benefit-${index}`}>
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Clinical Applications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {applications.map((application, index) => (
                        <div key={index} className="flex items-center space-x-3" data-testid={`application-${index}`}>
                          <div className="w-2 h-2 bg-accent rounded-full" />
                          <span className="text-muted-foreground">{application}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Treatment Protocol</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Session Duration</h4>
                        <p className="text-muted-foreground text-sm">45-60 minutes per session</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Frequency</h4>
                        <p className="text-muted-foreground text-sm">2-3 sessions per week initially</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Course Length</h4>
                        <p className="text-muted-foreground text-sm">10-20 sessions depending on condition</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Maintenance</h4>
                        <p className="text-muted-foreground text-sm">Monthly sessions for ongoing benefits</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Safety and Efficacy */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Safety and Efficacy</h2>
                <p className="text-xl text-muted-foreground">
                  IV Laser Therapy is a safe, non-invasive treatment with minimal side effects and extensive research supporting its therapeutic benefits.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="mr-3 w-6 h-6 text-primary" />
                      Safety Profile
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-primary mr-3" />
                        <span className="text-muted-foreground">Non-invasive and painless procedure</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-primary mr-3" />
                        <span className="text-muted-foreground">No known drug interactions</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-primary mr-3" />
                        <span className="text-muted-foreground">Minimal to no side effects</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-primary mr-3" />
                        <span className="text-muted-foreground">Suitable for most patients</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Activity className="mr-3 w-6 h-6 text-accent" />
                      Research Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-accent mr-3" />
                        <span className="text-muted-foreground">Extensive clinical research</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-accent mr-3" />
                        <span className="text-muted-foreground">Peer-reviewed publications</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-accent mr-3" />
                        <span className="text-muted-foreground">Proven therapeutic mechanisms</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-accent mr-3" />
                        <span className="text-muted-foreground">International clinical experience</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Experience Advanced Photomedicine
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover how IV Laser Therapy can enhance your cellular function, boost your immune system, and optimize your overall health through cutting-edge photomedicine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" data-testid="button-schedule-treatment">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg">
                  <Calendar className="mr-2 w-5 h-5" />
                  Schedule Your Treatment
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
