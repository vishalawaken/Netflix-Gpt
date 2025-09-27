# Netflix GPT
- Create React App
- Configured Tailwind CSS
- Header
- Routing of App
- Login Form
- Sign Up Form
- Form Validation
- Firebase Setup
- Deploying our App to Production
- Create Sign Up User Account
- Implement Sign In User API
- Created Our User Account
- Created Our Redux Store with Redux Slice
- Implemented Sign out
- Update Profile API Call
- BugFix: Sign Up User and displayName and Profile Picture Update
- BugFix: If The User is not logged in Redirect/Browse To Login Page and Vice Versa
- Unsubscibed to the onAuthChnaged callback ,whnever the header component unmounts
- Add Hardcoded values in Constant Files
- Register For TMDB API & create an app and get access token
- get Data from TMDB Now playing movies list API
- Custom Hook for Now Playing Movies
- Update Redux Store with Movies Data
- Create Movie Slice
- Plannng for Main Container and Secondary container 
- Fetch Data for Trailer Video
- Using Custom Hook for Trailer Video Data
- updated the Store with Trailer Video Data
- Tailwind Classes to make Main Container and Secondary Container look Awesome
- GPT Search Feature
- GPT Search Page
- GPT Search Bar
- *(Multilanguage Feature in Our App)
- Integrate the GPT API'S
- Fetched GPT movie Suggestions frm TMDB
- created PerplexitySlice added Data
- Reuse Movie List component to make movie suggestions container
- Memoization
- Responsive Design of the UI

# Features
- login/Sign Up
   - Sign In /Sign Up Form
   - Redirect to Browse Page

- Browse Page (only comes after the auntentication)
   - Header
   - Main Movie Section
       - Trailer in the background
       - Title and Description
       - Movie Suggestions
          - Movie Lits * N

- Netflix Gpt
   - Search Bar
   - Movie


Project Overview
A full-stack web application that combines Netflix-style movie browsing with AI-powered movie recommendations using GPT technology. The platform features user authentication, movie streaming interface, and intelligent search capabilities.
Key Features Implemented
🔐 Authentication & User Management
Firebase Authentication integration with email/password login
User registration with profile management (display name, profile picture)
Protected routes with automatic redirect logic
Session management with persistent login state
🎬 Movie Browsing Experience
Netflix-like interface with hero movie section
Auto-playing movie trailers in background using YouTube API
Movie cards with poster images and details
Multiple movie categories (Now Playing, Popular Movies)
Responsive design for mobile and desktop
🤖 AI-Powered Movie Recommendations
Integrated Perplexity AI for intelligent movie suggestions
Natural language search queries (e.g., "funny romantic movies")
Real-time movie search using TMDB (The Movie Database) API
Dynamic movie results display with loading states
🌐 Multilingual Support
Support for English, Hindi, and Spanish languages
Localized UI text and search placeholders
Language switcher in header
📱 Responsive Design
Mobile-first approach using Tailwind CSS
Adaptive layouts for different screen sizes
Custom scrollbar styling and animations
Technical Architecture
Frontend Technologies:
React 19.1.1 - Component-based UI development
Redux Toolkit - State management for user, movies, GPT, and language data
React Router DOM - Client-side routing and navigation
Tailwind CSS - Utility-first styling framework
Custom Hooks - Reusable logic for API calls and data fetching
Backend & APIs:
Firebase - Authentication and hosting
TMDB API - Movie data, trailers, and search functionality
Perplexity AI API - Intelligent movie recommendations
YouTube API - Trailer video embedding
State Management:
Redux Store with multiple slices:
User Slice (authentication state)
Movie Slice (now playing, popular movies, trailers)
GPT Slice (search results, loading states)
Language Slice (internationalization)
Development Tools:
Create React App - Project setup and build configuration
ESLint - Code quality and consistency
Firebase CLI - Deployment and hosting
Key Technical Implementations
🔧 Custom Hooks:
useNowPlayingMovies - Fetches and caches current movies
usePopularMovies - Retrieves popular movie listings
useMovieTrailer - Gets trailer data for video background
🎯 Performance Optimizations:
Memoization techniques to prevent unnecessary re-renders
Conditional API calls to avoid redundant requests
Lazy loading and code splitting
🔒 Security Features:
Environment variables for API keys
Firebase security rules
Form validation for authentication
🎨 UI/UX Features:
Netflix-inspired design language
Smooth transitions and animations
Loading states and error handling
Responsive grid layouts
Deployment & DevOps
Firebase Hosting - Production deployment
Build Optimization - Minified and optimized production builds
Environment Configuration - Separate dev/prod configurations
Project Statistics
Components: 15+ React components
API Integrations: 3 major APIs (TMDB, Firebase, Perplexity AI)
State Management: 4 Redux slices with complex state logic
Languages Supported: 3 (English, Hindi, Spanish)
Responsive Breakpoints: Mobile, tablet, desktop
Skills Demonstrated
Frontend Development: React, Redux, JavaScript ES6+
API Integration: RESTful APIs, async/await patterns
Authentication: Firebase Auth implementation
AI Integration: GPT/AI API consumption
Responsive Design: Mobile-first CSS, Tailwind
State Management: Complex Redux architecture
Performance: Optimization techniques and best practices
Deployment: Firebase hosting and CI/CD
This project showcases full-stack development capabilities, modern React patterns, AI integration, and production-ready deployment skills - perfect for demonstrating your expertise in building scalable, user-friendly web applications.
