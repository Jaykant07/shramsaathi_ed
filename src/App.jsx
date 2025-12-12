import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Users,
  Briefcase,
  Wallet,
  Shield,
  Award,
  Clock,
  MapPin,
  Star,
  CheckCircle,
  Menu,
  X,
  TrendingUp,
  FileText,
  Target,
} from "lucide-react";

const ShramSaathiLanding = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("employers");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const Navbar = () => (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
            <Users className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-gray-900">ShramSaathi</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            How It Works
          </a>
          <a
            href="#pricing"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Pricing
          </a>
          <a
            href="#contact"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Contact
          </a>
          <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
            Get Started
          </button>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t mt-4 py-4 px-6">
          <div className="flex flex-col gap-4">
            <a href="#features" className="text-gray-600 hover:text-blue-600">
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-600 hover:text-blue-600"
            >
              How It Works
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600">
              Pricing
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">
              Contact
            </a>
            <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium w-full">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );

  const Hero = () => (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Trusted by 500+ Businesses
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Empowering India's Workforce with Digital Transparency & Trust
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A tech platform that enables businesses to digitally manage their
              daily-wage workforce with complete transparency, efficiency, and
              compliance support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-lg transition font-medium text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105">
                Sign up as Employer <ChevronRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-white border-2 border-gray-300 text-white-700 rounded-lg hover:text-3xl transition font-medium text-lg hover:shadow-xl hover:scale-105">
                Join as Worker
              </button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-gray-900">50,000+</div>
                <div className="text-gray-600">Active Workers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">₹10</div>
                <div className="text-gray-600">Per Job Commission</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">99.9%</div>
                <div className="text-gray-600">Uptime</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Rajesh Kumar
                      </div>
                      <div className="text-sm text-gray-500">
                        Construction Worker
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">4.8</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-1">Total Jobs</div>
                    <div className="text-2xl font-bold text-gray-900">247</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-1">This Month</div>
                    <div className="text-2xl font-bold text-blue-600">18</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Skills</span>
                    <span className="text-gray-900 font-medium">Verified</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                      Masonry
                    </span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                      Carpentry
                    </span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                      Plumbing
                    </span>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <div>
                    <div className="font-medium text-green-900">
                      Available Today
                    </div>
                    <div className="text-sm text-green-700">
                      Ready for new assignments
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100 max-w-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Wallet className="w-5 h-5 text-green-600" />
                </div>
                <div className="font-semibold text-gray-900">
                  Payment Processed
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                ₹15,750
              </div>
              <div className="text-sm text-gray-600">
                Platform fee: ₹180 (18 days × ₹10)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const HowItWorks = () => (
    <section id="how-it-works" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple, transparent, and efficient workforce management in three
            steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              icon: Briefcase,
              title: "Employer Posts Job",
              desc: "Create job listing with location, requirements, pay rate, and duration. System auto-matches verified workers.",
              color: "blue",
            },
            {
              step: "02",
              icon: Users,
              title: "Worker Accepts",
              desc: "Qualified workers receive notifications, review details, and accept assignments through their mobile app.",
              color: "purple",
            },
            {
              step: "03",
              icon: Wallet,
              title: "Automated Payment",
              desc: "Employer pays through platform. ₹10 commission deducted automatically. Worker wallet updated instantly.",
              color: "green",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                {item.step}
              </div>
              <div
                className={`w-16 h-16 ${
                  item.color === "blue"
                    ? "bg-blue-100"
                    : item.color === "purple"
                    ? "bg-purple-100"
                    : "bg-green-100"
                } rounded-2xl flex items-center justify-center mb-6 mt-4`}
              >
                <item.icon
                  className={`w-8 h-8 ${
                    item.color === "blue"
                      ? "text-blue-600"
                      : item.color === "purple"
                      ? "text-purple-600"
                      : "text-green-600"
                  }`}
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const Features = () => (
    <section id="features" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features for Every Stakeholder
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage your workforce digitally
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {["employers", "workers", "enterprises"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-medium transition ${
                activeTab === tab
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              For {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {activeTab === "employers" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Briefcase,
                title: "Post Jobs Instantly",
                desc: "Create job listings with location, pay, and requirements in seconds",
              },
              {
                icon: Target,
                title: "Auto-Match Workers",
                desc: "AI-powered matching finds qualified workers based on skills and availability",
              },
              {
                icon: Clock,
                title: "Real-Time Updates",
                desc: "Track job acceptance, attendance, and completion status live",
              },
              {
                icon: MapPin,
                title: "Location Tracking",
                desc: "GPS-based attendance verification ensures workers are on-site",
              },
              {
                icon: TrendingUp,
                title: "Analytics Dashboard",
                desc: "Monitor workforce productivity, costs, and trends",
              },
              {
                icon: FileText,
                title: "Digital Documentation",
                desc: "Automated reports, invoices, and compliance records",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition border border-gray-100"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "workers" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "Digital Identity",
                desc: "Verified profile with skills, ratings, and job history",
              },
              {
                icon: Award,
                title: "Skill Verification",
                desc: "Get certified for your skills and increase job opportunities",
              },
              {
                icon: Star,
                title: "Rating System",
                desc: "Build your reputation through employer reviews and ratings",
              },
              {
                icon: Wallet,
                title: "Digital Wallet",
                desc: "Receive payments instantly with transparent transaction history",
              },
              {
                icon: Clock,
                title: "QR Attendance",
                desc: "Simple QR-based check-in and check-out system",
              },
              {
                icon: Briefcase,
                title: "Job Alerts",
                desc: "Get notified instantly when matching jobs are posted nearby",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition border border-gray-100"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "enterprises" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Compliance Support",
                desc: "Stay compliant with labor laws and maintain proper documentation",
              },
              {
                icon: FileText,
                title: "Monthly Reports",
                desc: "Downloadable workforce reports for accounting and audits",
              },
              {
                icon: Users,
                title: "Worker Verification",
                desc: "Comprehensive background checks and skill verification",
              },
              {
                icon: TrendingUp,
                title: "Workforce Analytics",
                desc: "Deep insights into productivity, costs, and efficiency",
              },
              {
                icon: Award,
                title: "CSR Alignment",
                desc: "Support social impact initiatives with verified workforce data",
              },
              {
                icon: Target,
                title: "Custom Solutions",
                desc: "Tailored features for construction, logistics, and manufacturing",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition border border-gray-100"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );

  const Pricing = () => (
    <section id="pricing" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Basic",
              price: "Free",
              period: "",
              desc: "Perfect for small contractors",
              features: [
                "₹10 per job-day commission",
                "Up to 10 workers",
                "Basic job posting",
                "QR attendance",
                "Mobile app access",
                "Email support",
              ],
              cta: "Start Free",
              popular: false,
            },
            {
              name: "Pro",
              price: "₹1,499",
              period: "/month",
              desc: "For growing businesses",
              features: [
                "₹8 per job-day commission",
                "Unlimited workers",
                "Advanced matching",
                "Analytics dashboard",
                "Priority support",
                "Custom reports",
                "API access",
                "Bulk operations",
              ],
              cta: "Get Started",
              popular: true,
            },
            {
              name: "Enterprise",
              price: "Custom",
              period: "",
              desc: "For large organizations",
              features: [
                "Custom commission rates",
                "Dedicated account manager",
                "Compliance support",
                "Custom integrations",
                "Advanced security",
                "Training sessions",
                "SLA guarantee",
                "White-label option",
              ],
              cta: "Contact Sales",
              popular: false,
            },
          ].map((plan, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-2xl p-8 border-2 transition-all hover:shadow-2xl ${
                plan.popular
                  ? "border-blue-600 shadow-xl scale-105"
                  : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">{plan.desc}</p>
                <div className="flex items-end justify-center gap-1 mb-6">
                  <span className="text-5xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-gray-600 mb-2">{plan.period}</span>
                  )}
                </div>
                <button
                  className={`w-full py-3 rounded-lg font-medium transition ${
                    plan.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>

              <div className="space-y-3 pt-6 border-t">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const Testimonials = () => (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Businesses Across India
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our clients say about ShramSaathi
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Amit Sharma",
              role: "Construction Manager",
              company: "BuildTech Constructions",
              text: "ShramSaathi transformed how we manage our workforce. The QR attendance and payment automation saved us countless hours every week.",
              rating: 5,
            },
            {
              name: "Priya Mehta",
              role: "Operations Head",
              company: "LogiMove Warehousing",
              text: "Finding reliable workers was always a challenge. Now we have a verified pool of workers ready to go, and the ₹10 commission is totally worth it.",
              rating: 5,
            },
            {
              name: "Rajesh Patel",
              role: "Factory Owner",
              company: "Supreme Manufacturing",
              text: "The compliance support and monthly reports make audits so much easier. Highly recommend for any business with daily wage workers.",
              rating: 5,
            },
          ].map((testimonial, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3 pt-6 border-t">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const CTA = () => (
    <section className="py-20 px-6 bg-gradient-to-br from-purple-300 to-blue-700">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Workforce Management?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of businesses already using ShramSaathi to manage their
          daily-wage workforce efficiently
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-white rounded-lg hover:bg-gray-100 transition font-medium text-lg shadow-xl">
            Start Free Trial
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white  transition font-medium text-lg">
            Schedule Demo
          </button>
        </div>
        <p className="text-blue-100 mt-6">
          No credit card required • Free 14-day trial • Cancel anytime
        </p>
      </div>
    </section>
  );

  const Footer = () => (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">ShramSaathi</span>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering India's workforce with digital transparency and trust.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Enterprise
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Mobile App
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">
            © 2025 ShramSaathi. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              LinkedIn
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default ShramSaathiLanding;
