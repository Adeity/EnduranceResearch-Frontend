# Endurance Research Frontend

This project provides a web interface for managing and filling out research questionnaires. It includes both an admin interface and a participant interface.

## Project Structure

- **app/**
  - **admin/** – Admin interface for managing questionnaires and exporting data.
  - **(questionnares)/** – Participant interface for filling out questionnaires.
  - **registrace/** – Registration page for participants.
- **components/** – Reusable React components (forms, lists, UI elements, etc.).
- **hooks/** – Custom React hooks for state and logic management.
- **model/** – Data models used throughout the application.
- **pages/** – Next.js API endpoints and additional pages.
- **public/** – Static assets (images, favicon, etc.).
- **services/** – Services for backend communication (API calls, exports).
- **styles/** – CSS and style files.
- **utils/** – Utility functions.
- **cypress/** – End-to-end tests using Cypress.

## Technologies

- [Next.js](https://nextjs.org/) – React framework for SSR and static generation.
- [React](https://react.dev/) – UI library.
- [Cypress.js](https://www.cypress.io/) – End-to-end testing.
- [Bootstrap](https://getbootstrap.com/) – UI styling.

## Getting Started

1. **Install dependencies**
   ```sh
   npm install
   ```

2. **Run development server**
```
npx next dev
```
3. **Build and run production**
```
npx next start
```

## Testing
For testing with cypress run
```
npx cypress open
```