# Hari Tech Solutions Website

A modern, professional website for Hari Tech Solutions, Bhuj - serving the IT needs of Kutch region since 1993.

## Features

- **Modern Design**: Clean, responsive design that works on all devices
- **Service Showcase**: Comprehensive display of all services offered
- **Contact Form**: Easy way for customers to get in touch
- **About Section**: Highlighting 30+ years of experience and commitment to service
- **Node.js Backend**: RESTful API for dynamic content
- **React Frontend**: Fast, interactive user interface

## Technology Stack

- **Backend**: Node.js + Express
- **Frontend**: React
- **Styling**: Custom CSS with modern gradients and animations

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation Steps

1. **Install all dependencies**:
   ```bash
   npm run install-all
   ```

2. **Set up environment variables**:
   - Copy `.env.example` to `.env`
   - Update the values as needed

3. **Development Mode** (runs both server and client):
   ```bash
   npm run dev
   ```

4. **Production Build**:
   ```bash
   npm run build
   ```

### Individual Commands

- **Run server only**: `npm run server`
- **Run client only**: `npm run client`
- **Install client dependencies**: `npm run install-client`

## Deploying to GitHub & Vercel

Follow these steps to upload the project to Git and deploy on Vercel.

### 1) Initialize Git and push to GitHub

1. Ensure you are in the project root (folder `pioneer`).
2. Initialize a new repo and commit all files:
   - git init
   - git add .
   - git commit -m "Initial commit: Hari Tech Solutions website"
3. Create an empty repository on your GitHub account (do not add a README/license on GitHub to avoid conflicts).
4. Add the remote and push:
   - git remote add origin https://github.com/<your-username>/<your-repo>.git
   - git branch -M main
   - git push -u origin main

Notes:
- A root .gitignore is already included to ignore node_modules, build output, logs, and environment files.
- The project is structured as a simple monorepo: root contains server (for local dev) and client (React app for production deploy).

### 2) Deploy to Vercel

This repo includes a ready-to-use `vercel.json` and serverless API routes so you can deploy without extra configuration.

What’s already set up:
- vercel.json uses Create React App framework detection and builds the frontend from `client/`.
- Build command: `npm run install-client && npm run build`
- Output directory: `client/build` (Vercel will serve the built React app)
- SPA routing is enabled with rewrites so client-side routes work
- Serverless functions in `/api` provide the same data as the local Express server:
  - GET /api/company-info
  - GET /api/services
  - POST /api/contact
- React code has been updated to use relative API paths (`/api/...`) for production

Steps to deploy:
1. Go to https://vercel.com and click “New Project”.
2. Import the GitHub repository you pushed above.
3. Vercel will auto-detect settings using `vercel.json`. Confirm or set:
   - Framework Preset: Create React App
   - Root Directory: repository root (not `client`)
   - Build Command: npm run install-client && npm run build
   - Output Directory: client/build
4. Click Deploy. First build can take a few minutes.

Local development on Vercel (optional):
- You can run `vercel dev` if you use the Vercel CLI. This will serve the React app and the `/api` functions together.

### 3) How local dev works

- For local development, you can still use the Express server provided in `server/` by running:
  - npm run install-all
  - npm run dev (starts server on 5000 and client on 3000)
- The client has a CRA proxy pointing to `http://localhost:5000` for local API calls.
- In production on Vercel, the React app calls `/api/...` which are served by Vercel serverless functions.

### Troubleshooting

- If you see old styles after deploy, hard refresh (Ctrl/Cmd+F5) or purge CDN cache.
- If routes 404 on refresh, ensure the SPA rewrite to `/index.html` remains in `vercel.json` and that `/api/*` is excluded from that rewrite (already configured).
- If build fails, verify Node and dependency install logs; you can also try clearing the Vercel build cache and redeploying.

## Project Structure

```
pioneer/
├── client/                 # React frontend
│   ├── public/
│   └── src/
│       ├── components/    # React components
│       │   ├── Header.js
│       │   ├── Hero.js
│       │   ├── About.js
│       │   ├── Services.js
│       │   ├── Contact.js
│       │   └── Footer.js
│       ├── App.js
│       └── index.js
├── server/                # Node.js backend
│   └── index.js
├── .env.example          # Environment variables template
├── package.json
└── README.md
```

## API Endpoints

- `GET /api/company-info` - Company information
- `GET /api/services` - List of services
- `POST /api/contact` - Submit contact form

## Services Offered

1. Computers & Laptops
2. CCTV Camera Solutions
3. Computer Accessories
4. Software Solutions
5. Antivirus & Security
6. Server Solutions

## Customization

### Update Company Information
Edit `server/index.js` to update company details like phone numbers, email, and address.

### Add New Services
Modify the services array in `server/index.js` to add or update services.

### Styling
Each component has its own CSS file in `client/src/components/` for easy customization.

## Contact

- **Location**: Bhuj, Kutch, Gujarat, India
- **Phone**: +91-9825034580
- **Email**: pioneerbhuj@gmail.com
- **Established**: 1993

## License

Copyright © 2025 Hari Tech Solutions. All rights reserved.
