# Pioneer Computer Services Website

A modern, professional website for Pioneer Computer Services, Bhuj - serving the IT needs of Kutch region since 1993.

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

Copyright © 2025 Pioneer Computer Services. All rights reserved.
