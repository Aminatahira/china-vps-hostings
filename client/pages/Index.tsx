import Header from "../components/Header";
import Footer from "../components/Footer";
import PricingTable from "../components/PricingTable";
import FAQ from "../components/FAQ";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-light-gray py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-6">
              China VPS Hosting – High-Speed, Fully Localized & Business-Ready
            </h1>
            <p className="text-xl md:text-2xl text-dark-gray mb-4">
              Your gateway to the Chinese digital market!
            </p>
            <p className="text-lg text-dark-gray mb-8 max-w-4xl mx-auto">
              Host your website or application directly in China for
              blazing-fast performance, better SEO, and smoother access for
              mainland users. Whether you're an eCommerce brand, SaaS provider,
              or media platform — our{" "}
              <a
                href="https://arzhost.com/hosting/china-based-vps-server-hosting/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline font-semibold"
              >
                China VPS hosting
              </a>{" "}
              helps you scale quickly, stay compliant, and reach your local
              audience with ease.
            </p>
            <a
              href="https://arzhost.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-yellow-400 text-charcoal px-8 py-4 rounded-lg text-lg font-bold transition-colors inline-block"
            >
              👉 Start Hosting Today – Reach Chinese Users Like Never Before
            </a>
          </div>
        </div>
      </section>

      {/* Why Host in China Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-12">
            🚀 Why Host in China?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🧭</div>
              <h3 className="text-xl font-bold text-charcoal mb-3">
                Ultra-Low Latency Inside China
              </h3>
              <p className="text-dark-gray">
                Your website loads almost instantly for users in Beijing,
                Shanghai, Guangzhou, and beyond — thanks to data centers hosted
                within mainland China.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-charcoal mb-3">
                Better SEO on Chinese Platforms
              </h3>
              <p className="text-dark-gray">
                Get an edge on{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Baidu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline"
                >
                  Baidu
                </a>{" "}
                and 360 Search. Chinese search engines favor sites hosted
                locally, especially with Chinese IPs.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-charcoal mb-3">
                Local Trust & Speed = Higher Conversions
              </h3>
              <p className="text-dark-gray">
                Fast-loading sites boost trust. And faster response time leads
                to more sales, clicks, and user retention.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-charcoal mb-3">
                Aligned with Local Compliance
              </h3>
              <p className="text-dark-gray">
                Our servers are ready for{" "}
                <a
                  href="https://en.wikipedia.org/wiki/ICP_license"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline"
                >
                  ICP licensing
                </a>{" "}
                and meet the strict data regulations set by China's MIIT.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-12">
            💡 What You Get with Every Plan
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🔧",
                title: "Full Root Access",
                desc: "for total control",
              },
              {
                icon: "💽",
                title: "NVMe SSD / SSD Storage",
                desc: "for max speed",
              },
              { icon: "🌎", title: "Dedicated IPv4 Address", desc: "" },
              { icon: "🧠", title: "Linux or Windows OS Options", desc: "" },
              { icon: "🛡️", title: "Free DDoS Protection", desc: "" },
              {
                icon: "🔐",
                title: "Advanced Firewalls",
                desc: "& Anti-Hack Security",
              },
              {
                icon: "🧑‍💻",
                title: "24/7 Expert Support",
                desc: "(English & Chinese)",
              },
              {
                icon: "⚙️",
                title: "Instant Setup",
                desc: "so you're live in minutes",
              },
              {
                icon: "🚀",
                title: "High Uptime (99.9%+)",
                desc: "with no lag",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-bold text-charcoal mb-2">
                  {feature.title}
                </h3>
                {feature.desc && (
                  <p className="text-dark-gray">{feature.desc}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <PricingTable />

      {/* Target Audience Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-12">
            👩‍💻 Who This Hosting Is Perfect For
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "eCommerce websites targeting Chinese customers",
              "Mobile apps & SaaS platforms with large user bases",
              "Media platforms needing ultra-low latency",
              "Agencies & developers who need full control and custom setups",
              "Bloggers and content creators targeting Chinese audiences",
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="text-gold text-xl mr-3">✓</div>
                <p className="text-dark-gray text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ICP License Section */}
      <section className="py-16 bg-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-8">
            📋 Understanding the ICP License
          </h2>

          <p className="text-lg text-dark-gray text-center mb-8">
            If your site is publicly accessible in China, you need an{" "}
            <a
              href="https://en.wikipedia.org/wiki/ICP_license"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              ICP (Internet Content Provider) license
            </a>
            .
          </p>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold text-charcoal mb-4">
              We help you:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "✔️ Understand ICP rules",
                "✔️ Prepare required documents",
                "✔️ Host on servers that qualify for license application",
                "✔️ Get optional assistance (paid) if needed",
              ].map((item, index) => (
                <p key={index} className="text-dark-gray">
                  {item}
                </p>
              ))}
            </div>
            <p className="text-sm text-dark-gray mt-6 font-semibold">
              Note: You must be a China-based entity or work with a local
              partner to apply.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-12">
            💬 What Our Customers Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-light-gray p-6 rounded-lg">
              <p className="text-dark-gray mb-4 italic">
                "My WordPress site went from 4 seconds to under 1 second for
                Chinese visitors. Sales doubled within 2 weeks!"
              </p>
              <p className="font-semibold text-charcoal">
                — Liu Fang, eCommerce Owner
              </p>
            </div>

            <div className="bg-light-gray p-6 rounded-lg">
              <p className="text-dark-gray mb-4 italic">
                "No lag, reliable uptime, and the support helped me understand
                the ICP licensing steps. Brilliant experience."
              </p>
              <p className="font-semibold text-charcoal">
                — Ali Raza, Digital Marketer
              </p>
            </div>

            <div className="bg-light-gray p-6 rounded-lg">
              <p className="text-dark-gray mb-4 italic">
                "We needed hosting that could pass Chinese regulations and
                deliver speed. This VPS checks every box."
              </p>
              <p className="font-semibold text-charcoal">
                — Chen Wei, SaaS Co-Founder
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8">
            📹 Learn More About VPS Hosting in China
          </h2>
          <div className="aspect-video bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/search?query=vps+hosting+china"
              title="VPS Hosting in China"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-16 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ✅ Ready to Host Locally in China?
          </h2>
          <p className="text-xl mb-4">
            Let your website load faster, rank higher, and serve better —
            directly from China.
          </p>
          <p className="text-lg mb-8">
            Don't risk slow load times or compliance issues.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://arzhost.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-yellow-400 text-charcoal px-8 py-4 rounded-lg text-lg font-bold transition-colors"
            >
              👉 Get Started Now
            </a>
            <a
              href="https://www.arzhost.com/contact-us/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gold text-gold hover:bg-gold hover:text-charcoal px-8 py-4 rounded-lg text-lg font-bold transition-colors"
            >
              Chat with Us Live
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm">
            <span className="flex items-center">
              <span className="text-gold mr-2">🛡️</span>
              Secure Setup
            </span>
            <span className="flex items-center">
              <span className="text-gold mr-2">💳</span>
              Flexible Billing
            </span>
            <span className="flex items-center">
              <span className="text-gold mr-2">🌏</span>
              Compliant & Fast
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
