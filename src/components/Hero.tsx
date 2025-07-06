'use client'

import { useState } from 'react'

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
      </div>
      
      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <span className="text-white font-semibold text-xl">VxCode</span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="/docs" className="text-gray-300 hover:text-white transition-colors">Docs</a>
            <a href="/about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="/download" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors glow-hover">
              Download VxCode IDE - Free
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-t border-slate-700 px-6 py-4">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="/docs" className="text-gray-300 hover:text-white transition-colors">Docs</a>
              <a href="/about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="/download" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-left">
                Download VxCode IDE - Free
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Collaborate with
            <span className="block gradient-text">Intelligence</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            VxCode IDE integrates seamlessly into your workflow, collaborating with you to 
            maximize performance and efficiency. <span className="text-green-400 font-semibold">Completely free for all developers.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="/download" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 glow-primary">
              Download VxCode IDE - Free
            </a>
            <a href="#features" className="text-blue-400 hover:text-blue-300 text-lg font-semibold flex items-center">
              Explore Features
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Download options */}
          <div className="text-center mb-16">
            <p className="text-gray-400 mb-4">See all download options</p>
            <div className="flex items-center justify-center space-x-6">
              <div className="flex items-center space-x-2 text-gray-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2C5.58 2 2 5.58 2 10c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0018 10c0-4.42-3.58-8-8-8z" />
                </svg>
                <span className="text-sm">Windows</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2L3 7v11h14V7l-7-5z" />
                </svg>
                <span className="text-sm">macOS</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                </svg>
                <span className="text-sm">Linux</span>
              </div>
            </div>
          </div>

          {/* Hero image/demo */}
          <div className="relative">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-1 shadow-2xl animate-float">
              <div className="bg-gray-900 rounded-xl p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-left text-sm font-mono text-gray-300 space-y-2">
                  <div><span className="text-purple-400">@Agent</span> <span className="text-blue-400">#Context</span></div>
                  <div className="text-gray-500">{`// AI is writing your code...`}</div>
                  <div><span className="text-green-400">function</span> <span className="text-yellow-400">createComponent</span>() {'{'}
                  </div>
                  <div className="ml-4"><span className="text-gray-500">{`// VxCode understands your intent`}</span></div>
                  <div className="ml-4"><span className="text-blue-400">return</span> <span className="text-red-400">&lt;Component /&gt;</span></div>
                  <div>{'}'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  )
}
