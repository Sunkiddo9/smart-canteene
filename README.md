# Smart Canteen 🍽️

Smart Canteen is a full-stack web application designed to make college canteen ordering faster and more convenient.

Students can browse the available food items, place an order, receive a token number, and track their order status. The project uses a **Next.js frontend**, **Express.js backend**, and **MongoDB** for storing order information.

> **Note:** This is currently a project/prototype version. Payment options and some advanced features are not connected to real payment services yet.

---

## 🚀 Features

### Student Features

* 🏠 Simple and responsive home page
* 🍔 View available canteen food items
* 💰 Display food prices
* 🛒 Place food orders
* 🎫 Generate an order token
* 💳 Select a payment method
* 📦 View previous orders
* 🔍 Track an order using its token
* 📊 View current order status

### Backend Features

* REST API using Express.js
* MongoDB database integration
* Mongoose models
* Order creation API
* Order tracking API
* CORS support
* Environment variable support

---

## 🛠️ Technologies Used

### Frontend

* **Next.js**
* **React.js**
* **JavaScript**
* **CSS**
* **Axios**

### Backend

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **CORS**
* **dotenv**

---

## 📁 Project Structure

```text
smart-canteene/
│
├── public/
│   └── ...static files
│
├── src/
│   ├── app/
│   │   ├── page.js
│   │   ├── home/
│   │   │   └── page.js
│   │   ├── menu/
│   │   │   └── page.js
│   │   ├── orders/
│   │   │   └── page.js
│   │   ├── trackorder/
│   │   │   └── page.js
│   │   └── globals.css
│   │
│   └── server/
│       ├── server.js
│       ├── models/
│       │   └── Order.js
│       └── routes/
│           └── orders.js
│
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
├── package-lock.json
└── README.md
```

---

# ⚙️ Requirements

Before running the project, make sure you have the following installed:

* **Node.js**
* **npm**
* **MongoDB** or a MongoDB Atlas database
* **Git**

You can check Node.js and npm using:

```bash
node --version
```

```bash
npm --version
```

---

# 📥 Installation

## 1. Clone the repository

```bash
git clone https://github.com/Sunkiddo9/smart-canteene.git
```

Move into the project directory:

```bash
cd smart-canteene
```

---

## 2. Install dependencies

Run:

```bash
npm install
```

This installs all required frontend and backend dependencies.

---

# 🗄️ MongoDB Setup

Smart Canteen uses MongoDB to store order information.

You can use either:

### Option 1 — Local MongoDB

Install MongoDB on your computer and make sure the MongoDB service is running.

A typical local MongoDB connection string is:

```text
mongodb://127.0.0.1:27017/smart-canteen
```

### Option 2 — MongoDB Atlas

You can also use MongoDB Atlas.

Create a database and copy your MongoDB connection string.

It will look similar to:

```text
mongodb+srv://username:password@cluster.mongodb.net/smart-canteen
```

---

# 🔐 Environment Variables

Create a `.env` file in the project root.

Example:

```env
MONGODB_URI=mongodb://127.0.0.1:27017/smart-canteen
PORT=5000
```

If you are using MongoDB Atlas:

```env
MONGODB_URI=your_mongodb_atlas_connection_string
PORT=5000
```

### Important

Do **not** upload your real MongoDB username, password, or connection string to GitHub.

Make sure `.env` is included in `.gitignore`.

---

# ▶️ Running the Project

The project has two parts:

1. Next.js frontend
2. Express.js backend

Both need to be running.

---

## 🖥️ Start the Backend

Open a terminal in the project folder.

Run:

```bash
node src/server/server.js
```

The backend should start on:

```text
http://localhost:5000
```

---

## 🌐 Start the Frontend

Open another terminal in the same project folder.

Run:

```bash
npm run dev
```

The Next.js application should be available at:

```text
http://localhost:3000
```

Open the address in your browser.

---

# 🔄 How the Application Works

The basic order flow is:

```text
Student
   │
   ▼
Home Page
   │
   ▼
Menu
   │
   ▼
Select Food
   │
   ▼
Choose Payment Method
   │
   ▼
Place Order
   │
   ▼
Express API
   │
   ▼
MongoDB
   │
   ▼
Generate Token
   │
   ▼
Track Order
```

---

# 🔌 API Endpoints

The backend currently provides order-related APIs.

## Create Order

```http
POST /api/orders
```

Used to create a new order.

