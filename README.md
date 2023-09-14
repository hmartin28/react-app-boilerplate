# Boilerplate for ReactJS applications

## Create the application

```
npx create-react-app@latest
```

## Install TailwindCSS

```
npm install -D tailwindcss
npx tailwindcss init
```

## tailwind.config.js

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## index.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
