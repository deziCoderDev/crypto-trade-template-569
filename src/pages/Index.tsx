import { motion } from "framer-motion";
import { ArrowRight, Command, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { FeaturesSection } from "@/components/features/FeaturesSection";
import { PricingSection } from "@/components/pricing/PricingSection";
import LogoCarousel from "@/components/LogoCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen dashboard-gradient text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-32 pb-20"
      >
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-6 px-4 py-2 rounded-full glass glass-hover"
        >
          <span className="text-sm font-medium flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-primary" />
            Professional-Grade Trading Platform
          </span>
        </motion.div>
        
        <div className="max-w-5xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-left">
            <span className="text-gradient">
              <TextGenerateEffect words="Advanced Crypto Trading" />
            </span>
            <br />
            <span className="text-foreground">
              <TextGenerateEffect words="Made Simple & Secure" />
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl text-left leading-relaxed"
          >
            Experience the future of cryptocurrency trading with our cutting-edge platform. 
            Advanced charting tools, real-time market data, and institutional-grade security—all designed for{" "}
            <span className="text-primary font-semibold">both beginners and professionals.</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <Link to="/create-account">
              <Button size="lg" className="button-gradient h-12 px-8">
                Create Account
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/start-trading">
              <Button size="lg" variant="outline" className="glass glass-hover h-12 px-8">
                Start Trading
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="relative mx-auto max-w-5xl mt-20"
        >
          <div className="dashboard-card rounded-xl overflow-hidden shadow-2xl">
            <img
              src="/lovable-uploads/c32c6788-5e4a-4fee-afee-604b03113c7f.png"
              alt="CryptoTrade Dashboard"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Logo Carousel */}
      <LogoCarousel />

      {/* Features Section */}
      <div id="features" className="dashboard-gradient">
        <FeaturesSection />
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="dashboard-gradient">
        <PricingSection />
      </div>

      {/* Testimonials Section */}
      <div className="dashboard-gradient">
        <TestimonialsSection />
      </div>

      {/* CTA Section */}
      <section className="container px-4 py-20 relative dashboard-gradient">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="dashboard-card backdrop-blur-xl border rounded-3xl p-8 md:p-16 text-center relative z-10 max-w-4xl mx-auto shadow-2xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your 
              <span className="text-gradient"> Trading Experience?</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Join over 500,000 traders worldwide who trust our platform for secure, 
              fast, and professional cryptocurrency trading.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/create-account">
                <Button size="lg" className="button-gradient h-14 px-8 text-lg">
                  Create Free Account
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/start-trading">
                <Button size="lg" variant="outline" className="glass glass-hover h-14 px-8 text-lg">
                  Explore Platform
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <div className="dashboard-gradient">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
