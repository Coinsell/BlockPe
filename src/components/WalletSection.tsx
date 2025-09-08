import { Button } from './ui/button'
import { Smartphone, Lock, Repeat, BarChart3 } from 'lucide-react'

export function WalletSection() {
  return (
    <section id="wallet" className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/5 to-purple-500/5"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-brand-primary/10 rounded-full border border-brand-primary/20">
              <span className="text-brand-primary text-sm font-medium">💼 BlockPe Wallet</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Your Gateway to the
              <br />
              <span className="bg-gradient-to-r from-brand-primary to-cyan-400 bg-clip-text text-transparent">
                Crypto Universe
              </span>
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              Store, send, receive, and manage your digital assets with confidence. 
              Our non-custodial wallet gives you complete control over your funds 
              while providing enterprise-grade security.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-brand-primary/20 rounded-lg flex items-center justify-center">
                  <Lock className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="text-foreground font-semibold">Self-Custody</h3>
                <p className="text-muted-foreground text-sm">You own your private keys and control your funds completely.</p>
              </div>
              
              <div className="space-y-3">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Repeat className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-foreground font-semibold">Multi-Chain</h3>
                <p className="text-muted-foreground text-sm">Support for Bitcoin, Ethereum, BSC, Polygon, and more.</p>
              </div>
            </div>

            <Button className="bg-gradient-to-r from-brand-primary to-brand-primary-light hover:from-brand-primary-dark hover:to-brand-primary text-white px-8 py-4 text-lg rounded-full shadow-lg">
              Download Wallet
            </Button>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-80 h-[600px] bg-card rounded-[3rem] p-4 border-8 border-border shadow-2xl">
                <div className="w-full h-full bg-background rounded-[2rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center p-4 text-foreground text-sm">
                    <span>9:41</span>
                    <div className="flex space-x-1">
                      <div className="w-4 h-2 bg-foreground rounded-sm"></div>
                      <div className="w-4 h-2 bg-foreground rounded-sm"></div>
                      <div className="w-4 h-2 bg-foreground/50 rounded-sm"></div>
                    </div>
                  </div>
                  
                  {/* Wallet Content */}
                  <div className="p-6 space-y-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-foreground mb-2">$24,847.92</div>
                      <div className="text-green-400 text-sm">+$1,247.83 (5.3%)</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <button className="bg-gradient-to-r from-brand-primary to-brand-primary-light text-white py-3 rounded-xl font-medium shadow-lg">Send</button>
                      <button className="bg-accent text-foreground py-3 rounded-xl font-medium border border-border">Receive</button>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-foreground font-semibold">Assets</h3>
                      {[
                        { name: 'Bitcoin', symbol: 'BTC', amount: '0.245', value: '$12,847', change: '+5.2%', color: 'bg-orange-500' },
                        { name: 'Ethereum', symbol: 'ETH', amount: '3.42', value: '$8,234', change: '+3.1%', color: 'bg-blue-500' },
                        { name: 'Tether', symbol: 'USDT', amount: '1,250', value: '$1,250', change: '0.0%', color: 'bg-green-500' }
                      ].map((asset, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-accent rounded-xl">
                          <div className="flex items-center space-x-3">
                            <div className={`w-10 h-10 ${asset.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                              {asset.symbol[0]}
                            </div>
                            <div>
                              <div className="text-foreground font-medium">{asset.name}</div>
                              <div className="text-muted-foreground text-sm">{asset.amount} {asset.symbol}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-foreground font-medium">{asset.value}</div>
                            <div className={`text-sm ${asset.change.startsWith('+') ? 'text-green-400' : 'text-muted-foreground'}`}>
                              {asset.change}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-brand-primary to-purple-600 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center animate-bounce shadow-lg" style={{ animationDelay: '1s' }}>
                <BarChart3 className="w-7 h-7 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}