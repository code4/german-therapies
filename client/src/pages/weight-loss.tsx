import Header from "@/components/header";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scale, Target, TrendingDown, Clock } from "lucide-react";

export default function WeightLoss() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    "name": "German Scientific-Slim Program",
    "description": "Revolutionary medically supervised non-surgical permanent weight loss program that addresses root causes using German medical science to reset metabolism and eating habits permanently.",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "German Therapies",
      "founder": {
        "@type": "Person",
        "name": "Dr. Shams Scheik"
      }
    },
    "medicalSpecialty": ["Medical Weight Loss", "Obesity Treatment", "Metabolic Medicine", "German Scientific Medicine"],
    "treatmentBenefits": [
      "Permanent weight loss without starvation",
      "Addresses root causes not just symptoms", 
      "Hormonal correction and metabolic reset",
      "VLDL cholesterol reduction -20%",
      "Triglycerides reduction -37%",
      "Chronic inflammation reduction -30%",
      "No muscle loss, targeted fat reduction",
      "Comprehensive detoxification"
    ]
  };

  return (
    <>
      <SEO 
        title="Medical Weight Loss Program - German Scientific-Slim | German Therapies"
        description="Achieve permanent weight loss with Dr. Shams Scheik's German Scientific-Slim Program. Medically supervised non-surgical treatment addresses root causes for lasting results. No starvation or extreme restrictions."
        keywords="medical weight loss, German Scientific-Slim, obesity treatment, permanent weight loss, metabolic reset, hormone balance weight loss, medically supervised weight loss, non-surgical weight loss"
        canonicalUrl="https://german-therapies.vercel.app/weight-loss"
        structuredData={structuredData}
      />
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-green-50 to-background dark:from-green-950/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-4">
                <Scale className="mr-2 w-4 h-4" />
                Scientific Weight Management
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                German Scientific-Slim Program
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Medically Supervised Non-Surgical Permanent Weight Loss
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Revolutionary weight loss program that addresses root causes, not just symptoms, using German medical science to reset your metabolism and eating habits permanently.
              </p>
            </div>
          </div>
        </section>

        {/* Why Diets Fail */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Why Traditional Diets Fail</h2>
              <p className="text-xl text-muted-foreground">Most diets only treat symptoms, not the underlying causes</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Psychological Factors</h3>
                  <p className="text-muted-foreground text-sm">Depression, anxiety, eating disorders</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Scale className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Behavioral Issues</h3>
                  <p className="text-muted-foreground text-sm">Poor portion control, learned eating habits</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <TrendingDown className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Endocrine Disorders</h3>
                  <p className="text-muted-foreground text-sm">Hypothyroidism, insulin resistance</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Metabolic Factors</h3>
                  <p className="text-muted-foreground text-sm">Stress, poor glucose handling, pH imbalance</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Scientific Approach */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6">The German Scientific Approach</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our program doesn't just focus on calories or food restrictions. We address the complete physiological picture including hormones, liver detoxification, cellular oxygenation, nervous system balance, and metabolic pH.
                </p>
                
                <Card className="p-6 mb-6">
                  <h3 className="font-semibold mb-4">Proven Results</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>VLDL Cholesterol Reduction</span>
                      <Badge className="bg-green-100 text-green-800">-20%</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Triglycerides Reduction</span>
                      <Badge className="bg-blue-100 text-blue-800">-37%</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Chronic Inflammation Reduction</span>
                      <Badge className="bg-purple-100 text-purple-800">-30%</Badge>
                    </div>
                  </div>
                </Card>
              </div>
              
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>What Makes It Different</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                        <div>
                          <h4 className="font-semibold">Hormonal Correction</h4>
                          <p className="text-muted-foreground text-sm">Address thyroid, insulin, and stress hormones</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                        <div>
                          <h4 className="font-semibold">Micronutrient Balance</h4>
                          <p className="text-muted-foreground text-sm">Correct vitamin and mineral deficiencies</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                        <div>
                          <h4 className="font-semibold">Detoxification</h4>
                          <p className="text-muted-foreground text-sm">Liver and general body detoxification</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                        <div>
                          <h4 className="font-semibold">Nervous System Reset</h4>
                          <p className="text-muted-foreground text-sm">Balance autonomic nervous system</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Program Structure */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Two-Phase Program</h2>
              <p className="text-xl text-muted-foreground">Comprehensive approach to permanent weight loss</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-primary border-2">
                <CardHeader>
                  <CardTitle className="text-center text-primary">Phase 1: Clinical Treatment</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-primary">6 Days</div>
                    <div className="text-muted-foreground">At the clinic (1 hour daily)</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm">Correct hormonal imbalances</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm">Address micronutrient deficiencies</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm">Perform comprehensive detoxification</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm">Reset nervous system balance</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Phase 2: Home Program</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold">6 Weeks</div>
                    <div className="text-muted-foreground">Customized diet protocol</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-sm">Easy to follow meal plans</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-sm">No starvation or extreme restrictions</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-sm">Exercise optional during program</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-sm">Regular monitoring and support</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Comprehensive Benefits</h2>
              <p className="text-xl text-muted-foreground">Beyond weight loss - complete health transformation</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <Scale className="w-12 h-12 text-green-500 mb-4" />
                  <h3 className="font-semibold mb-2">Weight Management</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Targeted fat loss (no muscle loss)</li>
                    <li>• Cellulite reduction</li>
                    <li>• No stretch marks</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <Target className="w-12 h-12 text-blue-500 mb-4" />
                  <h3 className="font-semibold mb-2">Metabolic Health</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Reduced diabetes risk</li>
                    <li>• Lower blood pressure</li>
                    <li>• Improved cholesterol</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <TrendingDown className="w-12 h-12 text-purple-500 mb-4" />
                  <h3 className="font-semibold mb-2">Overall Wellness</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Enhanced mood and self-esteem</li>
                    <li>• Improved skin texture</li>
                    <li>• Increased energy levels</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Achieve Permanent Weight Loss
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Stop the yo-yo diet cycle. Our German Scientific-Slim Program addresses root causes for lasting results without starvation or extreme measures.
            </p>
            <Link href="/contact" data-testid="button-weight-loss-consultation">
              <Button size="lg" className="bg-green-600 text-white hover:bg-green-700 text-lg">
                <Scale className="mr-2 w-5 h-5" />
                Start Your Transformation
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}