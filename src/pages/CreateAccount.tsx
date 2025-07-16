import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Shield, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "Your assets are protected with institutional-grade security measures"
    },
    {
      icon: TrendingUp,
      title: "Advanced Analytics", 
      description: "Real-time market insights and professional trading tools"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Execute trades in milliseconds with our optimized infrastructure"
    }
  ];

  return (
    <div className="min-h-screen dashboard-gradient">
      <Navigation />
      
      <div className="container px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="glass">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold">Create Your Trading Account</CardTitle>
                <CardDescription className="text-lg">
                  Join thousands of traders worldwide and start your crypto journey
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="John" 
                      className="glass-hover"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe" 
                      className="glass-hover"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    className="glass-hover"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="Create a strong password" 
                    className="glass-hover"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input 
                    id="confirmPassword" 
                    type="password" 
                    placeholder="Confirm your password" 
                    className="glass-hover"
                  />
                </div>
                
                <Button className="w-full button-gradient h-12" size="lg">
                  Create Account
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                
                <p className="text-center text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link to="/start-trading" className="text-primary hover:underline">
                    Sign in here
                  </Link>
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right side - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-bold mb-4">
                Why Choose <span className="text-gradient">CryptoTrade</span>?
              </h2>
              <p className="text-lg text-muted-foreground">
                Experience the future of cryptocurrency trading with our cutting-edge platform
                designed for both beginners and professional traders.
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex gap-4 p-4 glass glass-hover rounded-lg"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500K+</div>
                <div className="text-sm text-muted-foreground">Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">$50B+</div>
                <div className="text-sm text-muted-foreground">Volume</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CreateAccount;