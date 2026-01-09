# 📚 Book Store Backend API

A RESTful backend API for managing an online book store with authentication, authorization, and role-based access control.

This project is built as a practical backend application using Node.js and Express, designed to demonstrate clean architecture, secure authentication, and scalable API design.

---

## 🚀 Features

* User Registration & Login
* Password hashing using bcrypt
* JWT Authentication
* Role-based Authorization (User / Admin)
* CRUD operations for Books
* Admin-only access for managing books
* Secure environment variables
* Clean project structure (Controllers, Routes, Schemas, Middlewares)

---

## 🛠 Tech Stack

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT (JSON Web Tokens)
* bcrypt
* dotenv

---

## 📁 Project Structure

```
project-root/
│
├── Controllers/
│   ├── users.js
│   └── books.js
│
├── Middlewares/
│   ├── auth.js
│   └── admin.js
│
├── Routes/
│   ├── users.js
│   └── books.js
│
├── Schemas/
│   ├── users.js
│   └── books.js
│
├── .env
├── .gitignore
├── app.js
├── package.json
└── README.md
```

---

## 🔐 Authentication & Authorization

* Authentication is handled using JWT.
* After login, a token is returned.
* Token must be sent in request headers:

```
Authorization: Bearer <token>
```

### Roles

* **User**: Can view books
* **Admin**: Can add, update, and delete books

---

## 📌 API Endpoints

### 👤 User Routes

| Method | Endpoint            | Description       |
| ------ | ------------------- | ----------------- |
| POST   | /api/users/register | Register new user |
| POST   | /api/users/login    | Login user        |

---

### 📚 Book Routes

| Method | Endpoint       | Access       | Description    |
| ------ | -------------- | ------------ | -------------- |
| GET    | /api/books     | User / Admin | Get all books  |
| GET    | /api/books/:id | User / Admin | Get book by ID |
| POST   | /api/books     | Admin        | Add new book   |
| PUT    | /api/books/:id | Admin        | Update book    |
| DELETE | /api/books/:id | Admin        | Delete book    |

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## ▶️ How to Run Locally

1. Clone the repository

```
git clone https://github.com/your-username/book-store-backend.git
```

2. Install dependencies

```
npm install
```

3. Create `.env` file and add environment variables

4. Run the project

```
npm start
```

Server will start on:

```
http://localhost:5000
```

---

## 🧠 Future Improvements

* Author role
* Book status (draft / published)
* Pagination & search
* Refresh tokens
* API documentation using Swagger
* Unit testing with Jest

---

## 👨‍💻 Author

Safwat Ahmed

Backend Developer | Node.js | MongoDB | REST APIs
