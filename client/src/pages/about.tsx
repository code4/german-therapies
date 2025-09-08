import Header from "@/components/header";
import Footer from "@/components/footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, MapPin, Users, Calendar, Phone } from "lucide-react";

export default function About() {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4">
                  <Award className="mr-2 w-4 h-4" />
                  American Board Certified
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                  Dr. Shams Scheik
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Pioneering Anti-Aging and Regenerative Medicine Specialist
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-muted-foreground">
                    <GraduationCap className="mr-3 w-5 h-5 text-primary" />
                    <span>MBBS, MD (Internal Med), ABAARM(USA)</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Award className="mr-3 w-5 h-5 text-secondary" />
                    <span>Diplom Orthomol.Med.(Germany)</span>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="/attached_assets/ss6_1757363048629.jpg" 
                  alt="Dr. Shams Scheik - Professional medical portrait" 
                  className="rounded-2xl shadow-lg w-full h-auto"
                  data-testid="img-doctor-portrait"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Credentials Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Professional Excellence</h2>
              <p className="text-xl text-muted-foreground">Over two decades of pioneering achievements in regenerative medicine</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-foreground">25,000+</div>
                  <div className="text-muted-foreground">Patients Treated</div>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <MapPin className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-foreground">69</div>
                  <div className="text-muted-foreground">Countries Served</div>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <Calendar className="w-12 h-12 text-accent mx-auto mb-4" />
                  <div className="text-3xl font-bold text-foreground">2010-2021</div>
                  <div className="text-muted-foreground">Germany Clinic</div>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-foreground">20+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Biography Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-8 text-center">Biography</h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Dr. Shams Scheik is an award-winning, American Board-certified physician specializing in advanced anti-aging and regenerative medicine. With a distinguished career spanning over two decades, he has established himself as a pioneer in the field, combining cutting-edge science with personalized patient care.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  From 2010 to 2021, Dr. Scheik founded and led the prestigious Juventas Revitalization Clinic in Lahr-Schwarzwald, Germany. During this remarkable period, he delivered exceptional care to over 25,000 patients from 69 countries, establishing an international reputation for pioneering highly effective therapeutic protocols.
                </p>
                
                <Card className="p-8 mb-6">
                  <p className="text-foreground font-medium italic text-lg text-center">
                    "His exclusive clientele includes national and international celebrities, C-suite executives, influential politicians, professional athletes, and global business magnates who trust his innovative, personalized approach to health and wellness."
                  </p>
                </Card>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Dr. Scheik's approach combines leading-edge German, American, and Russian regenerative medical technologies with a deep understanding of personalized medicine. His protocols integrate the latest advances in epigenetics, regenerative therapies, and natural healing mechanisms to optimize health and promote longevity.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Today, Dr. Scheik brings this world-class expertise to India through German Therapies, making these transformative treatments accessible to patients seeking the highest standards of anti-aging and regenerative medicine care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Qualifications Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-8 text-center">Education & Certifications</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <GraduationCap className="text-primary-foreground w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Medical Degree</h3>
                        <p className="text-muted-foreground">MBBS (Bachelor of Medicine, Bachelor of Surgery)</p>
                        <p className="text-muted-foreground">MD in Internal Medicine</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                        <Award className="text-secondary-foreground w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">American Board Certification</h3>
                        <p className="text-muted-foreground">ABAARM (USA)</p>
                        <p className="text-muted-foreground">Anti-aging and Regenerative Medicine</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                        <Award className="text-accent-foreground w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">German Specialization</h3>
                        <p className="text-muted-foreground">Diplom Orthomol.Med. (Germany)</p>
                        <p className="text-muted-foreground">Orthomolecular Medicine</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <MapPin className="text-primary-foreground w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">International Practice</h3>
                        <p className="text-muted-foreground">Juventas Clinic, Germany (2010-2021)</p>
                        <p className="text-muted-foreground">German Therapies, India (2024-Present)</p>
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
              Experience World-Class Care
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schedule a consultation with Dr. Scheik to discuss your health goals and discover how our advanced treatments can help you achieve optimal wellness.
            </p>
            <Link href="/contact" data-testid="button-schedule-consultation">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg">
                <Phone className="mr-2 w-5 h-5" />
                Schedule Your Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
