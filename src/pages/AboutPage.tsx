import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Award, Users, Calendar, Clock, ThumbsUp } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-purple-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">About EventEase</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            We are a dedicated team of event management professionals committed to making your special occasions truly memorable.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2020, EventEase started with a simple mission: to simplify the event planning process while ensuring exceptional experiences. What began as a small team of passionate event planners has now grown into a comprehensive event management company serving thousands of clients across the country.
              </p>
              <p className="text-gray-700 mb-4">
                Our journey has been marked by a commitment to excellence, attention to detail, and a customer-first approach. We understand that each event is unique and special, which is why we provide personalized services tailored to meet the specific needs and preferences of our clients.
              </p>
              <p className="text-gray-700">
                Today, EventEase stands as a trusted name in the event management industry, known for creating seamless, stress-free, and memorable events of all types and sizes.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="EventEase Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do at EventEase
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Passion</h3>
              <p className="text-gray-700">
                We are passionate about creating extraordinary events that exceed expectations and create lasting memories.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-700">
                We strive for excellence in every aspect of our service, from planning to execution, ensuring the highest quality.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Collaboration</h3>
              <p className="text-gray-700">
                We believe in working closely with our clients and partners to bring their vision to life through effective collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our talented team of event professionals is dedicated to making your events successful
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
              <img
                src="https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Team Member"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Priya Sharma</h3>
                <p className="text-purple-700 mb-3">Founder & CEO</p>
                <p className="text-gray-700">
                  With over 15 years of experience in event management, Priya leads our team with passion and vision.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Team Member"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Rahul Patel</h3>
                <p className="text-purple-700 mb-3">Creative Director</p>
                <p className="text-gray-700">
                  Rahul brings creativity and innovation to our events, ensuring unique and memorable experiences.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
              <img
                src="https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Team Member"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Ananya Gupta</h3>
                <p className="text-purple-700 mb-3">Operations Manager</p>
                <p className="text-gray-700">
                  Ananya ensures that every event runs smoothly, handling logistics and coordination with precision.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
              <img
                src="https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Team Member"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Vikram Singh</h3>
                <p className="text-purple-700 mb-3">Client Relations</p>
                <p className="text-gray-700">
                  Vikram works closely with clients to understand their needs and ensure their satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="flex items-center justify-center">
                <Calendar className="h-5 w-5 mr-2" />
                <p className="text-purple-200">Events Managed</p>
              </div>
            </div>

            <div>
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="flex items-center justify-center">
                <Users className="h-5 w-5 mr-2" />
                <p className="text-purple-200">Happy Clients</p>
              </div>
            </div>

            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="flex items-center justify-center">
                <Award className="h-5 w-5 mr-2" />
                <p className="text-purple-200">Professional Staff</p>
              </div>
            </div>

            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="flex items-center justify-center">
                <Clock className="h-5 w-5 mr-2" />
                <p className="text-purple-200">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from some of our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg relative">
              <div className="absolute -top-4 left-6 text-4xl text-purple-300">"</div>
              <div className="pt-4">
                <p className="text-gray-700 mb-6">
                  EventEase made our wedding day absolutely perfect! Their attention to detail and professional service exceeded our expectations. Highly recommended!
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                    <span className="text-purple-700 font-bold">RK</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Rajesh & Kavita</p>
                    <p className="text-gray-600">Wedding Event</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg relative">
              <div className="absolute -top-4 left-6 text-4xl text-purple-300">"</div>
              <div className="pt-4">
                <p className="text-gray-700 mb-6">
                  Our corporate event was a huge success thanks to the EventEase team. From planning to execution, everything was handled with professionalism and efficiency.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                    <span className="text-purple-700 font-bold">SM</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Sunil Mehta</p>
                    <p className="text-gray-600">Corporate Event</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg relative">
              <div className="absolute -top-4 left-6 text-4xl text-purple-300">"</div>
              <div className="pt-4">
                <p className="text-gray-700 mb-6">
                  The photography and catering services provided by EventEase for my daughter's birthday were outstanding. The pictures captured every precious moment beautifully.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                    <span className="text-purple-700 font-bold">PD</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Preeti Desai</p>
                    <p className="text-gray-600">Birthday Party</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Plan Your Event?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Contact us today to discuss your event requirements and get a personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking" className="btn btn-primary py-3 px-8 text-lg">
              Book Now
            </Link>
            <Link to="/chat-support" className="btn btn-outline py-3 px-8 text-lg">
              Chat with Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;