# Pamantasan ng Cabuyao Website

A comprehensive Single Page Application (SPA) built with React.js for Pamantasan ng Cabuyao (PNC).

## 🎓 About

This project is a modern, responsive website showcasing Pamantasan ng Cabuyao's programs, facilities, and services. Built with React.js and React Router, it provides a seamless user experience across all devices.

## ✨ Features

### Pages Implemented:

1. **Home Page**
   - Interactive slideshow with featured images
   - Overview of PNC with statistics
   - Vision, Mission, and Core Values
   - Call-to-action sections

2. **About Page**
   - Detailed history of PNC
   - Administrative officers and faculty section
   - Timeline of achievements
   - University accomplishments

3. **Courses Page**
   - Comprehensive list of programs offered (BSIT, BSCS, BSCE, BSEE, BSEd, BEEd, BSBA, BSA, etc.)
   - Interactive category filtering
   - Each course has its own description card
   - Program details including duration

4. **Admission Page**
   - Admission requirements for different applicant types
   - Step-by-step admission process
   - Online application form with validation
   - Downloadable admission forms
   - Important dates and deadlines

5. **Gallery Page**
   - Photo gallery with category filters:
     - Campus Life
     - Events
     - Academics
     - Outreach Programs
   - Grid and lightbox layout
   - Responsive image optimization
   - Click to enlarge functionality

6. **Contact Page**
   - Contact information (address, email, phone)
   - Google Map embed showing PNC location
   - Contact form with validation (using React states)
   - Department contacts
   - Office hours and directions

## 🛠️ Technologies Used

- **React.js** - Frontend framework
- **React Router DOM** - Client-side routing
- **CSS3** - Styling with modern layouts (Grid, Flexbox)
- **Responsive Design** - Mobile-first approach

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd midterm-assessment-tast
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit the local development URL shown in the terminal (typically `http://localhost:5173`)

## 🚀 Build for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist` folder.

## 📱 Responsive Design

The website is fully responsive and tested on:
- Desktop (1920px and above)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎨 Design Features

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Color Scheme**: Blue gradient theme (#003087 to #0052cc)
- **Typography**: System fonts for optimal performance
- **Accessibility**: Semantic HTML and ARIA labels
- **Performance**: Lazy loading images, optimized assets

## 🔧 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation bar component
│   ├── Navbar.css
│   ├── Footer.jsx          # Footer component
│   └── Footer.css
├── pages/
│   ├── Home.jsx            # Home page
│   ├── Home.css
│   ├── About.jsx           # About page
│   ├── About.css
│   ├── Courses.jsx         # Courses page
│   ├── Courses.css
│   ├── Admission.jsx       # Admission page
│   ├── Admission.css
│   ├── Gallery.jsx         # Gallery page
│   ├── Gallery.css
│   ├── Contact.jsx         # Contact page
│   └── Contact.css
├── App.jsx                 # Main app component with routing
├── App.css
├── main.jsx               # Entry point
└── index.css
```

## 🎯 Key React Concepts Implemented

1. **Component-Based Architecture**: Reusable components (Navbar, Footer)
2. **React Router**: Client-side routing for SPA navigation
3. **React Hooks**: 
   - `useState` for state management (forms, filters, lightbox)
   - `useEffect` for side effects (slideshow timer)
   - `useLocation` for active navigation links
4. **Controlled Components**: Form inputs with validation
5. **Conditional Rendering**: Dynamic content based on state
6. **Event Handling**: User interactions (clicks, form submissions)
7. **Props**: Data passing between components

## 🔍 Features Highlight

### Form Validation
- Real-time validation on Contact and Admission forms
- Error messages for invalid inputs
- Email format validation
- Required field checking

### Interactive Gallery
- Category filtering with React state
- Lightbox modal for image viewing
- Smooth animations and transitions
- Responsive grid layout

### Dynamic Content
- Slideshow with auto-rotation
- Category filters with state management
- Interactive cards with hover effects
- Smooth scrolling navigation

## 📄 License

This project is created for educational purposes as part of a midterm assessment.

## 👥 Contributors

Developed by students of Pamantasan ng Cabuyao

## 📞 Support

For questions or issues, please contact the development team.

---

**© 2025 Pamantasan ng Cabuyao. All rights reserved.**
