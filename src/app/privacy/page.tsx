import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - VxCode AI',
  description: 'Privacy Policy for VxCode AI - Learn how we protect your data and privacy',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-300">Last updated: January 1, 2025</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Commitment to Privacy</h2>
            <p className="text-gray-700 mb-4">
              At VxCode AI, we prioritize protecting users' privacy and data security, adhering to the 
              principle of "local-first" and "minimal data collection." This Privacy Policy explains 
              how we collect, use, and protect your information when you use our AI-powered IDE service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">1.1 Account Information</h3>
            <p className="text-gray-700 mb-4">
              When you create an account, we may collect:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Email address</li>
              <li>Username</li>
              <li>Profile information you choose to provide</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">1.2 Usage Information</h3>
            <p className="text-gray-700 mb-4">
              We collect minimal usage data to improve our service:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Feature usage statistics (anonymized)</li>
              <li>Error logs and performance metrics</li>
              <li>General usage patterns (no personal code content)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">1.3 Code and Project Data</h3>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
              <p className="text-blue-800 font-semibold">Local-First Approach:</p>
              <p className="text-blue-700">
                Your codebase files are stored locally on your devices. For AI processing and indexing, 
                files may be temporarily uploaded for embedding generation. After processing, all 
                plaintext code is immediately deleted from our servers.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use the collected information to:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Provide and maintain the VxCode AI service</li>
              <li>Improve AI model performance and accuracy</li>
              <li>Provide customer support</li>
              <li>Send important service updates</li>
              <li>Analyze usage patterns to enhance user experience</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Data Security and Protection</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Encryption and Transmission</h3>
            <p className="text-gray-700 mb-4">
              We implement strict security measures:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>All data transmission is encrypted using TLS 1.3</li>
              <li>End-to-end encryption for sensitive communications</li>
              <li>Regular security audits and penetration testing</li>
              <li>SOC 2 Type II compliance</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Access Controls</h3>
            <p className="text-gray-700 mb-4">
              We maintain strict access controls to prevent unauthorized access:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Multi-factor authentication for all team members</li>
              <li>Role-based access controls</li>
              <li>Regular access reviews and audits</li>
              <li>Immediate revocation of access for former employees</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Regional Data Storage</h2>
            <p className="text-gray-700 mb-4">
              User data and infrastructure are deployed based on account location and stored in:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li><strong>United States:</strong> US-based users</li>
              <li><strong>Singapore:</strong> Asia-Pacific users</li>
              <li><strong>Malaysia:</strong> Southeast Asian users</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Data isolation is maintained to meet local data protection regulations including GDPR, 
              CCPA, and other applicable privacy laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Sharing and Third Parties</h2>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
              <p className="text-green-800 font-semibold">We do not sell your personal data.</p>
            </div>
            <p className="text-gray-700 mb-4">
              We may share limited data only in these circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>With your explicit consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and prevent fraud</li>
              <li>With service providers under strict data processing agreements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights and Choices</h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li><strong>Access:</strong> Request copies of your personal data</li>
              <li><strong>Correction:</strong> Update or correct your information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data</li>
              <li><strong>Portability:</strong> Export your data in a machine-readable format</li>
              <li><strong>Objection:</strong> Object to processing of your personal data</li>
              <li><strong>Restriction:</strong> Restrict processing of your personal data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Data Retention</h2>
            <p className="text-gray-700 mb-4">
              We retain your data only for as long as necessary:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Account data: Until account deletion + 30 days</li>
              <li>Usage analytics: Anonymized after 90 days</li>
              <li>Code embeddings: Deleted immediately after processing</li>
              <li>Support communications: 3 years for legal compliance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Children's Privacy</h2>
            <p className="text-gray-700 mb-4">
              VxCode AI is not intended for children under 13 years of age. We do not knowingly collect 
              personal information from children under 13. If we become aware that we have collected 
              personal information from a child under 13, we will take steps to delete such information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any material 
              changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Privacy Officer</strong><br />
                Email: privacy@vxcode.ai<br />
                Address: [Company Address]<br />
                Phone: [Phone Number]
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
            <a href="/cookies" className="text-gray-600 hover:text-gray-700">
              Cookie Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
