import { Wallet, CreditCard, TrendingUp, Shield, Zap, Globe } from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: Wallet,
      title: "Multi-Chain Wallet",
      description: "Support for Bitcoin, Ethereum, and 100+ cryptocurrencies in one secure wallet."
    },
    {
      icon: CreditCard,
      title: "Payment Gateway",
      description: "Accept crypto payments seamlessly with instant settlement and low fees."
    },
    {
      icon: TrendingUp,
      title: "Market Enablement",
      description: "Access DeFi protocols, yield farming, and advanced trading features."
    },
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "Multi-signature wallets, hardware security modules, and insurance coverage."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Process transactions in seconds with our optimized blockchain infrastructure."
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Available worldwide with 24/7 customer support in multiple languages."
    }
  ]

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="bg-gradient-to-r from-brand-primary to-purple-500 bg-clip-text text-transparent">BlockPe</span>?
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
            Experience the next generation of crypto infrastructure with features designed for both beginners and professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border hover:border-brand-primary/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-brand-primary to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4 group-hover:text-brand-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}