Example request:

```json
{
  "item": "Veg Sandwich",
  "price": 40,
  "paymentMethod": "UPI"
}
```

---

## Get Order by Token

```http
GET /api/orders/:token
```

Example:

```text
GET /api/orders/101
```

This can be used to retrieve an order using its token number.

---

# 🎫 Order Token System

When a student places an order, the system generates a token number.

For example:

```text
Order 1 → Token 101
Order 2 → Token 102
Order 3 → Token 103
```

The token can then be used to identify and track the order.

> The current token system is a basic prototype implementation and can be improved later to prevent duplicate tokens after server restarts.

---

# 💳 Payment

The application currently allows the user to select a payment method such as:

* UPI
* Wallet
* Card

At the current stage, the selected payment method is stored with the order.

**Real payment processing is not implemented yet.**

Future versions can integrate a payment gateway such as Razorpay or another supported payment provider.

---

# 📦 Order Status

Orders currently use an order status such as:

```text
Preparing
```

The order tracking system can be expanded to support multiple stages:

```text
Pending
   ↓
Confirmed
   ↓
Preparing
   ↓
Ready
   ↓
Collected
```

This would make the canteen workflow more realistic.

---

# 🧪 Development

During development, start the backend and frontend separately.

### Terminal 1

```bash
node src/server/server.js
```

### Terminal 2

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

---

# 🚧 Current Limitations

The current version is a working prototype and has several areas that can be improved.

### 1. Static Menu

Food items are currently defined in the frontend.

A future version should store menu items in MongoDB.

### 2. Basic Payment

The payment options are currently only selections. No real payment transaction is performed.

### 3. Basic Token Generation

The current token system can reset when the backend restarts.

### 4. No Authentication

Students and staff do not currently have separate login accounts.

### 5. No Admin/Staff Dashboard

A dedicated dashboard for canteen staff would make order management much easier.

### 6. Limited Order Status Management

A staff member should be able to change an order from:

```text
Pending → Confirmed → Preparing → Ready → Collected
```

### 7. No Real-Time Updates

The current tracking system is API-based. Real-time updates can be added later using WebSockets or Socket.IO.

---

# 🔮 Future Improvements

The project can be expanded with the following features:

* 👤 Student login and registration
* 🔐 Authentication and authorization
* 👨‍💼 Admin dashboard
* 👨‍🍳 Staff dashboard
* 🍔 Dynamic menu management
* 🛒 Shopping cart
* ➕ Multiple food items in one order
* 🔢 Quantity selection
* 💰 Automatic total calculation
* 💳 Real online payment
* 📱 Mobile-friendly UI
* 🔔 Order notifications
* ⚡ Real-time order tracking
* 📊 Canteen sales dashboard
* 📈 Daily/monthly sales analytics
* ⭐ Food ratings and reviews
* 🧾 Digital receipts
* 📦 Order history
* 🥗 Food categories
* 🖼️ Food images
* 🏷️ Discounts and offers

---

# 🔒 Security Improvements Planned

For a production version, the application should include:

* Input validation
* Authentication
* Role-based authorization
* Secure environment variables
* Restricted CORS configuration
* Server-side price validation
* Secure payment verification
* Database-level unique order tokens
* Better error handling

---

# 🎯 Project Goal

The main goal of Smart Canteen is to reduce waiting time at college canteens and make the food ordering process more organized.

Instead of standing in a queue:

```text
Student
   ↓
Select Food
   ↓
Place Order
   ↓
Receive Token
   ↓
Track Order
   ↓
Collect Food
```

This can help students save time while also helping canteen staff manage orders more efficiently.

---

# 📌 Project Status

**Current Status:** 🚧 Development / Prototype

The basic ordering and order-tracking workflow is implemented.

The project is being developed further with the goal of creating a complete smart canteen management system.

---

# 👨‍💻 Author

**Vikram Yadav**

GitHub:

https://github.com/Sunkiddo9

Repository:

https://github.com/Sunkiddo9/smart-canteene

---

# 📄 License

This project is currently intended for educational and development purposes.

A formal open-source license can be added in a future version.

---

## ⭐ Future Vision

Smart Canteen is planned to become a complete digital canteen management platform where students can order food, make payments, track their orders, and receive notifications while canteen staff can manage orders, menus, inventory, and sales from a dedicated dashboard.

---

**Built with ❤️ using Next.js, Node.js, Express.js and MongoDB.**
