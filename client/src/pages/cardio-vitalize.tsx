import Header from "@/components/header";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Clock, CheckCircle, Calendar } from "lucide-react";

export default function CardioVitalize() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    "name": "CardioVitalize Program",
    "description": "Advanced cardiac regeneration therapy that removes blockages from all arteries and regenerates damaged heart muscle cells using cutting-edge German medical technology. Non-surgical alternative to bypass surgery and angioplasty.",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "German Therapies",
      "founder": {
        "@type": "Person",
        "name": "Dr. Shams Scheik"
      }
    },
    "medicalSpecialty": ["Cardiovascular Medicine", "Cardiac Regeneration", "Non-Surgical Heart Treatment", "German Biological Medicine"],
    "treatmentBenefits": [
      "Non-surgical approach to coronary heart disease",
      "Treats all arteries, not just major vessels", 
      "Regenerates damaged heart muscle",
      "90% of patients avoid bypass surgery or angioplasty",
      "Enhanced cardiovascular circulation",
      "Improved heart muscle function"
    ]
  };

  return (
    <>
      <SEO 
        title="CardioVitalize Program - Non-Surgical Heart Treatment | German Therapies"
        description="Avoid bypass surgery with CardioVitalize Program by Dr. Shams Scheik. Advanced German cardiac regeneration therapy removes arterial blockages and regenerates heart muscle cells. 90% success rate in avoiding invasive procedures."
        keywords="CardioVitalize, non-surgical heart treatment, bypass surgery alternative, cardiac regeneration therapy, German heart treatment, coronary artery disease, angioplasty alternative, cardiovascular health, heart blockage treatment"
        canonicalUrl="https://german-therapies.vercel.app/cardio-vitalize"
        structuredData={structuredData}
      />
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-red-50 to-background dark:from-red-950/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="destructive" className="mb-4">
                <Heart className="mr-2 w-4 h-4" />
                Cardiovascular Health
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                CardioVitalize Program
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                German Non-Surgical Alternative to Bypass Surgery and Angioplasty
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Advanced cardiac regeneration therapy that removes blockages from all arteries and regenerates damaged heart muscle cells using cutting-edge German medical technology.
              </p>
            </div>
          </div>
        </section>

        {/* Program Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Revolutionary Heart Treatment</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  The CardioVitalize Program offers a comprehensive, non-surgical approach to treating coronary heart disease. Instead of invasive procedures, we use German biological medicine to address the root causes of atherosclerosis and regenerate cardiovascular health.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-500 w-5 h-5" />
                    <span>No surgery or anesthesia required</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-500 w-5 h-5" />
                    <span>Treats all arteries, not just major vessels</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-500 w-5 h-5" />
                    <span>Regenerates damaged heart muscle</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-500 w-5 h-5" />
                    <span>Outpatient treatment program</span>
                  </div>
                </div>
              </div>
              
              <div>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Treatment Components</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Fresh Cell Therapy</span>
                      <Badge variant="outline">Regenerative</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Chelation Therapy</span>
                      <Badge variant="outline">Detoxification</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Ozone Autohaemotherapy</span>
                      <Badge variant="outline">Oxygenation</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Laser Angiogenic Therapy</span>
                      <Badge variant="outline">Blood Flow</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Laser Blood Revitalization</span>
                      <Badge variant="outline">Circulation</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Orthomolecular Therapy</span>
                      <Badge variant="outline">Nutrition</Badge>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Proven Benefits</h2>
              <p className="text-xl text-muted-foreground">90% of patients avoid bypass surgery or angioplasty</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <Heart className="w-12 h-12 text-red-500 mb-4" />
                  <h3 className="font-semibold mb-2">Cardiovascular</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Improved blood supply to heart</li>
                    <li>• Decreased cardiac arrhythmias</li>
                    <li>• Lower blood pressure</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
                  <h3 className="font-semibold mb-2">Circulation</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Enhanced organ perfusion</li>
                    <li>• Improved pulmonary function</li>
                    <li>• Better peripheral circulation</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <Calendar className="w-12 h-12 text-blue-500 mb-4" />
                  <h3 className="font-semibold mb-2">Overall Health</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Increased mental clarity</li>
                    <li>• Improved memory function</li>
                    <li>• Enhanced quality of life</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Treatment Timeline */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Treatment Timeline</h2>
              <p className="text-xl text-muted-foreground">Customized duration based on condition severity</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-blue-600">Prevention</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold mb-2">4 Weeks</p>
                  <p className="text-muted-foreground">For patients with family history or risk factors but no symptoms</p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-primary border-2">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-primary">Moderate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold mb-2">8-10 Weeks</p>
                  <p className="text-muted-foreground">For patients with angina, diabetes, and peripheral vascular disease</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-red-600" />
                  </div>
                  <CardTitle className="text-red-600">Advanced</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold mb-2">10-14 Weeks</p>
                  <p className="text-muted-foreground">For patients who need to avoid surgery or amputation</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Avoid Invasive Heart Surgery
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the German alternative to bypass surgery. Our CardioVitalize Program offers hope for patients seeking non-surgical cardiac treatment.
            </p>
            <Link href="/contact" data-testid="button-cardio-consultation">
              <Button size="lg" className="bg-red-600 text-white hover:bg-red-700 text-lg">
                <Heart className="mr-2 w-5 h-5" />
                Schedule Cardiac Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}