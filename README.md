🏢 Company Website (React + Tailwind)

A simple, modern, **no-scroll company website** built with **React** and **Tailwind CSS**.  
It includes a homepage with logo, video, and about text, a resources page with brochure download/read options, and a contact page with email, WhatsApp, and social media links.

---

## 📁 Project Structure

project-root/ ├── main.css                 # Global root-level styles ├── package.json ├── tailwind.config.js ├── postcss.config.js ├── public/ │   ├── index.html │   ├── logo.png │   └── brochure.pdf └── src/ ├── App.jsx ├── index.js ├── index.css ├── main.css ├── config/ │   └── siteConfig.js ├── components/ │   └── Navbar.jsx └── pages/ ├── Home.jsx ├── Resources.jsx └── Contact.jsx

---

## 🚀 Features

- ⚡ Built with **React 18** and **TailwindCSS 3**
- 🧭 Clean navigation bar (Home | Resources | Contact)
- 📽️ Embedded video & about section on the homepage
- 📘 Brochure read/download options on the resources page
- ☎️ Contact page with Email, WhatsApp, social links & address
- 🧩 Centralized config file for easy customization (`src/config/siteConfig.js`)
- 💾 No-scroll, centered layout
- 🌐 SEO-friendly meta tags and favicon support

---

## 🛠️ Setup & Installation

1. **Clone this repository**
   ```bash
   git clone https://github.com/yourusername/company-website.git
   cd company-website

2. Install dependencies

npm install


3. Run the app locally

npm start


4. Open your browser at 👉 http://localhost:3000




---

🧾 Configuration

Edit your company details in:

src/config/siteConfig.js

You can change:

Company name

Logo path

Video URL

About text

Brochure file link

Contact info and social URLs



---

🌍 Deployment

You can deploy this project easily on:

Vercel → https://vercel.com

Netlify → https://netlify.com

GitHub Pages → using gh-pages package


Example (Netlify)

1. Push this repo to GitHub


2. Connect it on netlify.com


3. Set Build Command → npm run build
and Publish Directory → build




---

📦 Build for Production

npm run build

Output is generated in the build/ folder, optimized for deployment.


---

📜 License

This project is open-source under the MIT License.


---

Developed with ❤️ using React + TailwindCSS
