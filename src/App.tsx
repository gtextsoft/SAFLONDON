import {
  BookOpen,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Clock,
  DollarSign,
  Globe,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import "./App.css"; // Add this import
import drStephen from "./Dr Stephen.png"; // Add this import at the top
import logo from "./Stephen logo.png";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const benefits = [
    { icon: Building2, text: "How to Build Wealth Through Real Estate" },
    { icon: DollarSign, text: "Proven High-ROI Strategies" },
    { icon: Rocket, text: "Passive Income & Financial Freedom" },
    {
      icon: Globe,
      text: "How to Invest Smartly in Dubai & Other Booming Markets",
    },
    { icon: Target, text: "Exclusive Real Estate Opportunities" },
    { icon: BookOpen, text: "Investment Mistakes to Avoid" },
  ];

  const attendees = [
    "Business professionals & entrepreneurs looking to expand their wealth",
    "First-time & seasoned investors seeking high-yield opportunities",
    "Diaspora Nigerians & Africans looking to invest back home",
    "High-net-worth individuals interested in property investment",
    "Anyone looking to quadruple their income through strategic investments",
  ];

  const highlights = [
    { icon: Users, text: "Exclusive Access to global investment expert" },
    {
      icon: Trophy,
      text: "Limited Free Seats - Only 100 FREE spots available!",
    },
    {
      icon: Building2,
      text: "Networking Opportunities with like-minded investors",
    },
    { icon: Rocket, text: "Practical Wealth-Building Insights that work" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1D2951] via-[#1D2951]/90 to-[#CF142B]/80">
      {/* Hero Section */}
      <div
        className="min-h-screen relative flex flex-col"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/277667/pexels-photo-277667.jpeg?auto=compress&cs=tinysrgb&w=600')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      >
        {/* Updated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1D2951]/90 via-[#1D2951]/70 to-[#CF142B]/30"></div>

        {/* Navigation */}
        <nav className="w-full py-6 px-6 flex justify-between items-center bg-[#1D2951]/20 backdrop-blur-lg fixed top-0 z-50 border-b border-white/20">
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Stephen Logo"
              className="h-14 hover:scale-105 transition-transform"
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="tel:+2348167901719" className="nav-link">
              <Phone className="w-4 h-4" />
              <span>+234 816 790 1719</span>
            </a>
            <a href="tel:+2348180000618" className="nav-link">
              <Phone className="w-4 h-4" />
              <span>+234 818 000 0618</span>
            </a>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative flex-1 flex flex-col items-center justify-center px-4 pt-20">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-7xl md:text-8xl font-black text-white mb-8 leading-tight tracking-tight drop-shadow-2xl">
              London Investment
              <span className="block bg-gradient-to-r from-[#CF142B] via-white to-[#1D2951] bg-clip-text text-transparent animate-gradient">
                Masterclass
              </span>
            </h1>

            <div className="relative inline-block mb-12">
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl transform rotate-3 scale-150"></div>
              <p className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white relative z-10">
                with
                <span className="block mt-4 text-3xl md:text-4xl">
                  Dr. Stephen Akintayo
                </span>
              </p>
            </div>

            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed">
              Learn the Secrets of Wealth Creation & Smart Investments!
            </p>

            {/* CTA Section */}
            <div className="flex flex-wrap gap-8 justify-center items-center">
              <a
                href="https://app.mailingboss.com/lists/67b36029c2879/subscribe"
                className="group relative px-8 py-4 bg-gradient-to-r from-[#CF142B] to-[#1D2951] rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-[#CF142B]/25 text-white font-bold"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Register Now - It's FREE
                  <ChevronDown className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                </span>
              </a>

              <div className="animate-pulse">
                <div className="glass-card px-8 py-6 border-2 border-[#CF142B]">
                  <p className="text-2xl md:text-3xl font-extrabold text-white">
                    Premium Value
                    <span className="block bg-gradient-to-r from-[#CF142B] to-white bg-clip-text text-transparent mt-2 text-3xl md:text-4xl font-black tracking-tight">
                      FREE FOR EVERYONE
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-32 bg-gradient-to-br from-[#1D2951] via-[#1D2951]/90 to-[#CF142B]/20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="content-fade-in">
            <h2 className="section-title text-center text-white">
              What You Will Learn
            </h2>
            <p className="section-description text-center text-gray-300">
              Join us for an exclusive and highly impactful Investment
              Masterclass in Doha—designed to give you insider knowledge on real
              estate, wealth-building strategies, and smart investments.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="feature-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <benefit.icon className="w-12 h-12 text-[#03A9F4]" />
                  <p className="text-lg font-medium text-white">
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Who Should Attend Section */}
      <div className="py-32 px-4 bg-[#1D2951]">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Who Should Attend?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {attendees.map((attendee, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 glass-effect rounded-2xl hover-scale"
              >
                <CheckCircle2 className="w-6 h-6 text-[#0276B1] flex-shrink-0 mt-1" />
                <p className="text-lg">{attendee}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Event Details Section */}
      <div className="py-32 px-4 bg-gradient-to-br from-[#1D2951] to-[#CF142B]/20">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-gradient-to-r from-[#1D2951] to-[#CF142B]/40 rounded-[2rem] overflow-hidden shadow-2xl border border-white/20">
            <div className="md:flex items-stretch">
              <div className="md:w-1/2 p-12 md:p-16 flex flex-col justify-center">
                <div className="content-fade-in space-y-8">
                  <h2 className="text-4xl font-bold mb-2 text-white">
                    Event Details
                  </h2>

                  <div className="space-y-6 mb-12">
                    <div className="flex items-center gap-4 glass-effect p-4 rounded-xl">
                      <Calendar className="w-6 h-6 text-[#0276B1] flex-shrink-0" />
                      <div>
                        <div className="font-semibold">Date</div>
                        <div className="text-gray-400">
                          Sunday, 16th March 2025
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 glass-effect p-4 rounded-xl">
                      <Clock className="w-6 h-6 text-[#0276B1] flex-shrink-0" />
                      <div>
                        <div className="font-semibold">Time</div>
                        <div className="text-gray-400">
                          5:00 PM - 8:00 PM (UK)
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 glass-effect p-4 rounded-xl">
                      <MapPin className="w-6 h-6 text-[#0276B1] flex-shrink-0" />
                      <div>
                        <div className="font-semibold">Venue</div>
                        <div className="text-gray-400">Virtual</div>
                      </div>
                    </div>
                  </div>

                  <a
                    href="https://app.mailingboss.com/lists/67b36029c2879/subscribe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-2 px-8 py-4 bg-[#0276B1] rounded-full overflow-hidden hover-scale"
                  >
                    <span className="relative z-10 font-semibold">
                      Secure Your Free Spot NOW!
                    </span>
                    <ChevronDown className="w-4 h-4 relative z-10 group-hover:rotate-180 transition-transform" />
                    <div className="absolute inset-0 bg-[#03A9F4] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  </a>
                </div>
              </div>

              <div
                className="md:w-1/2 h-50 md:h-auto bg-cover bg-center transform hover:scale-105 transition-transform duration-700"
                style={{
                  backgroundImage: `url(${drStephen})`,
                  backgroundPosition: "center top",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="py-32 px-4 bg-[#011627]">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Why You Must Not Miss This
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 glass-effect rounded-2xl hover-scale"
              >
                <highlight.icon className="w-6 h-6 text-[#0276B1] flex-shrink-0 mt-1" />
                <p className="text-lg">{highlight.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-32 px-4 bg-gradient-to-br from-[#1D2951] via-[#1D2951]/90 to-[#CF142B]/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-gray-200 max-w-2xl mx-auto">
              Our team of expert consultants is here to guide you on your
              investment journey.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-[#1D2951] to-[#CF142B]/20 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-white/20">
              <div className="w-20 h-20 bg-[#1D2951]/50 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors group-hover:bg-[#CF142B]/30">
                <Phone className="w-8 h-8 text-white transition-transform group-hover:scale-110" />
              </div>
              <p className="font-semibold text-xl text-white text-center mb-4">
                Sales Inquiries
              </p>
              <a
                href="tel:+2348167901719"
                className="block text-center text-blue-300 hover:text-white transition-colors text-lg"
              >
                +234 816 790 1719
              </a>
            </div>
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-[#1D2951] to-[#CF142B]/20 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-white/20">
              <div className="w-20 h-20 bg-[#1D2951]/50 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors group-hover:bg-[#CF142B]/30">
                <Phone className="w-8 h-8 text-white transition-transform group-hover:scale-110" />
              </div>
              <p className="font-semibold text-xl text-white text-center mb-4">
                General Inquiries
              </p>
              <a
                href="tel:+2348180000618"
                className="block text-center text-blue-300 hover:text-white transition-colors text-lg"
              >
                +234 818 000 0618
              </a>
            </div>
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-[#1D2951] to-[#CF142B]/20 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-white/20">
              <div className="w-20 h-20 bg-[#1D2951]/50 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors group-hover:bg-[#CF142B]/30">
                <Mail className="w-8 h-8 text-white transition-transform group-hover:scale-110" />
              </div>
              <p className="font-semibold text-xl text-white text-center mb-4">
                Email Us
              </p>
              <a
                href="mailto:products@stephenakintako.com"
                className="block text-center text-blue-300 hover:text-white transition-colors text-lg break-all"
              >
                products@stephenakintako.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
