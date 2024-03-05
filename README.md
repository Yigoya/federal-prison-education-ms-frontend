# FDRE prison College managment system Frontend

Welcome to FDRE college system build using React, tailwind and vite
this system dedicated to FDRE kaliti prison prisoners to control and manage Educational process

## Get Started

These are instructions will guide you to set up and run in your local machine.

### Prerequisites

- node js

### Installation

1. Clone the repository:

```
    git clone https://github.com/Yigoya/federal-prison-education-ms-frontend.git

    cd federal-prison-education-ms-frontend

    git checkout development

    npm i
```

2. Run Application: `npm run dev`

## Folder Structure

The project follows a well-organized directory structure to maintain a clean and efficient codebase.

- public: Contains static files accessible to the public, such as index.html and other assets.

- src: The main source code directory.

  - assets: Static assets like images, videos, and more.
  - components: Reusable UI components.

    - form: components for form
    - ui: for common components

      [containers ex. nav bar]

  - layout: components that cover entire page.
  - pages: Individual pages of the application.
  - context: for useContext, context is enough
  - hooks: functions for request and fetch from backend
  - data: common variables
  - utils: Utility functions and helpers.
  - App.jsx: Main application component for routing and layout.
  - index.jsx: Entry point of the application.

- .gitignore: List of files and folders to be ignored by Git.

- package.json: Project configuration and dependencies.

- tailwind.config.js: configure file for tailwind css

- vite.config.js: Vite configuration.

- README.md: Documentation for the project.

## Rules to be followed

- Don't push to main branch
- The development branch is the branch we use until we are ready to deploy

### Step by step for pushing your code to github

Let's say i'm working on dashboard page and after i finished the task wanna push

1. creating local branch: `git checkout -b dashboard`
2. add changes: `git add .`
3. commit your change and your comment has to be explanatory: `git commit -m "adding side and nav bar"`
4. push to github: ` git push origin dashboard`
5. select your branch:
   ![select your branch](./image/ig1.png)
6. click to compare and pull request:
   ![click to compare and pull request:](./image/ig2.png)
7. creating pull request:

- select development branch for base (where the cursor at)
- add title and description that explain the change
- click Create pull request
  ![click to compare and pull request:](./image/ig3.png)
  the rest is for reviews

## Happy Coding :heart:
