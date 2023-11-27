<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">
    Comic Creator Web Application
  </h3>

  <p align="center">
    <a href="https://github.com/praneeth-rdy/comic-creator-frontend/issues">
    Report Bug
    </a>
    ·
    <a href="https://github.com/praneeth-rdy/comic-creator-frontend/issues">
    Request Feature
    </a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents
- [Development](#development)
  - [Setting Up Locally](#setting-up-locally)
- [Project Structure](#project-structure)
  - [File Structure](#file-structure)
  - [Libraries/Frameworks Used](#librariesframeworks-used)
- [Author Contact](#author-contact)
- [Acknowledgements](#acknowledgements)
<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Development -->
## Development

### Setting Up Locally

The following setup helps you run the application on your local machine. It assumes that you have Nodejs installed on your computer. If not, install Nodejs from [https://nodejs.org/en/download/](https://nodejs.org/en/download/) and yarn package manager (optional).


1) Clone the repository
```sh
git clone git@github.com:praneeth-rdy/comic-creator-frontend.git
```
You can also use https to clone the repository. To know more read this [documentation](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

2) Now change the directory by navigating into the cloned repository. Use the following command, in case of linux.
```sh
cd comic-creator-frontend
```

3) Update the value of router `basename` to `/` in `src/routes/AppRouterProvider.js`.

4) Install the dependencies using yarn (you can also use npm).
```sh
yarn install
```

5) Start the react server.
```sh
yarn start
```
<p align="right">(<a href="#top">back to top</a>)</p>

## Project Structure
### File Structure
```
.
├── public
└── src
   ├── assets
   ├── components
   ├── pages
   ├── routes
   ├── styles
   ├── utilities
   └── index.js
```
- `public`: Contains public files such as `index.html`.
- `src`: Contains source files (js, css, assets, etc.)
  - `assets`: Contains image and icons.
  - `components`: Contains reusable react components.
  - `pages`: Contains all pages.
  - `routes`: Contains custom routes.
  - `styles`: Contains all stylesheets (CSS).
  - `utilities`: Contains commonly used util functions.
  - `index.js`: Contains the top-level wrapper component.

### Libraries/Frameworks Used

This project has been built with the following technologies.
* [React](https://reactjs.dev)
* [React Router](https://github.com/remix-run/react-router)


<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Author Contact

_Name:_ **Kolanu Praneeth Reddy**<br>
_Roll Number:_ **19AE30030**<br>
_Email:_ **praneeth.kolanu.iitkgp@gmail.com**<br>
_Phone:_ **+91-7013160459**

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [GitHub Pages](https://pages.github.com)
<p align="right">(<a href="#top">back to top</a>)</p>