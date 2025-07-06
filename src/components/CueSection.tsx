export default function CueSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">#Cue</span> Predicts your next edit with a single Tab
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Cue understands your intent deeper and anticipates your next move with just one 
              keystroke. Hit Tab to jump to the next change, or apply smart suggestions across 
              multiple lines at once. We've optimized our model to think ahead with you. Just Tab.
            </p>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors glow-hover">
                Try Cue Now
              </button>
              <span className="text-gray-400">Press Tab to experience the magic</span>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-700">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-4">main.tsx</span>
              </div>
              
              <div className="font-mono text-sm space-y-2">
                <div className="text-gray-400">1  <span className="text-purple-400">import</span> <span className="text-blue-400">React</span> <span className="text-purple-400">from</span> <span className="text-green-400">'react'</span></div>
                <div className="text-gray-400">2  </div>
                <div className="text-gray-400">3  <span className="text-purple-400">function</span> <span className="text-yellow-400">App</span>() {'{'}</div>
                <div className="text-gray-400">4    <span className="text-purple-400">const</span> [count, setCount] = <span className="text-yellow-400">useState</span>(<span className="text-green-400">0</span>)</div>
                <div className="text-gray-400">5  </div>
                <div className="text-gray-400 bg-blue-900/30 px-2 py-1 rounded">6    <span className="text-purple-400">return</span> (</div>
                <div className="text-gray-400">7      <span className="text-red-400">&lt;div</span> <span className="text-blue-400">className</span>=<span className="text-green-400">"app"</span><span className="text-red-400">&gt;</span></div>
                <div className="text-gray-400 bg-blue-900/50 px-2 py-1 rounded animate-pulse">
                  8        <span className="text-red-400">&lt;button</span> <span className="text-blue-400">onClick</span>=<span className="text-yellow-400">{'{'} () =&gt; setCount(count + 1) {'}'}</span><span className="text-red-400">&gt;</span>
                  <span className="bg-blue-600 text-white px-2 py-1 rounded-md ml-2 text-xs">Tab</span>
                </div>
                <div className="text-gray-500">9          Count: {'{'}count{'}'}</div>
                <div className="text-gray-500">10       <span className="text-red-400">&lt;/button&gt;</span></div>
                <div className="text-gray-400">11     <span className="text-red-400">&lt;/div&gt;</span></div>
                <div className="text-gray-400">12   )</div>
                <div className="text-gray-400">13 {'}'}</div>
              </div>
            </div>
            
            {/* Floating suggestion */}
            <div className="absolute -right-4 top-20 bg-blue-600 text-white p-3 rounded-lg shadow-xl animate-pulse-slow">
              <div className="text-xs font-semibold mb-1">Cue Suggestion</div>
              <div className="text-sm">Add onClick handler</div>
              <div className="text-xs text-blue-200 mt-1">Press Tab to apply</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
