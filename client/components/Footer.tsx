export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">China VPS Host</h3>
            <p className="text-gray-300 mb-4">
              Your gateway to the Chinese digital market! Host your website or
              application directly in China for blazing-fast performance, better
              SEO, and smoother access for mainland users.
            </p>
            <div className="space-y-2">
              <p className="text-gray-300">
                <span className="font-semibold">Website:</span> Insert your
                website here
              </p>
              <p className="text-gray-300">
                <span className="font-semibold">Phone:</span> +1 (631) 594-8060
              </p>
              <p className="text-gray-300">
                <span className="font-semibold">Email:</span> Insert your data
                here
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.arzhost.com/about-us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-gold transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://www.arzhost.com/contact-us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-gold transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.arzhost.com/terms-conditions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-gold transition-colors"
                >
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a
                  href="https://www.arzhost.com/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-gold transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://www.arzhost.com/disclaimer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-gold transition-colors"
                >
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 China VPS Host. All rights reserved. Powered by{" "}
            <a
              href="https://arzhost.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              ARZ Host
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
