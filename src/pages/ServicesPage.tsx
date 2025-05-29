import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, UtensilsCrossed, Tent, HeartHandshake, Music, Gift, Car, PartyPopper } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      id: 'photography',
      name: 'Photography',
      description: 'Professional photography services to capture your special moments with high-quality equipment and experienced photographers.',
      icon: <Camera className="h-8 w-8 text-purple-700" />,
      image: 'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'catering',
      name: 'Catering',
      description: 'Delicious and diverse menu options for all types of events, including vegetarian, non-vegetarian, and specialized cuisine.',
      icon: <UtensilsCrossed className="h-8 w-8 text-purple-700" />,
      image: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'tenthouse',
      name: 'Tent House',
      description: 'Elegant and spacious tents with beautiful decorations, suitable for outdoor events of all sizes.',
      icon: <Tent className="h-8 w-8 text-purple-700" />,
      image: 'https://images.pexels.com/photos/2731336/pexels-photo-2731336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'priest',
      name: 'Priest Services',
      description: 'Experienced priests (Panthulu) for traditional ceremonies and rituals, ensuring authentic and meaningful religious events.',
      icon: <HeartHandshake className="h-8 w-8 text-purple-700" />,
      image: 'https://images.pexels.com/photos/3729263/pexels-photo-3729263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'music',
      name: 'Music & Entertainment',
      description: 'Live music, DJs, and entertainment options to keep your guests engaged and entertained throughout the event.',
      icon: <Music className="h-8 w-8 text-purple-700" />,
      image: 'https://images.pexels.com/photos/2747446/pexels-photo-2747446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'gifts',
      name: 'Return Gifts',
      description: 'Unique and memorable return gifts for your guests, customized according to your event theme and preferences.',
      icon: <Gift className="h-8 w-8 text-purple-700" />,
      image: 'https://images.pexels.com/photos/264771/pexels-photo-264771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'transportation',
      name: 'Transportation',
      description: 'Convenient transportation services for guests, including luxury cars, buses, and valet parking.',
      icon: <Car className="h-8 w-8 text-purple-700" />,
      image: 'https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'decoration',
      name: 'Decoration',
      description: 'Creative and elegant decorations to transform your venue into a beautiful and themed space.',
      icon: <PartyPopper className="h-8 w-8 text-purple-700" />,
      image: 'https://images.pexels.com/photos/1092364/pexels-photo-1092364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  return (
    <div>
      {/* Header Section */}
      <section className="bg-purple-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            We offer a wide range of event management services to make your special occasions truly memorable.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="service-card group overflow-hidden">
                <div className="h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link 
                    to={`/services/${service.id}`}
                    className="btn btn-primary inline-block"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Events We Cater To</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From intimate gatherings to grand celebrations, we handle events of all types and sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-purple-50 rounded-lg p-8 text-center hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Weddings</h3>
              <p className="text-gray-600">
                Comprehensive wedding planning services including pre-wedding events, ceremonies, and receptions.
              </p>
            </div>

            <div className="bg-purple-50 rounded-lg p-8 text-center hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Corporate Events</h3>
              <p className="text-gray-600">
                Professional organization of conferences, seminars, team building events, and corporate parties.
              </p>
            </div>

            <div className="bg-purple-50 rounded-lg p-8 text-center hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Birthday Parties</h3>
              <p className="text-gray-600">
                Creative and fun birthday celebrations for all ages, from kids' parties to milestone birthdays.
              </p>
            </div>

            <div className="bg-purple-50 rounded-lg p-8 text-center hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Religious Ceremonies</h3>
              <p className="text-gray-600">
                Traditional religious ceremonies with authentic rituals and appropriate arrangements.
              </p>
            </div>

            <div className="bg-purple-50 rounded-lg p-8 text-center hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Anniversary Celebrations</h3>
              <p className="text-gray-600">
                Special arrangements to celebrate relationship milestones and create memorable moments.
              </p>
            </div>

            <div className="bg-purple-50 rounded-lg p-8 text-center hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Social Gatherings</h3>
              <p className="text-gray-600">
                Organization of family reunions, get-togethers, and other social events with personalized touches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-700 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Plan Your Perfect Event?</h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
            Contact us today to discuss your event requirements and get a personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking" className="btn bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-md text-lg">
              Book Now
            </Link>
            <Link to="/chat-support" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-md text-lg">
              Chat with Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;