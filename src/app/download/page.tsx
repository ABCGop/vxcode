import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Download VxCode AI - Free AI-Powered IDE',
  description: 'Download VxCode AI for Windows, macOS, and Linux. Get the most advanced AI-powered IDE completely free.',
}

export default function DownloadPage() {
  const downloadOptions = [
    {
      platform: 'Windows',
      version: '1.0.0',
      size: '125 MB',
      filename: 'vxcode-ai-setup.exe',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M0 3.449L9.75 2.1v9.451H0V3.449zm10.949-1.59L24 0v11.4H10.949V1.859zM0 12.6h9.75v9.451L0 20.699V12.6zm10.949 0H24V24l-13.051-1.351V12.6z"/>
        </svg>
      ),
      requirements: 'Windows 10 or later (64-bit)',
      installer: true,
      available: true
    },
    {
      platform: 'macOS',
      version: '1.0.0',
      size: '118 MB',
      filename: 'vxcode-ai.dmg',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
        </svg>
      ),
      requirements: 'macOS 10.15 or later',
      installer: true,
      available: false
    },
    {
      platform: 'Linux',
      version: '1.0.0',
      size: '142 MB',
      filename: 'vxcode-ai.deb',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.504 0C5.437 0-.006 5.437-.006 12.504S5.437 25.008 12.504 25.008 25.008 19.571 25.008 12.504-.006 0 12.504 0zm-.427 4.93c4.182 0 7.573 3.391 7.573 7.574s-3.391 7.574-7.573 7.574-7.574-3.391-7.574-7.574 3.392-7.574 7.574-7.574z"/>
        </svg>
      ),
      requirements: 'Ubuntu 18.04+ / Debian 10+',
      installer: true,
      available: false
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Download <span className="gradient-text">VxCode AI</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get the most advanced AI-powered IDE. Completely free, no registration required.
          </p>
          <div className="inline-flex items-center space-x-2 bg-green-900/20 border border-green-500/30 rounded-lg px-4 py-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-semibold">Version 1.0.0 - Latest Stable</span>
          </div>
        </div>

        {/* Main Download Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {downloadOptions.map((option, index) => (
            <div key={index} className={`bg-white/5 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 transition-all duration-300 group ${option.available ? 'hover:bg-white/10' : 'opacity-75'}`}>
              <div className={`flex items-center justify-center w-16 h-16 rounded-2xl mb-6 mx-auto transition-colors ${option.available ? 'bg-blue-600/20 group-hover:bg-blue-600/30' : 'bg-gray-600/20'}`}>
                <div className={option.available ? "text-blue-400" : "text-gray-500"}>
                  {option.icon}
                </div>
              </div>
              
              <div className="relative mb-2">
                <h3 className="text-2xl font-bold text-white text-center">{option.platform}</h3>
                {!option.available && (
                  <div className="absolute -top-2 right-1/2 transform translate-x-1/2 bg-yellow-600 text-yellow-100 text-xs px-2 py-1 rounded-full font-semibold">
                    Under Development
                  </div>
                )}
              </div>
              
              <p className="text-gray-400 text-center mb-6">{option.requirements}</p>
              
              <div className="space-y-3 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Version:</span>
                  <span className="text-white">{option.version}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Size:</span>
                  <span className="text-white">{option.size}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">File:</span>
                  <span className="text-white font-mono text-xs">{option.filename}</span>
                </div>
              </div>
              
              <button 
                className={`w-full font-semibold py-3 px-6 rounded-lg transition-all duration-300 ${
                  option.available 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105 glow-primary' 
                    : 'bg-gray-600 text-gray-300 cursor-not-allowed'
                }`}
                disabled={!option.available}
              >
                {option.available ? `Download for ${option.platform}` : 'Coming Soon'}
              </button>
            </div>
          ))}
        </div>

        {/* System Requirements */}
        <div className="bg-white/5 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">System Requirements</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 3.449L9.75 2.1v9.451H0V3.449zm10.949-1.59L24 0v11.4H10.949V1.859zM0 12.6h9.75v9.451L0 20.699V12.6zm10.949 0H24V24l-13.051-1.351V12.6z"/>
                </svg>
                Windows
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Windows 10 or later (64-bit)</li>
                <li>• 4 GB RAM minimum (8 GB recommended)</li>
                <li>• 2 GB free disk space</li>
                <li>• Internet connection for AI features</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
                </svg>
                macOS
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• macOS 10.15 (Catalina) or later</li>
                <li>• 4 GB RAM minimum (8 GB recommended)</li>
                <li>• 2 GB free disk space</li>
                <li>• Internet connection for AI features</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.504 0C5.437 0-.006 5.437-.006 12.504S5.437 25.008 12.504 25.008 25.008 19.571 25.008 12.504-.006 0 12.504 0zm-.427 4.93c4.182 0 7.573 3.391 7.573 7.574s-3.391 7.574-7.573 7.574-7.574-3.391-7.574-7.574 3.392-7.574 7.574-7.574z"/>
                </svg>
                Linux
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Ubuntu 18.04+ / Debian 10+</li>
                <li>• 4 GB RAM minimum (8 GB recommended)</li>
                <li>• 2 GB free disk space</li>
                <li>• Internet connection for AI features</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Installation Instructions */}
        <div className="bg-white/5 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Installation Instructions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Windows</h3>
              <ol className="space-y-3 text-gray-300">
                <li className="flex">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                  Download the VxCode AI installer (.exe file)
                </li>
                <li className="flex">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                  Run the installer as administrator
                </li>
                <li className="flex">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                  Follow the installation wizard
                </li>
                <li className="flex">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                  Launch VxCode AI from Start Menu
                </li>
              </ol>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">macOS</h3>
              <ol className="space-y-3 text-gray-300">
                <li className="flex">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                  Download the VxCode AI disk image (.dmg file)
                </li>
                <li className="flex">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                  Open the downloaded .dmg file
                </li>
                <li className="flex">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                  Drag VxCode AI to Applications folder
                </li>
                <li className="flex">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                  Launch from Applications or Spotlight
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Release Notes */}
        <div className="bg-white/5 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">What's New in v1.0.0</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-500 rounded-full w-2 h-2 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">🎉 Initial Release</h3>
                  <p className="text-gray-300">VxCode AI's first stable release with full AI-powered development capabilities.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 rounded-full w-2 h-2 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">🤖 Advanced AI Agents</h3>
                  <p className="text-gray-300">Intelligent AI agents that understand your codebase and provide contextual assistance.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-purple-500 rounded-full w-2 h-2 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">⚡ Cue Autocomplete</h3>
                  <p className="text-gray-300">Predictive code completion that learns from your coding patterns and project context.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-500 rounded-full w-2 h-2 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">🔒 Privacy-First Design</h3>
                  <p className="text-gray-300">Local-first approach with minimal data collection and maximum privacy protection.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-white mb-4">Need Help?</h2>
          <p className="text-gray-300 mb-6">
            Check our documentation or contact support if you need assistance with installation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/docs" className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              View Documentation
            </a>
            <a href="mailto:support@vxcode.ai" className="text-blue-400 hover:text-blue-300 px-6 py-3 rounded-lg font-medium transition-colors border border-blue-400/30 hover:border-blue-300/50">
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
