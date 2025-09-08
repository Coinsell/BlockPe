import { useState } from 'react'
import { Button } from './ui/button'
import { Menu, X, Sun, Moon, Monitor } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const cycleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme('system')
    } else {
      setTheme('light')
    }
  }

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="h-5 w-5" />
      case 'dark':
        return <Moon className="h-5 w-5" />
      case 'system':
        return <Monitor className="h-5 w-5" />
      default:
        return <Sun className="h-5 w-5" />
    }
  }

  const getThemeLabel = () => {
    switch (theme) {
      case 'light':
        return 'Light Mode'
      case 'dark':
        return 'Dark Mode'
      case 'system':
        return 'System Mode'
      default:
        return 'Light Mode'
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-brand-primary to-brand-primary-light rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="text-foreground text-xl font-bold">BlockPe</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#wallet" className="text-muted-foreground hover:text-brand-primary transition-colors">
              Wallet
            </a>
            <a href="#payment" className="text-muted-foreground hover:text-brand-primary transition-colors">
              Payment Gateway
            </a>
            <a href="#market" className="text-muted-foreground hover:text-brand-primary transition-colors">
              Market
            </a>
            <a href="#about" className="text-muted-foreground hover:text-brand-primary transition-colors">
              About
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={cycleTheme}
              className="text-foreground hover:bg-accent"
              title={getThemeLabel()}
            >
              {getThemeIcon()}
            </Button>
            <Button variant="ghost" className="text-foreground hover:bg-accent">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-brand-primary to-brand-primary-light hover:from-brand-primary-dark hover:to-brand-primary text-white shadow-lg">
              Get Started
            </Button>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#wallet" className="text-muted-foreground hover:text-brand-primary transition-colors">
                Wallet
              </a>
              <a href="#payment" className="text-muted-foreground hover:text-brand-primary transition-colors">
                Payment Gateway
              </a>
              <a href="#market" className="text-muted-foreground hover:text-brand-primary transition-colors">
                Market
              </a>
              <a href="#about" className="text-muted-foreground hover:text-brand-primary transition-colors">
                About
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button
                  variant="ghost"
                  onClick={cycleTheme}
                  className="text-foreground hover:bg-accent justify-start"
                >
                  {getThemeIcon()}
                  <span className="ml-2">{getThemeLabel()}</span>
                </Button>
                <Button variant="ghost" className="text-foreground hover:bg-accent justify-start">
                  Sign In
                </Button>
                <Button className="bg-gradient-to-r from-brand-primary to-brand-primary-light hover:from-brand-primary-dark hover:to-brand-primary text-white justify-start shadow-lg">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}