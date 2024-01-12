# Text Editor Starter Code
Editor-PWA-Text

## Description
Editor-PWA-Text is text editor that runs in the browser. A single-page application that lets the user type tex and save it as well as allow edits. 
The app also has a button that allows users to download to their desktop and functions offline.

As part of the UNCC Bootcamp this app was mean to tbe deployed Render but I had issues getting it to work even with the aid of  Render Deployment Guide.
The app still functions if you clone the repo and run the usage instructions listed below in this README.md.

## User Story
AS A developer

I WANT to create notes or code snippets with or without an internet connection

SO THAT I can reliably retrieve them for later use


## Acceptance Criteria
GIVEN a text editor web application

WHEN I open my application in my editor

THEN I should see a client server folder structure

WHEN I run `npm run start` from the root directory

THEN I find that my application should start up the backend and serve the client

WHEN I run the text editor application from my terminal

THEN I find that my JavaScript files have been bundled using webpack

WHEN I run my webpack plugins

THEN I find that I have a generated HTML file, service worker, and a manifest file

WHEN I use next-gen JavaScript in my application

THEN I find that the text editor still functions in the browser without errors

WHEN I open the text editor

THEN I find that IndexedDB has immediately created a database storage

WHEN I enter content and subsequently click off of the DOM window

THEN I find that the content in the text editor has been saved with IndexedDB

WHEN I reopen the text editor after closing it

THEN I find that the content in the text editor has been retrieved from our IndexedDB

WHEN I click on the Install button

THEN I download my web application as an icon on my desktop

WHEN I load my web application

THEN I should have a registered service worker using workbox

WHEN I register a service worker

THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets

WHEN I deploy to Render

THEN I should have proper build scripts for a webpack application


## Video Showing App Functionality



## Screenshots
Screenshot of the apps manifest.json file:
![19 Manifest json](https://github.com/BenPalac1/Editor-PWA-Text/assets/139652929/793ecc61-e837-4855-b0b1-c308099161a6)

Screenshot showing the apps registered service worker:
![19 Service Worker](https://github.com/BenPalac1/Editor-PWA-Text/assets/139652929/82f73b91-f950-4126-86fa-0d64f36849a1)

Screenshot showing the apps IndexedDB storage:
![19 IndexedDB](https://github.com/BenPalac1/Editor-PWA-Text/assets/139652929/7b2d0d75-8c84-4740-ad6a-740dfcec0b5a)


## Usage Instructions
  1.) cd into the main directory and run an npm i.  This will run npm for the mian, client side, and server side 
      and create your package-lock.json files for all three 

  2.) Next run an npm start and the app should start and run on port 3000

  3.) Open a browser and go to http://localhost:3000/  The app should render. 
      Feel free to test by typing anthing and then clicking anywhere on the page to save what you typed. 
      Refresh the page to see :)
      
  4.) Click the Install button to download the app to your desktop. Data still saves locally even if you kill the server on the vsCode side.

## Built and Tested with
  - Javascript
  - Node
  - Express.js
  - idb package
  - webpack
  - babel

## Other Resources
  - Module 19 Mini-Project was a huge help with this one
  - Google
  - Stackoverflow
  - MDN Webdocs
  - ChatGPT

## License
MIT License

Copyright (c) 2023 Ben Palacpac

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
