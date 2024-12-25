CodeAnt
A modern web application built with TypeScript.
Tech Stack

# Deployed on Netlify
LOGIN PAGE->
https://beautiful-raindrop-cad5c0.netlify.app/auth/saas 

AFTER LOGIN ->
https://beautiful-raindrop-cad5c0.netlify.app/app/repositories

Prerequisites

Node.js (v16+)
npm or yarn

Installation
Clone the repository
git clone https://github.com/yourusername/codeant.git

# Navigate to project directory
cd my-app

# Libraries Used
react-router-dom
react-icons

# Install dependencies
npm install 
npm install react-router-dom
npm install react-icons

npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
Project Structure
codeant/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── auth.tsx     # Authentication component
│   │   ├── home.tsx     # Home page component
│   │   ├── repositories.tsx # Repository listing
│   │   ├── sidebar.tsx  # Sidebar navigation
│   │   └── under.tsx    # Under construction/WIP
│   ├── contexts/
│   │   └── menu.tsx     # Menu context provider
│   ├── App.css
│   ├── App.tsx
│   ├── applayout.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── eslintconfig.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── settings.json
└── vite.config.ts
Key Features

