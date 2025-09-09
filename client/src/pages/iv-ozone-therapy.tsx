import Header from "@/components/header";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Stethoscope, Calendar, CheckCircle, Wind, Shield, Droplets } from "lucide-react";

const benefits = [
  "Enhanced immune system function",
  "Improved oxygen utilization",
  "Powerful detoxification effects",
  "Reduced inflammation",
  "Enhanced circulation",
  "Antimicrobial activity",
  "Improved cellular metabolism",
  "Accelerated healing",
  "Increased energy levels",
  "Better stress resistance"
];

const mechanisms = [
  {
    icon: Wind,
    title: "Oxygenation",
    description: "Medical ozone increases oxygen delivery to tissues and enhances cellular oxygen utilization"
  },
  {
    icon: Shield,
    title: "Immune Modulation",
    description: "Stimulates immune system response while reducing inflammatory processes"
  },
  {
    icon: Droplets,
    title: "Detoxification",
    description: "Enhances the body's natural detoxification pathways and cellular cleansing"
  }
];

const conditions = [
  "Chronic infections",
  "Autoimmune disorders",
  "Cardiovascular conditions",
  "Chronic fatigue syndrome",
  "Fibromyalgia",
  "Cancer support therapy",
  "Liver dysfunction",
  "Heavy metal toxicity",
  "Chronic inflammatory conditions",
  "Age-related degenerative diseases"
];

