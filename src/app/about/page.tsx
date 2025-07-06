import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About VxCode AI - Created by Vishesh Gangwar',
  description: 'Learn about VxCode AI, an innovative AI-powered IDE created by Vishesh Gangwar, a passionate student developer from KV AFS Bareilly.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="gradient-text">VxCode AI</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The future of AI-powered development, crafted with passion and innovation.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Vision Section */}
          <div className="bg-white/5 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              VxCode AI represents the next evolution in integrated development environments. 
              We believe that AI should enhance human creativity, not replace it. Our platform 
              empowers developers to write better code faster, while maintaining full control 
              over their development process.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              With intelligent AI agents, predictive autocomplete, and privacy-first design, 
              VxCode AI transforms the way developers work, making coding more intuitive, 
              efficient, and enjoyable.
            </p>
          </div>

          {/* Creator Section */}
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500/30 hover:border-blue-400/50 transition-colors">
                  <Image 
                    src="https://github.com/ABCGop.png" 
                    alt="Vishesh Gangwar - Creator of VxCode AI"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold text-white mb-4">Meet the Creator</h2>
                <h3 className="text-2xl font-semibold text-blue-400 mb-2">Vishesh Gangwar</h3>
                
                <div className="space-y-2 mb-6">
                  <p className="text-gray-300 text-lg">
                    <span className="font-semibold text-white">Class:</span> 11th Grade
                  </p>
                  <p className="text-gray-300 text-lg">
                    <span className="font-semibold text-white">Stream:</span> PCM + Computer Science
                  </p>
                  <p className="text-gray-300 text-lg">
                    <span className="font-semibold text-white">School:</span> Kendriya Vidyalaya AFS Bareilly
                  </p>
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  At just 16 years old, Vishesh is a passionate student developer with a vision 
                  to revolutionize the coding experience. Combining his academic excellence in 
                  mathematics, physics, chemistry, and computer science with a deep love for 
                  technology, he created VxCode AI to bridge the gap between human creativity 
                  and artificial intelligence.
                </p>
                
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <span className="bg-blue-600/20 border border-blue-500/30 text-blue-400 px-4 py-2 rounded-lg font-medium">
                    Student Developer
                  </span>
                  <span className="bg-purple-600/20 border border-purple-500/30 text-purple-400 px-4 py-2 rounded-lg font-medium">
                    AI Enthusiast
                  </span>
                  <span className="bg-green-600/20 border border-green-500/30 text-green-400 px-4 py-2 rounded-lg font-medium">
                    Open Source Advocate
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Journey Section */}
          <div className="bg-white/5 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">The Journey</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 rounded-full w-3 h-3 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">The Inspiration</h3>
                  <p className="text-gray-300">
                    While studying computer science and working on various coding projects, 
                    Vishesh noticed the challenges developers face with traditional IDEs and 
                    the untapped potential of AI in software development.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-purple-500 rounded-full w-3 h-3 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">The Vision</h3>
                  <p className="text-gray-300">
                    Combining his academic knowledge with practical coding experience, 
                    Vishesh envisioned an IDE that would understand developers' needs and 
                    provide intelligent assistance without compromising privacy or control.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-500 rounded-full w-3 h-3 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">The Creation</h3>
                  <p className="text-gray-300">
                    Through months of research, development, and testing, VxCode AI was born - 
                    a testament to what young minds can achieve when passion meets purpose.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-white/5 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">🚀</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Innovation</h3>
                    <p className="text-gray-300">Pushing the boundaries of what's possible in developer tools.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">🔒</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Privacy</h3>
                    <p className="text-gray-300">Your code and data remain secure and private at all times.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">🎯</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Accessibility</h3>
                    <p className="text-gray-300">Making advanced AI tools available to every developer, everywhere.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">🌟</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Excellence</h3>
                    <p className="text-gray-300">Committed to delivering the highest quality developer experience.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Join the Future of Development</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Experience the next generation of AI-powered development tools. 
              Download VxCode AI today and be part of the coding revolution.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="/download" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 glow-primary"
              >
                Download VxCode AI
              </a>
              <a 
                href="/docs" 
                className="text-blue-400 hover:text-blue-300 px-8 py-3 rounded-lg font-medium transition-colors border border-blue-400/30 hover:border-blue-300/50"
              >
                Explore Documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
