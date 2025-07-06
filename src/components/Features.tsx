export default function Features() {
  const features = [
    {
      title: "AI-Powered Collaboration",
      description: "Work alongside intelligent AI agents that understand your codebase and development patterns.",
      icon: "🤖",
    },
    {
      title: "Context Understanding", 
      description: "Deep comprehension of your development workflows through code repositories and external resources.",
      icon: "🧠",
    },
    {
      title: "Smart Autocomplete",
      description: "Predictive coding assistance that anticipates your next move with intelligent suggestions.",
      icon: "⚡",
    },
    {
      title: "Custom Agents",
      description: "Create your own AI team by customizing tools, skills, and logic for specialized tasks.",
      icon: "⚙️",
    },
    {
      title: "Privacy First",
      description: "Local-first approach with minimal data collection and secure encrypted transmission.",
      icon: "🔒",
    },
    {
      title: "Developer Focused",
      description: "Built by developers, for developers. Clean UI/UX optimized for coding workflows.",
      icon: "👨‍💻",
    },
  ]

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="gradient-text"> Modern Development</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            VxCode combines cutting-edge AI technology with developer-friendly design 
            to create the ultimate coding companion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group hover:border-blue-200"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
