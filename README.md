Here’s the updated `README.md` with your name included and some minor improvements for clarity and professionalism:

---

# NASA API Web App

This project is a web application that interacts with NASA APIs to provide users with Mars Rover photos, the Astronomy Picture of the Day (APOD), and Rover Manifests. It includes user interactivity, responsive design, performance optimization, and testing features.

## Features

- **Mars Rover Photos**: View images captured by different Mars rovers with filter options.
- **Astronomy Picture of the Day (APOD)**: Displays NASA's daily image or video with descriptions.
- **Rover Manifest**: View mission details and status of selected Mars rovers.
- **User Interactivity**: Search and filter options for better accessibility.
- **Responsive Design**: Optimized for various screen sizes.
- **Performance Optimization**: Efficient API requests and caching.
- **AI Features**: Potential future enhancements for intelligent recommendations.
- **Testing**: Frontend and backend testing using Jest and React Testing Library.

## Technologies Used

- **Frontend**: React, Axios, CSS
- **Backend**: Node.js, Express.js
- **Testing**: Jest, React Testing Library
- **Deployment**: Vercel, Netlify, or any cloud provider

---

## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14+)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Backend Setup
1. Navigate to the backend directory:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the backend server:
   ```sh
   npm start
   ```
   The backend will start on `http://localhost:5000/` or https://nasaopenapi.onrender.com/.

### Frontend Setup
1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend development server:
   ```sh
   npm start
   ```
   The frontend will start on `http://localhost:3000/` or https://nasa-open-api-steel.vercel.app/.

---

## Testing
To run tests for the application, use the following command:
```sh
npm test
```

---

## Deployment
To deploy the application:
1. Deploy the backend to platforms like **Heroku, Render, or AWS**.
2. Deploy the frontend to **Vercel or Netlify**.
3. Update the frontend API URLs to match the deployed backend.

---

## API Endpoints

### APOD (Astronomy Picture of the Day)
**Endpoint:** `/apod`
**Method:** `GET`

### Mars Rover Photos
**Endpoint:** `/mars-rover-photos`
**Method:** `GET`
**Query Params:**
- `rover` (Curiosity, Opportunity, Spirit)
- `camera` (e.g., NAVCAM, FHAZ, RHAZ)
- `sol` (Mars sol)

### Rover Manifest
**Endpoint:** `/rover-manifest`
**Method:** `GET`
**Query Params:**
- `rover` (Curiosity, Opportunity, Spirit)

---

## Future Enhancements
- **AI-powered image analysis**
- **User authentication for saving favorites**
- **Offline caching for better performance**

---

## Contributors
- **[Aman Dhingra](https://github.com/amandhingra7)**  
  Open for contributions! 🚀

---