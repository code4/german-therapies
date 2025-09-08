import Header from "@/components/header";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";
import SEO from "@/components/seo";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <>
      <SEO 
        title="Contact Us - German Therapies | Schedule Your Consultation"
        description="Contact German Therapies to schedule your personalized consultation with Dr. Shams Scheik. Call +91 7756840429 or fill out our form to start your anti-aging and regenerative medicine journey."
        keywords="contact German therapies, schedule consultation, Dr. Shams Scheik appointment, anti-aging consultation, medical consultation booking"
        canonicalUrl="https://german-therapies.vercel.app/contact"
      />
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Contact German Therapies
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to begin your transformation? Schedule a comprehensive consultation to discuss your health goals and discover which advanced treatments are right for you.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Get In Touch</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Our team is here to help you understand our treatments and schedule your consultation with Dr. Shams Scheik. We'll work with you to create a personalized treatment plan that addresses your unique health goals.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4" data-testid="contact-location">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary-foreground w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Clinic Location</h3>
                      <p className="text-muted-foreground">Juventas Revitalization Clinic</p>
                      <p className="text-muted-foreground">Karlstrasse 5, Lahr-Schwarzwald</p>
                      <p className="text-muted-foreground">77933, Germany</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4" data-testid="contact-phone">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-secondary-foreground w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">WhatsApp (India Treatments)</h3>
                      <p className="text-muted-foreground">+91 7756840429</p>
                      <p className="text-muted-foreground">For treatment inquiries in India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4" data-testid="contact-email">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-accent-foreground w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Email</h3>
                      <p className="text-muted-foreground">germantherapies@gmail.com</p>
                      <p className="text-muted-foreground">Treatment inquiries & consultations</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4" data-testid="contact-hours">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="text-primary-foreground w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Hours</h3>
                      <p className="text-muted-foreground">Monday - Saturday: 9:00 AM - 8:00 PM</p>
                      <p className="text-muted-foreground">Sunday: By Appointment</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-muted/50 rounded-xl">
                  <h3 className="font-semibold text-foreground mb-3">What to Expect</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      Comprehensive health assessment
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      Personalized treatment recommendations
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      Direct consultation with Dr. Scheik
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      Custom treatment protocol design
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
