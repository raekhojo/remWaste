# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Skip Selection UI – WeWantWaste

This project implements a dynamic and responsive skip selection interface using **React**, **Framer Motion**, and **Tailwind CSS**. Users can browse available skip sizes, view detailed information, and select a skip for hire.

## 📦 Folder Structure

/components
/CardsArea
index.jsx # Displays a scrollable list of skip cards
/Steps
index.jsx # Visual step indicator for multi-step flow
/Details
DetailRow.jsx # Reusable row component for skip detail fields
ItemDetails.jsx # Drawer content showing selected skip details
Home.jsx # Main logic for selection and drawer behavior
/utils
skipImages.js # Maps skip sizes to their respective image assets


---

## 💡 Approach

### 1. **SkipCard Component**
- Each skip is rendered as a card (`SkipCard.jsx`), showing:
  - Image
  - Price
  - Hire duration
  - Road permission status
- Clicking the **card** triggers `onClick()` to open details.
- A small button inside toggles selection state using `onSelect()`.

### 2. **CardArea Component**
- This component (`CardArea/index.jsx`) maps through skip data and renders each card.
- Props:
  - `onSelectSkip(skip)` passed from `Home` to handle card click.

### 3. **ItemDetails Drawer**
- Triggered when a skip is selected.
- Renders in a bottom sheet/drawer using `framer-motion`.
- Shows:
  - Title, price, duration
  - Large image
  - Skip metadata (with icons) using reusable `DetailRow` component.
  - A “Continue” button (not wired yet)
  - Info disclaimer

### 4. **Reusable DetailRow Component**
- A simple layout used to render each line of detail info consistently.
- Props:
  - `icon`: A Lucide React icon
  - `label`: Left-hand label
  - `value`: Right-hand info

### 5. **State Management**
- `Home.jsx` stores `selectedSkip` using `useState`.
- When a card is clicked, it sets `selectedSkip`.
- The drawer opens automatically when `selectedSkip` is not null.
- Clicking outside or the close button resets the state to hide the drawer.

---

## 🧰 Dependencies

- `React`
- `Lucide-react`: Icon set
- `Framer Motion`: Drawer and animation transitions
- `Tailwind CSS`: Layout and styling

---

## 📱 Responsive Design

- Uses Tailwind responsive classes to adapt layout:
  - Single-column layout on mobile
  - Two-column layout on larger screens
- Drawer is scrollable for mobile viewports

---


## 🧾 Notes

- All skip images are accessed via the `skipImages` utility, which maps `size` (e.g. 4, 6, 8) to `jpg` assets.
- Skip pricing is shown **before VAT**; VAT inclusion logic should be added if needed.

---

## 📸 Sample

![Skip Selection UI Screenshot](preview.jpg)

---

## 🛠️ Commands

```bash
npm install
npm run dev

👨‍💻 Author
Built with ❤️ by Richmond Ackon
