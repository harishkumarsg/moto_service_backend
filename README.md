# 🛠️ Moto Service Backend

This is the backend server for the **Moto Service** web application, a motorcycle service booking platform. Built using **Node.js**, **Express.js**, and **MongoDB**, it provides secure user authentication, service booking management, and admin-friendly data access.

## 📁 Project Structure

moto-service-backend/
│
├── controllers/       # Business logic for auth and booking
├── models/            # Mongoose models (User, Booking)
├── routes/            # API routes
├── middleware/        # Authentication middleware
├── .env               # Environment variables
├── server.js          # Entry point
└── package.json       # Dependencies and scripts

## ⚙️ Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- bcrypt.js for password hashing
- dotenv for environment config
- CORS for cross-origin support

## 🚀 Features

- 🔐 User registration and login with hashed passwords
- 🧾 Booking creation and retrieval
- 📊 Protected routes using JWT-based authentication
- 📁 MongoDB schema for users and bookings
- 🌐 Cross-Origin Resource Sharing (CORS) enabled
- 📦 Ready for deployment on **Render**

---

## 🧪 API Endpoints

### 🔐 Auth Routes

| Method | Endpoint             | Description              |
|--------|----------------------|--------------------------|
| POST   | /api/auth/register   | Register a new user      |
| POST   | /api/auth/login      | Login and get JWT token  |

### 📋 Booking Routes (Protected)

| Method | Endpoint           | Description                   |
|--------|--------------------|-------------------------------|
| POST   | /api/bookings      | Create a new booking          |
| GET    | /api/bookings      | Get all bookings for a user   |

---

## 🛠️ Setup Instructions

### 1️⃣ Clone the Repository

git clone https://github.com/yourusername/moto-service-backend.git  
cd moto-service-backend

### 2️⃣ Install Dependencies

npm install

### 3️⃣ Create `.env` File

Create a file named `.env` in the root folder and add the following:

PORT=5000  
MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_jwt_secret_key

### 4️⃣ Run the Server

npm start

Server runs at http://localhost:5000

---

## 🌐 Deployment on Render

1. Create a new Web Service on [Render](https://render.com)
2. Connect your GitHub repository
3. Set Environment Variables:
   - `PORT`
   - `MONGO_URI`
   - `JWT_SECRET`
4. Build Command:  
   npm install
5. Start Command:  
   npm start

---

## 📬 Contact

If you face issues or want to contribute:

📧 Email: harishkumarsg.03@gmail.com  
💻 GitHub: https://github.com/harishkumarsg

---

## 📝 License

This project is licensed under the MIT License.
