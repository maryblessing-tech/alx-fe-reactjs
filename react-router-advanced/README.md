# React Router Advanced Demo

Advanced routing techniques with React Router.

## Features

- ✅ Nested Routes - Profile with Details and Settings
- ✅ Dynamic Routing - Blog posts with variable IDs
- ✅ Protected Routes - Authentication required
- ✅ Seamless Navigation

## Setup
```bash
npm install
npm run dev
```

## Routes

- `/` - Home
- `/profile` - Protected (requires auth)
  - `/profile/details` - Nested route
  - `/profile/settings` - Nested route
- `/blog/:id` - Dynamic route

## Testing

Change `isAuthenticated` to `true` in `ProtectedRoute.jsx` to access protected routes.

## Tech Stack

- React 18
- React Router DOM v6
- Vite