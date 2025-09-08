import { Button } from './ui/button'
import { CreditCard, Globe, Zap, Shield, ArrowRight } from 'lucide-react'

export function PaymentGateway() {
  return (
    <section id="payment" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Payment Interface */}
          <div className="relative">
            <div className="bg-card p-8 rounded-2xl border border-border shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-card-foreground text-xl font-semibold">Payment Gateway</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm">Live</span>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-accent p-4 rounded-xl">
                  <div className="text-muted-foreground text-sm mb-2">Amount</div>
                  <div className="text-3xl font-bold text-foreground">$1,250.00</div>
                  <div className="text-muted-foreground text-sm">≈ 0.0287 BTC</div>
                </div>
                
                <div className="grid grid-cols-3 gap-3">
                  {['BTC', 'ETH', 'USDT'].map((crypto, index) => (
                    <button
                      key={index}
                      className={`p-3 rounded-xl border transition-all ${
                        index === 0 
                          ? 'bg-brand-primary/20 border-brand-primary text-brand-primary' 
                          : 'bg-accent border-border text-muted-foreground hover:border-muted-foreground'
                      }`}
                    >
                      {crypto}
                    </button>
                  ))}
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Network Fee</span>
                    <span className="text-foreground">$2.50</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Processing Fee</span>
                    <span className="text-foreground">$1.25 (0.1%)</span>
                  </div>
                  <div className="border-t border-border pt-3">
                    <div className="flex justify-between">
                      <span className="text-foreground font-semibold">Total</span>
                      <span className="text-foreground font-semibold">$1,253.75</span>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-brand-primary to-brand-primary-light hover:from-brand-primary-dark hover:to-brand-primary text-white py-3 rounded-xl shadow-lg">
                  Process Payment
                </Button>
              </div>
            </div>
            
            {/* Floating Success Notification */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-xl shadow-lg animate-bounce">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm font-medium">Payment Confirmed</span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 rounded-full border border-purple-500/20">
              <span className="text-purple-400 text-sm font-medium">💳 Payment Gateway</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Accept Crypto
              <br />
              <span className="bg-gradient-to-r from-brand-primary to-pink-400 bg-clip-text text-transparent">
                Payments Instantly
              </span>
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              Integrate our powerful payment gateway and start accepting cryptocurrency 
              payments in minutes. Low fees, instant settlement, and support for 
              major cryptocurrencies.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-brand-primary/20 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="text-foreground font-semibold">Instant Settlement</h3>
                <p className="text-muted-foreground text-sm">Receive payments in your wallet within seconds of confirmation.</p>
              </div>
              
              <div className="space-y-3">
                <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-foreground font-semibold">Global Reach</h3>
                <p className="text-muted-foreground text-sm">Accept payments from customers worldwide, 24/7.</p>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border">
              <h4 className="text-card-foreground font-semibold mb-4">Integration Features</h4>
              <div className="space-y-3">
                {[
                  'RESTful API & WebHooks',
                  'E-commerce Plugins',
                  'Custom Checkout Pages',
                  'Real-time Analytics'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button className="bg-gradient-to-r from-brand-primary to-pink-600 hover:from-brand-primary-dark hover:to-pink-700 text-white px-8 py-4 text-lg rounded-full group shadow-lg">
              Start Integration
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}