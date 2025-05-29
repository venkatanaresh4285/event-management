import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Camera, UtensilsCrossed, Tent, HeartHandshake, Music, Gift, Car, PartyPopper, CheckCircle, Info, Star } from 'lucide-react';

// Service type definition
interface ServiceInfo {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  features: string[];
  packages: Package[];
  faq: FAQ[];
}

interface Package {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

interface FAQ {
  question: string;
  answer: string;
}

const ServiceDetailsPage: React.FC = () => {
  const { serviceType } = useParams<{ serviceType: string }>();
  const [service, setService] = useState<ServiceInfo | null>(null);

  useEffect(() => {
    // This would typically be an API call, but for demo purposes, we'll use mock data
    const getServiceDetails = () => {
      // Mock data for different service types
      const services: Record<string, ServiceInfo> = {
        photography: {
          id: 'photography',
          title: 'Photography Services',
          description: 'Capture your special moments with our professional photography services. Our experienced photographers use state-of-the-art equipment to ensure that every precious moment of your event is beautifully documented.',
          icon: <Camera className="h-8 w-8 text-purple-700" />,
          image: 'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          features: [
            'Professional photographers with years of experience',
            'High-resolution digital photos with professional editing',
            'Same-day photo previews for selected images',
            'Custom photo albums and prints available',
            'Drone photography for aerial shots',
            'Candid and portrait photography',
            'Pre-event photoshoots available'
          ],
          packages: [
            {
              id: 'basic',
              name: 'Basic Package',
              price: '₹15,000',
              description: 'Perfect for small gatherings and simple events',
              features: [
                '1 Photographer',
                '4 Hours of coverage',
                '100 edited digital photos',
                'Online gallery for 3 months'
              ]
            },
            {
              id: 'standard',
              name: 'Standard Package',
              price: '₹25,000',
              description: 'Comprehensive coverage for medium-sized events',
              features: [
                '2 Photographers',
                '8 Hours of coverage',
                '250 edited digital photos',
                'Online gallery for 6 months',
                'One 12×8 photo album (20 pages)'
              ],
              isPopular: true
            },
            {
              id: 'premium',
              name: 'Premium Package',
              price: '₹45,000',
              description: 'Complete documentation for large events',
              features: [
                '3 Photographers',
                'Full day coverage (12 hours)',
                '500+ edited digital photos',
                'Online gallery for 12 months',
                'One 14×10 premium photo album (40 pages)',
                'Drone photography included',
                'Same-day slideshow of selected images'
              ]
            }
          ],
          faq: [
            {
              question: 'How far in advance should I book photography services?',
              answer: 'We recommend booking at least 2-3 months in advance for regular events and 6-12 months for wedding events to ensure availability.'
            },
            {
              question: 'How long does it take to receive the final photos?',
              answer: 'For most events, you will receive your fully edited photos within 2-3 weeks. Rush delivery is available at an additional cost.'
            },
            {
              question: 'Can I request specific photo styles or poses?',
              answer: 'Absolutely! We encourage clients to share their vision, reference photos, and specific shot requests before the event.'
            },
            {
              question: 'Do you provide both color and black & white photos?',
              answer: 'Yes, we provide a mix of color and black & white edits. You can also request specific photos to be edited in either style.'
            }
          ]
        },
        catering: {
          id: 'catering',
          title: 'Catering Services',
          description: 'Delight your guests with exquisite cuisine prepared by our expert chefs. We offer a wide range of menu options, from traditional delicacies to international cuisines, all customized to match your event theme and preferences.',
          icon: <UtensilsCrossed className="h-8 w-8 text-purple-700" />,
          image: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          features: [
            'Customized menu planning based on event theme',
            'Multiple cuisine options available',
            'Special dietary accommodations (vegetarian, vegan, gluten-free, etc.)',
            'Elegant presentation and food display',
            'Professional serving staff',
            'Live cooking stations available',
            'Quality ingredients sourced from trusted suppliers'
          ],
          packages: [
            {
              id: 'basic',
              name: 'Basic Package',
              price: '₹450 per person',
              description: 'Simple and elegant menu for casual events',
              features: [
                'Welcome drinks (2 varieties)',
                'Appetizers (4 varieties)',
                'Main course (6 items)',
                'Desserts (2 varieties)',
                'Basic buffet setup'
              ]
            },
            {
              id: 'standard',
              name: 'Deluxe Package',
              price: '₹750 per person',
              description: 'Comprehensive menu for special occasions',
              features: [
                'Welcome drinks (4 varieties)',
                'Appetizers (6 varieties)',
                'Salad bar',
                'Main course (10 items)',
                'Desserts (4 varieties)',
                'Live pasta/noodle station',
                'Elegant buffet setup with theme-based decoration'
              ],
              isPopular: true
            },
            {
              id: 'premium',
              name: 'Royal Package',
              price: '₹1,200 per person',
              description: 'Luxurious dining experience for premium events',
              features: [
                'Signature welcome drinks (5 varieties)',
                'Premium appetizers (8 varieties)',
                'Gourmet salad bar',
                'Main course (15 items with international cuisines)',
                'Dessert station (6 varieties)',
                'Multiple live cooking stations',
                'Premium table settings and decoration',
                'Specialized chef consultation'
              ]
            }
          ],
          faq: [
            {
              question: 'Can you accommodate special dietary requirements?',
              answer: 'Yes, we can accommodate various dietary needs including vegetarian, vegan, gluten-free, and specific allergies. Please inform us in advance.'
            },
            {
              question: 'Do you provide a tasting session before the event?',
              answer: 'Yes, we offer a complimentary tasting session for events with more than 100 guests. For smaller events, tasting can be arranged at a nominal cost.'
            },
            {
              question: 'What is your cancellation policy?',
              answer: 'Cancellations made 30+ days before the event receive a full refund minus the booking fee. Cancellations within 15-29 days receive a 50% refund, and cancellations less than 15 days before are non-refundable.'
            },
            {
              question: 'Do you provide all the serving equipment and cutlery?',
              answer: 'Yes, our packages include all necessary serving equipment, cutlery, crockery, and glassware appropriate for the menu and event type.'
            }
          ]
        },
        tenthouse: {
          id: 'tenthouse',
          title: 'Tent House Services',
          description: 'Create the perfect venue for your event with our elegant and sturdy tents. From intimate gatherings to grand celebrations, we offer a wide range of tent options with customizable decorations to match your event theme.',
          icon: <Tent className="h-8 w-8 text-purple-700" />,
          image: 'https://images.pexels.com/photos/2731336/pexels-photo-2731336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          features: [
            'Various tent sizes and styles available',
            'Weather-resistant and durable materials',
            'Customizable decorations and lighting',
            'Climate control options (heaters, coolers, AC)',
            'Flooring options (wooden, carpeted, etc.)',
            'Seating arrangements as per requirements',
            'Stage setup and backdrop design'
          ],
          packages: [
            {
              id: 'basic',
              name: 'Standard Tent Package',
              price: '₹25,000 onwards',
              description: 'Basic tent setup for small to medium events',
              features: [
                'Standard waterproof tent (up to 1000 sq ft)',
                'Basic lighting setup',
                'Simple cloth decorations',
                'Carpet flooring',
                'Standard chairs and tables setup'
              ]
            },
            {
              id: 'standard',
              name: 'Premium Tent Package',
              price: '₹45,000 onwards',
              description: 'Enhanced tent setup with better amenities',
              features: [
                'Premium waterproof tent (up to 2000 sq ft)',
                'Decorative lighting with patterns',
                'Themed decorations',
                'Raised wooden flooring',
                'Premium chairs with covers',
                'Air coolers included',
                'Basic sound system'
              ],
              isPopular: true
            },
            {
              id: 'premium',
              name: 'Luxury Tent Package',
              price: '₹85,000 onwards',
              description: 'Luxurious tent setup for high-end events',
              features: [
                'Luxury waterproof tent (up to 3000 sq ft)',
                'Designer lighting and chandelier setups',
                'Custom theme-based decorations',
                'Premium wooden flooring',
                'Luxury seating arrangements',
                'Full air conditioning',
                'Advanced sound system',
                'Separate lounging areas',
                'Backstage facilities'
              ]
            }
          ],
          faq: [
            {
              question: 'How early do you set up the tents before an event?',
              answer: 'We typically begin setup 1-3 days before the event, depending on the complexity and size of the installation.'
            },
            {
              question: 'Are your tents weather-proof?',
              answer: 'Yes, our tents are designed to withstand various weather conditions including rain and moderate winds. For extreme weather, we have additional reinforcement options.'
            },
            {
              question: 'Can I customize the tent decorations to match my event theme?',
              answer: 'Absolutely! We offer fully customizable decoration options to match any theme or color scheme you have in mind.'
            },
            {
              question: 'Do you provide power backup for the tent facilities?',
              answer: 'Yes, all our premium and luxury packages include power backup generators. For the standard package, generators can be added at an additional cost.'
            }
          ]
        },
        priest: {
          id: 'priest',
          title: 'Priest Services (Panthulu)',
          description: 'Ensure authentic and meaningful religious ceremonies with our experienced priests (Panthulu). Our priests are well-versed in various traditional rituals and can guide you through every step of the ceremony.',
          icon: <HeartHandshake className="h-8 w-8 text-purple-700" />,
          image: 'https://images.pexels.com/photos/3729263/pexels-photo-3729263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          features: [
            'Experienced priests for various traditions',
            'Guidance on ritual preparations',
            'Complete pooja materials arranged',
            'Explanation of ritual significance',
            'Flexible scheduling options',
            'Traditional to modern approaches available',
            'Multilingual priests available'
          ],
          packages: [
            {
              id: 'basic',
              name: 'Basic Ceremony Package',
              price: '₹5,000 onwards',
              description: 'Simple religious ceremonies',
              features: [
                'Priest service for up to 2 hours',
                'Basic pooja materials included',
                'Phone consultation before the ceremony',
                'Suitable for simple home ceremonies'
              ]
            },
            {
              id: 'standard',
              name: 'Standard Ceremony Package',
              price: '₹15,000 onwards',
              description: 'Comprehensive religious ceremonies for important occasions',
              features: [
                'Priest service for up to 4 hours',
                'Complete pooja materials included',
                'Pre-ceremony consultation',
                'Explanation of rituals during ceremony',
                'Assistance with preparations',
                'Suitable for naming ceremonies, griha pravesh, etc.'
              ],
              isPopular: true
            },
            {
              id: 'premium',
              name: 'Wedding Ceremony Package',
              price: '₹30,000 onwards',
              description: 'Complete wedding ceremony management',
              features: [
                'Head priest and assistant',
                'Full-day service',
                'All premium pooja materials included',
                'Multiple consultation sessions',
                'Complete guidance on pre-wedding rituals',
                'Customized ceremony as per family traditions',
                'Post-wedding rituals included',
                'Sacred fire (havan) arrangement'
              ]
            }
          ],
          faq: [
            {
              question: 'Which religious traditions do your priests specialize in?',
              answer: 'Our priests are experienced in various Hindu traditions including Vedic, Agamic, and regional variations from different parts of India.'
            },
            {
              question: 'Do I need to arrange for pooja materials separately?',
              answer: 'No, all our packages include the necessary pooja materials. For specific or rare items, we will provide a list in advance.'
            },
            {
              question: 'Can the ceremony be conducted in multiple languages?',
              answer: 'Yes, our priests can conduct ceremonies in Sanskrit, Telugu, Tamil, Hindi, and English. Other language options may be available upon request.'
            },
            {
              question: 'How far in advance should I book priest services?',
              answer: 'For regular ceremonies, 2-4 weeks notice is recommended. For wedding ceremonies, we suggest booking 3-6 months in advance, especially during auspicious dates.'
            }
          ]
        }
      };

      // If serviceType exists in our mock data, set it as current service
      if (serviceType && services[serviceType]) {
        setService(services[serviceType]);
      } else {
        // Handle case when service type is not found
        setService(null);
      }
    };

