CodeAnt
A modern web application built with TypeScript and Vite.
Tech Stack


Prerequisites

Node.js (v16+)
npm or yarn

Installation
bashCopy# Clone the repository
git clone https://github.com/yourusername/codeant.git

# Navigate to project directory
cd codeant

# Install dependencies
npm install
Development
bashCopy# Start development server
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

