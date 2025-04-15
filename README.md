# Snapfolio

**A Fullstack Photo-Sharing Platform**  
Built with React, Tailwind CSS, Express, MongoDB, JWT, Cloudinary, and more.

Snapfolio is a modern fullstack photo-sharing platform that enables users to upload, like, and comment on photos in real-time. The platform integrates secure authentication, scalable media storage, and powerful backend services, providing an engaging experience for users.

## Features

- **Real-Time Photo Feed**: Users can upload, like, and comment on photos, with instant updates using a real-time feed.
- **Secure Authentication**: Implemented secure user authentication and authorization using JWT (JSON Web Token) and bcrypt, ensuring data privacy and security.
- **RESTful APIs**: Developed 15+ APIs using Express and MongoDB to handle user authentication, photo management, and social interactions.
- **Media Storage**: Integrated Cloudinary for scalable media storage, ensuring high performance for image handling. Multer is used for secure image uploads.
- **Modern UI**: Designed with **Tailwind CSS** for a responsive, mobile-first user interface.

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Express.js
- **Database**: MongoDB
- **Authentication**: JWT, bcrypt
- **Media Storage**: Cloudinary
- **Image Upload**: Multer

## Installation

To run Snapfolio locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Ansh-Kotwal/Snapfolio.git
   cd Snapfolio
   ```

2. **Install dependencies** for both the frontend and backend:

   - For the frontend (React):

     ```bash
     cd frontend
     npm install
     ```

   - For the backend (Express):

     ```bash
     cd backend
     npm install
     ```

3. **Set up environment variables**:

   Ensure that you have the necessary API keys for Cloudinary, MongoDB, and JWT secret stored in your `.env` file. Example:

   ```plaintext
   CLOUDINARY_URL=your_cloudinary_url
   MONGODB_URI=your_mongo_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Start the backend server**:

   ```bash
   cd backend
   npm start
   ```

5. **Start the frontend application**:

   ```bash
   cd frontend
   npm start
   ```

6. Open your browser and go to `http://localhost:3000` to view the platform.

## Project Structure

```plaintext
Snapfolio/
├── backend/              # Backend code (Express API)
│   ├── controllers/      # API controllers for user authentication, photo management, etc.
│   ├── models/           # MongoDB models for users, photos, and comments
│   ├── routes/           # RESTful routes for handling requests
│   ├── middleware/       # Middleware for JWT authentication, file handling, etc.
│   └── server.js         # Express server setup
├── frontend/             # Frontend code (React)
│   ├── src/
│   │   ├── components/   # React components for UI (e.g., photo feed, upload form)
│   │   ├── context/      # Context for global state management (e.g., user authentication)
│   │   └── App.js        # Main React component
│   └── public/
│       └── index.html    # The HTML template for the React app
├── .env                  # Environment variables for API keys and secrets
├── .gitignore            # Git ignore file
├── README.md             # Project documentation
└── package.json          # Project dependencies and scripts
```

## Usage

- **User Authentication**: Sign up, log in, and log out securely with JWT authentication.
- **Upload Photos**: Upload images, add descriptions, and manage your photo gallery.
- **Like & Comment**: Interact with photos by liking and commenting in real-time.
- **Profile Management**: Manage your user profile and photo gallery.


## Author

**Ansh Kotwal**  
GitHub: [Ansh-Kotwal](https://github.com/Ansh-Kotwal)

---

This updated `README.md` provides more detailed information about the tech stack, functionality, and usage of the **Snapfolio** platform, making it easier for anyone looking to set up or contribute to the project. 
