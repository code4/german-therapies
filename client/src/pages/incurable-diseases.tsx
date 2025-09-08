import Header from "@/components/header";
import Footer from "@/components/footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Brain, Zap, Shield } from "lucide-react";

export default function IncurableDiseases() {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-purple-50 to-background dark:from-purple-950/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-4">
                <Shield className="mr-2 w-4 h-4" />
                Advanced Regenerative Medicine
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                Treatment of 'Incurable' Diseases
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Hope for Conditions Conventional Medicine Considers Hopeless
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Revolutionary approach using German biological medicine principles to treat rare and chronic conditions through root-cause focused regenerative therapies.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Is There Such Thing as an 'Incurable' Disease?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From a conventional pharmaceutical standpoint, many diseases are labeled "incurable." Our approach challenges this limitation by addressing root causes rather than just managing symptoms.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Card className="p-6 mb-6 border-red-200 bg-red-50 dark:bg-red-950/20">
                  <h3 className="font-semibold text-red-800 dark:text-red-200 mb-3">Conventional Medicine Limitations</h3>
                  <ul className="space-y-2 text-red-700 dark:text-red-300">
                    <li>• Focuses only on symptom suppression</li>
                    <li>• Relies heavily on pharmaceutical drugs</li>
                    <li>• Often hinders body's natural healing</li>
                    <li>• May create additional stress on the system</li>
                  </ul>
                </Card>
              </div>
              
              <div>
                <Card className="p-6 border-green-200 bg-green-50 dark:bg-green-950/20">
                  <h3 className="font-semibold text-green-800 dark:text-green-200 mb-3">Our Biological Medicine Approach</h3>
                  <ul className="space-y-2 text-green-700 dark:text-green-300">
                    <li>• Addresses root causes of disease</li>
                    <li>• Stimulates body's natural healing mechanisms</li>
                    <li>• Uses regenerative medical technology</li>
                    <li>• Individualized treatment protocols</li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Approach */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Integrated Treatment Modalities</h2>
              <p className="text-xl text-muted-foreground">Combining the latest regenerative technologies with proven biological medicine</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Shield className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Cell Therapy</h3>
                  <p className="text-muted-foreground text-sm">Fresh cell therapy for tissue regeneration</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Zap className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Thymus Therapy</h3>
                  <p className="text-muted-foreground text-sm">Immune system strengthening and regulation</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">IV Ozone Therapy</h3>
                  <p className="text-muted-foreground text-sm">Cellular oxygenation and detoxification</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Brain className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Laser Therapy</h3>
                  <p className="text-muted-foreground text-sm">Blood revitalization and cellular healing</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Conditions Treated */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Conditions We Treat</h2>
              <p className="text-xl text-muted-foreground">Comprehensive approach to complex medical conditions</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Autoimmune Conditions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Rheumatoid arthritis</li>
                    <li>• Multiple sclerosis</li>
                    <li>• Psoriasis</li>
                    <li>• Chronic gastritis</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Neurological Disorders</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Alzheimer's disease</li>
                    <li>• Parkinson's disease</li>
                    <li>• ALS (Motor neuron disease)</li>
                    <li>• Post-stroke rehabilitation</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Degenerative Conditions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Osteoarthritis</li>
                    <li>• Muscular dystrophy</li>
                    <li>• Osteoporosis</li>
                    <li>• Retinopathy</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Cardiovascular Issues</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Heart disease with risk factors</li>
                    <li>• High blood pressure</li>
                    <li>• High cholesterol</li>
                    <li>• Chronic circulation problems</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Chronic Diseases</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Chronic kidney failure</li>
                    <li>• Chronic bronchitis</li>
                    <li>• Fatty liver/Cirrhosis</li>
                    <li>• Chronic hepatitis</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Other Conditions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Cancer (case by case basis)</li>
                    <li>• Fertility problems</li>
                    <li>• Thyroid disease</li>
                    <li>• Prostatic conditions</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Treatment Goals */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Treatment Goals</h2>
              <p className="text-xl text-muted-foreground">What we aim to achieve for each patient</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-3">Improve Function</h3>
                <p className="text-muted-foreground">Enhance functional capacity and daily living abilities</p>
              </Card>
              
              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-3">Reduce Symptoms</h3>
                <p className="text-muted-foreground">Minimize symptoms and improve quality of life</p>
              </Card>
              
              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-3">Halt Progression</h3>
                <p className="text-muted-foreground">Slow or stop disease progression where possible</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Important Disclaimer */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <Card className="p-8 border-2 border-primary">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Individual Assessment Required</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Every individual case is unique and responds differently to treatment. We do not claim to cure any disease, but we offer hope through integrated, root-cause focused treatment approaches.
                </p>
                <p className="text-muted-foreground">
                  If you suffer from a condition not listed above, please send us your detailed case history, current medications, and surgical history. We will review the information and formulate an individualized treatment program for your specific situation.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Explore New Treatment Options
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't let conventional medicine's limitations define your future. Discover what German biological medicine can offer for your specific condition.
            </p>
            <Link href="/contact" data-testid="button-incurable-consultation">
              <Button size="lg" className="bg-purple-600 text-white hover:bg-purple-700 text-lg">
                <Shield className="mr-2 w-5 h-5" />
                Request Case Assessment
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}