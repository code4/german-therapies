import Header from "@/components/header";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Clock, Target, Calendar } from "lucide-react";

export default function RejuvenesseAntiAging() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    "name": "Rejuvenesse Anti-Aging Programs",
    "description": "Revolutionary cellular regeneration programs that extend healthspan and quality of life through individualized scientific intervention and cutting-edge German anti-aging technology. Advanced anti-aging at the cellular level.",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "German Therapies",
      "founder": {
        "@type": "Person",
        "name": "Dr. Shams Scheik"
      }
    },
    "medicalSpecialty": ["Advanced Anti-Aging", "Cosmetic Treatments", "Cellular Regeneration", "German Anti-Aging Medicine"],
    "treatmentBenefits": [
      "Cellular regeneration and renewal",
      "Scientific anti-aging at the cellular level", 
      "Individualized treatment programs",
      "Advanced diagnostic assessment",
      "Enhanced energy and vitality",
      "Improved skin health and appearance",
      "Better cognitive function and memory",
      "Comprehensive age reversal approach"
    ]
  };

  return (
    <>
      <SEO 
        title="Rejuvenesse Anti-Aging Programs - Advanced Cellular Regeneration | German Therapies"
        description="Experience revolutionary anti-aging with Dr. Shams Scheik's Rejuvenesse Programs. Advanced cellular regeneration technology extends healthspan and quality of life. Scientific anti-aging at the cellular level with German precision."
        keywords="Rejuvenesse anti-aging, advanced anti-aging, cellular regeneration, cosmetic treatments, German anti-aging technology, age reversal, longevity medicine, biomarkers of aging, anti-aging diagnostics"
        canonicalUrl="https://german-therapies.vercel.app/rejuvenesse-anti-aging"
        structuredData={structuredData}
      />
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-amber-50 to-background dark:from-amber-950/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-4">
                <Sparkles className="mr-2 w-4 h-4" />
                Cellular Regeneration
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                Rejuvenesse Anti-Aging Programs
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Scientific Anti-Aging at the Cellular Level
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Revolutionary cellular regeneration programs that extend your healthspan and quality of life through individualized scientific intervention and cutting-edge German anti-aging technology.
              </p>
            </div>
          </div>
        </section>

        {/* Anti-Aging Concept */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6">The Science of Aging</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  The human body contains four trillion cells that continuously regenerate throughout life. However, as we age, this cellular renewal process slows down due to poor nutrition, environmental toxins, stress, and lifestyle factors.
                </p>
                
                <Card className="p-6 mb-6 bg-amber-50 dark:bg-amber-950/20 border-amber-200">
                  <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-3">Our Revolutionary Approach</h3>
                  <p className="text-amber-700 dark:text-amber-300">
                    Anti-aging therapy can fine-tune the aging process with individualized scientific programs, preventing your body from sliding downhill after age 40. The key is making a big difference in how you look and how you feel.
                  </p>
                </Card>
              </div>
              
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Cellular Renewal Process</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                        <div>
                          <h4 className="font-semibold">Young & Healthy Cells</h4>
                          <p className="text-muted-foreground text-sm">Regular division in energetic, balanced bio-terrain</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2" />
                        <div>
                          <h4 className="font-semibold">Aging Process</h4>
                          <p className="text-muted-foreground text-sm">Cellular renewal slows due to environmental factors</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                        <div>
                          <h4 className="font-semibold">Premature Aging</h4>
                          <p className="text-muted-foreground text-sm">Cell-renewal suppression leads to disease</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                        <div>
                          <h4 className="font-semibold">Anti-Aging Intervention</h4>
                          <p className="text-muted-foreground text-sm">Awaken dormant cells, stimulate regeneration</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Program Options */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Choose Your Anti-Aging Program</h2>
              <p className="text-xl text-muted-foreground">Two comprehensive options tailored to your needs</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-blue-200">
                <CardHeader className="bg-blue-50 dark:bg-blue-950/20">
                  <CardTitle className="text-center text-blue-800 dark:text-blue-200">Nascent Anti-Aging Program</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-blue-600">7 Days + 6 Months</div>
                    <div className="text-muted-foreground">Clinical + Home Program</div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-4 h-4 text-blue-500" />
                      <span className="text-sm">7 days intensive clinic treatment</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Target className="w-4 h-4 text-blue-500" />
                      <span className="text-sm">6 months individualized program</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Sparkles className="w-4 h-4 text-blue-500" />
                      <span className="text-sm">German anti-aging preparations</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-4 h-4 text-blue-500" />
                      <span className="text-sm">Monthly consultations</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    Perfect for those beginning their anti-aging journey
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-amber-200 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-amber-500 text-white">Most Popular</Badge>
                </div>
                <CardHeader className="bg-amber-50 dark:bg-amber-950/20">
                  <CardTitle className="text-center text-amber-800 dark:text-amber-200">Complete Anti-Aging Program</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-amber-600">12 Days + 12 Months</div>
                    <div className="text-muted-foreground">Comprehensive Program</div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-4 h-4 text-amber-500" />
                      <span className="text-sm">12 days intensive clinic treatment</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Target className="w-4 h-4 text-amber-500" />
                      <span className="text-sm">12 months complete program</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Sparkles className="w-4 h-4 text-amber-500" />
                      <span className="text-sm">Advanced German preparations</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-4 h-4 text-amber-500" />
                      <span className="text-sm">Monthly consultations for 1 year</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    Maximum results for comprehensive transformation
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Comprehensive Diagnostics */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Advanced Diagnostic Assessment</h2>
              <p className="text-xl text-muted-foreground">Complete evaluation of your biological age and health status</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Biomarkers of Aging</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Special aging diagnostics</li>
                    <li>• Anti-aging blood analysis</li>
                    <li>• Hormonal profiling</li>
                    <li>• Metabolic assessment</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Organ Function Tests</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Brain age testing</li>
                    <li>• Blood vessel age assessment</li>
                    <li>• CardioSkan heart mapping</li>
                    <li>• Cardiovascular risk factors</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Toxicity & Risk Factors</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Heavy metal load testing</li>
                    <li>• Metabolic syndrome screening</li>
                    <li>• Premature aging risk factors</li>
                    <li>• Comprehensive toxicity assessment</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Treatment Modalities */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Advanced Treatment Modalities</h2>
              <p className="text-xl text-muted-foreground">Non-surgical, customized anti-aging interventions</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Ozone Therapy</h3>
                  <p className="text-muted-foreground text-sm">German anti-aging protocol for cellular oxygenation</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">PRP Therapy</h3>
                  <p className="text-muted-foreground text-sm">Platelet-rich plasma for tissue regeneration</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Immunotherapy</h3>
                  <p className="text-muted-foreground text-sm">Immune system support and optimization</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="font-semibold mb-2">IV Cocktails</h3>
                  <p className="text-muted-foreground text-sm">Anti-aging nutrients and antioxidants</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Expected Results */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">What to Expect</h2>
              <p className="text-xl text-muted-foreground">Comprehensive improvements in health and vitality</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 text-green-600">Physical Improvements</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Enhanced energy levels</li>
                    <li>• Improved circulation</li>
                    <li>• Better joint flexibility</li>
                    <li>• Weight management</li>
                    <li>• Stronger immune system</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 text-blue-600">Skin & Appearance</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Younger, hydrated skin</li>
                    <li>• Reduced wrinkles</li>
                    <li>• Improved skin elasticity</li>
                    <li>• Lighter blemishes</li>
                    <li>• Refined facial pores</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 text-purple-600">Mental & Sexual Health</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Improved memory retention</li>
                    <li>• Enhanced mental clarity</li>
                    <li>• Better sleep quality</li>
                    <li>• Increased sex drive</li>
                    <li>• General sense of vitality</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Turn Back the Clock Scientifically
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience proven anti-aging technology that works at the cellular level. Begin your transformation with personalized German anti-aging protocols.
            </p>
            <Link href="/contact" data-testid="button-antiaging-consultation">
              <Button size="lg" className="bg-amber-600 text-white hover:bg-amber-700 text-lg">
                <Sparkles className="mr-2 w-5 h-5" />
                Begin Your Anti-Aging Journey
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}