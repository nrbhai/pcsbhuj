# Image Placement Guide for Hari Tech Solutions Website

## 📁 Image Folder Location
**Path:** `c:\website_project\pioneer\client\public\images\`

All images should be placed in this folder. They will be accessible at `/images/filename.jpg` in your code.

---

## 🖼️ Required Images & Specifications

### 1. **Logo** 
- **Filename:** `logo.png`
- **Recommended Size:** 200x200px (will be displayed at 60x60px)
- **Format:** PNG with transparent background preferred
- **Usage:** Header logo (top-left corner)
- **Tips:** Should be simple, clear, and recognizable even at small sizes

### 2. **Office Photo**
- **Filename:** `office.jpg`
- **Recommended Size:** 800x600px
- **Format:** JPG
- **Usage:** About section - shows your office/shop
- **Tips:** Professional photo of your store front or interior, well-lit, clean

### 3. **Service Images** (6 images needed)
- **Filenames:** 
  - `com-lap.jpg` (Computers & Laptops)
  - `cctv.jpg` (CCTV Camera Solutions)
  - `accessories.jpg` (Computer Accessories)
  - `software.jpg` (Software Solutions)
  - `antivirus.jpg` (Antivirus & Security)
  - `server.jpg` (Server Solutions)
- **Recommended Size:** 800x500px each
- **Format:** JPG
- **Usage:** Service cards in Services section
- **Tips:** Use stock photos or actual product photos related to each service

### 4. **Contact Banner**
- **Filename:** `contact.jpg`
- **Recommended Size:** 800x500px
- **Format:** JPG
- **Usage:** Contact section info card
- **Tips:** Welcoming image - could be your team, customer service desk, or store view

---

## 📊 Image Optimization Tips

### Recommended Specifications:
- **Format:** JPG for photos, PNG for logos with transparency
- **Quality:** 80-85% compression for JPG (good balance of quality & file size)
- **Max File Size:** Keep under 500KB per image for faster loading
- **Resolution:** 72 DPI for web use

### Free Tools to Optimize Images:
- **TinyPNG** (https://tinypng.com) - Free compression
- **Squoosh** (https://squoosh.app) - Google's image compressor
- **GIMP** (Free Photoshop alternative)
- **Canva** (Free design tool for creating graphics)

---

## 🎨 Where to Get Images

### Free Stock Photos:
1. **Unsplash** (https://unsplash.com)
2. **Pexels** (https://pexels.com)
3. **Pixabay** (https://pixabay.com)

### Search Terms for Each Service:
- `service-1.jpg`: "modern laptop", "desktop computer setup"
- `service-2.jpg`: "CCTV camera installation", "security camera"
- `service-3.jpg`: "computer accessories", "keyboard mouse"
- `service-4.jpg`: "software development", "computer screen code"
- `service-5.jpg`: "cybersecurity", "antivirus shield"
- `service-6.jpg`: "server room", "data center"

---

## 📝 Quick Setup Steps

1. **Create/verify images folder:**
   ```
   c:\website_project\pioneer\client\public\images\
   ```

2. **Download or prepare your images**

3. **Rename them according to the guide above**

4. **Place all images in the images folder**

5. **Restart your development server if it's running:**
   ```bash
   npm run dev
   ```

---

## ✅ Current Image Paths in Code

| Component | Image Path | Purpose |
|-----------|------------|---------|
| Header | `/images/logo.png` | Company logo |
| About | `/images/office.jpg` | Office/shop photo |
| Services | `/images/com-lap.jpg` | Computers & Laptops |
| Services | `/images/cctv.jpg` | CCTV Cameras |
| Services | `/images/accessories.jpg` | Accessories |
| Services | `/images/software.jpg` | Software |
| Services | `/images/antivirus.jpg` | Antivirus |
| Services | `/images/server.jpg` | Servers |
| Contact | `/images/contact.jpg` | Contact section banner |

---

## 🚀 Optional: Create Placeholder Images Temporarily

If you don't have images ready yet, you can create simple colored placeholders:

1. Open any image editor (Paint, GIMP, Photoshop)
2. Create images with the recommended sizes
3. Add your company name/service name as text
4. Save with the correct filenames
5. Replace with professional images later

---

## 📞 Need Help?

All image paths are now configured to use the `/images/` folder. Once you add your images with the correct names, they will automatically appear on your website!
