import { Button } from './ui/button'
import { Input } from './ui/input'
import { Twitter, Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-card border-t border-border px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-brand-primary to-brand-primary-light rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-card-foreground text-xl font-bold">BlockPe</span>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Empowering the future of digital finance with secure, fast, and user-friendly crypto solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-accent hover:bg-brand-primary/20 rounded-lg flex items-center justify-center text-muted-foreground hover:text-brand-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-accent hover:bg-brand-primary/20 rounded-lg flex items-center justify-center text-muted-foreground hover:text-brand-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-accent hover:bg-brand-primary/20 rounded-lg flex items-center justify-center text-muted-foreground hover:text-brand-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-accent hover:bg-brand-primary/20 rounded-lg flex items-center justify-center text-muted-foreground hover:text-brand-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-6">
            <h3 className="text-card-foreground text-lg font-semibold">Products</h3>
            <div className="space-y-3">
              {['BlockPe Wallet', 'Payment Gateway', 'Market Enablement', 'API Documentation', 'Mobile App'].map((item, index) => (
                <a key={index} href="#" className="block text-muted-foreground hover:text-brand-primary transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="text-card-foreground text-lg font-semibold">Company</h3>
            <div className="space-y-3">
              {['About Us', 'Careers', 'Press Kit', 'Blog', 'Contact'].map((item, index) => (
                <a key={index} href="#" className="block text-muted-foreground hover:text-brand-primary transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-card-foreground text-lg font-semibold">Stay Updated</h3>
            <p className="text-muted-foreground text-sm">
              Get the latest updates about new features and announcements.
            </p>
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-background border-border text-foreground placeholder-muted-foreground focus:border-brand-primary"
              />
              <Button className="w-full bg-gradient-to-r from-brand-primary to-brand-primary-light hover:from-brand-primary-dark hover:to-brand-primary text-white shadow-lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © 2024 BlockPe. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-brand-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-brand-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-brand-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}