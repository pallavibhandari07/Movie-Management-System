# 🎬 Movie Management System

<p align="left">
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Mongoose-880000?style=flat-square&logo=mongoose&logoColor=white" alt="Mongoose" />
  <img src="https://img.shields.io/badge/EJS-B4CA65?style=flat-square&logo=ejs&logoColor=black" alt="EJS" />
  <img src="https://img.shields.io/badge/Pattern-MVC_CRUD-7C3AED?style=flat-square" alt="CRUD" />
</p>

A full-stack CRUD movie catalog management system built using **Node.js**, **Express.js**, **MongoDB (Mongoose)**, and **EJS templating**. The application allows users to browse movie collections, register new titles with schema validation, edit movie details, and delete entries.

---

## ✨ Features

- **Full CRUD Operations:** Create, Read, Update, and Delete movie records with real-time database persistence.
- **Server-Side Rendered (SSR) Views:** Dynamic EJS view rendering (`home.ejs`, `movie.ejs`, `form.ejs`, `edit.ejs`).
- **Mongoose Schema Validation:**
  - `movieName`: Required string (minimum 3 characters)
  - `director`: Required string (minimum 3 characters)
  - `genre`: Required string (minimum 3 characters)
  - `releaseYear`: Numeric boundary validation ($\ge 1950$)
  - `rating`: Rating scale enforcement (between 1 and 10)
- **Environment-Driven Configuration:** Supports `.env` configuration for custom ports and MongoDB Atlas / local connection URIs.

---

## 🛣️ Route Architecture

| Method | Route | Description | Rendered View / Action |
|---|---|---|---|
| `GET` | `/` | Landing page | `home.ejs` |
| `GET` | `/getdata` | Retrieve and display all movie catalog records | `movie.ejs` |
| `GET` | `/insertdata` | Display movie creation input form | `form.ejs` |
| `POST` | `/createdata` | Create new movie in MongoDB database | Redirects to `/getdata` |
| `GET` | `/edit/:userid` | Display pre-populated edit form for a movie | `edit.ejs` |
| `POST` | `/update/:userid` | Submit modifications and update record | Redirects to `/getdata` |
| `GET` | `/delete/:userid` | Remove movie record by ID | Redirects to `/getdata` |

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- [MongoDB](https://www.mongodb.com/) (Local instance or MongoDB Atlas)

### Installation & Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/pallavibhandari07/Movie-Management-System.git
   cd Movie-Management-System
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Copy the example environment template:
   ```bash
   cp .env.example .env
   ```
   Default configuration in `.env`:
   ```env
   PORT=3000
   MONGO_URI=mongodb://127.0.0.1:27017/movieDB
   ```

4. **Start the application:**
   ```bash
   # Production mode
   npm start

   # Development mode with auto-reload
   npm run dev
   ```

5. Open your browser and navigate to:
   ```text
   http://localhost:3000
   ```

---

## 📁 Project Structure

```
Movie-Management-System/
├── app.js             # Main server logic, Mongoose connection, and CRUD routes
├── package.json       # Node metadata and dependencies
├── .env.example       # Sample environment template
├── .gitignore         # Excluded system and dependency files
├── home.ejs           # Landing view
├── form.ejs           # Movie entry form
├── edit.ejs           # Movie update form
└── movie.ejs          # Catalog grid display view
```

---

## 👩‍💻 Author

**Pallavi Bhandari**  
- GitHub: [@pallavibhandari07](https://github.com/pallavibhandari07)  
- LinkedIn: [Pallavi Bhandari](https://www.linkedin.com/in/pallavi-bhandari-8a4921380/)
