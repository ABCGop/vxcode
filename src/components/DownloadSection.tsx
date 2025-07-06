export default function DownloadSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Transform Your Coding Experience?
        </h2>
        <p className="text-xl text-blue-100 mb-12 leading-relaxed">
          Join thousands of developers who are already experiencing the future of AI-powered development with VxCode.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <a href="/download" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg">
            Download VxCode IDE - Free
          </a>
          <a href="#features" className="text-blue-200 hover:text-white text-lg font-semibold flex items-center">
            View All Features
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
