# Country Info App

## Project Overview

Country Info App is a full-stack application that provides information about different countries. It consists of a backend built with NestJS and a frontend built with Next.js.

## Tech Stack

### Backend:
- Node.js
- NestJS
- TypeScript

### Frontend:
- React.js
- Next.js
- TypeScript

## Installation

Follow these steps to set up and run the project locally.

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (Recommended: v18+)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Clone the Repository

```sh
git clone https://github.com/your-username/country-info-app.git
cd country-info-app
```

### Backend Setup

1. Navigate to the backend directory:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the `backend` directory and configure the required environment variables:
   ```sh
   touch .env
   ```
   Example:
   ```env
   PORT=5000
   API_BASE_URL=https://date.nager.at/api/v3
   POPULATION_API_URL=https://countriesnow.space/api/v0.1/countries/population
   FLAG_API_URL=https://countriesnow.space/api/v0.1/countries/flag/images
   ```
4. Start the backend server:
   ```sh
   npm run start:dev
   ```
   The backend will run on `http://localhost:5000`.

### Frontend Setup

1. Navigate to the frontend directory:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the `frontend` directory and configure the API base URL:
   ```sh
   touch .env
   ```
   Example:
   ```env
   NEXT_PUBLIC_API_BASE_URL=http://localhost:5000
   ```
4. Start the frontend application:
   ```sh
   npm run dev
   ```
   The frontend will be available at `http://localhost:3000`.

## Running the Application

1. Open a terminal and start the backend:
   ```sh
   cd backend
   npm run start:dev
   ```
2. Open another terminal and start the frontend:
   ```sh
   cd frontend
   npm run dev
   ```
3. Open `http://localhost:3000` in your browser to use the application.

## Folder Structure
```
📂 country-info-app/ 
├──📂 backend/
│   ├──📂 src/
│   │   ├──📂 config/ (Configuration files)
│   │   ├──📂 countries/ (Logic for managing country-related API endpoints and services)
│   │   │   ├──📂  interfaces/ (Contains TypeScript interfaces for strongly typing country-related data and services)
│   │   .env (Environment variables)
├──📂 frontend/
│   ├──📂 public/
│   ├──📂 src/
│   │   ├──📂 api/ (Logic for making API calls to the backend)
│   │   │   ├──📂 services/ (Service files for handling API requests)
│   │   ├──📂 app/ (Next.js App Router)
│   │   │   ├──📂 (pages)/ (Contains the pages in the Next.js app)
│   │   │   │   ├──📂 countries/ 
│   │   │   │   ├──📂 countryInfo/ 
│   │   ├──📂 components/ (Reusable UI components)
│   │   │   ├──📂 CountryInfoCard/ 
│   │   │   ├──📂 CountryListCard/ 
│   │   │   ├──📂 Loader/ 
│   │   │   ├──📂 PopulationChart/ 
│   │   ├──📂 hooks/ (Custom React hooks)
│   │   ├──📂 types/ (TypeScript types & assets)
│   │   ├── .env (Environment variables)
```

## License

This project is licensed under the MIT License.

## Contact

For any inquiries, reach out to razno.oleg@gmail.com.

