# Personal Portfolio Website

This repository contains the source code for a personal portfolio website built with React and TypeScript.

## Project Overview

This project is hosted on GitHub Pages and uses React for the frontend interface.

## Available Commands

### `npm start`

Runs the application in development mode.

- Launches a local development server
- Opens the application at [http://localhost:3000](http://localhost:3000)
- Provides real-time reloading when you make code changes
- Displays lint errors in the console

### `npm run predeploy`

Prepares the application for deployment:

- This command is automatically executed before `npm run deploy`
- Runs `npm run build` to create an optimized production build
- Creates a `build` directory with all production-ready files

### `npm run deploy`

Deploys the application to GitHub Pages:

- Uses the gh-pages package to handle deployment
- Publishes the contents of the `build` directory to the gh-pages branch
- Makes the application available at the URL specified in the homepage field of package.json

## Technology Stack

- React
- TypeScript
- SCSS for styling
- GitHub Pages for hosting

