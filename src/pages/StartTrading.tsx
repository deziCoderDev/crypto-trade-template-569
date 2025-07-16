import { motion } from "framer-motion";
import { ArrowRight, BarChart3, DollarSign, Lock, PieChart, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const StartTrading = () => {
  const cryptoData = [
    { symbol: "BTC", name: "Bitcoin", price: "$67,234", change: "+2.4%" },
    { symbol: "ETH", name: "Ethereum", price: "$2,834", change: "+1.8%" },
    { symbol: "BNB", name: "Binance Coin", price: "$584", change: "-0.3%" },
    { symbol: "SOL", name: "Solana", price: "$142", change: "+5.2%" }
  ];

  return (
    <div className="min-h-screen dashboard-gradient">
      <Navigation />
      
      <div className="container px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">
            Start Trading <span className="text-gradient">Today</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Access global cryptocurrency markets with professional tools and real-time data
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Login Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle className="text-2xl">Sign In</CardTitle>
                <CardDescription>
                  Access your trading dashboard
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com"
                    className="glass-hover"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="Your password"
                    className="glass-hover"
                  />
                </div>
                
                <Button className="w-full button-gradient">
                  Sign In
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                
                <p className="text-center text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <Link to="/create-account" className="text-primary hover:underline">
                    Create one
                  </Link>
                </p>
              </CardContent>
            </Card>

            {/* Security Features */}
            <Card className="stats-card mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-primary" />
                  Secure Trading
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  2FA Authentication
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Cold Storage
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Insured Funds
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Market Data & Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            <Tabs defaultValue="markets" className="w-full">
              <TabsList className="grid w-full grid-cols-3 dashboard-card">
                <TabsTrigger value="markets">Live Markets</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>
              
              <TabsContent value="markets" className="mt-6">
                <Card className="chart-container">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      Market Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {cryptoData.map((crypto) => (
                        <div key={crypto.symbol} className="flex items-center justify-between p-4 market-card rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                              <span className="font-bold text-primary">{crypto.symbol}</span>
                            </div>
                            <div>
                              <div className="font-medium">{crypto.name}</div>
                              <div className="text-sm text-muted-foreground">{crypto.symbol}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold">{crypto.price}</div>
                            <div className={`text-sm ${crypto.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                              {crypto.change}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="features" className="mt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="stats-card">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BarChart3 className="w-5 h-5 text-primary" />
                        Advanced Charts
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Professional trading charts with 50+ technical indicators
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="stats-card">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <DollarSign className="w-5 h-5 text-primary" />
                        Low Fees
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Competitive trading fees starting from 0.1%
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="analytics" className="mt-6">
                <Card className="chart-container">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <PieChart className="w-5 h-5 text-primary" />
                      Portfolio Analytics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Total Portfolio Value</span>
                        <span className="font-bold text-2xl text-primary">$12,450</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>24h Change</span>
                        <span className="text-green-500">+$342 (+2.83%)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Best Performer</span>
                        <span className="text-green-500">SOL +5.2%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default StartTrading;