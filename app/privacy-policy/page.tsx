export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-8 text-center">Privacy Policy</h1>
        <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Welcome to Worknest India. We are committed to protecting your personal information and your right to
              privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
              you visit our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Register as a partner on our platform</li>
              <li>Express interest in obtaining information about us or our products and services</li>
              <li>Participate in activities on our website</li>
              <li>Contact us via email, phone, or contact form</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              The personal information we collect may include: name, email address, phone number, mailing address, and
              other similar contact data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the information we collect or receive to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Facilitate account creation and authentication</li>
              <li>Send administrative information to you</li>
              <li>Fulfill and manage your orders and partnerships</li>
              <li>Post testimonials with your consent</li>
              <li>Request feedback and contact you about your use of our services</li>
              <li>Enable user-to-user communications</li>
              <li>Manage user accounts and provide customer support</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Sharing Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may share your information with third-party service providers, contractors, and agents who perform
              services for us or on our behalf and require access to such information. We may also share your
              information in connection with business transfers, legal obligations, and to protect our rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We have implemented appropriate technical and organizational security measures designed to protect the
              security of any personal information we process. However, please note that no electronic transmission over
              the Internet or information storage technology can be guaranteed to be 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Privacy Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              You have the right to review, change, or terminate your account at any time. You may also have the right
              to request access to the personal information we hold about you and to request that we correct, amend, or
              delete it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-accent p-6 rounded-xl mt-4">
              <p className="text-foreground font-semibold">Worknest India</p>
              <p className="text-muted-foreground">Email: contact@worknestindia.in</p>
              <p className="text-muted-foreground">Phone: +91 95868 19690</p>
              <p className="text-muted-foreground">
                Address: A-11th Floor, The first, B/h Keshav Baugh Party Plot, Nr. Shivalik High-Street, Vastrapur,
                Ahmedabad, Gujarat 380015
              </p>
            </div>
          </section>

          <section>
            <p className="text-sm text-muted-foreground italic">Last updated: February 2025</p>
          </section>
        </div>
      </div>
    </main>
  )
}
