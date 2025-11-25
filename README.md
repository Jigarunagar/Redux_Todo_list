# 📝 Todo List App

A full-stack **Todo List Application** built using:

* **Frontend:** React + Vite + Redux Toolkit
* **Backend:** Node.js + Express
* **Database:** MongoDB + Mongoose

This project demonstrates CRUD operations with a clean folder structure and API integration.

---

## 🚀 Features

### ✅ Frontend

* Add Todos
* View Todos
* Toggle Completed Status
* Delete Todos
* State management using **Redux Toolkit**
* API calls using **Axios**

### ✅ Backend

* REST API (GET, POST, PUT, DELETE)
* MongoDB connection using Mongoose
* Clean MVC structure

---

## 📁 Project Structure

### Backend (`/backend`)

```
backend/
│── server.js
│── package.json
│── .env
│── config/
│     └── db.js
│── controllers/
│     └── todoController.js
│── models/
│     └── Todo.js
│── routes/
      └── todoRoutes.js
```

### Frontend (`/frontend`)

```
frontend/
│── src/
│    ├── app/store.js
│    ├── features/todo/todoSlice.js
│    ├── components/AddTodo.jsx
│    ├── components/TodoList.jsx
│    └── App.jsx
```

---

## 🛠️ Tech Stack

| Layer    | Technology                 |
| -------- | -------------------------- |
| Frontend | React, Vite, Redux Toolkit |
| Backend  | Node.js, Express           |
| Database | MongoDB, Mongoose          |
| Tools    | Axios, CORS, dotenv        |

---

## 📦 Installation & Setup

### 🔹 1. Clone the Repository

```
git clone https://github.com/yourusername/todo-app.git
cd todo-app
```

---

# 🖥️ Backend Setup

### 🔹 2. Go to backend folder

```
cd backend
```

### 🔹 3. Install dependencies

```
npm install
```

### 🔹 4. Create `.env` file

```
MONGO_URI=mongodb://127.0.0.1:27017/todoapp
PORT=5000
```

### 🔹 5. Start backend server

```
node server.js
```

Backend will run on:
👉 [http://localhost:5000](http://localhost:5000)

---

# 💻 Frontend Setup

### 🔹 6. Go to frontend folder

```
cd frontend
```

### 🔹 7. Install dependencies

```
npm install
```

### 🔹 8. Start frontend

```
npm run dev
```

Frontend will run on:
👉 [http://localhost:5173](http://localhost:5173)

---

## 📡 API Endpoints

| Method | Endpoint       | Description   |
| ------ | -------------- | ------------- |
| GET    | /api/todos     | Get all todos |
| POST   | /api/todos     | Add new todo  |
| PUT    | /api/todos/:id | Update todo   |
| DELETE | /api/todos/:id | Delete todo   |

---

## 🧩 How Redux Works Here?

* **fetchTodos()** → Get tasks from backend
* **addTodo()** → Add new task
* **toggleTodo()** → Mark as complete/incomplete
* **deleteTodo()** → Remove task

All actions are handled using **createAsyncThunk**.

---

## 📷 Screenshot (Add After UI Ready)

```
[ Add UI Screenshot Here ]
```

---

## 📜 License

This project is **free to use** for learning and development.

---

## ❤️ Contributing

Pull requests are welcome!

---

## 👨‍💻 Author

**Your Name**
Feel free to connect!

---

### ⭐ If you like this project, don't forget to star the repository!
