# General Setup

## VS Code Extensions

-   Tailwind CSS IntelliSense
-   ES7+ React/Redux/React-Native snippets
-   Auto Rename Tag
-   Prettier

### Install Prettier

CMD+Shift+P -> Settings UI
Search for "Editor: Default Formatter", Choose Prettier
Click the checkbox for "Editor: Format on Save"

## VS Code Commands

CMD+P => Search bar for any file

# VS Code Setup

## code . functionality in VS Code

CMD Shift P => Shell Command: Install command in PATH => Press ENTER

# Dependencies Setup

### nextjs.org/docs/basic-features/typescript

```
npx create-next-app@latest --ts portfolio-next-framer-tailwind-sanity-react
```

## Tailwind CSS Setup

### tailwindcss.com/docs/guides/nextjs

```
yarn add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## Delete Home.module.css in styles > globals.css

```
// Delete everything in there
// add this
// press save
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### React Social Icons

`yarn add react-social-icons`

### Install Framer Motion

#### https://www.framer.com/docs/introduction/

`yarn add framer-motion`

### Simple Typewriter

`yarn add react-simple-typewriter`

### Hero Icons

#### heroicons.com

`yarn add @heroicons/react`

### React Hooks Form

#### react-hook-form.com

'yarn add react-hook-form'

### Tailwind Scrollbar

`yarn add -D tailwind-scrollbar`
add `require("tailwind-scrollbar")` to `plugins` array in `tailwind.config.js`
