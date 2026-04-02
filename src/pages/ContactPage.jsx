import { useState } from 'react'
import { Phone, Mail, MapPin, Send, ChevronRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import PageShell from '../layout/PageShell'

function ContactPage({ currentPage, onNavigate, onOpenAuth }) {
  const [formData, setFormData] = useState({
    subject: '',
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
  }

  return (
    <PageShell
      background="aurora"
      currentPage={currentPage}
      onNavigate={onNavigate}
      onOpenAuth={onOpenAuth}
    >
      {/* Breadcrumb */}
      <div className="relative z-10 px-4 pt-6 sm:px-6 lg:px-8 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-[1400px]">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <button 
              onClick={() => onNavigate('home')}
              className="hover:text-gray-700"
            >
              Home
            </button>
            <ChevronRight className="w-4 h-4" />
            <span className="text-blue-600 font-medium">Contact Us</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-4 py-12 sm:px-6 lg:px-16 bg-white min-h-screen">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Section */}
            <div className="space-y-8">
              {/* Header */}
              <div>
                <h1 className="text-5xl font-bold text-[#212529] mb-6">
                  Contact Us
                </h1>
                <p className="text-lg text-[#6C757D] leading-relaxed max-w-lg">
                  Have questions about our virtual exhibition platform? We're here to help you succeed in the digital exhibition space.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-8">
                {/* Phone Card */}
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-blue-600 mb-3">PHONE</h3>
                    <div className="space-y-2">
                      <p className="text-[#6C757D] text-lg">+91 98765 43210</p>
                      <p className="text-[#6C757D] text-lg">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>

                {/* Email Card */}
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-blue-600 mb-3">EMAIL</h3>
                    <div className="space-y-2">
                      <p className="text-[#6C757D] text-lg">hello@ekspansexpo.com</p>
                      <p className="text-[#6C757D] text-lg">support@ekspansexpo.com</p>
                    </div>
                  </div>
                </div>

                {/* Office Locations Card */}
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-blue-600 mb-3">OFFICE LOCATIONS</h3>
                    <div className="space-y-2">
                      <p className="text-[#6C757D] text-lg">Mumbai, India</p>
                      <p className="text-[#6C757D] text-lg">New York, USA</p>
                      <p className="text-[#6C757D] text-lg">London, UK</p>
                      <p className="text-[#6C757D] text-lg">Dubai, UAE</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Section */}
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                <div className="h-80 bg-gray-100 relative">
                  <img 
                    src="https://maps.googleapis.com/maps/api/staticmap?center=Pune,Maharashtra,India&zoom=14&size=800x400&maptype=roadmap&markers=color:red%7CPune,Maharashtra,India&key=AIzaSyBFw0QXqFu32e6h-9GYB9q7t7YhO3yX4ZQ"
                    alt="Map of Pune, Maharashtra, India"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-md shadow-sm">
                    <span className="text-sm font-medium text-gray-700">Pune, India</span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <a 
                      href="https://maps.google.com/?q=Pune,Maharashtra,India"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors inline-flex items-center"
                    >
                      View on Maps
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Contact Form */}
            <div className="bg-white rounded-2xl border border-gray-200 p-10 shadow-sm">
              <h2 className="text-3xl font-bold text-[#212529] mb-6">
                Let's get in touch!
              </h2>
              <p className="text-[#6C757D] text-lg mb-10">
                We're here to help you with your virtual exhibition needs. Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Subject */}
                <div>
                  <label className="block text-base font-medium text-[#212529] mb-3">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="How can we help you?"
                    className="w-full px-5 py-4 border border-blue-200 bg-blue-50 rounded-xl text-[#212529] placeholder-gray-400 focus:border-[#007BFF] focus:ring-2 focus:ring-[#007BFF] focus:outline-none text-base"
                    required
                  />
                </div>

                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-base font-medium text-[#212529] mb-3">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                      className="w-full px-5 py-4 border border-blue-200 bg-blue-50 rounded-xl text-[#212529] placeholder-gray-400 focus:border-[#007BFF] focus:ring-2 focus:ring-[#007BFF] focus:outline-none text-base"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-base font-medium text-[#212529] mb-3">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                      className="w-full px-5 py-4 border border-blue-200 bg-blue-50 rounded-xl text-[#212529] placeholder-gray-400 focus:border-[#007BFF] focus:ring-2 focus:ring-[#007BFF] focus:outline-none text-base"
                      required
                    />
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-base font-medium text-[#212529] mb-3">
                      Mobile *
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-5 py-4 border border-blue-200 bg-blue-50 rounded-xl text-[#212529] placeholder-gray-400 focus:border-[#007BFF] focus:ring-2 focus:ring-[#007BFF] focus:outline-none text-base"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-base font-medium text-[#212529] mb-3">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john.doe@example.com"
                      className="w-full px-5 py-4 border border-blue-200 bg-blue-50 rounded-xl text-[#212529] placeholder-gray-400 focus:border-[#007BFF] focus:ring-2 focus:ring-[#007BFF] focus:outline-none text-base"
                      required
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-base font-medium text-[#212529] mb-3">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your requirements..."
                    rows={7}
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl text-[#212529] placeholder-gray-400 focus:border-[#007BFF] focus:ring-2 focus:ring-[#007BFF] focus:outline-none resize-none text-base"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center pt-4">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center bg-[#007BFF] hover:bg-[#0056B3] text-white font-semibold px-10 py-4 rounded-xl transition-colors duration-200 text-base shadow-sm"
                  >
                    <Send className="w-5 h-5 mr-3" />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  )
}

export default ContactPage
