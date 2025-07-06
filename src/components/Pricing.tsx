export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "per month, no credit card required",
      features: [
        "10 Fast requests and 50 Slow requests of Premium models / month",
        "1000 Requests of Advanced models / month", 
        "5000 Autocomplete / month"
      ],
      cta: "Download VxCode IDE",
      popular: false
    },
    {
      name: "Pro",
      price: "$31",
      period: "st-Month Discount $10 from the second month, billed monthly",
      features: [
        "600 Fast requests and unlimited Slow requests of Premium models / month",
        "Unlimited Requests of Advanced models",
        "Unlimited Autocomplete"
      ],
      cta: "Get started",
      popular: true
    }
  ]

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pricing
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get started for Free. Upgrade to increase limits.
          </p>
          
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className="text-gray-700 font-medium">Monthly</span>
            <div className="relative">
              <button className="bg-gray-200 rounded-full p-1 w-14 h-8 transition-colors">
                <div className="bg-white w-6 h-6 rounded-full shadow-md transform transition-transform"></div>
              </button>
            </div>
            <span className="text-gray-700 font-medium">
              Yearly
              <span className="bg-green-100 text-green-800 text-xs font-semibold ml-2 px-2 py-1 rounded-full">-25%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${
                plan.popular ? 'border-blue-500 scale-105' : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                </div>
                <p className="text-gray-600 text-sm">{plan.period}</p>
              </div>

              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors mb-8 ${
                plan.popular 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
              }`}>
                {plan.cta}
              </button>

              <div className="space-y-4">
                <p className="font-semibold text-gray-900 mb-4">what you will get</p>
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {plan.name === "Pro" && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <a href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Check out all features →
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Get Started for Free
          </h3>
          <p className="text-gray-600 mb-8">
            Be the first to try VxCode and enjoy the completely free option among powerful AI coding tools now.
          </p>
          <a href="/download" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors glow-hover">
            Download VxCode IDE
          </a>
        </div>
      </div>
    </section>
  )
}