    getServiceDetails();
  }, [serviceType]);

  if (!service) {
    return (
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Service not found</h2>
        <p className="mt-2 text-gray-600">The service you're looking for is not available.</p>
        <Link to="/services" className="btn btn-primary mt-4">
          View All Services
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-r from-purple-900 to-purple-700 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${service.image})` }}></div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className="max-w-3xl">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mr-4">
                {service.icon}
              </div>
              <h1 className="text-4xl font-bold text-white">{service.title}</h1>
            </div>
            <p className="text-xl text-purple-100">{service.description}</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm flex items-start">
                <CheckCircle className="h-6 w-6 text-purple-700 mr-4 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Packages Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.packages.map((pkg) => (
              <div 
                key={pkg.id} 
                className={`bg-white rounded-xl overflow-hidden shadow-md border transition-all duration-300 hover:shadow-lg ${
                  pkg.isPopular ? 'border-purple-500 relative' : 'border-transparent'
                }`}
              >
                {pkg.isPopular && (
                  <div className="bg-purple-500 text-white text-sm font-bold uppercase px-3 py-1 absolute top-0 right-0 rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <p className="text-3xl font-bold text-purple-700 mb-6">{pkg.price}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/booking" className={`block w-full py-3 px-4 rounded-md text-center font-medium ${
                    pkg.isPopular 
                      ? 'bg-purple-700 text-white hover:bg-purple-800' 
                      : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                  }`}>
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden divide-y divide-gray-200">
            {service.faq.map((item, index) => (
              <details key={index} className="group">
                <summary className="flex items-center justify-between cursor-pointer p-6">
                  <h3 className="text-lg font-medium text-gray-900 group-open:text-purple-700">{item.question}</h3>
                  <span className="ml-6 flex-shrink-0 text-gray-400 group-open:text-purple-700">
                    <svg className="h-6 w-6 transform group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-2">
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-purple-50 rounded-xl p-8 border border-purple-100">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Ready to Book Our Services?</h2>
              <p className="text-gray-700">Contact us today to discuss your event requirements and get a personalized quote.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/booking" className="btn btn-primary text-center">
                Book Now
              </Link>
              <Link to="/chat-support" className="btn btn-outline text-center">
                Ask Questions
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;