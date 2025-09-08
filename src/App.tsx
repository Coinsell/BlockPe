import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { WalletSection } from './components/WalletSection'
import { PaymentGateway } from './components/PaymentGateway'
import { MarketEnablement } from './components/MarketEnablement'
import { Stats } from './components/Stats'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Header />
        <Hero />
        <Features />
        <WalletSection />
        <PaymentGateway />
        <MarketEnablement />
        <Stats />
        <CTA />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App