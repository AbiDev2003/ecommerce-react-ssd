# Ecommerce React Application

## Overview

A ReactJS ecommerce application built with a **React frontend** and a **Node.js backend**.

The frontend implementation — including UI integration, routing, and client-side logic — was developed manually. The backend layer is primarily AI-generated; more than 95% of the backend codebase was produced using AI-assisted workflows by [SuperSimpleDev](https://github.com/SuperSimpleDev).

The application provides product browsing, cart management, checkout, order handling, and order tracking through a REST-based client–server architecture.

---

## Technologies

### Frontend

![React.js](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

### Backend

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)

### Database

![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)

---

## Architecture

```mermaid
flowchart TD

subgraph group_backend["Backend API"]
  node_backend_server["Server<br/>HTTP entry<br/>[server.js]"]
  node_backend_routes_products["Products API<br/>route<br/>[products.js]"]
  node_backend_routes_cart["Cart API<br/>route<br/>[cartItems.js]"]
  node_backend_routes_delivery["Delivery API<br/>route<br/>[deliveryOptions.js]"]
  node_backend_routes_orders["Orders API<br/>route<br/>[orders.js]"]
  node_backend_routes_summary["Pricing API<br/>route<br/>[paymentSummary.js]"]
  node_backend_routes_reset["Reset API<br/>route<br/>[reset.js]"]
  node_backend_models["Domain Models<br/>schema layer<br/>[index.js]"]
  node_backend_defaults["Default Data<br/>fixtures"]
  node_backend_state[("JSON Store<br/>file state")]
  node_backend_images["Media Assets<br/>static assets"]
end

subgraph group_frontend["React Frontend"]
  node_frontend_app["App Shell<br/>React shell<br/>[App.tsx]"]
  node_frontend_header["Header<br/>shared UI<br/>[Header.tsx]"]
  node_frontend_home["Home Page<br/>[HomePage.jsx]"]
  node_frontend_checkout["Checkout Page<br/>[CheckoutPage.jsx]"]
  node_frontend_orders["Orders Page<br/>[OrdersPage.jsx]"]
  node_frontend_tracking["Aux Pages<br/>page set<br/>[TrackingPage.jsx]"]
  node_frontend_money["Money Utils<br/>client util<br/>[money.ts]"]
  node_frontend_public_images["Public Images<br/>static assets"]
end

subgraph group_legacy["Legacy Frontend"]
  node_legacy_app["Legacy App<br/>React shell<br/>[App.jsx]"]
  node_legacy_pages["Legacy Pages<br/>page set"]
  node_legacy_money["Legacy Money<br/>client util<br/>[money.js]"]
end

node_backend_server -->|"mounts"| node_backend_routes_products
node_backend_server -->|"mounts"| node_backend_routes_cart
node_backend_server -->|"mounts"| node_backend_routes_delivery
node_backend_server -->|"mounts"| node_backend_routes_orders
node_backend_server -->|"mounts"| node_backend_routes_summary
node_backend_server -->|"mounts"| node_backend_routes_reset
node_backend_server -->|"uses"| node_backend_models
node_backend_server -->|"persists"| node_backend_state
node_backend_server -.->|"seeds from"| node_backend_defaults
node_backend_routes_products -->|"reads"| node_backend_models
node_backend_routes_cart -->|"reads/writes"| node_backend_models
node_backend_routes_cart -->|"stores"| node_backend_state
node_backend_routes_delivery -->|"reads"| node_backend_models
node_backend_routes_delivery -->|"stores"| node_backend_state
node_backend_routes_orders -->|"reads/writes"| node_backend_models
node_backend_routes_orders -->|"stores"| node_backend_state
node_backend_routes_summary -->|"reads"| node_backend_state
node_backend_routes_summary -->|"uses"| node_backend_models
node_backend_routes_reset -->|"loads"| node_backend_defaults
node_backend_routes_reset -->|"overwrites"| node_backend_state
node_frontend_app -->|"composes"| node_frontend_header
node_frontend_app -->|"routes to"| node_frontend_home
node_frontend_app -->|"routes to"| node_frontend_checkout
node_frontend_app -->|"routes to"| node_frontend_orders
node_frontend_app -->|"routes to"| node_frontend_tracking
node_frontend_app -->|"uses"| node_frontend_money
node_frontend_home -->|"fetches"| node_backend_routes_products
node_frontend_home -->|"renders"| node_frontend_public_images
node_frontend_checkout -->|"fetches"| node_backend_routes_cart
node_frontend_checkout -->|"fetches"| node_backend_routes_delivery
node_frontend_checkout -->|"fetches"| node_backend_routes_summary
node_frontend_checkout -->|"submits"| node_backend_routes_orders
node_frontend_orders -->|"fetches"| node_backend_routes_orders
node_frontend_tracking -->|"fetches"| node_backend_routes_orders
node_legacy_app -->|"composes"| node_legacy_pages
node_legacy_app -->|"uses"| node_legacy_money

click node_backend_server "https://github.com/abidev2003/ecommerce-react-ssd/blob/main/ecommerce-backend-ai-main/server.js"
click node_backend_routes_products "https://github.com/abidev2003/ecommerce-react-ssd/blob/main/ecommerce-backend-ai-main/routes/products.js"
click node_backend_routes_cart "https://github.com/abidev2003/ecommerce-react-ssd/blob/main/ecommerce-backend-ai-main/routes/cartItems.js"
click node_backend_routes_delivery "https://github.com/abidev2003/ecommerce-react-ssd/blob/main/ecommerce-backend-ai-main/routes/deliveryOptions.js"
click node_backend_routes_orders "https://github.com/abidev2003/ecommerce-react-ssd/blob/main/ecommerce-backend-ai-main/routes/orders.js"
click node_backend_routes_summary "https://github.com/abidev2003/ecommerce-react-ssd/blob/main/ecommerce-backend-ai-main/routes/paymentSummary.js"
click node_backend_routes_reset "https://github.com/abidev2003/ecommerce-react-ssd/blob/main/ecommerce-backend-ai-main/routes/reset.js"
click node_backend_models "https://github.com/abidev2003/ecommerce-react-ssd/blob/main/ecommerce-backend-ai-main/models/index.js"
click node_backend_defaults "https://github.com/abidev2003/ecommerce-react-ssd/tree/main/ecommerce-backend-ai-main/defaultData"
click node_backend_state "https://github.com/abidev2003/ecommerce-react-ssd/tree/main/ecommerce-backend-ai-main/backend"
click node_backend_images "https://github.com/abidev2003/ecommerce-react-ssd/tree/main/ecommerce-backend-ai-main/images"
click node_frontend_app "https://github.com/abidev2003/ecommerce-react-ssd/blob/main/ecommerce-project/src/App.tsx"
click node_frontend_header "https://github.com/abidev2003/ecommerce-react-ssd/blob/main/ecommerce-project/src/components/Header.tsx"
click node_frontend_home "https://github.com/abidev2003/ecommerce-react-ssd/blob/main/ecommerce-project/src/pages/home/HomePage.jsx"
click node_frontend_checkout "https://github.com/abidev2003/ecommerce-react-ssd/blob/main/ecommerce-project/src/pages/checkout/CheckoutPage.jsx"
click node_frontend_orders "https://github.com/abidev2003/ecommerce-react-ssd/blob/main/ecommerce-project/src/pages/orders/OrdersPage.jsx"
click node_frontend_tracking "https://github.com/abidev2003/ecommerce-react-ssd/blob/main/ecommerce-project/src/pages/TrackingPage.jsx"
click node_frontend_money "https://github.com/abidev2003/ecommerce-react-ssd/blob/main/ecommerce-project/src/utils/money.ts"
click node_frontend_public_images "https://github.com/abidev2003/ecommerce-react-ssd/tree/main/ecommerce-project/public/images"
click node_legacy_app "https://github.com/abidev2003/ecommerce-react-ssd/blob/main/old-projects/ecommerce-project-js/src/App.jsx"
click node_legacy_pages "https://github.com/abidev2003/ecommerce-react-ssd/tree/main/old-projects/ecommerce-project-js/src/pages"
click node_legacy_money "https://github.com/abidev2003/ecommerce-react-ssd/blob/main/old-projects/ecommerce-project-js/src/utils/money.js"

classDef toneNeutral fill:#f8fafc,stroke:#334155,stroke-width:1.5px,color:#0f172a
classDef toneBlue fill:#dbeafe,stroke:#2563eb,stroke-width:1.5px,color:#172554
classDef toneAmber fill:#fef3c7,stroke:#d97706,stroke-width:1.5px,color:#78350f
classDef toneMint fill:#dcfce7,stroke:#16a34a,stroke-width:1.5px,color:#14532d
classDef toneRose fill:#ffe4e6,stroke:#e11d48,stroke-width:1.5px,color:#881337
classDef toneIndigo fill:#e0e7ff,stroke:#4f46e5,stroke-width:1.5px,color:#312e81
classDef toneTeal fill:#ccfbf1,stroke:#0f766e,stroke-width:1.5px,color:#134e4a
class node_backend_server,node_backend_routes_products,node_backend_routes_cart,node_backend_routes_delivery,node_backend_routes_orders,node_backend_routes_summary,node_backend_routes_reset,node_backend_models,node_backend_defaults,node_backend_state,node_backend_images toneBlue
class node_frontend_app,node_frontend_header,node_frontend_home,node_frontend_checkout,node_frontend_orders,node_frontend_tracking,node_frontend_money,node_frontend_public_images toneAmber
class node_legacy_app,node_legacy_pages,node_legacy_money toneMint
```

---

## Project Structure

### Frontend — `ecommerce-project/`

#### App Shell

[`App.tsx`](https://github.com/abidev2003/ecommerce-react-ssd/blob/main/ecommerce-project/src/App.tsx) — Application entry point. Manages routing via React Router and composes the top-level layout.

#### Shared Components

| File                                                                                                                    | Responsibilities                                      |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| [`Header.tsx`](https://github.com/abidev2003/ecommerce-react-ssd/blob/main/ecommerce-project/src/components/Header.tsx) | Navigation bar, cart indicator, shared layout wrapper |

#### Pages

| File                                                                                                                                    | Responsibilities                                             |
| --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| [`HomePage.jsx`](https://github.com/abidev2003/ecommerce-react-ssd/blob/main/ecommerce-project/src/pages/home/HomePage.jsx)             | Product listing, product data fetching, search integration   |
| [`CheckoutPage.jsx`](https://github.com/abidev2003/ecommerce-react-ssd/blob/main/ecommerce-project/src/pages/checkout/CheckoutPage.jsx) | Cart management, delivery option selection, order submission |
| [`OrdersPage.jsx`](https://github.com/abidev2003/ecommerce-react-ssd/blob/main/ecommerce-project/src/pages/orders/OrdersPage.jsx)       | Order history display                                        |
| [`TrackingPage.jsx`](https://github.com/abidev2003/ecommerce-react-ssd/blob/main/ecommerce-project/src/pages/TrackingPage.jsx)          | Order tracking interface                                     |

#### Utilities

| File                                                                                                           | Responsibilities                     |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| [`money.ts`](https://github.com/abidev2003/ecommerce-react-ssd/blob/main/ecommerce-project/src/utils/money.ts) | Currency formatting, pricing helpers |

---

### Backend — `ecommerce-backend-ai-main/`

#### Server Layer

[`server.js`](https://github.com/abidev2003/ecommerce-react-ssd/blob/main/ecommerce-backend-ai-main/server.js) — Registers all API routes, configures middleware, and handles application bootstrap.

#### Route Modules

| File                                                                                                                                    | Endpoint               | Responsibilities                         |
| --------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ---------------------------------------- |
| [`products.js`](https://github.com/abidev2003/ecommerce-react-ssd/blob/main/ecommerce-backend-ai-main/routes/products.js)               | `/api/products`        | Product retrieval and search             |
| [`cartItems.js`](https://github.com/abidev2003/ecommerce-react-ssd/blob/main/ecommerce-backend-ai-main/routes/cartItems.js)             | `/api/cartItems`       | Cart item CRUD operations                |
| [`deliveryOptions.js`](https://github.com/abidev2003/ecommerce-react-ssd/blob/main/ecommerce-backend-ai-main/routes/deliveryOptions.js) | `/api/deliveryOptions` | Delivery option retrieval                |
| [`orders.js`](https://github.com/abidev2003/ecommerce-react-ssd/blob/main/ecommerce-backend-ai-main/routes/orders.js)                   | `/api/orders`          | Order creation and retrieval             |
| [`paymentSummary.js`](https://github.com/abidev2003/ecommerce-react-ssd/blob/main/ecommerce-backend-ai-main/routes/paymentSummary.js)   | `/api/paymentSummary`  | Checkout totals and pricing calculations |
| [`reset.js`](https://github.com/abidev2003/ecommerce-react-ssd/blob/main/ecommerce-backend-ai-main/routes/reset.js)                     | `/api/reset`           | Restores default application state       |

#### Data Layer

| Resource      | Location                                                                                                                   | Description                                     |
| ------------- | -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| Domain Models | [`models/index.js`](https://github.com/abidev2003/ecommerce-react-ssd/blob/main/ecommerce-backend-ai-main/models/index.js) | Schema definitions and shared data access layer |
| JSON Store    | [`backend/`](https://github.com/abidev2003/ecommerce-react-ssd/tree/main/ecommerce-backend-ai-main/backend)                | File-based persistent application state         |
| Default Data  | [`defaultData/`](https://github.com/abidev2003/ecommerce-react-ssd/tree/main/ecommerce-backend-ai-main/defaultData)        | Seed fixtures loaded on reset                   |
| Media Assets  | [`images/`](https://github.com/abidev2003/ecommerce-react-ssd/tree/main/ecommerce-backend-ai-main/images)                  | Statically served product images                |

---

### Legacy Application — `old-projects/ecommerce-project-js/`

An older JavaScript implementation of the frontend. Kept for reference.

| File                                                                                                                           | Description                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------ |
| [`App.jsx`](https://github.com/abidev2003/ecommerce-react-ssd/blob/main/old-projects/ecommerce-project-js/src/App.jsx)         | Legacy React app shell         |
| [`pages/`](https://github.com/abidev2003/ecommerce-react-ssd/tree/main/old-projects/ecommerce-project-js/src/pages)            | Previous page implementations  |
| [`money.js`](https://github.com/abidev2003/ecommerce-react-ssd/blob/main/old-projects/ecommerce-project-js/src/utils/money.js) | Legacy currency utility module |

---

## Application Flow

```
1. Frontend fetches product catalogue from the Products API
2. User adds items to the cart (Cart API)
3. Checkout page loads cart contents, delivery options, and pricing summary
4. Payment Summary API calculates order totals
5. User submits order → Orders API persists it
6. Orders and Tracking pages retrieve order data from the Orders API
```

## Notes

- The frontend and backend are **fully decoupled** into independent modules.
- Backend routes are **organized by feature domain**, each owning its own state interactions.
- Static media assets are served independently for both frontend and backend environments.
- The project uses **TypeScript for utility modules, pages and components** and JavaScript for legacy ones.
- The Reset API endpoint can be used during development to restore the application to its default seeded state.
