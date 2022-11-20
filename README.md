# Frontend part for assignment 9
This repo contains frontend part for Info6150 assignment 9

## Componenets
* **Card:** Reusable card component which is used to render a parent component for all the pages
* **Login:** Created a login component with email and password fields, upon successful user details are stored in sessionstorage
* **NavBar:** Created a component for the navbar to reuse it in all pages
* **Footer:** Creaded a footer component which is used across all the pages
* **About:** Created a about us page using grid layout and rendered inside card component
* **Home:** Created a home page which gets username from the session and displays it in the card component 
* **Contact:** Created a contact page which is rendered inside a card component
* **Jobs:** Created jobs panel which takes in job name prop and generated a job card component
* **JobsPanel:** Created JobsPanel which iterates over a jobs array using react map and dynamically generates job components

## Services (src/sevices)
* Created services.js which interacts with the express js server and fetches user data during login