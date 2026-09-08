# FitRep — Full-Stack Fitness & Coach Platform

- 🌐 **Live Website**: [https://fit-rep.vercel.app/](https://fit-rep.vercel.app/)
- 💻 **GitHub Repository**: [https://github.com/SahilChhatbar/fitrep](https://github.com/SahilChhatbar/fitrep)

FitRep is a modern full-stack fitness, nutrition, and coach-client management web application designed for tracking workout consistency, diet plans, weight composition, and coach oversight.

---

## ⚙️ Environment Variables Setup (`.env`)

Before running the application, create `.env` files in both the `server/` and `client/` directories.

### 1. Server `.env` (`server/.env`)
Create a file named `.env` in the `server/` folder:
```env
MONGODB_URI=mongodb+srv://canconic699_db_user:eQogR87wKArM6qxC@cluster0.6jwjzay.mongodb.net/
JWT_SECRET=005832af645bc8bf2ac305fea8a8d2ce67db8fb5eea4fc4b4877dc7f090aee2e834bcb86588cdaf45af01980bea334f32c7af2c68f3d385a0d7cc4121502ed18
CLIENT_ORIGIN=http://localhost:3000
PORT=5000
```

### 2. Client `.env` (`client/.env`)
Create a file named `.env` in the `client/` folder:
```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api
```

---

## ⚡ Getting Started (Local Setup)

Follow these steps to set up and run FitRep locally in two separate terminal windows.

### Step 1: Start the Backend Server (Terminal 1)
Navigate to the `server/` directory, install dependencies, and start the backend server:

```bash
cd server
npm install
npm run dev
```

*The backend server will run on `http://localhost:5000`.*

### Step 2: Start the Frontend Client (Terminal 2)
In a **separate terminal window**, navigate to the `client/` directory, install dependencies, and start the Next.js client app:

```bash
cd client
npm install
npm run dev
```

*The Next.js frontend client will run on `http://localhost:3000`.*

---

## 🔑 Test Credentials

#### **Client (Trainee / User Account)**
- **Username / Identifier:** `Sahil User`
- **Password:** `mg7102003`

#### **Coach Account**
- **Username / Identifier:** `Sahil User`
- **Password:** `mg7102003`

---

## 🚀 Features & Access Roles

### 🏋️ 1. Guest Access (Without Login)
- **Browse Workouts (`/workouts`)**: View public workout routines, exercise steps, and target muscle groups.
- **Browse Diets (`/diets`)**: View public diet plans and macronutrient breakdowns.

### 📊 2. Trainee / Client Features (Logged In)
- **Plan Assignment**: Self-assign workout and diet plans.
- **Progress Tracking (`/progress`)**: Log workout sessions, record weight & body fat check-ins, view streaks, and monitor check-in consistency scores.
- **Coach Selection**: Select or change your assigned coach via *"My Profile & Coach"* in the header user menu using the searchable dropdown.

### 👥 3. Fitness Coach Features (Logged In)
- **Client Oversight Dashboard (`/coach/clients`)**: View assigned clients via *Sidebar → Coach Menu → My Clients*.
- **Client Progress Inspection**: Open live progress summaries, workout streaks, weight trend stats, active plans, and recent workout/check-in activity feeds for assigned trainees.
- **Plan Management**: Create custom workout & diet plans under *My Workout Plans* and *My Diet Plans*.

---

## 🧱 Tech Stack

### Frontend (`client/`)
- **Next.js (App Router)** & **React** — UI framework & rendering
- **Mantine UI** — Component library & design system
- **Zustand** — Client auth state management
- **TanStack Query** — Server state fetching & caching

### Backend (`server/`)
- **Node.js + Express** — REST API & controller business logic
- **MongoDB + Mongoose** — Database & object modeling
- **JWT & bcrypt** — Token authentication & password hashing
- **Zod** — Schema validation
