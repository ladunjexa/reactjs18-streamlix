<a name="readme-top"></a>
<div align="center">

  ![Project Banner](readme_assets/readme_banner.png#gh-dark-mode-only)
  ![Project Banner](readme_assets/readme_banner-light.png#gh-light-mode-only)

  <h1>Streamlix</h1>
  
  <p>
    Streamlix is a <b>Video Streaming App</b> that makes it easy to watch online videos, with beautiful UI using the Material UI
  </p>
  
<!-- Badges -->
<p>
  <a href="https://github.com/ladunjexa/Streamlix-App/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/ladunjexa/Streamlix-App" alt="contributors" />
  </a>
  <a href="">
    <img src="https://img.shields.io/github/last-commit/ladunjexa/Streamlix-App" alt="last update" />
  </a>
  <a href="https://github.com/ladunjexa/Streamlix-App/network/members">
    <img src="https://img.shields.io/github/forks/ladunjexa/Streamlix-App" alt="forks" />
  </a>
  <a href="https://github.com/ladunjexa/Streamlix-App/stargazers">
    <img src="https://img.shields.io/github/stars/ladunjexa/Streamlix-App" alt="stars" />
  </a>
  <a href="https://github.com/ladunjexa/Streamlix-App/issues/">
    <img src="https://img.shields.io/github/issues/ladunjexa/Streamlix-App" alt="open issues" />
  </a>
  <a href="https://github.com/ladunjexa/Streamlix-App/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/ladunjexa/Streamlix-App.svg" alt="license" />
  </a>
</p>
   
 <h4>
    <a href="https://github.com/ladunjexa/Streamlix-App/">View Demo</a>
  <span> · </span>
    <a href="https://github.com/ladunjexa/Streamlix-App">Documentation</a>
  <span> · </span>
    <a href="https://github.com/ladunjexa/Streamlix-App/issues/">Report Bug</a>
  <span> · </span>
    <a href="https://github.com/ladunjexa/Streamlix-App/issues/">Request Feature</a>
  </h4>
</div>

<br />

<!-- Table of Contents -->
<details>

<summary>

# :notebook_with_decorative_cover: Table of Contents

</summary>

- [About the Project](#star2-about-the-project)
  * [Folder Structure](#bangbang-folder-structure)
  * [Environment Variables](#key-environment-variables)
  * [Tech Stack](#space_invader-tech-stack)
- [Getting Started](#toolbox-getting-started)
  * [Installation](#gear-installation)
  * [Run Locally](#running-run-locally)
- [Contributing](#wave-contributing)
- [License](#warning-license)
- [Contact](#handshake-contact)
- [Acknowledgements](#gem-acknowledgements)

</details>  

<!-- About the Project -->
## :star2: About the Project

<div align="center"> 
  <img src="readme_assets/Zexercise-mockup-1.png" height="auto" width="35%"/>
  <img src="readme_assets/Zexercise-mockup-2.png" height="auto" width="36%"/>
</div>

<br />

Streamlix is a Video Streaming App consisting of stunning video sections, custom categories, channel pages, play videos, and much more - based on [YouTube v3](https://rapidapi.com/ytdlfree/api/youtube-v31/) API powered by [RapidAPI](https://rapidapi.com).

<!-- Folder Structure -->
### :bangbang: Folder Structure

Here is the folder structure of Streamlix.
```
Streamlix-App/
|- public/
|- src/
  |-- components/
  |-- utils/
```

Now, lets dive into the public and src folders.

### public

`index.html` - `manifest.json`

The public folder contains the HTML file so you can tweak it, for example, to set the page title. The <script> tag with the compiled code will be added to it automatically during the build process.

### src

#### components

`ChannelCard.jsx` - `ChannelDetail.jsx` - `Feed.jsx` - `index.js` - `Loader.jsx` - `Navbar.jsx` - `SearchBar.jsx` - `SearchFeed.jsx` - `Sidebar.jsx` - `VideoCard.jsx` - `VideoDetail.jsx` - `Videos.jsx`

This folder houses all the components listed above which they are custom components (widgets) with beautiful customized theme using Material UI 5, which split the UI into independent and reusable pieces.


#### utils

`constants.js` - All the web application level constants. Specifically, this constants.js file contains mui-icons, categories and etc.

`fetchFromAPI.js` -  Fetching data from YouTube v3 API powered by RapidAPI using environment variables for API key.

<br />

<!-- ENV VARIABLES -->
### :key: Environment Variables

In order to use Streamlix you have to create your [YouTube v3](https://rapidapi.com/ytdlfree/api/youtube-v31/) api key powered by RapidAPI [here](https://rapidapi.com), to run this web app, you will need to add the following environment variable to your .env file

`REACT_APP_RAPID_API_KEY`

<!-- TechStack -->
### :space_invader: Tech Stack
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![React 18](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
[<img src="https://user-images.githubusercontent.com/71302066/174567516-824b1967-5954-4ac7-9446-14a3b2ab825d.svg" alt="Rapid API" width="100.75" height="28">](https://rapidapi.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Getting Started -->
## 	:toolbox: Getting Started

<!-- Installation -->
### :gear: Installation

#### Step 1:
Download or clone this repo by using the link below:

```bash
 https://github.com/ladunjexa/Streamlix-App
```

#### Step 2:

Explorium using NPM (Node Package Manager), therefore, make sure that Node.js is installed by execute the following command in console:

```bash
  node -v
```

#### Step 3:

At the main folder execute the following command in console to get the required dependencies:

```bash
  npm install
```

#### Step 4:

Within the main folder create a file named `.env` and add the following [environment variable](#key-environment-variables):


```bash
  REACT_APP_RAPID_API_KEY=<YOU_API_KEY>
```


<!-- Run Locally -->
### :running: Run Locally

#### Step 1:

At the main folder execute the following command in console to get the required dependencies:

```bash
  npm start
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Contributing -->
## :wave: Contributing

<a href="https://github.com/ladunjexa/Streamlix-App/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ladunjexa/Streamlix-App" />
</a>


Contributions are always welcome!

See [`contributing.md`](https://contributing.md/) for ways to get started.

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- License -->
## :warning: License

Distributed under the MIT License. See [LICENSE.txt](https://github.com/ladunjexa/Streamlix-App/blob/main/LICENSE) for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Contact -->
## :handshake: Contact

Liron Abutbul - [@lironabutbul6](https://twitter.com/lironabutbul6) - [@ladunjexa](https://t.me/ladunjexa)

Project Link: [https://github.com/ladunjexa/Streamlix-App](https://github.com/ladunjexa/Streamlix-App)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Acknowledgments -->
## :gem: Acknowledgements

This section used to mention useful resources and libraries that used in Streamlix

 - [RapidAPI](https://rapidapi.com/)
 - [MaterialUI](https://mui.com/)
 - #JSMastery

<p align="right">(<a href="#readme-top">back to top</a>)</p>
