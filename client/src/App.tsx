import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/react";
import { useEffect } from "react";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Services from "@/pages/services";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import JuventasProtocol from "@/pages/juventas-protocol";
import Androboost from "@/pages/androboost";
import IVLaserTherapy from "@/pages/iv-laser-therapy";
import IVOzoneTherapy from "@/pages/iv-ozone-therapy";
import CardioVitalize from "@/pages/cardio-vitalize";
import DiabetesTherapy from "@/pages/diabetes-therapy";
import WeightLoss from "@/pages/weight-loss";
import IncurableDiseases from "@/pages/incurable-diseases";
import RejuvenesseAntiAging from "@/pages/rejuvenesse-anti-aging";

function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/services/juventas-protocol" component={JuventasProtocol} />
        <Route path="/services/androboost" component={Androboost} />
        <Route path="/services/iv-laser-therapy" component={IVLaserTherapy} />
        <Route path="/services/iv-ozone-therapy" component={IVOzoneTherapy} />
        <Route path="/services/cardio-vitalize" component={CardioVitalize} />
        <Route path="/services/diabetes-therapy" component={DiabetesTherapy} />
        <Route path="/services/weight-loss" component={WeightLoss} />
        <Route path="/services/incurable-diseases" component={IncurableDiseases} />
        <Route path="/services/rejuvenesse-anti-aging" component={RejuvenesseAntiAging} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <Analytics />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
