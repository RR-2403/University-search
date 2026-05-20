# UniAtlas — University Finder

A modern, web-based university finder application that allows users to search for universities across the globe by country or state name.
<img width="1353" height="587" alt="image" src="https://github.com/user-attachments/assets/96b8c357-7a42-45aa-9da0-09c869d4eaad" />


## Overview

UniAtlas is a sleek, responsive web application built with vanilla HTML, CSS, and JavaScript. It provides an intuitive interface for discovering accredited universities from a global directory using the Hipolabs University API.

## Features

- 🔍 **Search by Country/State** — Enter any country or state name to find all accredited universities
- 🎨 **Modern Dark UI** — Elegant dark-themed interface with smooth animations
- ⚡ **Real-time Results** — Instant search results with loading states and error handling
- 📱 **Fully Responsive** — Works seamlessly on desktop and mobile devices
- 🎯 **Clean UX** — Intuitive design with status indicators and empty states
- 🌐 **Global Database** — Access to thousands of universities worldwide

## Project Structure

```
University/
├── index.html      # Main HTML markup
├── app.js          # JavaScript application logic
├── style.css       # Styling and animations
└── README.md       # Documentation
```

## Technologies Used

- **HTML5** — Semantic markup and structure
- **CSS3** — Modern styling with CSS variables, animations, and responsive design
- **JavaScript (Vanilla)** — Event handling and DOM manipulation
- **Axios** — HTTP client for API requests
- **Hipolabs University API** — External data source for university information

## How to Use

1. Open `index.html` in your web browser
2. Enter a country or state name (e.g., "India", "Germany", "California")
3. Click the **Search** button or press Enter
4. View the list of universities found in that location
5. The app displays the number of institutions found and handles errors gracefully

## API Integration

The application uses the **Hipolabs University API**:
- **Endpoint:** `http://universities.hipolabs.com/search?name=`
- **Method:** GET
- **Response:** Array of universities with details

Example API call:
```javascript
axios.get("http://universities.hipolabs.com/search?name=India")
```

## Features Breakdown

### Search Functionality
- Input validation to ensure non-empty searches
- Asynchronous API calls with Axios
- Loading state indication with animated dots

  <img width="962" height="512" alt="image" src="https://github.com/user-attachments/assets/a5a74204-1f2e-4d18-9af1-f7ac0472a37a" />

  <img width="948" height="544" alt="image" src="https://github.com/user-attachments/assets/d9c54dee-7559-4cd4-991c-fb950934418c" />


### Result Display
- Shows count of institutions found
- Displays university names in an organized list
- Country/state header with result count badge

### Error Handling
- Network error handling with user-friendly messages
- Empty state display when no results found
- Status bar feedback for all interactions

### UI/UX Elements
- Noise texture overlay for depth
- Glowing background blob animation
- Smooth transitions and fade animations
- Professional typography with Google Fonts (Playfair Display & DM Sans)

## Design System

### Color Palette
- **Background:** `#0b0e1a` (Deep Navy)
- **Surface:** `#111627` (Charcoal)
- **Accent:** `#c8a96e` (Gold)
- **Text Primary:** `#e8e4dc` (Off-white)
- **Text Secondary:** `#8a8fa8` (Muted Blue)

### Typography
- **Display Font:** Playfair Display (headings)
- **Body Font:** DM Sans (content)

## Browser Compatibility

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Responsive design for all screen sizes

## Getting Started

No installation or build process required!

1. Clone or download the repository
2. Open `index.html` in any modern web browser
3. Start searching for universities

## Data Source

University data is sourced from **Hipolabs University API**, providing accurate, up-to-date information about accredited institutions worldwide.

## Future Enhancements

- Advanced filters (by ranking, location, field of study)
- University details page with comprehensive information
- Favorites/bookmarking functionality
- Mobile app version
- Local caching for improved performance

## License

This project is free to use and modify.

## Author Notes

UniAtlas is a demonstration project showcasing modern web development practices with clean code, responsive design, and effective API integration.
