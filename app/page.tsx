"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import {
  Building2,
  Users,
  CheckCircle,
  Star,
  FileText,
  Package,
  UserCheck,
  ShoppingCart,
  Calculator,
  FolderOpen,
  Shield,
  Store,
  Factory,
  Truck,
  Briefcase,
  Heart,
  Warehouse,
  Home,
  PiggyBank,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Phone,
  Mail,
  Clock,
  TrendingDown,
  TrendingUp,
  Globe,
  Award,
} from "lucide-react"

import { submitContactForm } from "./actions/contact"

export default function ERPensWebsite() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Form state
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const testimonials = [
    {
      name: "Sarah Johnson",
      business: "Retail Chain Owner",
      quote:
        "ERPens transformed our inventory management. We've reduced manual work by 80% and our operations run seamlessly.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      business: "Manufacturing Director",
      quote:
        "The custom ERP solution perfectly fits our complex manufacturing processes. Outstanding support and implementation.",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      business: "Logistics Manager",
      quote:
        "From order tracking to delivery management, everything is now automated. Best investment we've made for our business.",
      rating: 5,
    },
    {
      name: "David Thompson",
      business: "Service Company CEO",
      quote: "The team understood our unique requirements and delivered exactly what we needed. Highly recommended!",
      rating: 5,
    },
  ]

  const companyLogos = [
    { name: "Saks Fifth Avenue", src: "/placeholder.svg?height=60&width=120" },
    { name: "Ron Paul 2012", src: "/placeholder.svg?height=60&width=120" },
    { name: "Armenia Investment Forum", src: "/placeholder.svg?height=60&width=120" },
    { name: "City East Community College", src: "/placeholder.svg?height=60&width=120" },
    { name: "Cornthins", src: "/placeholder.svg?height=60&width=120" },
    { name: "IVCi", src: "/placeholder.svg?height=60&width=120" },
    { name: "Plasticity", src: "/placeholder.svg?height=60&width=120" },
    { name: "Swiss Society of New York", src: "/placeholder.svg?height=60&width=120" },
    { name: "Independent Voting", src: "/placeholder.svg?height=60&width=120" },
    { name: "Culture Whisper", src: "/placeholder.svg?height=60&width=120" },
  ]

  const features = [
    {
      icon: FileText,
      title: "Invoicing & Billing",
      description: "Automated invoice generation, payment tracking, and billing management with GST compliance.",
    },
    {
      icon: Package,
      title: "Inventory Management",
      description: "Real-time stock tracking, warehouse management, and automated reorder points.",
    },
    {
      icon: UserCheck,
      title: "CRM & Customer Support",
      description: "Complete customer relationship management with support ticket tracking and follow-ups.",
    },
    {
      icon: Users,
      title: "HR & Payroll",
      description: "Employee management, attendance tracking, and automated payroll processing with compliance.",
    },
    {
      icon: ShoppingCart,
      title: "Sales & Purchase",
      description: "Streamlined sales orders, purchase management, and vendor relationship tracking.",
    },
    {
      icon: Calculator,
      title: "Accounting & Taxation",
      description: "Comprehensive financial management, tax compliance, and automated reporting.",
    },
    {
      icon: FolderOpen,
      title: "Projects & Tasks",
      description: "Efficient project tracking, task allocation, and team collaboration tools.",
    },
    {
      icon: Shield,
      title: "User Roles & Permissions",
      description: "Secure access control, user management, and role-based permissions system.",
    },
  ]

  const industries = [
    { icon: Store, title: "Retail & eCommerce" },
    { icon: Factory, title: "Manufacturing" },
    { icon: Truck, title: "Logistics & Supply Chain" },
    { icon: Briefcase, title: "Service-Based Businesses" },
    { icon: Heart, title: "Healthcare & Clinics" },
    { icon: Warehouse, title: "Distribution & Wholesale" },
    { icon: Home, title: "Construction & Real Estate" },
    { icon: PiggyBank, title: "Finance, Accounting & Consulting" },
  ]

  const benefits = [
    "No Per-User Pricing",
    "Open Source & Customizable",
    "Full Data Control",
    "All-in-One Platform",
    "Lower Total Cost of Ownership",
    "Active Global Community",
  ]

  const helpPoints = [
    "Understand your business and deliver tailored ERP",
    "Custom features without long delays",
    "Easy change management post-deployment",
    "Continuous support even after going live",
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage(null)

    const formData = new FormData(event.currentTarget)
    const result = await submitContactForm(formData)

    if (result.success) {
      setSubmitMessage({ type: "success", text: result.message })
      event.currentTarget.reset()
    } else {
      setSubmitMessage({ type: "error", text: result.message })
    }

    setIsSubmitting(false)
  }

  const scrollToForm = () => {
    const formElement = document.getElementById("hero-form")
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "center" })
      // Optional: Add a subtle highlight effect
      formElement.classList.add("ring-2", "ring-blue-500", "ring-opacity-50")
      setTimeout(() => {
        formElement.classList.remove("ring-2", "ring-blue-500", "ring-opacity-50")
      }, 2000)
    }
  }

  useEffect(() => {
    // Add CSS for animations
    const style = document.createElement("style")
    style.textContent = `
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-scroll {
        animation: scroll 20s linear infinite;
      }
    `
    document.head.appendChild(style)

    return () => {
      // Cleanup
      if (document.head.contains(style)) {
        document.head.removeChild(style)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 scroll-pt-20 scroll-smooth">
      {/* Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Building2 className="h-6 w-6 text-blue-600" />
              <span className="text-lg font-bold text-gray-900">ERPens</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors text-sm">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors text-sm">
                About Us
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors text-sm">
                Contact Us
              </a>
              <a href="https://calendly.com/your-link" target="_blank" rel="noopener noreferrer">
                <Button className="bg-blue-600 hover:bg-blue-700 text-sm px-4 py-2">Book Free Consultation</Button>
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t pt-4">
              <div className="flex flex-col space-y-4">
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Home
                </a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
                  About Us
                </a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Contact Us
                </a>
                <Button className="bg-blue-600 hover:bg-blue-700 w-full">Book Free Consultation</Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="lg:pr-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Get a Custom ERP that fits your business
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                A complete ERP solution built to automate your day-to-day operations, reduce overhead, and help your
                business scale faster, without the usual complexity.
              </p>

              {/* Social Proof Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Users className="h-5 w-5 text-blue-600 mr-1" />
                    <span className="text-2xl font-bold text-gray-900">150+</span>
                  </div>
                  <p className="text-sm text-gray-600">Happy Clients</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Clock className="h-5 w-5 text-green-600 mr-1" />
                    <span className="text-2xl font-bold text-gray-900">24/7</span>
                  </div>
                  <p className="text-sm text-gray-600">Support</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <TrendingDown className="h-5 w-5 text-red-600 mr-1" />
                    <span className="text-2xl font-bold text-gray-900">80%</span>
                  </div>
                  <p className="text-sm text-gray-600">Cost Reduction</p>
                </div>
              </div>

              {/* Company Logos with Trust Message */}
              <div className="mb-6">
                <p className="text-center text-gray-600 mb-4 font-medium">Trusted by leading companies</p>
                <div className="relative overflow-hidden bg-white/50 rounded-lg p-4">
                  <div className="flex animate-scroll space-x-6">
                    {[...Array(2)].map((_, setIndex) => (
                      <div key={setIndex} className="flex space-x-6 flex-shrink-0">
                        {companyLogos.slice(0, 5).map((logo, index) => (
                          <div key={`${setIndex}-${index}`} className="flex items-center justify-center h-12 w-24 p-1">
                            <img
                              src={logo.src || "/placeholder.svg"}
                              alt={logo.name}
                              className="h-full w-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                            />
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Contact Form */}
            <Card id="hero-form" className="bg-white shadow-xl border-0 transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <CheckCircle className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Get My Free ERP Assessment</h3>
                  <p className="text-gray-600">Discover how much time & money you can save with a custom ERP</p>
                </div>

                <form id="contact-form" onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="relative">
                    <Input
                      name="name"
                      placeholder="Your Full Name"
                      className="w-full pl-4 pr-4 py-3 border-2 border-gray-200 focus:border-blue-500 rounded-lg"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      type="email"
                      name="email"
                      placeholder="Business Email Address"
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 focus:border-blue-500 rounded-lg"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 focus:border-blue-500 rounded-lg"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your business challenges & goals"
                    className="w-full px-4 py-3 border-2 border-gray-200 focus:border-blue-500 rounded-lg h-24 resize-none"
                    required
                    disabled={isSubmitting}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-lg shadow-lg transform transition hover:scale-105"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "🎯 Get My Free ERP Assessment"}
                  </Button>

                  <div className="text-center">
                    <p className="text-xs text-gray-500">
                      ✅ No spam, ever. ✅ Free consultation. ✅ Instant response.
                    </p>
                  </div>

                  {submitMessage && (
                    <div
                      className={`text-sm p-3 rounded-lg ${
                        submitMessage.type === "success"
                          ? "bg-green-50 text-green-700 border border-green-200"
                          : "bg-red-50 text-red-700 border border-red-200"
                      }`}
                    >
                      {submitMessage.text}
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trusted Excellence Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center px-4 py-2 bg-blue-100 rounded-full mb-6">
              <Award className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">TRUSTED EXCELLENCE</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Growing Businesses Across India and Beyond
            </h2>
            <p className="text-lg text-gray-600 max-w3xl mx-auto">
              Join the ranks of successful companies that have transformed their operations with our proven ERP
              solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Successful Implementations */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl mx-auto flex items-center justify-center shadow-lg">
                    <TrendingUp className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-yellow-800 font-bold text-sm">$</span>
                  </div>
                </div>
                <h3 className="text-4xl font-bold text-green-600 mb-2">50+</h3>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Successful Implementations</h4>
                <p className="text-gray-600 leading-relaxed">
                  Proven track record of delivering ERP solutions that drive real business results
                </p>
                <div className="flex justify-center mt-6 space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-green-400 rounded-full"></div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Expert Team */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl mx-auto flex items-center justify-center shadow-lg">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-orange-800" />
                  </div>
                </div>
                <h3 className="text-4xl font-bold text-blue-600 mb-2">Expert</h3>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">ERPNext Certified Team</h4>
                <p className="text-gray-600 leading-relaxed">
                  Certified consultants with deep expertise in ERPNext implementation and customization
                </p>
                <div className="flex justify-center mt-6 space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Multi-Industry */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl mx-auto flex items-center justify-center shadow-lg">
                    <Globe className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-green-800" />
                  </div>
                </div>
                <h3 className="text-4xl font-bold text-purple-600 mb-2">Multi</h3>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Industry Experience</h4>
                <p className="text-gray-600 leading-relaxed">
                  Serving diverse industries from retail to manufacturing with tailored solutions
                </p>
                <div className="flex justify-center mt-6 space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Hear from our customers</h2>
          <div className="relative max-w-4xl mx-auto">
            <Button
              variant="ghost"
              size="sm"
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Card className="mx-12 bg-white shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg text-gray-700 mb-6 italic">"{testimonials[currentTestimonial].quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</p>
                  <p className="text-gray-600">{testimonials[currentTestimonial].business}</p>
                </div>
              </CardContent>
            </Card>

            <Button
              variant="ghost"
              size="sm"
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">About Us</h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-12">
              <p>At ERPens, we specialise in building business software that actually works the way you do.</p>

              <p>
                With over a decade of experience in{" "}
                <strong className="text-gray-900 font-semibold">ERPNext implementation</strong>, we help companies
                streamline operations, reduce manual work, and scale faster, without getting stuck in long, confusing
                development cycles.
              </p>

              <p>
                We've partnered with <strong className="text-gray-900 font-semibold">Kuberns</strong>, a modern platform
                that simplifies infrastructure and keeps your ERP running smoothly behind the scenes, so you can focus
                on running your business, not managing systems.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center p-6 bg-blue-50 rounded-lg">
                <CheckCircle className="h-8 w-8 text-green-600 mb-3" />
                <span className="text-gray-800 font-medium text-center">150+ successful ERPNext implementations</span>
              </div>
              <div className="flex flex-col items-center p-6 bg-blue-50 rounded-lg">
                <CheckCircle className="h-8 w-8 text-green-600 mb-3" />
                <span className="text-gray-800 font-medium text-center">ERPNext experts & consultants</span>
              </div>
              <div className="flex flex-col items-center p-6 bg-blue-50 rounded-lg">
                <CheckCircle className="h-8 w-8 text-green-600 mb-3" />
                <span className="text-gray-800 font-medium text-center">
                  Serving clients in retail, manufacturing, logistics, services & more
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-100 to-blue-50 p-12 rounded-2xl shadow-inner">
              <h3 className="text-2xl font-semibold text-gray-700 text-center mb-8">Want to know more about us?</h3>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
                <Button
                  asChild
                  className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 min-w-[200px]"
                >
                  <a href="https://www.erpens.com/" target="_blank" rel="noopener noreferrer">
                    Visit Professional Softech
                  </a>
                </Button>
                <Button
                  asChild
                  className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 hover:border-blue-700 px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 min-w-[200px]"
                >
                  <a href="https://kuberns.com/" target="_blank" rel="noopener noreferrer">
                    Learn About Kuberns
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ERP Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Features that your business needs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow p-6">
                <CardContent className="p-0">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <feature.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg">{feature.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-4">Don't see the feature you need? We'll customize it.</p>
            <a href="https://calendly.com/your-link" target="_blank" rel="noopener noreferrer">
              <Button variant="link" className="text-blue-600 hover:text-blue-700">
                → Discuss your requirement here
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Industries We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:bg-gray-100 transition-colors shadow-sm"
              >
                <industry.icon className="h-8 w-8 text-blue-600" />
                <span className="text-gray-700 font-medium">{industry.title}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600">
            Your industry not listed? No worries — we'll tailor it to your needs.
          </p>
        </div>
      </section>

      {/* Benefits of ERPNext */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose ERPNext for Your Business?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How We Work With You</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {helpPoints.map((point, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 border-none shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium leading-relaxed">{point}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Let's simplify your operations with a custom ERP, built just for you.
          </h2>
          <p className="text-xl mb-8 opacity-90">Just a quick call to get started.</p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3"
            onClick={scrollToForm}
          >
            📞 Book Your Free ERP Consultation
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Building2 className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold text-white">ERPens</span>
              </div>
              <p className="text-gray-400 leading-relaxed">Custom ERP solutions that grow with your business.</p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="https://calendly.com/your-link" className="text-gray-400 hover:text-white transition-colors">
                    Schedule Demo
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Email: info@erpens.com</li>
                <li className="text-gray-400">Phone: +91 98765 43210</li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="text-white font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-3">
                <a
                  href="https://www.facebook.com/ERPens"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/erpens"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-700 rounded flex items-center justify-center text-white hover:bg-blue-800 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
