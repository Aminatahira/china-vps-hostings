import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";

export default function Privacy() {
  useEffect(() => {
    // Redirect to arzhost.com privacy page
    window.location.href = "https://www.arzhost.com/privacy-policy/";
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-charcoal mb-4">
            Redirecting to Privacy Policy...
          </h1>
          <p className="text-dark-gray">
            You will be redirected to our privacy policy page shortly.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
