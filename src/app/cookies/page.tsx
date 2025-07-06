import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy - VxCode AI',
  description: 'Cookie Policy for VxCode AI - Learn about our use of cookies and tracking technologies',
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-gray-300">Last updated: January 1, 2025</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Are Cookies?</h2>
            <p className="text-gray-700 mb-4">
              Cookies are small text files that are stored on your device when you visit a website. 
              They help websites remember information about your visit, which can make your next visit 
              easier and the site more useful to you.
            </p>
            <p className="text-gray-700 mb-4">
              At VxCode AI, we use cookies and similar technologies to provide, secure, analyze, improve, 
              and market our services while respecting your privacy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Essential Cookies</h3>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
              <p className="text-blue-800 font-semibold">Required for basic functionality</p>
              <p className="text-blue-700">
                These cookies are necessary for the website to function properly and cannot be disabled.
              </p>
            </div>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Authentication and session management</li>
              <li>Security and fraud prevention</li>
              <li>Load balancing and performance</li>
              <li>Basic website functionality</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Analytics Cookies</h3>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
              <p className="text-green-800 font-semibold">Help us understand usage patterns</p>
              <p className="text-green-700">
                These cookies collect anonymized information about how visitors use our website.
              </p>
            </div>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Page views and user interactions</li>
              <li>Feature usage statistics</li>
              <li>Performance metrics</li>
              <li>Error tracking and debugging</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Functional Cookies</h3>
            <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
              <p className="text-purple-800 font-semibold">Enhance user experience</p>
              <p className="text-purple-700">
                These cookies remember your preferences and provide enhanced functionality.
              </p>
            </div>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Language and region preferences</li>
              <li>Theme and UI customizations</li>
              <li>Recently used features</li>
              <li>Workspace settings</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Marketing Cookies</h3>
            <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-4">
              <p className="text-orange-800 font-semibold">Optional - Can be disabled</p>
              <p className="text-orange-700">
                These cookies are used to show relevant advertisements and measure campaign effectiveness.
              </p>
            </div>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Targeted advertising</li>
              <li>Social media integration</li>
              <li>Campaign tracking</li>
              <li>Conversion measurement</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Cookies</h2>
            <p className="text-gray-700 mb-4">
              We may use third-party services that set their own cookies. These include:
            </p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 mb-4">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">Service</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Google Analytics</td>
                    <td className="border border-gray-300 px-4 py-2">Website analytics and usage tracking</td>
                    <td className="border border-gray-300 px-4 py-2">Analytics</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Auth0</td>
                    <td className="border border-gray-300 px-4 py-2">User authentication and session management</td>
                    <td className="border border-gray-300 px-4 py-2">Essential</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Intercom</td>
                    <td className="border border-gray-300 px-4 py-2">Customer support and messaging</td>
                    <td className="border border-gray-300 px-4 py-2">Functional</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Hotjar</td>
                    <td className="border border-gray-300 px-4 py-2">User behavior analysis and heatmaps</td>
                    <td className="border border-gray-300 px-4 py-2">Analytics</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Managing Your Cookie Preferences</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Browser Settings</h3>
            <p className="text-gray-700 mb-4">
              You can control cookies through your browser settings. Here's how to manage cookies in popular browsers:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
              <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
              <li><strong>Edge:</strong> Settings → Site permissions → Cookies and site data</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookie Consent Manager</h3>
            <p className="text-gray-700 mb-4">
              We provide a cookie consent manager that allows you to:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Accept or reject different categories of cookies</li>
              <li>Change your preferences at any time</li>
              <li>View detailed information about each cookie</li>
              <li>Withdraw consent for non-essential cookies</li>
            </ul>

            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="text-gray-700 font-semibold mb-2">Cookie Settings</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                Manage Cookie Preferences
              </button>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookie Retention</h2>
            <p className="text-gray-700 mb-4">
              Different cookies have different retention periods:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
              <li><strong>Authentication cookies:</strong> 30 days or until logout</li>
              <li><strong>Preference cookies:</strong> 1 year</li>
              <li><strong>Analytics cookies:</strong> 2 years (anonymized after 90 days)</li>
              <li><strong>Marketing cookies:</strong> 90 days</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Do Not Track</h2>
            <p className="text-gray-700 mb-4">
              We respect "Do Not Track" browser settings. When enabled, we will:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Disable non-essential analytics cookies</li>
              <li>Turn off marketing and advertising cookies</li>
              <li>Limit data collection to essential functionality only</li>
              <li>Honor your privacy preferences</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Mobile Apps</h2>
            <p className="text-gray-700 mb-4">
              Our mobile applications may use similar technologies to cookies, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Local storage and app preferences</li>
              <li>Mobile advertising identifiers</li>
              <li>Push notification tokens</li>
              <li>Analytics SDKs</li>
            </ul>
            <p className="text-gray-700 mb-4">
              You can manage these through your device settings or app preferences.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Cookie Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Cookie Policy from time to time to reflect changes in our practices 
              or for other operational, legal, or regulatory reasons. We will notify you of material 
              changes by updating the "Last updated" date at the top of this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Data Protection Officer</strong><br />
                Email: privacy@vxcode.ai<br />
                Subject: Cookie Policy Inquiry<br />
                Address: [Company Address]
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex flex-wrap justify-center gap-6">
            <a href="/" className="text-blue-600 hover:text-blue-700 font-medium">
              ← Back to Home
            </a>
            <a href="/terms" className="text-gray-600 hover:text-gray-700">
              Terms of Service
            </a>
            <a href="/privacy" className="text-gray-600 hover:text-gray-700">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
