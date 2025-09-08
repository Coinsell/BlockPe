import { Button } from './ui/button'
import { ArrowRight, Wallet, Shield, TrendingUp } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center px-4 py-2 bg-accent/50 rounded-full border border-border">
            <span className="text-brand-primary text-sm font-medium">🚀 Now Live on Mainnet</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
            The Future of
            <br />
            <span className="bg-gradient-to-r from-brand-primary via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Crypto Payments
            </span>
          </h1>
          
          <p className="text-muted-foreground text-xl leading-relaxed max-w-2xl">
            BlockPe revolutionizes digital transactions with our comprehensive crypto wallet, 
            payment gateway, and market enablement platform. Experience seamless, secure, 
            and lightning-fast crypto payments.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button className="bg-gradient-to-r from-brand-primary to-brand-primary-light hover:from-brand-primary-dark hover:to-brand-primary text-white px-8 py-4 text-lg rounded-full group shadow-lg">
              Launch App
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="border-border text-foreground hover:bg-accent hover:border-brand-primary px-8 py-4 text-lg rounded-full">
              View Whitepaper
            </Button>
          </div>

          <div className="flex items-center justify-center lg:justify-start space-x-8 pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">$2.5B+</div>
              <div className="text-muted-foreground text-sm">Volume Processed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">500K+</div>
              <div className="text-muted-foreground text-sm">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">99.9%</div>
              <div className="text-muted-foreground text-sm">Uptime</div>
            </div>
          </div>
        </div>

        {/* Right Content - Floating Cards */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            {/* Main Wallet Card */}
            <div className="bg-card border border-border p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Wallet className="w-8 h-8 text-brand-primary" />
                  <span className="text-card-foreground font-semibold">BlockPe Wallet</span>
                </div>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div className="space-y-3">
                <div className="text-3xl font-bold text-card-foreground">$12,847.92</div>
                <div className="text-green-400 text-sm">+12.5% (24h)</div>
                <div className="grid grid-cols-3 gap-2 mt-4">
                  <div className="bg-accent p-2 rounded-lg text-center">
                    <div className="text-xs text-muted-foreground">BTC</div>
                    <div className="text-sm font-semibold text-foreground">0.245</div>
                  </div>
                  <div className="bg-accent p-2 rounded-lg text-center">
                    <div className="text-xs text-muted-foreground">ETH</div>
                    <div className="text-sm font-semibold text-foreground">3.42</div>
                  </div>
                  <div className="bg-accent p-2 rounded-lg text-center">
                    <div className="text-xs text-muted-foreground">USDT</div>
                    <div className="text-sm font-semibold text-foreground">1,250</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Security Card */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-brand-primary to-purple-600 p-4 rounded-xl shadow-lg animate-bounce" style={{ animationDuration: '3s' }}>
              <Shield className="w-6 h-6 text-white" />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-green-500 to-cyan-500 p-4 rounded-xl shadow-lg animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}>
              <TrendingUp className="w-6 h-6 text-white" />
            </div>

            {/* Floating Crypto Icons */}
            <div className="absolute top-10 -left-8 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold animate-pulse">
              ₿
            </div>
            <div className="absolute bottom-20 -right-8 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold animate-pulse" style={{ animationDelay: '2s' }}>
              Ξ
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}