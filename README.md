# Remix Pokémon Project

This project is a simple Pokémon catalog built using [Remix](https://remix.run/), focusing on **server-side rendering (SSR)**, **client-side interactions**, and **API integration** using the [PokéAPI](https://pokeapi.co/). The application features a Pokémon listing page with pagination, search functionality, and a detailed Pokémon page that displays additional information about each Pokémon, including types, stats, abilities, and evolution chains.

## Live Demo
You can check the live demo of the project here:  
**LIVE DEMO:** https://remixjs-pokemon.vercel.app/

## Project Features

- **Server-Side Rendering (SSR)**: Fetches data on the server using Remix `loader` functions.
- **Pokémon List**: Displays a list of Pokémon fetched from the PokéAPI, with pagination and search functionality.
- **Pagination**: 30 Pokémon are displayed per page, with navigation through pages.
- **Search Pokémon**: Users can search for Pokémon by name, and the list updates in real-time.
- **Pokémon Detail Page**: When a Pokémon is selected, detailed information is shown, including types, abilities, stats, moves, and evolution chain.
- **Debounced Search**: Search results are delayed by 2 seconds to reduce unnecessary API calls.
- **Stateful Pagination**: Pagination and search terms are maintained in the URL, allowing for easy navigation and sharing of links.
- **Loading States**: Loading indicators for a better user experience during data fetching.

## Technology Stack

- **Framework**: [Remix](https://remix.run/) (for server-side rendering, routing, and data fetching)
- **Languages**: TypeScript, JavaScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS
- **Data Fetching**: Native `fetch` API (via Remix `loader`)
- **State Management**: React `useState` and `useEffect` for client-side state
- **Routing**: Remix's built-in routing system

## Key Components

### 1. **Pokémon Listing Page**
- **Data Fetching**: Uses the PokéAPI to fetch and display a list of Pokémon.
- **Search and Pagination**: Users can search for Pokémon by name, and pagination is implemented to display 30 Pokémon per page.
- **Filtering**: Search results are dynamically filtered based on user input.
- **URL-based State**: Pagination and search terms are reflected in the URL via query parameters.

### 2. **Pokémon Detail Page**
- **Detailed Information**: When a user clicks on a Pokémon, they are redirected to a detailed page showing the Pokémon’s stats, abilities, moves, and evolution chain.
- **Tabs**: Different sections (Stats, Abilities, Moves, Evolution) are displayed using a tabbed interface.
- **Evolution Chain**: The evolution chain is fetched from a separate API endpoint and displayed as a sequence of Pokémon.

## Project Structure

```bash
├── app/
│   ├── components/       # Reusable React components (like Pokémon cards)
│   ├── routes/           # Remix routes for listing and details pages
│   ├── styles/           # Global and component-specific styles (Tailwind)
│   ├── root.tsx          # Root component with meta, links, and error boundaries
│   └── entry.client.tsx  # Remix client-side entry point
├── public/               # Static assets (favicon, images)
│   └── favicon.ico
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
