import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, CheckCircle } from 'lucide-react';

// Define types
interface ServiceOption {
  id: string;
  name: string;
  selected: boolean;
}

interface FormData {
  eventType: string;
  eventDate: string;
  eventTime: string;
  venue: string;
  guestCount: string;
  services: ServiceOption[];
  specialRequests: string;
  name: string;
  email: string;
  phone: string;
}

const BookingPage: React.FC = () => {
  // Initialize form data
  const [formData, setFormData] = useState<FormData>({
    eventType: '',
    eventDate: '',
    eventTime: '',
    venue: '',
    guestCount: '',
    services: [
      { id: 'photography', name: 'Photography', selected: false },
      { id: 'catering', name: 'Catering', selected: false },
      { id: 'tenthouse', name: 'Tent House', selected: false },
      { id: 'priest', name: 'Priest Services', selected: false },
      { id: 'music', name: 'Music & Entertainment', selected: false },
      { id: 'decoration', name: 'Decoration', selected: false },
      { id: 'transportation', name: 'Transportation', selected: false },
      { id: 'gifts', name: 'Return Gifts', selected: false }
    ],
    specialRequests: '',
    name: '',
    email: '',
    phone: ''
  });

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle service selection
  const handleServiceToggle = (id: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.map(service => 
        service.id === id ? { ...service, selected: !service.selected } : service
      )
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form after some time
      setTimeout(() => {
        setFormData({
          eventType: '',
          eventDate: '',
          eventTime: '',
          venue: '',
          guestCount: '',
          services: formData.services.map(service => ({ ...service, selected: false })),
          specialRequests: '',
          name: '',
          email: '',
          phone: ''
        });
        setCurrentStep(1);
        setIsSuccess(false);
      }, 5000);
    }, 2000);
  };

  // Move to next step
  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  // Move to previous step
  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  // Render success message
  if (isSuccess) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Booking Successful!</h2>
          <p className="text-lg text-gray-600 mb-6">
            Thank you for booking with EventEase. We have received your booking request and our team will contact you shortly to confirm the details.
          </p>
          <div className="bg-purple-50 rounded-lg p-6 max-w-md mx-auto">
            <h3 className="font-semibold text-purple-900 text-xl mb-3">Booking Reference</h3>
            <p className="text-purple-800 text-2xl font-bold mb-4">
              EE-{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}
            </p>
            <p className="text-purple-700">
              Please save this reference number for future communications.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-purple-700 text-white px-6 py-4">
          <h2 className="text-2xl font-bold">Book Your Event</h2>
          <p className="text-purple-100">Fill out the form below to book our event management services</p>
        </div>
        
        {/* Progress Steps */}
        <div className="px-6 pt-6">
          <div className="flex items-center justify-between mb-8">
            <div className={`flex flex-col items-center ${currentStep >= 1 ? 'text-purple-700' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${currentStep >= 1 ? 'border-purple-700 bg-purple-100' : 'border-gray-300'}`}>
                <Calendar className="h-5 w-5" />
              </div>
              <span className="text-sm mt-2">Event Details</span>
            </div>
            <div className={`flex-1 h-0.5 mx-2 ${currentStep >= 2 ? 'bg-purple-700' : 'bg-gray-300'}`}></div>
            <div className={`flex flex-col items-center ${currentStep >= 2 ? 'text-purple-700' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${currentStep >= 2 ? 'border-purple-700 bg-purple-100' : 'border-gray-300'}`}>
                <CheckCircle className="h-5 w-5" />
              </div>
              <span className="text-sm mt-2">Services</span>
            </div>
            <div className={`flex-1 h-0.5 mx-2 ${currentStep >= 3 ? 'bg-purple-700' : 'bg-gray-300'}`}></div>
            <div className={`flex flex-col items-center ${currentStep >= 3 ? 'text-purple-700' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${currentStep >= 3 ? 'border-purple-700 bg-purple-100' : 'border-gray-300'}`}>
                <Users className="h-5 w-5" />
              </div>
              <span className="text-sm mt-2">Contact Info</span>
            </div>
          </div>
        </div>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 pb-6">
          {/* Step 1: Event Details */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="eventType\" className="form-label">Event Type</label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  >
                    <option value="">Select Event Type</option>
                    <option value="wedding">Wedding</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="religious">Religious Ceremony</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="eventDate" className="form-label">Event Date</label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="form-input"
                  />
                </div>
                
                <div>
                  <label htmlFor="eventTime" className="form-label">Event Time</label>
                  <input
                    type="time"
                    id="eventTime"
                    name="eventTime"
                    value={formData.eventTime}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
                
                <div>
                  <label htmlFor="guestCount" className="form-label">Expected Number of Guests</label>
                  <input
                    type="number"
                    id="guestCount"
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleInputChange}
                    required
                    min="1"
                    className="form-input"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="venue" className="form-label">Venue Address</label>
                <textarea
                  id="venue"
                  name="venue"
                  value={formData.venue}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="form-input"
                  placeholder="Enter the complete venue address"
                ></textarea>
              </div>
              
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={nextStep}
                  className="btn btn-primary"
                >
                  Next Step
                </button>
              </div>
            </div>
          )}
          
          {/* Step 2: Services */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <label className="form-label mb-3">Select Services</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {formData.services.map(service => (
                    <div
                      key={service.id}
                      onClick={() => handleServiceToggle(service.id)}
                      className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                        service.selected
                          ? 'border-purple-500 bg-purple-50'
                          : 'border-gray-300 hover:border-purple-300'
                      }`}
                    >
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id={service.id}
                          checked={service.selected}
                          onChange={() => {}}
                          className="h-4 w-4 text-purple-600 focus:ring-purple-500"
                        />
                        <label htmlFor={service.id} className="ml-2 text-gray-700 cursor-pointer">
                          {service.name}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <label htmlFor="specialRequests" className="form-label">Special Requests</label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  rows={4}
                  className="form-input"
                  placeholder="Any special requirements or preferences for your event"
                ></textarea>
              </div>
              
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="btn btn-outline"
                >
                  Previous Step
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="btn btn-primary"
                >
                  Next Step
                </button>
              </div>
            </div>
          )}
          
          {/* Step 3: Contact Information */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
              </div>
              
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <h3 className="text-amber-800 font-semibold mb-2">Booking Information</h3>
                <p className="text-amber-700 text-sm">
                  After submitting this form, our team will contact you within 24 hours to confirm your booking details
                  and provide a quote. A 25% advance payment will be required to confirm your booking.
                </p>
              </div>
              
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="btn btn-outline"
                >
                  Previous Step
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="inline-block h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                      Processing...
                    </>
                  ) : (
                    'Submit Booking'
                  )}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default BookingPage;