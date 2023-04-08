#Blogspot React App Documentation

#Introduction

Blogspot is a React-based web application designed for posting ads. It comes with a variety of features including a landing page for guest users, a page with all ads and filters, a details page for logged-in users only, an edit page , a login page, a sign-up page, a my-profile page , and a new ad page for creating new ads. The app uses a REST API written in ExpressJS and a MongoDB database.

#Getting Started

#To get started with Blogspot, follow these instructions:

Navigate to the "server" folder and install all the required dependencies using npm install.
Start the server by running the command npm start.
Navigate to the "client" folder and install all the required dependencies using npm install.
Start the client by running the command npm start.

#Features

#Landing Page
The landing page provides a brief overview of the app - last three added and and links to login and sign up.

#Ads Page
The Ads page displays all ads posted on the app with filters that can be used to narrow down the search. Logged in users can view ad details.

#Details Page
The Details page provides more information about an ad, including the ad owner's contact information. Only logged-in users can access this page.

#Edit Page
Logged-in users who are also the owners of an ad can edit their ad details using the Edit page.

#Login Page
The Login page allows users to log in to their accounts to access restricted pages.

#Sign-up Page
The Sign-up page allows new users to create accounts.

#My-profile Page
The My-profile page displays the user's profile information and their posted ads.

#New Ad Page
The New Ad page allows logged-in users to create new ads.

#Architecture

Blogspot uses a REST API written in ExpressJS to interact with a MongoDB database. The front-end of the app is written in ReactJS and follows a component-based architecture.