export default function IVOzoneTherapy() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    "name": "IV Ozonated Saline Therapy",
    "description": "Revolutionary oxidative medicine combining medical ozone with IV saline for immune system modulation, detoxification, and cellular regeneration with minimal side effects.",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "German Therapies",
      "founder": {
        "@type": "Person",
        "name": "Dr. Shams Scheik"
      }
    },
    "medicalSpecialty": ["Oxidative Medicine", "Ozone Therapy", "Immune System Enhancement", "Detoxification Medicine"],
    "treatmentBenefits": [
      "Enhanced immune system function",
      "Improved oxygen utilization", 
      "Powerful detoxification effects",
      "Reduced inflammation",
      "Enhanced circulation",
      "Antimicrobial activity"
    ]
  };

  return (
    <>
      <SEO 
        title="IV Ozonated Saline Therapy - Medical Ozone Treatment | German Therapies"
        description="Experience the therapeutic power of IV Ozonated Saline Therapy (IVOST) by Dr. Shams Scheik. Advanced ozone medicine for immune system enhancement, detoxification, and cellular regeneration with proven safety protocols."
        keywords="IV ozone therapy, ozonated saline therapy, IVOST, medical ozone, ozone medicine, immune system enhancement, detoxification therapy, oxidative medicine, antimicrobial therapy, cellular regeneration"
        canonicalUrl="https://german-therapies.vercel.app/iv-ozone-therapy"
        structuredData={structuredData}
      />
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-primary">
                  <Stethoscope className="mr-2 w-4 h-4" />
                  Oxidative Medicine
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                  IV Ozonated Saline Therapy
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Revolutionary oxidative medicine combining medical ozone with IV saline for immune system modulation, detoxification, and cellular regeneration with minimal side effects.
                </p>
                <Link href="/contact" data-testid="button-book-consultation">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg">
                    <Calendar className="mr-2 w-5 h-5" />
                    Schedule Treatment
                  </Button>
                </Link>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Medical ozone therapy equipment and treatment setup" 
                  className="rounded-2xl shadow-lg w-full h-auto"
                  data-testid="img-ozone-therapy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">The Power of Medical Ozone</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                IV Ozonated Saline Therapy (IVOST) harnesses the therapeutic properties of medical ozone delivered through intravenous saline solution. This powerful oxidative therapy enhances cellular metabolism, modulates immune function, and provides potent antimicrobial effects while supporting the body's natural detoxification processes. With over a century of clinical use worldwide, ozone therapy represents a safe and effective approach to health optimization.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {mechanisms.map((mechanism, index) => {
                const IconComponent = mechanism.icon;
                return (
                  <Card key={index} className="text-center" data-testid={`mechanism-${index}`}>
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="text-primary-foreground w-8 h-8" />
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
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">How IVOST Works</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Medical ozone is carefully prepared and delivered through specialized equipment to ensure precise dosing and maximum therapeutic benefit.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Wind className="mr-3 w-6 h-6 text-primary" />
                    Ozone Generation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-3" />
                      <span className="text-muted-foreground">Medical-grade oxygen source</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-3" />
                      <span className="text-muted-foreground">Precise ozone concentration control</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-3" />
                      <span className="text-muted-foreground">Real-time monitoring systems</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-3" />
                      <span className="text-muted-foreground">Sterile preparation protocols</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Droplets className="mr-3 w-6 h-6 text-secondary" />
                    Saline Integration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary mr-3" />
                      <span className="text-muted-foreground">Pharmaceutical-grade saline solution</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary mr-3" />
                      <span className="text-muted-foreground">Optimal ozone saturation levels</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary mr-3" />
                      <span className="text-muted-foreground">Temperature-controlled preparation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary mr-3" />
                      <span className="text-muted-foreground">Immediate administration protocol</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="mr-3 w-6 h-6 text-accent" />
                    Therapeutic Effects
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent mr-3" />
                      <span className="text-muted-foreground">Enhanced oxygen metabolism</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent mr-3" />
                      <span className="text-muted-foreground">Immune system activation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent mr-3" />
                      <span className="text-muted-foreground">Antioxidant enzyme stimulation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent mr-3" />
                      <span className="text-muted-foreground">Cellular regeneration support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Stethoscope className="mr-3 w-6 h-6 text-primary" />
                    Safety Protocols
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-3" />
                      <span className="text-muted-foreground">Individual dosage calculations</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-3" />
                      <span className="text-muted-foreground">Continuous patient monitoring</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-3" />
                      <span className="text-muted-foreground">Standardized administration protocols</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-3" />
                      <span className="text-muted-foreground">Emergency response procedures</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits and Applications */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Therapeutic Benefits</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  IV Ozonated Saline Therapy provides comprehensive health benefits through multiple therapeutic mechanisms, making it effective for a wide range of acute and chronic health conditions while supporting overall wellness and longevity.
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
                    <CardTitle>Clinical Applications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {conditions.map((condition, index) => (
                        <div key={index} className="flex items-center space-x-3" data-testid={`condition-${index}`}>
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-muted-foreground">{condition}</span>
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
                        <p className="text-muted-foreground text-sm">30-45 minutes per session</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Frequency</h4>
                        <p className="text-muted-foreground text-sm">2-3 sessions per week initially</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Course Length</h4>
                        <p className="text-muted-foreground text-sm">6-20 sessions depending on condition</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Maintenance</h4>
                        <p className="text-muted-foreground text-sm">Weekly to monthly sessions</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Scientific Evidence */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Scientific Foundation</h2>
                <p className="text-xl text-muted-foreground">
                  Ozone therapy is supported by extensive research and over 100 years of clinical application worldwide.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center">
                  <CardContent className="p-8">
                    <div className="text-4xl font-bold text-primary mb-2">100+</div>
                    <div className="text-muted-foreground">Years of Clinical Use</div>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="p-8">
                    <div className="text-4xl font-bold text-secondary mb-2">2000+</div>
                    <div className="text-muted-foreground">Scientific Publications</div>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="p-8">
                    <div className="text-4xl font-bold text-accent mb-2">50+</div>
                    <div className="text-muted-foreground">Countries Using Ozone</div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-12 grid md:grid-cols-2 gap-8">
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
                        <span className="text-muted-foreground">Excellent safety record when properly administered</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-primary mr-3" />
                        <span className="text-muted-foreground">Minimal side effects in most patients</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-primary mr-3" />
                        <span className="text-muted-foreground">No development of resistance</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-primary mr-3" />
                        <span className="text-muted-foreground">Compatible with most medications</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Wind className="mr-3 w-6 h-6 text-accent" />
                      Clinical Evidence
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-accent mr-3" />
                        <span className="text-muted-foreground">Peer-reviewed research studies</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-accent mr-3" />
                        <span className="text-muted-foreground">International medical conferences</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-accent mr-3" />
                        <span className="text-muted-foreground">Medical society endorsements</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-accent mr-3" />
                        <span className="text-muted-foreground">Regulatory approval in many countries</span>
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
              Harness the Power of Medical Ozone
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the therapeutic benefits of IV Ozonated Saline Therapy for immune enhancement, detoxification, and cellular regeneration with our proven protocols.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" data-testid="button-schedule-treatment">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg">
                  <Calendar className="mr-2 w-5 h-5" />
                  Schedule Your Treatment
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
