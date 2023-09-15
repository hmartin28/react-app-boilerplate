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

## Setting up react-router-dom in index.js

```
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: 'page-1',
    element: <Page1 />,
  },
  {
    path: 'page-2',
    element: <Page2 />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

## Setup Link to redirect

```
import { Link } from 'react-router-dom';

<Link to={'/'}>[LinkName]</Link>
```
