import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do I need to register an ICP license?",
      answer:
        "Yes, if your website is available to the public in mainland China. Our team can help guide you through the process.",
    },
    {
      question: "Can I install any software on my VPS?",
      answer:
        "Absolutely! You have full root access, so you can install any compatible apps or tools.",
    },
    {
      question: "Is your support team available in both English and Chinese?",
      answer: "Yes! Our expert team can assist you in both languages, 24/7.",
    },
    {
      question: "How long does setup take?",
      answer:
        "Your VPS is provisioned instantly after payment, so you can start building immediately.",
    },
    {
      question: "What operating systems are supported?",
      answer:
        "You can choose from major Linux distributions (Ubuntu, CentOS, Debian, etc.) or various Windows Server editions.",
    },
    {
      question: "Is your data center located in mainland China?",
      answer:
        "Yes, we partner with local data centers to ensure high-speed, compliant access for Chinese users.",
    },
    {
      question: "Can I upgrade my plan later?",
      answer:
        "Yes! All plans are fully scalable. You can upgrade CPU, RAM, or storage at any time.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            ❓ Frequently Asked Questions (FAQs)
          </h2>
          <p className="text-dark-gray text-lg">
            Get answers to common questions about our China VPS hosting
            services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-gold"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-charcoal pr-4">
                    Q{index + 1}: {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-dark-gray transform transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-dark-gray">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
