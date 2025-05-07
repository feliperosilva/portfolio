# Responsive Navbar using React + Vite

This documentation explains how to create a responsive navigation bar using React, Vite, and React Router.

## Getting Started

1. Creating Vite project
```
npm create vite@latest responsive-navbar --template react
cd responsive-navbar
```

2. Install `react-router-dom` which is required for routing and smooth hash-based navigation
```
npm install react-router-dom
```

3. Basic Folder Structure for this project
```
responsive-navbar/
├── public/
├── src/
│   ├── assets/
│   │   └── your-logo.png
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── pages/
│   │       ├── About.jsx
│   │       ├── Contact.jsx
│   │       ├── Courses.jsx
│   │       ├── Products.jsx
│   │       └── Home.jsx
│   ├── styles/
│   │   ├── Navbar.module.css
│   │   └── Home.module.css
│   ├── App.jsx
│   └── main.jsx
```

4. Start the development server
```
npm run dev
```

## Main Files Breakdown
### App.jsx
* Sets up routing using react-router-dom.
* Renders `Navbar` and different page components based on the path.
* Includes `ScrollToSection` to enable smooth scrolling to internal sections via hash links (`/#about`).

### Navbar.jsx
* Uses `useState` to handle the hamburger menu toggle.
* Uses `Link` from `react-router-dom` to navigate between internal page routes or scroll to sections (`/#about`, etc.).
* Responsive layout using CSS modules.

### Home.jsx
* Contains five sections: Home, About, Products, Courses, Contact.
* Each section has a button navigating to a dedicated page using `useNavigate()` from `react-router-dom`.