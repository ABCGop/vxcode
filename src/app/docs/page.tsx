import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Documentation - VxCode AI',
  description: 'Complete documentation for VxCode AI - Learn how to use our AI-powered IDE effectively',
}

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Documentation</h1>
          <p className="text-xl text-blue-100 mb-8">
            Learn how to harness the full power of VxCode AI for your development workflow
          </p>
          
          {/* Quick Search */}
          <div className="max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full px-4 py-3 pl-12 rounded-lg text-gray-900 bg-white/90 backdrop-blur"
              />
              <svg className="absolute left-4 top-3.5 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-1">
            <nav className="sticky top-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Documentation</h3>
                <ul className="space-y-2">
                  <li><a href="#getting-started" className="text-blue-600 hover:text-blue-700 font-medium">Getting Started</a></li>
                  <li><a href="#installation" className="text-gray-600 hover:text-gray-700">Installation</a></li>
                  <li><a href="#features" className="text-gray-600 hover:text-gray-700">Core Features</a></li>
                  <li><a href="#agents" className="text-gray-600 hover:text-gray-700">AI Agents</a></li>
                  <li><a href="#cue" className="text-gray-600 hover:text-gray-700">Cue Autocomplete</a></li>
                  <li><a href="#context" className="text-gray-600 hover:text-gray-700">Context Management</a></li>
                  <li><a href="#tools" className="text-gray-600 hover:text-gray-700">External Tools</a></li>
                  <li><a href="#shortcuts" className="text-gray-600 hover:text-gray-700">Keyboard Shortcuts</a></li>
                  <li><a href="#troubleshooting" className="text-gray-600 hover:text-gray-700">Troubleshooting</a></li>
                  <li><a href="#api" className="text-gray-600 hover:text-gray-700">API Reference</a></li>
                </ul>
              </div>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            {/* Getting Started */}
            <section id="getting-started" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Getting Started</h2>
              <p className="text-lg text-gray-700 mb-6">
                Welcome to VxCode AI! This guide will help you get up and running with our AI-powered IDE 
                in just a few minutes.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="text-3xl mb-4">📥</div>
                  <h3 className="font-semibold text-gray-900 mb-2">1. Download</h3>
                  <p className="text-gray-600 text-sm">
                    Download VxCode AI for your operating system. Available for Windows, macOS, and Linux.
                  </p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="text-3xl mb-4">⚙️</div>
                  <h3 className="font-semibold text-gray-900 mb-2">2. Install</h3>
                  <p className="text-gray-600 text-sm">
                    Run the installer and follow the setup wizard. No complex configuration required.
                  </p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <div className="text-3xl mb-4">🚀</div>
                  <h3 className="font-semibold text-gray-900 mb-2">3. Start Coding</h3>
                  <p className="text-gray-600 text-sm">
                    Open your project and experience AI-powered development with intelligent assistance.
                  </p>
                </div>
              </div>
            </section>

            {/* Installation */}
            <section id="installation" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Installation</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">System Requirements</h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Windows</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>Windows 10 version 1903+</li>
                          <li>8GB RAM minimum</li>
                          <li>2GB free disk space</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">macOS</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>macOS 10.15+</li>
                          <li>8GB RAM minimum</li>
                          <li>2GB free disk space</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Linux</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>Ubuntu 18.04+</li>
                          <li>8GB RAM minimum</li>
                          <li>2GB free disk space</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Download Options</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">VxCode AI for Windows</h4>
                          <p className="text-sm text-gray-600">vxcode-ai-setup.exe (125 MB)</p>
                        </div>
                      </div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">
                        Download
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">VxCode AI for macOS</h4>
                          <p className="text-sm text-gray-600">vxcode-ai.dmg (118 MB)</p>
                        </div>
                      </div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Core Features */}
            <section id="features" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Features</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">AI-Powered Code Completion</h3>
                  <p className="text-gray-700 mb-4">
                    VxCode AI provides intelligent code suggestions based on your context, coding patterns, 
                    and project structure. Our AI understands multiple programming languages and frameworks.
                  </p>
                  <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-300">
                    <div className="text-green-400">{`// Type: function calculateTotal`}</div>
                    <div className="text-blue-400">function</div> <span className="text-yellow-400">calculateTotal</span>(<span className="text-purple-400">items</span>) {'{'}
                    <div className="ml-4 text-gray-500">{`// AI suggests: return items.reduce((sum, item) => sum + item.price, 0);`}</div>
                    <div className="ml-4"><span className="text-blue-400">return</span> items.<span className="text-yellow-400">reduce</span>(...)</div>
                    {'}'}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-time Error Detection</h3>
                  <p className="text-gray-700 mb-4">
                    Get instant feedback on potential issues in your code with AI-powered error detection 
                    and suggested fixes.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Code Refactoring</h3>
                  <p className="text-gray-700 mb-4">
                    Automatically improve your code structure with intelligent refactoring suggestions 
                    that maintain functionality while improving readability and performance.
                  </p>
                </div>
              </div>
            </section>

            {/* AI Agents */}
            <section id="agents" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">AI Agents</h2>
              
              <p className="text-lg text-gray-700 mb-6">
                AI Agents are specialized assistants that help you with specific development tasks. 
                You can interact with them using natural language commands.
              </p>

              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">@Agent Command Syntax</h3>
                  <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
                    <div className="text-purple-600">@Agent</div>
                    <div className="mt-2 text-gray-700">Create a React component for user authentication</div>
                  </div>
                  <p className="text-gray-600 mt-3">
                    Simply type @Agent followed by your request in natural language.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Builder Agent</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      Built-in agent for general development tasks, code generation, and project setup.
                    </p>
                    <div className="text-xs font-mono bg-white p-2 rounded">
                      @Agent build a REST API endpoint
                    </div>
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Debug Agent</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      Specialized in finding and fixing bugs, analyzing error logs, and optimization.
                    </p>
                    <div className="text-xs font-mono bg-white p-2 rounded">
                      @Agent debug this memory leak
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Cue Autocomplete */}
            <section id="cue" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cue Autocomplete</h2>
              
              <p className="text-lg text-gray-700 mb-6">
                Cue is our advanced autocomplete system that predicts your next edit with incredible accuracy. 
                Simply press Tab to accept suggestions or navigate through multiple options.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">How Cue Works</h3>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Cue analyzes your current code context and patterns</li>
                    <li>It predicts the most likely next lines of code</li>
                    <li>Suggestions appear as ghost text or inline popups</li>
                    <li>Press Tab to accept, or use arrow keys to navigate options</li>
                  </ol>
                </div>

                <div className="bg-gray-50 border-l-4 border-blue-400 p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">💡 Pro Tip</h4>
                  <p className="text-gray-700">
                    Cue learns from your coding patterns. The more you use it, the better it becomes 
                    at predicting your specific coding style and preferences.
                  </p>
                </div>
              </div>
            </section>

            {/* Context Management */}
            <section id="context" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Context Management</h2>
              
              <p className="text-lg text-gray-700 mb-6">
                Context is how VxCode AI understands your project structure, dependencies, and 
                development environment to provide more accurate assistance.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Context Types</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">📁 Workspace</h4>
                      <p className="text-sm text-gray-600">Entire project directory and file structure</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">📂 Folder</h4>
                      <p className="text-sm text-gray-600">Specific directory and its contents</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">📄 Files</h4>
                      <p className="text-sm text-gray-600">Individual files and their content</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">💻 Code</h4>
                      <p className="text-sm text-gray-600">Specific code blocks or functions</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">🌐 Web</h4>
                      <p className="text-sm text-gray-600">External documentation and resources</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">📄 Docs</h4>
                      <p className="text-sm text-gray-600">Project documentation and README files</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Using Context in Commands</h3>
                  <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-300">
                    <div className="text-purple-400">@Agent</div>
                    <div className="text-orange-400">#Context</div> <span className="text-gray-300">src/components/</span>
                    <div className="mt-2 text-gray-300">Create a new component following the patterns in this folder</div>
                  </div>
                </div>
              </div>
            </section>

            {/* External Tools */}
            <section id="tools" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">External Tools Integration</h2>
              
              <p className="text-lg text-gray-700 mb-6">
                VxCode AI seamlessly integrates with your favorite development tools and services 
                to enhance your workflow.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Git Integration</h3>
                  <p className="text-gray-600 text-sm">
                    Built-in Git support with intelligent commit messages and branch management.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Package Managers</h3>
                  <p className="text-gray-600 text-sm">
                    Support for npm, yarn, pip, cargo, and other package management systems.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Database Tools</h3>
                  <p className="text-gray-600 text-sm">
                    Direct integration with databases for schema exploration and query assistance.
                  </p>
                </div>
              </div>
            </section>

            {/* Keyboard Shortcuts */}
            <section id="shortcuts" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Keyboard Shortcuts</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">General Shortcuts</h3>
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Action</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Windows/Linux</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">macOS</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-900">Open Command Palette</td>
                          <td className="px-4 py-3 text-sm text-gray-600 font-mono">Ctrl + Shift + P</td>
                          <td className="px-4 py-3 text-sm text-gray-600 font-mono">Cmd + Shift + P</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-900">Quick File Open</td>
                          <td className="px-4 py-3 text-sm text-gray-600 font-mono">Ctrl + P</td>
                          <td className="px-4 py-3 text-sm text-gray-600 font-mono">Cmd + P</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-900">Toggle Terminal</td>
                          <td className="px-4 py-3 text-sm text-gray-600 font-mono">Ctrl + `</td>
                          <td className="px-4 py-3 text-sm text-gray-600 font-mono">Cmd + `</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">AI-Specific Shortcuts</h3>
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Action</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Shortcut</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-900">Accept Cue suggestion</td>
                          <td className="px-4 py-3 text-sm text-gray-600 font-mono">Tab</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-900">Restart VxCode AI</td>
                          <td className="px-4 py-3 text-sm text-gray-600 font-mono">Ctrl + Shift + A</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-900">Next suggestion</td>
                          <td className="px-4 py-3 text-sm text-gray-600 font-mono">Alt + ]</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-900">Previous suggestion</td>
                          <td className="px-4 py-3 text-sm text-gray-600 font-mono">Alt + [</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            {/* Troubleshooting */}
            <section id="troubleshooting" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Troubleshooting</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Common Issues</h3>
                  
                  <div className="space-y-4">
                    <details className="bg-gray-50 rounded-lg p-4">
                      <summary className="font-medium text-gray-900 cursor-pointer">
                        AI suggestions are not appearing
                      </summary>
                      <div className="mt-3 text-gray-700 text-sm">
                        <p className="mb-2">Try the following solutions:</p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Check your internet connection</li>
                          <li>Restart VxCode AI</li>
                          <li>Verify that AI features are enabled in settings</li>
                          <li>Clear the cache and reload your project</li>
                        </ul>
                      </div>
                    </details>

                    <details className="bg-gray-50 rounded-lg p-4">
                      <summary className="font-medium text-gray-900 cursor-pointer">
                        Slow performance
                      </summary>
                      <div className="mt-3 text-gray-700 text-sm">
                        <p className="mb-2">Performance optimization tips:</p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Close unused files and projects</li>
                          <li>Reduce the number of active extensions</li>
                          <li>Check available system memory</li>
                          <li>Update to the latest version</li>
                        </ul>
                      </div>
                    </details>

                    <details className="bg-gray-50 rounded-lg p-4">
                      <summary className="font-medium text-gray-900 cursor-pointer">
                        Context not loading properly
                      </summary>
                      <div className="mt-3 text-gray-700 text-sm">
                        <p className="mb-2">Context loading issues:</p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Ensure project files are saved</li>
                          <li>Check file permissions</li>
                          <li>Reindex the project workspace</li>
                          <li>Verify supported file types</li>
                        </ul>
                      </div>
                    </details>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Need More Help?</h4>
                  <p className="text-gray-700 mb-4">
                    If you&apos;re still experiencing issues, our support team is here to help.
                  </p>
                  <div className="flex space-x-4">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">
                      Contact Support
                    </button>
                    <a href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      Join Community →
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* API Reference */}
            <section id="api" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">API Reference</h2>
              
              <p className="text-lg text-gray-700 mb-6">
                VxCode AI provides several APIs for extending functionality and integrating with external tools.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Extension API</h3>
                  <p className="text-gray-700 mb-4">
                    Build custom extensions to enhance VxCode AI&apos;s capabilities for your specific workflow.
                  </p>
                  <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-300">
                    <div className="text-blue-400">import</div> {`{ VxCodeAPI }`} <div className="text-blue-400 inline">from</div> <div className="text-green-400 inline">&apos;@vxcode/api&apos;</div>
                    <br /><br />
                    <div className="text-blue-400">const</div> <span className="text-yellow-400">extension</span> = <span className="text-blue-400">new</span> <span className="text-yellow-400">VxCodeAPI</span>.<span className="text-purple-400">Extension</span>({`{`}
                    <div className="ml-4">name: <span className="text-green-400">&apos;MyExtension&apos;</span>,</div>
                    <div className="ml-4">version: <span className="text-green-400">&apos;1.0.0&apos;</span></div>
                    {`}`})
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Context API</h3>
                  <p className="text-gray-700 mb-4">
                    Programmatically manage context for better AI assistance.
                  </p>
                  <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-300">
                    <div className="text-green-400">{`// Add files to context`}</div>
                    <div className="text-yellow-400">VxCodeAPI</div>.<span className="text-purple-400">context</span>.<span className="text-blue-400">addFiles</span>([<span className="text-green-400">&apos;src/utils.js&apos;</span>])
                    <br /><br />
                    <div className="text-green-400">{`// Get current context`}</div>
                    <div className="text-blue-400">const</div> <span className="text-yellow-400">context</span> = <div className="text-blue-400 inline">await</div> <span className="text-yellow-400">VxCodeAPI</span>.<span className="text-purple-400">context</span>.<span className="text-blue-400">getCurrent</span>()
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Agent API</h3>
                  <p className="text-gray-700 mb-4">
                    Create custom AI agents with specialized capabilities.
                  </p>
                  <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-300">
                    <div className="text-blue-400">const</div> <span className="text-yellow-400">customAgent</span> = <span className="text-blue-400">new</span> <span className="text-yellow-400">VxCodeAPI</span>.<span className="text-purple-400">Agent</span>({`{`}
                    <div className="ml-4">name: <span className="text-green-400">&apos;TestAgent&apos;</span>,</div>
                    <div className="ml-4">description: <span className="text-green-400">&apos;Specialized in writing tests&apos;</span>,</div>
                    <div className="ml-4">capabilities: [<span className="text-green-400">&apos;testing&apos;</span>, <span className="text-green-400">&apos;debugging&apos;</span>]</div>
                    {`}`})
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* Footer Navigation */}
      <footer className="bg-gray-50 py-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium">
                ← Back to Home
              </Link>
              <a href="#getting-started" className="text-gray-600 hover:text-gray-700">
                Getting Started
              </a>
              <a href="#features" className="text-gray-600 hover:text-gray-700">
                Features
              </a>
              <a href="#troubleshooting" className="text-gray-600 hover:text-gray-700">
                Troubleshooting
              </a>
            </div>
            <div className="text-gray-500 text-sm">
              Last updated: January 2025
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
