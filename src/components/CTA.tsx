import { Button } from './ui/button'
import { ArrowRight, Download, BookOpen } from 'lucide-react'

export function CTA() {
  return (
    <section className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 via-purple-600/10 to-cyan-600/10"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="bg-card/50 backdrop-blur-sm p-12 rounded-3xl border border-border shadow-2xl">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Ready to Start Your
            <br />
            <span className="bg-gradient-to-r from-brand-primary via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Crypto Journey?
            </span>
          </h2>
          
          <p className="text-muted-foreground text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already experiencing the future of digital finance with BlockPe.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button className="bg-gradient-to-r from-brand-primary to-brand-primary-light hover:from-brand-primary-dark hover:to-brand-primary text-white px-8 py-4 text-lg rounded-full group shadow-lg">
              <Download className="mr-2 w-5 h-5" />
              Download App
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="border-border text-foreground hover:bg-accent hover:border-brand-primary px-8 py-4 text-lg rounded-full group">
              <BookOpen className="mr-2 w-5 h-5" />
              Read Whitepaper
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Free to use</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
              <span>No hidden fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}