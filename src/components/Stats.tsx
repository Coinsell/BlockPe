import { Users, DollarSign, Globe, Zap } from 'lucide-react'

export function Stats() {
  const stats = [
    {
      icon: Users,
      value: '500K+',
      label: 'Active Users',
      description: 'Trusted by crypto enthusiasts worldwide'
    },
    {
      icon: DollarSign,
      value: '$2.5B+',
      label: 'Volume Processed',
      description: 'In total transaction volume'
    },
    {
      icon: Globe,
      value: '150+',
      label: 'Countries',
      description: 'Global reach and accessibility'
    },
    {
      icon: Zap,
      value: '99.9%',
      label: 'Uptime',
      description: 'Reliable and always available'
    }
  ]

  return (
    <section className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/5 via-purple-500/5 to-cyan-500/5"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by <span className="bg-gradient-to-r from-brand-primary to-purple-500 bg-clip-text text-transparent">Millions</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
            Join the growing community of users who trust BlockPe for their crypto needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-brand-primary to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-foreground mb-2 group-hover:text-brand-primary transition-colors">
                {stat.value}
              </div>
              <div className="text-xl font-semibold text-muted-foreground mb-2">
                {stat.label}
              </div>
              <div className="text-muted-foreground text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}