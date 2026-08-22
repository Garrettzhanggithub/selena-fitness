export default function PrivacyPage() {
  const sections = [
    {
      title: "Information We Collect",
      body: "When you submit a booking or contact form, we collect the information you provide: your name, email address, phone number, service or session preferences, and any health notes or goals you choose to share. This data is collected via Formspree and delivered to our inbox so Selena can respond to your inquiry.",
    },
    {
      title: "How We Use Your Information",
      body: "Your information is used exclusively to respond to your inquiry, schedule appointments, and provide you with the training services you request. We do not sell, rent, or share your personal information with third parties for marketing purposes.",
    },
    {
      title: "Data Storage & Security",
      body: "Form submissions are transmitted securely (HTTPS) and stored by our form processor (Formspree) until retrieved to our inbox. We take reasonable measures to protect your personal information. Please avoid sharing sensitive medical details beyond what is necessary for training considerations.",
    },
    {
      title: "Analytics",
      body: "Our site is hosted on Vercel, which may collect basic, anonymized usage data (such as page views and device types) to maintain and improve service reliability. This does not identify you personally.",
    },
    {
      title: "Your Rights",
      body: "You may request access to, correction of, or deletion of the personal information you have provided at any time by contacting selena@fitness.com. We will respond to your request within 30 days.",
    },
    {
      title: "Changes to This Policy",
      body: "We may update this privacy policy from time to time. Any changes will be posted on this page. Continued use of the site after changes constitutes acceptance of the updated policy.",
    },
  ];

  return (
    <div className="pt-18">
      <section className="section-full text-center" style={{ paddingTop: 160, paddingBottom: 80 }}>
        <p className="section-label justify-center mb-4">Legal</p>
        <h1 className="display text-[var(--text-primary)] mb-6 max-w-3xl mx-auto">Privacy Policy.</h1>
        <p className="text-body max-w-xl mx-auto">
          Last updated: {new Date().toLocaleDateString("en-CA", { year: "numeric", month: "long" })}
        </p>
      </section>

      <section className="section-full bg-[var(--bg-alt)]">
        <div className="container max-w-3xl">
          <div className="space-y-10">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="heading-md text-[var(--text-primary)] mb-3">{s.title}.</h2>
                <p className="text-body">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-body max-w-xl mx-auto mb-6">
              Questions about this policy? Reach out any time.
            </p>
            <a href="mailto:selena@fitness.com" className="btn-primary text-inherit justify-center">
              Email Selena
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
