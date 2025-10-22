# 🧱 Masonry Grid App

A responsive **Masonry Grid photo gallery** built with the **Pexels API**, featuring infinite scrolling, search with debounce, and performance optimizations using React hooks and lazy loading.

---

## 🚀 Features

- 🖼️ **Masonry Grid Layout** — dynamic responsive layout for photos  
- 🔍 **Search with Debounce** — optimized input for API calls  
- ♾️ **Infinite Scroll** — seamless pagination using `IntersectionObserver`  
- ⚡ **Virtualized Rendering** — efficient rendering with custom `useVirtualizedGrid` hook  
- 🧠 **Performance Optimizations** — using `React.memo`, `useMemo`, and `useCallback`  
- 💤 **Lazy Loading & Code Splitting** — reduces initial load time

---

## 🧩 Tech Stack

- ⚛️ [React](https://react.dev/)  
- 🔷 [TypeScript](https://www.typescriptlang.org/)  
- 🎨 [styled-components](https://styled-components.com/)  
- ⚡ [Vite](https://vitejs.dev/)  
- 📸 [Pexels API](https://www.pexels.com/api/)

---

## 🛠️ Custom Hooks & Components

- `useVirtualizedGrid` — calculates and renders responsive columns efficiently  
- `InfiniteScroll` — triggers data fetching when user nears the bottom of the page  
- `useDebounce` — prevents redundant API calls during typing  

---

## 🧠 Optimization Techniques

- `React.memo` for preventing unnecessary re-renders  
- `useMemo` and `useCallback` for caching expensive computations and callbacks  
- `React.lazy` and `Suspense` for **code splitting** and **lazy loading**

---

## 🧾 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/haykavanesyan/MasonryGrid.git

# Navigate to project directory
cd MasonryGrid

# Install dependencies
pnpm install

# Start the development server
pnpm dev
