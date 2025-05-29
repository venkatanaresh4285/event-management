import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, UtensilsCrossed, Tent, HeartHandshake, Clock, Star, Users, Calendar } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-r from-purple-900 to-purple-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20"></div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Create Memorable Events with Ease</h1>
            <p className="text-xl text-purple-100 mb-8">Your one-stop destination for all event management needs - Photography, Catering, Decorations, and more.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/booking" className="btn bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-md text-lg">
                Book Now
              </Link>
              <Link to="/services" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-md text-lg">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Premium Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We offer comprehensive event management services to make your special occasions truly memorable.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="service-card group">
              <div className="p-6">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors duration-200">
                  <Camera className="h-8 w-8 text-purple-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Photography</h3>
                <p className="text-gray-600 mb-4">Professional photographers to capture your precious moments with state-of-the-art equipment.</p>
                <Link to="/services/photography" className="text-purple-700 font-medium hover:text-purple-800 flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="service-card group">
              <div className="p-6">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors duration-200">
                  <UtensilsCrossed className="h-8 w-8 text-purple-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Catering</h3>
                <p className="text-gray-600 mb-4">Delicious cuisine options from various culinary traditions to satisfy your guests' taste buds.</p>
                <Link to="/services/catering" className="text-purple-700 font-medium hover:text-purple-800 flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="service-card group">
              <div className="p-6">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors duration-200">
                  <Tent className="h-8 w-8 text-purple-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tent House</h3>
                <p className="text-gray-600 mb-4">Beautiful and spacious tents with elegant decorations for all types of outdoor events.</p>
                <Link to="/services/tenthouse" className="text-purple-700 font-medium hover:text-purple-800 flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="service-card group">
              <div className="p-6">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors duration-200">
                  <HeartHandshake className="h-8 w-8 text-purple-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Priest Services</h3>
                <p className="text-gray-600 mb-4">Experienced priests (Panthulu) to conduct traditional ceremonies with authentic rituals.</p>
                <Link to="/services/priest" className="text-purple-700 font-medium hover:text-purple-800 flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="btn btn-primary py-3 px-8 text-lg">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose EventEase</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We're committed to making your event planning experience smooth and stress-free.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-purple-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow duration-300">
              <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <Star className="h-7 w-7 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">We work with top-rated vendors to ensure quality service for your events.</p>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow duration-300">
              <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-7 w-7 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Time Saving</h3>
              <p className="text-gray-600">Save hours of planning with our comprehensive one-stop event solutions.</p>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow duration-300">
              <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <Users className="h-7 w-7 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">Our experienced event managers handle all details with utmost care.</p>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow duration-300">
              <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-7 w-7 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Customizable</h3>
              <p className="text-gray-600">Tailor every aspect of your event to match your specific requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-700 to-purple-900 relative">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Plan Your Next Event?</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">Let us help you create a memorable experience for you and your guests. Book our services now!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking" className="btn bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-md text-lg">
                Book Now
              </Link>
              <Link to="/chat-support" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-md text-lg">
                Chat with Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;