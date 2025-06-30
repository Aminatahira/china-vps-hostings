export default function PricingTable() {
  const plans = [
    {
      name: "Starter VPS",
      price: "$12.50/month",
      features: ["1 vCore", "2 GB RAM", "20 GB SSD", "250 Mbps bandwidth"],
      popular: false,
    },
    {
      name: "Value VPS",
      price: "$16.00/month",
      features: ["1 vCore", "2 GB RAM", "40 GB SSD", "250 Mbps bandwidth"],
      popular: false,
    },
    {
      name: "Essential VPS",
      price: "$34.00/month",
      features: ["2 vCores", "4 GB RAM", "80 GB SSD", "500 Mbps bandwidth"],
      popular: true,
    },
    {
      name: "Comfort VPS",
      price: "$54.00/month",
      features: ["4 vCores", "8 GB RAM", "160 GB SSD", "1 Gbps speed"],
      popular: false,
    },
    {
      name: "Elite VPS",
      price: "$60.00/month",
      features: ["8 vCores", "8–32 GB RAM", "160–640 GB SSD", "2 Gbps speed"],
      popular: false,
    },
  ];

  return (
    <section className="py-16 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            💵 VPS Hosting Plans
          </h2>
          <p className="text-dark-gray text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your China hosting needs. All plans
            include our premium features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                plan.popular ? "ring-2 ring-gold transform scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="bg-gold text-charcoal text-center py-2 px-4 font-semibold">
                  Most Popular
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-bold text-charcoal mb-2">
                  {plan.name}
                </h3>
                <div className="text-2xl font-bold text-gold mb-4">
                  {plan.price}
                </div>

                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-dark-gray"
                    >
                      <svg
                        className="w-4 h-4 text-gold mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://arzhost.com/hosting/china-based-vps-server-hosting/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-block text-center py-3 px-4 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? "bg-gold hover:bg-yellow-400 text-charcoal"
                      : "bg-charcoal hover:bg-gray-800 text-white"
                  }`}
                >
                  Choose Plan
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-charcoal mb-4">
            🧠 Advanced Users: HH High-Performance VPS
          </h3>
          <p className="text-dark-gray mb-4">
            Ideal for developers, data-intensive platforms, and high-load apps.
            Starting from just $9.50/month with blazing 1 Gbps ports, NVMe
            disks, and up to 64 GB RAM.
          </p>

          <h3 className="text-2xl font-bold text-charcoal mb-4 mt-8">
            🏗️ CB Series (Block-Based VPS for Custom Needs)
          </h3>
          <p className="text-dark-gray mb-4">
            Need full customization? Our CB VPS series lets you scale compute,
            memory, and storage — perfect for agencies, enterprise platforms,
            and dev teams. Starting at $15/month with ultra-flexible
            configurations.
          </p>

          <a
            href="https://arzhost.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold hover:bg-yellow-400 text-charcoal px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Explore Custom Plans
          </a>
        </div>
      </div>
    </section>
  );
}
