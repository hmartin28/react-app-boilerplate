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

## Installing necessary packages
```
npm i env-cmd
npm i react-router-dom
```

## Creating .env files (add to .gitignore)

```
REACT_APP_API_KEY="Staging URL"
```

## Adding scripts to package.json file

```
"scripts": {
    "development": "env-cmd -f .env.development react-scripts start",
    "staging": "env-cmd -f .env.staging react-scripts build",
    "production": "env-cmd -f .env.production react-scripts build"
  },
```
