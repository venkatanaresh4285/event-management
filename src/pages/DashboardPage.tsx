import React, { useState, useContext, useEffect } from 'react';
import { Calendar, Clock, MapPin, AlertCircle, Check, X, ChevronRight } from 'lucide-react';
import AuthContext from '../context/AuthContext';

// Define types
interface Booking {
  id: string;
  eventType: string;
  eventDate: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  totalAmount: string;
  venueName: string;
}

const DashboardPage: React.FC = () => {
  const { user } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState('upcoming');
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Mock data - in a real app, this would come from an API
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const mockBookings: Booking[] = [
        {
          id: 'BK1001',
          eventType: 'Wedding',
          eventDate: '2025-08-15',
          status: 'confirmed',
          totalAmount: '₹150,000',
          venueName: 'Royal Garden Resort'
        },
        {
          id: 'BK1002',
          eventType: 'Corporate Event',
          eventDate: '2025-06-22',
          status: 'pending',
          totalAmount: '₹75,000',
          venueName: 'Business Convention Center'
        },
        {
          id: 'BK1003',
          eventType: 'Birthday Party',
          eventDate: '2025-05-10',
          status: 'confirmed',
          totalAmount: '₹45,000',
          venueName: 'Celebration Plaza'
        },
        {
          id: 'BK1004',
          eventType: 'Anniversary',
          eventDate: '2025-04-30',
          status: 'completed',
          totalAmount: '₹55,000',
          venueName: 'Sunset Beach Resort'
        },
        {
          id: 'BK1005',
          eventType: 'Religious Ceremony',
          eventDate: '2025-03-12',
          status: 'completed',
          totalAmount: '₹35,000',
          venueName: 'Temple Community Hall'
        }
      ];
      
      setBookings(mockBookings);
      setIsLoading(false);
    }, 1000);
  }, []);

  // Filter bookings based on active tab
  const filteredBookings = bookings.filter(booking => {
    const eventDate = new Date(booking.eventDate);
    const today = new Date();
    
    if (activeTab === 'upcoming') {
      return eventDate >= today && (booking.status === 'confirmed' || booking.status === 'pending');
    } else if (activeTab === 'past') {
      return eventDate < today || booking.status === 'completed';
    } else if (activeTab === 'cancelled') {
      return booking.status === 'cancelled';
    }
    return true;
  });

  // Status badge component
  const StatusBadge = ({ status }: { status: string }) => {
    switch (status) {
      case 'confirmed':
        return (
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 flex items-center">
            <Check className="w-3 h-3 mr-1" />
            Confirmed
          </span>
        );
      case 'pending':
        return (
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800 flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            Pending
          </span>
        );
      case 'completed':
        return (
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 flex items-center">
            <Check className="w-3 h-3 mr-1" />
            Completed
          </span>
        );
      case 'cancelled':
        return (
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800 flex items-center">
            <X className="w-3 h-3 mr-1" />
            Cancelled
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {/* Dashboard Header */}
        <div className="bg-purple-700 text-white px-6 py-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-purple-100">Welcome back, {user?.name || 'Guest'}</p>
        </div>
        
        {/* Dashboard Content */}
        <div className="p-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-purple-50 rounded-lg p-6 border border-purple-100">
              <h3 className="text-lg font-semibold text-purple-800 mb-2">Upcoming Events</h3>
              <p className="text-3xl font-bold text-purple-900">
                {bookings.filter(b => new Date(b.eventDate) >= new Date() && b.status !== 'cancelled').length}
              </p>
            </div>
            
            <div className="bg-amber-50 rounded-lg p-6 border border-amber-100">
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Completed Events</h3>
              <p className="text-3xl font-bold text-amber-900">
                {bookings.filter(b => b.status === 'completed').length}
              </p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6 border border-green-100">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Total Spent</h3>
              <p className="text-3xl font-bold text-green-900">
                ₹{bookings.reduce((sum, booking) => {
                  return sum + parseInt(booking.totalAmount.replace(/[^\d]/g, ''));
                }, 0).toLocaleString('en-IN')}
              </p>
            </div>
          </div>
          
          {/* Bookings */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Your Bookings</h2>
            
            {/* Tabs */}
            <div className="border-b border-gray-200 mb-6">
              <nav className="flex -mb-px">
                <button
                  onClick={() => setActiveTab('upcoming')}
                  className={`py-3 px-4 text-sm font-medium ${
                    activeTab === 'upcoming'
                      ? 'border-b-2 border-purple-500 text-purple-700'
                      : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Upcoming
                </button>
                <button
                  onClick={() => setActiveTab('past')}
                  className={`py-3 px-4 text-sm font-medium ${
                    activeTab === 'past'
                      ? 'border-b-2 border-purple-500 text-purple-700'
                      : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Past
                </button>
                <button
                  onClick={() => setActiveTab('cancelled')}
                  className={`py-3 px-4 text-sm font-medium ${
                    activeTab === 'cancelled'
                      ? 'border-b-2 border-purple-500 text-purple-700'
                      : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Cancelled
                </button>
              </nav>
            </div>
            
            {/* Booking List */}
            {isLoading ? (
              <div className="py-8 text-center">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-700"></div>
                <p className="mt-2 text-gray-600">Loading your bookings...</p>
              </div>
            ) : filteredBookings.length === 0 ? (
              <div className="py-8 text-center bg-gray-50 rounded-lg">
                <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-1">No bookings found</h3>
                <p className="text-gray-600">You don't have any {activeTab} bookings.</p>
              </div>
            ) : (
              <div className="bg-white overflow-hidden shadow-sm rounded-lg">
                <ul className="divide-y divide-gray-200">
                  {filteredBookings.map((booking) => (
                    <li key={booking.id} className="p-4 hover:bg-gray-50 transition-colors duration-150">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                        <div>
                          <div className="flex items-center">
                            <span className="text-lg font-semibold text-gray-900 mr-2">{booking.eventType}</span>
                            <StatusBadge status={booking.status} />
                          </div>
                          <div className="mt-2 flex items-center text-sm text-gray-500">
                            <Calendar className="w-4 h-4 mr-1.5 text-gray-400" />
                            {new Date(booking.eventDate).toLocaleDateString('en-US', { 
                              weekday: 'long', 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </div>
                          <div className="mt-1 flex items-center text-sm text-gray-500">
                            <MapPin className="w-4 h-4 mr-1.5 text-gray-400" />
                            {booking.venueName}
                          </div>
                        </div>
                        <div className="mt-4 sm:mt-0 flex flex-col items-end">
                          <span className="text-lg font-bold text-gray-900">{booking.totalAmount}</span>
                          <button className="mt-2 inline-flex items-center px-3 py-1.5 border border-purple-300 text-sm leading-4 font-medium rounded-md text-purple-700 bg-white hover:bg-purple-50 focus:outline-none">
                            View Details
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          {/* Recent Activity */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
            
            <div className="bg-white overflow-hidden shadow-sm rounded-lg divide-y divide-gray-200">
              <div className="p-4 flex items-start">
                <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-4">
                  <Check className="w-5 h-5 text-green-600" />
                </span>
                <div>
                  <p className="font-medium text-gray-900">Booking confirmed</p>
                  <p className="text-sm text-gray-500">Your booking #BK1001 has been confirmed</p>
                  <p className="text-xs text-gray-400 mt-1">2 days ago</p>
                </div>
              </div>
              
              <div className="p-4 flex items-start">
                <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <Calendar className="w-5 h-5 text-blue-600" />
                </span>
                <div>
                  <p className="font-medium text-gray-900">New booking created</p>
                  <p className="text-sm text-gray-500">You've created a new booking #BK1002</p>
                  <p className="text-xs text-gray-400 mt-1">5 days ago</p>
                </div>
              </div>
              
              <div className="p-4 flex items-start">
                <span className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </span>
                <div>
                  <p className="font-medium text-gray-900">Account created</p>
                  <p className="text-sm text-gray-500">Welcome to EventEase!</p>
                  <p className="text-xs text-gray-400 mt-1">1 week ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;