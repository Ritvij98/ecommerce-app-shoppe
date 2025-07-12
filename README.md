# Shoppe MERN E‑commerce Application

This repository contains a simple e‑commerce platform built with the **MERN** stack:

- **MongoDB** for storing application data
- **Express** and **Node.js** for the REST API
- **React** for the web client

The project is split into two folders:

- `server` – Node/Express backend API
- `client` – React front‑end application

## Functionality

The application implements the typical flow of a small online store.

### User Accounts

- **Register** and **login** endpoints (`/api/auth`) for creating an account
- Authenticated routes protect access to personal data
- Admin users can manage other users and view user statistics

### Products

- Admins can create, update or remove products via `/api/products`
- All users can retrieve product details and filter by category

### Shopping Cart

- Logged‑in users have a single cart stored in MongoDB (`/api/carts`)
- Items can be added to the cart and quantities updated

### Orders

- Placing an order saves it in the database (`/api/orders`)
- Admin endpoints provide access to all orders and monthly income statistics

### Payments

- Stripe is used to create charges for order totals (`/api/checkout`)

### Front‑End

The React application provides pages for browsing products, managing the cart, user registration and login. Global cart state is handled with Redux.

## Running the Project

1. Install dependencies in both `server` and `client` folders using `npm install`.
2. Set environment variables in the server for MongoDB connection, JWT secret and Stripe key.
3. Start the backend API from the `server` directory:
   ```bash
   npm start
   ```
4. Start the React client from the `client` directory:
   ```bash
   npm start
   ```

With both services running you can navigate to `http://localhost:3000` to use the shop.

