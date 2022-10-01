# Visual Studio Code
## VS Code Extensions
* Tailwind CSS IntelliSense
* ES7+ React/Redux/React-Native snippets

## VS Code Commands
CMD+P => Search bar for any file

# VS Code Setup
## code . functionality in VS Code
CMD Shift P => Shell Command: Install command in PATH => Press ENTER

## Dependencies Setup
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

## React Social Icons
```
yarn add react-social-icons
```

## Delete Home.module.css
## styles > globals.css
```
// Delete everything in there
// add this
// press save
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Install Framer Motion
## https://www.framer.com/docs/introduction/
```
yarn add framer-motion
```
