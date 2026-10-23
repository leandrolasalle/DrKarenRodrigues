# Karen Rodrigues Advocacia

## Architecture

The frontend follows an MVC-inspired structure using React:

- `src/models/` contains site domain types and legal/business data.
- `src/controllers/` contains UI state, navigation, and browser behavior.
- `src/components/` contains the React views and reusable presentation components.
- `src/App.tsx` composes the views and connects them to the site controller.

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies: `npm install`
2. Start the development server: `npm run dev`
3. Open `http://localhost:3000`
