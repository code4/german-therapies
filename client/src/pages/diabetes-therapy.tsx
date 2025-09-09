import Header from "@/components/header";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, Target, TrendingDown, Calendar } from "lucide-react";

export default function DiabetesTherapy() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    "name": "Regenerative Therapy for Diabetes",
    "description": "Revolutionary metabolic therapy program that reverses Type II diabetes at the cellular-mitochondrial level using German biological medicine principles. 90% of Type II Diabetes cases are reversible without surgery or drugs.",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "German Therapies",
      "founder": {
        "@type": "Person",
        "name": "Dr. Shams Scheik"
      }
    },
    "medicalSpecialty": ["Diabetes Treatment", "Metabolic Medicine", "German Biological Medicine", "Blood Sugar Management"],
    "treatmentBenefits": [
      "90% reversal rate for Type II diabetes",
      "No surgery or invasive procedures required", 
      "Natural weight loss of 5-12 kg within 2 months",
      "Blood sugar normalization",
      "Medication reduction or elimination",
      "Cancer risk reduction",
      "Cardiovascular protection"
    ]
  };

  return (
    <>
      <SEO 
        title="Diabetes Therapy - Type 2 Diabetes Reversal Program | German Therapies"
        description="Reverse Type 2 diabetes naturally with Dr. Shams Scheik's regenerative therapy program. 90% success rate using German biological medicine. 7-month comprehensive treatment without surgery or drugs."
        keywords="diabetes therapy, type 2 diabetes reversal, diabetes treatment, blood sugar management, German biological medicine, metabolic therapy, diabetes reversal program, natural diabetes treatment"
        canonicalUrl="https://german-therapies.vercel.app/diabetes-therapy"
        structuredData={structuredData}
      />
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-blue-50 to-background dark:from-blue-950/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-4">
                <Activity className="mr-2 w-4 h-4" />
                Metabolic Therapy
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                Regenerative Therapy for Diabetes
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Reversal of Type II Diabetes without Surgery or Drugs
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Revolutionary metabolic therapy program that reverses diabetes at the cellular-mitochondrial level using German biological medicine principles.
              </p>
            </div>
          </div>
        </section>

        {/* Key Facts */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Revolutionary Diabetes Reversal</h2>
              <p className="text-2xl text-primary font-semibold">90% of Type II Diabetes cases are reversible</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Target className="w-12 h-12 text-red-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Stop Progression</h3>
                  <p className="text-muted-foreground">Halt the advancement of diabetes and prevent further complications</p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-primary border-2">
                <CardContent className="p-6">
                  <TrendingDown className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Reverse Diabetes</h3>
                  <p className="text-muted-foreground">Start the biological process of diabetes reversal at cellular level</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <Activity className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Treat Damage</h3>
                  <p className="text-muted-foreground">Repair damage caused by diabetes progression before treatment</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Program Structure */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Treatment Program</h2>
              <p className="text-xl text-muted-foreground">Comprehensive 7-month intensive therapy program</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="mr-2 w-5 h-5 text-primary" />
                      Phase 1: Clinical Treatment
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span>Duration</span>
                        <Badge>7 Days at Clinic</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Frequency</span>
                        <Badge variant="outline">1 Hour Daily</Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Intensive cellular regeneration therapy using German biological medicine
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="mr-2 w-5 h-5 text-secondary" />
                      Phase 2: Home Program
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span>Duration</span>
                        <Badge variant="secondary">6 Months</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Type</span>
                        <Badge variant="outline">Self-Administered</Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Continued therapy with personalized protocols and regular monitoring
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6">Expected Outcomes</h3>
                <div className="space-y-4">
                  <Card className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                      <div>
                        <h4 className="font-semibold">Blood Sugar Normalization</h4>
                        <p className="text-muted-foreground text-sm">Achieve normal glucose levels within treatment period</p>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                      <div>
                        <h4 className="font-semibold">Medication Reduction</h4>
                        <p className="text-muted-foreground text-sm">Significant decrease or complete elimination of diabetes medications</p>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
                      <div>
                        <h4 className="font-semibold">Weight Management</h4>
                        <p className="text-muted-foreground text-sm">Natural weight loss of 5-12 kg within 2 months</p>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                      <div>
                        <h4 className="font-semibold">Symptom Relief</h4>
                        <p className="text-muted-foreground text-sm">Resolution of fatigue, blurry vision, frequent infections</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Long-term Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Long-term Health Benefits</h2>
              <p className="text-xl text-muted-foreground">Comprehensive health improvements beyond diabetes reversal</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 text-red-600">Cancer Risk Reduction</h3>
                  <p className="text-muted-foreground">
                    Diabetics are 3 times more likely to develop cancer. Our therapy significantly reduces this risk by addressing underlying metabolic dysfunction.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 text-blue-600">Cardiovascular Protection</h3>
                  <p className="text-muted-foreground">
                    Diabetics are 4 times more likely to suffer heart attacks or strokes. Our metabolic therapy provides long-term cardiovascular protection.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Reverse Your Diabetes Naturally
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of patients who have successfully reversed their Type II diabetes using our German biological medicine approach.
            </p>
            <Link href="/contact" data-testid="button-diabetes-consultation">
              <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 text-lg">
                <Activity className="mr-2 w-5 h-5" />
                Start Your Diabetes Reversal
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}