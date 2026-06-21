# AstraAgent AI — Frontend

Modern AI agent management platform built with **React 19** and **Vite 8**.

## Features

- Dashboard with platform stats and activity feed
- Agent catalog with deploy actions
- Real-time chat interface (UI ready for backend integration)
- Settings page for API and workspace configuration
- Dark space-themed UI with responsive layout

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Install & Run

```bash
cd AstraAgentAI_frontend
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/     # UI components (Sidebar, Dashboard, Chat, etc.)
├── data/           # Mock agent data
├── types.ts        # TypeScript interfaces
├── App.tsx         # Main app with view routing
└── main.tsx        # Entry point
```

## Backend Integration

Set your backend URL in **Settings** (default: `http://localhost:8000`). Connect the chat panel to your API endpoint to enable live agent responses.

## Tech Stack

- React 19 + TypeScript
- Vite 8
- CSS (no external UI framework)
