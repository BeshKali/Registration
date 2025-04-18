# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Project tree

DukaMkononi/
├── client/                   # ReactJS + Tailwind frontend
│   ├── public/               
│   │   ├── index.html        # Main HTML template
│   │   ├── favicon.ico       # Favicon for the app
│   │   └── robots.txt        # Robots.txt file for SEO
│   ├── src/
│   │   ├── assets/           # Static files like images, fonts, etc.
│   │   │   ├── logo.png      # Logo file
│   │   │   └── styles.css    # Global styles (if needed, can be Tailwind CSS)
│   │   ├── components/       # Reusable components
│   │   │   ├── Sales/        # Manual sales entry, M-Pesa integration
│   │   │   │   ├── SalesForm.jsx      # Form to input sales data
│   │   │   │   └── Mpesalink.jsx     # M-Pesa integration component
│   │   │   ├── Inventory/    # Product management, low stock alerts
│   │   │   │   ├── ProductList.jsx     # List of products in inventory
│   │   │   │   ├── ProductCard.jsx     # Product card component
│   │   │   │   └── StockAlert.jsx      # Low stock alert component
│   │   │   ├── Customers/    # Customer management (credit tracking)
│   │   │   │   ├── CustomerList.jsx    # List of customers
│   │   │   │   └── CustomerCard.jsx    # Customer details card
│   │   │   ├── Reports/      # Sales reports, profit calculations
│   │   │   │   ├── SalesSummary.jsx    # Summary of sales
│   │   │   │   └── ProfitReport.jsx    # Profit report component
│   │   │   ├── Auth/         # Authentication forms
│   │   │   │   ├── LoginForm.jsx       # Login form component
│   │   │   │   └── RegisterForm.jsx    # Registration form component
│   │   │   ├── Notifications/  # Notification components (alerts, popups, etc.)
│   │   │   │   ├── Toast.jsx          # Toast notification component
│   │   │   │   └── NotificationPopup.jsx # Popup notification component
│   │   ├── hooks/            # Custom hooks (e.g., useAuth, useOffline, useNotifications)
│   │   │   ├── useAuth.js          # Custom hook for user authentication
│   │   │   ├── useOffline.js       # Custom hook for offline functionality
│   │   │   └── useNotifications.js # Custom hook for handling notifications
│   │   ├── pages/            # Core pages
│   │   │   ├── Dashboard.jsx        # Dashboard page
│   │   │   ├── Sales.jsx           # Sales page for manual entry
│   │   │   ├── Inventory.jsx       # Inventory management page
│   │   │   ├── Customers.jsx       # Customer management page
│   │   │   ├── Reports.jsx         # Reports and analytics page
│   │   │   ├── Login.jsx           # Login page
│   │   ├── services/         # API calls (M-Pesa, inventory, sales)
│   │   │   ├── api.js            # General API helper for making requests
│   │   │   ├── salesService.js   # Service for handling sales API
│   │   │   ├── inventoryService.js # Service for inventory-related API calls
│   │   │   ├── mPesalink.js      # Service for M-Pesa integration
│   │   │   └── customerService.js # Service for customer-related API calls
│   │   ├── store/            # Global state (Zustand or Redux)
│   │   │   ├── useStore.js      # Custom store for global state management
│   │   ├── utils/            # Utility functions (e.g., price formatting, notification helpers)
│   │   │   ├── priceFormatter.js # Utility for price formatting
│   │   │   └── notificationHelpers.js # Helper functions for notifications
│   │   └── main.jsx          # Main entry point (app initialization)
├── server/                   # Node.js backend
│   ├── controllers/          # Logic for API routes (sales, inventory, etc.)
│   │   ├── salesController.js   # Controller for handling sales logic
│   │   ├── inventoryController.js # Controller for handling inventory logic
│   │   ├── customerController.js # Controller for customer logic
│   │   ├── reportController.js   # Controller for generating reports
│   │   └── notificationController.js # Controller for notifications
│   ├── middleware/           # Auth, error handling, and logging middleware
│   │   ├── authMiddleware.js    # Middleware to protect routes
│   │   └── errorMiddleware.js   # Middleware for error handling
│   ├── models/               # MongoDB schemas (Products, Sales, Customers, etc.)
│   │   ├── productModel.js     # Product schema model
│   │   ├── saleModel.js        # Sale schema model
│   │   ├── customerModel.js    # Customer schema model
│   │   ├── userModel.js        # User schema model
│   │   └── notificationModel.js # Notification schema model
│   ├── routes/               # API routes (sales, products, users, etc.)
│   │   ├── salesRoutes.js      # Routes for sales-related requests
│   │   ├── inventoryRoutes.js  # Routes for inventory management
│   │   ├── customerRoutes.js   # Routes for customer-related requests
│   │   ├── reportRoutes.js     # Routes for reports
│   │   └── notificationRoutes.js # Routes for notification management
│   ├── utils/                # Utility functions (e.g., M-Pesa helpers)
│   │   ├── mPesalink.js      # M-Pesa utility functions
│   │   └── notificationHelpers.js  # Server-side notification helpers
│   ├── notifications/        # Logic for managing notifications (push, email)
│   │   ├── sendNotification.js  # Logic to send notifications via email, push, etc.
│   │   └── notificationScheduler.js  # Scheduling of notifications
│   └── index.js              # Entry point for the server
├── shared/                   # Shared utilities and constants
│   ├── config.js             # Configuration (API keys, URLs)
│   ├── schemas/              # Common MongoDB schemas
│   ├── constants.js          # Static constants (roles, plans, etc.)
│   └── notificationTemplates.js  # Predefined templates for notifications
├── .env                       # Environment variables
├── package.json              # Project dependencies and scripts
├── README.md                 # Documentation for the project
└── Dockerfile / Procfile      # Optional for deployment (Docker, Heroku)