# EventEase - Event Management Website

A full-stack MERN application for managing events, bookings, and event-related services.

![EventEase Screenshot](https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)

## Features

- **User Authentication**: Secure login and registration system
- **Service Management**: Photography, Catering, Tent House, and Priest Services
- **Real-time Chat Support**: Instant communication with support staff
- **Booking System**: Multi-step booking process with service selection
- **Dashboard**: User-friendly dashboard for managing bookings and events
- **Responsive Design**: Mobile-first approach for all screen sizes

## Tech Stack

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- React Router v6
- Lucide React (for icons)
- Socket.io Client (for real-time chat)

### Backend
- Node.js
- Express.js
- MongoDB
- Socket.io
- JWT Authentication
- CORS

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [https://github.com//eventease.git](https://github.com/venkatanaresh4285/event-management](https://github.com/venkatanaresh4285/event-management)
cd eventease
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

4. Start the development server:
```bash
# Start frontend
npm run dev

# Start backend
npm run server

# Start both (in development)
npm run dev:server
```

## Project Structure

```
eventease/
├── src/                    # Frontend source files
│   ├── components/         # React components
│   ├── context/           # Context providers
│   ├── pages/             # Page components
│   └── main.tsx           # Entry point
├── server/                # Backend source files
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   └── index.js          # Server entry point
└── public/               # Static assets
```

## Available Scripts

- `npm run dev` - Start frontend development server
- `npm run build` - Build frontend for production
- `npm run server` - Start backend server
- `npm run dev:server` - Start backend server with nodemon
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth` - Get current user

### Bookings
- `GET /api/bookings` - Get all bookings
- `POST /api/bookings` - Create new booking
- `GET /api/bookings/:id` - Get specific booking
- `PUT /api/bookings/:id` - Update booking
- `DELETE /api/bookings/:id` - Delete booking

### Services
- Photography
- Catering
- Tent House
- Priest Services
- Music & Entertainment
- Return Gifts
- Transportation
- Decoration

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



## Acknowledgments

- Images from [Pexels](https://www.pexels.com/)
- Icons from [Lucide](https://lucide.dev/)

## Contact

Project Link: [https://event-management-lkrkah3ax-venkatanaresh4285s-projects.vercel.app/register](https://event-management-lkrkah3ax-venkatanaresh4285s-projects.vercel.app/register)
