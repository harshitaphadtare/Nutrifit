# NutriFit - Food Ordering Platform

## Introduction
NutriFit is a modern food ordering platform designed to simplify meal planning and ordering for users while providing robust administrative tools for restaurant owners. 
Key Features:
- **User Panel**: Allows users to browse a menu, customize orders, and track their purchases.
- **Administrator Panel**: Provides control over menu management, order updates, and analytics.
- **Secure Payments**: Integrated Stripe Payment Gateway for secure and seamless real-time transactions.

Demo Links:

**Home Page** - https://nutrifit-frontend-4mau.onrender.com/

**Admin Panel** - https://nutrifit-admin.onrender.com/list

This guide will help you set up and start the project.

---

## Prerequisites
Before starting, ensure you have the following installed on your system:
- Node.js (v16 or later)
- npm (Node Package Manager)
- MongoDB (local or cloud-based)

---

## Project Structure
The project consists of three main components:
1. **Frontend**: User-facing application.
2. **Admin Panel**: Interface for administrators to manage orders and menu.
3. **Backend**: Server-side application handling API requests and business logic.

---

## Installation and Setup
### 1. Clone the Repository
```bash
$ git clone https://github.com/Nutrit/NutriFit.git
$ cd NutriFit
```

### 2. Install Dependencies
Install dependencies for all three components:

#### Frontend
```bash
$ cd frontend
$ npm install
```

#### Admin Panel
```bash
$ cd ../admin
$ npm install
```

#### Backend
```bash
$ cd ../backend
$ npm install
```

---

## Starting the Project
### Frontend
To start the user-facing application:
```bash
$ cd frontend
$ npm run dev
```

### Admin Panel
To start the admin panel:
```bash
$ cd ../admin
$ npm run dev
```

### Backend
To start the server:
```bash
$ cd ../backend
$ npm start
```

---

## Environment Variables
To run the project successfully, you need to configure the following environment variables in a `.env` file in the `backend` directory:

```
DB_USER=<your-database-username>
DB_PASSWORD=<your-database-password>
DB_HOST=<your-database-host>
DB_NAME=<your-database-name>
JWT_SECRET=<your-jwt-secret>
STRIPE_SECRET_KEY=<your-stripe-secret-key>
```

### Steps to Configure:
1. Navigate to the `backend` directory:
   ```bash
   $ cd backend
   ```
2. Create a `.env` file:
   ```bash
   $ touch .env
   ```
3. Add the above environment variables with appropriate values.


---

## Additional Notes
- Ensure MongoDB is running locally or provide a valid MongoDB connection string in the environment variables.
- For Stripe integration, you need to create an account on [Stripe](https://stripe.com/) and obtain the `STRIPE_SECRET_KEY`.
- Use strong values for `JWT_SECRET` to ensure secure authentication.

---

## Contributing
Feel free to open issues or contribute to the project via pull requests. For major changes, please discuss them first by opening an issue.

---

## License
This project is licensed under the [MIT License](LICENSE).
