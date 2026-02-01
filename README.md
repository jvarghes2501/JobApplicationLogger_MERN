# JobLogger App

A full-stack MERN (MongoDB, Express, React, Node.js) application for tracking job applications. Keep track of your job search progress with detailed statistics, visualizations, and export capabilities.

## Features

- 🔐 **User Authentication** - Secure registration and login with JWT
- 📝 **Job Management** - Add, edit, delete, and search job applications
- 📊 **Statistics Dashboard** - View application stats and monthly trends
- 📈 **Data Visualization** - Interactive charts showing application progress
- 🔍 **Search & Filter** - Filter jobs by status, type, and search terms
- 📥 **Excel Export** - Download your job data as an Excel spreadsheet
- 👤 **User Profile** - Manage your account information
- 🎨 **Responsive Design** - Works seamlessly on desktop and mobile devices

## Tech Stack

### Frontend

- **React** - UI library
- **React Router** - Navigation
- **Styled Components** - CSS-in-JS styling
- **Recharts** - Data visualization
- **Axios** - HTTP client
- **React Query** - Server state management
- **React Toastify** - Toast notifications
- **Vite** - Build tool

### Backend

- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **ExcelJS** - Excel file generation
- **Express Validator** - Input validation

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn package manager

## Installation

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd JobLoggerApp_MERN
```

### 2. Install dependencies

```bash
npm run setup-project
```

This installs dependencies for both server and client.

### 3. Environment Variables

Create a `.env` file in the root directory:

```env
# Server Configuration
NODE_ENV=development
PORT=5100

# Database
MONGO_URL=your_mongodb_connection_string

# JWT Authentication
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=1d

# Cloudinary (optional - for avatar uploads)
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

### 4. Seed Database (Optional)

Populate the database with sample data:

```bash
npm run populate
```

## Running the Application

### Development Mode

Run both frontend and backend concurrently:

```bash
npm run dev
```

- Server runs on: `http://localhost:5100`
- Client runs on: `http://localhost:5173`

### Run Server Only

```bash
npm run server
```

### Run Client Only

```bash
npm run client
```

### Production Build

```bash
npm run setup-production-app
node server.js
```

## API Endpoints

### Authentication

- `POST /api/v1/auth/register` - Register new user
- `POST /api/v1/auth/login` - Login user
- `GET /api/v1/auth/logout` - Logout user

### Jobs

- `GET /api/v1/jobs` - Get all jobs (with filters)
- `POST /api/v1/jobs` - Create new job
- `GET /api/v1/jobs/stats` - Get job statistics
- `GET /api/v1/jobs/download` - Download jobs as Excel
- `GET /api/v1/jobs/:id` - Get single job
- `PATCH /api/v1/jobs/:id` - Update job
- `DELETE /api/v1/jobs/:id` - Delete job

### User

- `GET /api/v1/users/current-user` - Get current user
- `PATCH /api/v1/users/update-user` - Update user profile

## Project Structure

```
JobLoggerApp_MERN/
├── client/                 # React frontend
│   ├── src/
│   │   ├── assets/        # Images and styled wrappers
│   │   ├── components/    # Reusable React components
│   │   ├── pages/         # Page components
│   │   └── utils/         # Utility functions
│   └── package.json
├── controllers/           # Route controllers
├── middleware/            # Express middleware
├── models/               # Mongoose models
├── routes/               # API routes
├── utils/                # Server utilities
├── Errors/               # Custom error classes
├── server.js             # Express server setup
├── populateDB.js         # Database seeding script
└── package.json
```

## Key Features Explained

### Job Status Tracking

Track applications through different stages:

- Applied
- Interview
- Offer
- Rejected

### Job Types

Categorize positions by type:

- Engineering
- Design
- Product Management
- Sales
- Marketing
- And more...

### Statistics Dashboard

- Total applications by status
- Monthly application trends (last 6 months)
- Visual charts (bar and area charts)

### Excel Export

Download all your job data with one click, including:

- Company name
- Position title
- Application status
- Job type
- Location
- Application date

## Deployment

### Option 1: Render.com

1. Push code to GitHub
2. Create new Web Service on Render
3. Connect GitHub repository
4. Set build command: `npm run setup-production-app`
5. Set start command: `node server.js`
6. Add environment variables

### Option 2: Railway.app

1. Push code to GitHub
2. Create new project on Railway
3. Connect GitHub repository
4. Add environment variables
5. Railway auto-deploys

### Database: MongoDB Atlas

1. Create free cluster at [mongodb.com](https://www.mongodb.com/cloud/atlas)
2. Get connection string
3. Add to `MONGO_URL` environment variable

## Security Features

- Password hashing with bcryptjs
- JWT-based authentication
- HTTP-only cookies
- MongoDB sanitization
- Rate limiting
- Helmet for security headers

## Scripts Reference

| Script                         | Description                                    |
| ------------------------------ | ---------------------------------------------- |
| `npm run dev`                  | Run both server and client in development mode |
| `npm run server`               | Run server with nodemon                        |
| `npm run client`               | Run React development server                   |
| `npm run setup-project`        | Install all dependencies                       |
| `npm run setup-production-app` | Setup and build for production                 |
| `npm run populate`             | Seed database with sample data                 |

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

ISC

## Author

Jestin

## Support

For issues and questions, please open an issue in the GitHub repository.

---

**Happy Job Hunting! 🎯**
