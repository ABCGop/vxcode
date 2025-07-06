export default function AgentSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Collaborate with <span className="gradient-text">VXCODE</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            VxCode enables natural conversations to unlock possibilities for Human-AI collaboration: 
            just @Agent #Context, and VxCode will get your work done.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Agent */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl font-bold">#</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Agent</h3>
            <p className="text-gray-600 mb-6">
              Customize your own AI Agents. VxCode introduces a powerful, fully configurable agent system 
              designed for openness. Use Builder, the built-in agent, to quickly complete tasks, or create 
              your own AI team by customizing tools, skills, and logic—each agent focuses on what it does best.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg text-left text-sm font-mono text-gray-700">
              <div className="text-purple-600">@Agent</div>
              <div className="mt-2">Create a new React component for user authentication</div>
            </div>
          </div>

          {/* Tool */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-green-500 to-teal-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">🔧</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Tool</h3>
            <p className="text-gray-600 mb-6">
              More tools, more capabilities. VxCode supports integration with various external tools and 
              enables agents to use them. Currently, it supports the Model Context Protocol (MCP), 
              which allows agents to access external resources to better execute your tasks.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg text-left text-sm font-mono text-gray-700">
              <div className="text-green-600">#Tool</div>
              <div className="mt-2">• Git integration</div>
              <div>• Package manager</div>
              <div>• Database tools</div>
            </div>
          </div>

          {/* Context */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-orange-500 to-red-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">📋</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Context</h3>
            <p className="text-gray-600 mb-6">
              More context, more accuracy. VxCode can deeply understand your development context through 
              your code repositories on the IDE, as well as external information from online searches 
              and documents that you share.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg text-left text-sm font-mono text-gray-700">
              <div className="text-orange-600">#Context</div>
              <div className="mt-2">📁 Workspace</div>
              <div>📂 Folder</div>
              <div>📄 Files</div>
              <div>💻 Code</div>
              <div>🌐 Web</div>
              <div>📄 Doc···</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            With VxCode, AI truly works for you.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <a href="/download" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Try VxCode Now
            </a>
            <a href="#features" className="text-blue-600 hover:text-blue-700 font-semibold">
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
