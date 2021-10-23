<h1 align="center">
  <br>
   <img height="100px" src="./src/images/logo.svg" />
  <br>
</h1>

<p align="center">
  This repository contains the main <strong>Ristek Open Source</strong> website source code.
  We are the world's largest student-led and product-centered open source organization with 2+ million users and 200 community maintainers.
</p>

## Table of contents

- [Table of contents](#table-of-contents)
- [Requirements](#requirements)
- [Installation](#installation)
- [Project Structure](#project-structure)
  - [Top-level directory layout](#top-level-directory-layout)
  - [Source files](#source-files)
- [License](#license)

## Requirements
>This section contains necessary requirements to run this project.

- [Node JS](https://nodejs.org/en/download/)

## Installation

> This section contains installation steps to help run this project.

1. Fork & Clone
2. Install Packages
```bash
npm install
```
3. Run in Development Mode
```bash
npm start / npm run dev
```
To build & run in Production mode:
```bash
npm run build && npm run serve
```

## Project Structure

> This section explains the structure of this project.

### Top-level directory layout
    .
    ├── .cache                  # Gatsby's cache files
    ├── build                   # Compiled files
    ├── src                     # Source files
    ├── gatsby-browser.js       # Gatsby's Browser APIs implementation file
    ├── gatsby-config.js        # Gatsby's configuration file
    ├── LICENSE
    └── README.md

### Source files
    .
    ├── components              # Reusable react components
    ├── images                  # Static image assets
    ├── pages                   # Page components
    ├── styles                  # Centralized style configuration
    └── utils                   # Utilities

> **Q: Why we separate `pages` & `components` folder?**
>
> **A:** Because GatsbyJS automatically generate pages using the file names inside `pages` folder. File `index.js` will be converted to `/` page, `about.js` will be converted to `/about` page.

## License

[MIT](LICENSE)
