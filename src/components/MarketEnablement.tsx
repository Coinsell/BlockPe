import { Button } from './ui/button'
import { TrendingUp, PieChart, Coins, Target, ArrowUpRight } from 'lucide-react'

export function MarketEnablement() {
  return (
    <section id="market" className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-cyan-500/5"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-500/10 rounded-full border border-green-500/20 mb-6">
            <span className="text-green-400 text-sm font-medium">📈 Market Enablement</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Unlock DeFi
            <br />
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Opportunities
            </span>
          </h2>
          
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
            Access advanced DeFi protocols, yield farming, staking, and trading features 
            all from one unified platform. Maximize your crypto potential.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* DeFi Protocols */}
          <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border hover:border-green-500/50 transition-all duration-300 group">
            <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Coins className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-card-foreground mb-4">DeFi Protocols</h3>
            <p className="text-muted-foreground mb-6">
              Connect to leading DeFi protocols like Uniswap, Compound, and Aave directly from your wallet.
            </p>
            <div className="space-y-2">
              {['Uniswap V3', 'Compound', 'Aave', 'Curve Finance'].map((protocol, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-accent rounded-lg">
                  <span className="text-muted-foreground text-sm">{protocol}</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Yield Farming */}
          <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border hover:border-green-500/50 transition-all duration-300 group">
            <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-card-foreground mb-4">Yield Farming</h3>
            <p className="text-muted-foreground mb-6">
              Earn passive income by providing liquidity to various DeFi protocols with optimized strategies.
            </p>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">ETH-USDC Pool</span>
                <span className="text-green-400 font-semibold">12.5% APY</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">BTC-ETH Pool</span>
                <span className="text-green-400 font-semibold">8.7% APY</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">USDT Lending</span>
                <span className="text-green-400 font-semibold">6.2% APY</span>
              </div>
            </div>
          </div>

          {/* Portfolio Analytics */}
          <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border hover:border-green-500/50 transition-all duration-300 group">
            <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <PieChart className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-card-foreground mb-4">Portfolio Analytics</h3>
            <p className="text-muted-foreground mb-6">
              Track your DeFi positions, yields, and performance with advanced analytics and insights.
            </p>
            <div className="space-y-3">
              <div className="bg-accent p-3 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-muted-foreground text-sm">Total Value Locked</span>
                  <ArrowUpRight className="w-4 h-4 text-green-400" />
                </div>
                <div className="text-xl font-bold text-foreground">$45,892</div>
                <div className="text-green-400 text-sm">+15.3% (30d)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Trading Interface Preview */}
        <div className="bg-card p-8 rounded-2xl border border-border shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-card-foreground">Advanced Trading Tools</h3>
              <p className="text-muted-foreground">
                Professional-grade trading interface with advanced charting, 
                order types, and market analysis tools.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-accent p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-foreground">$2.5M</div>
                  <div className="text-muted-foreground text-sm">24h Volume</div>
                </div>
                <div className="bg-accent p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-foreground">0.05%</div>
                  <div className="text-muted-foreground text-sm">Trading Fees</div>
                </div>
              </div>
              <Button className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white px-8 py-3 rounded-full">
                Start Trading
              </Button>
            </div>
            
            <div className="bg-background p-6 rounded-xl border border-border">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-foreground font-semibold">BTC/USDT</h4>
                <div className="text-green-400 text-sm">+2.45%</div>
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">$43,250.00</div>
              <div className="h-32 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-lg flex items-end justify-center mb-4">
                <div className="text-muted-foreground text-sm">Chart Placeholder</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button className="bg-green-500 text-white py-2 rounded-lg font-medium">Buy</button>
                <button className="bg-red-500 text-white py-2 rounded-lg font-medium">Sell</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}