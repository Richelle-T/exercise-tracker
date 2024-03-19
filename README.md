# Exercise Tracker - Full Stack MERN Application

## About 
This single-page application (SPA) uses the MERN stack (MongoDB, Express, React, Node) to track exercises completed by the user. The user can add, view, update, and delete exercises. The front-end user interface is built with React. The back-end REST API is built with Node and Express for handling data stored in MongoDB. 

<img src="https://github.com/Richelle-T/exercise-tracker/assets/116057301/a0fe95f8-b205-42ed-aa66-2f7b969fe23e" alt="exercise-tracker-home-page" width="500">

## Installation
### Prerequisites 
Make sure to have the following installed 
- Node.js
- MongoDB

### Steps
1. Clone this repository
2. In the `.env` file in `/exercise-rest` replace 'your_connection_string' with your actual MongoDB string.
MONGODB_CONNECT_STRING='your_connection_string'
3. Navigate to `/exercises-rest` in the terminal and run `npm install` then `npm start` 
4. Navgate to `/exercises-ui` in the terminal, and run `npm install` then `npm start`
5. The react application will now be running on localhost:8000 and the REST API will be running on localhost:3000 


## Usage
All changes made (add, edit, delete) will be reflected on the home page. To return to the home page, click on "Home" in the navigation.  

### Add an exercise
Click on "Add" in the navigation, then fill out the form.

<img src="https://github.com/Richelle-T/exercise-tracker/assets/116057301/31516405-0689-4def-ad65-4b58b10274c5" alt="exercise-tracker-add-exercise" width="600">

### Edit an exercise
Click on the edit icon in the row for the exercise you wish to modify. The form will be pre-populated with existing data from the row. 

<img src="https://github.com/Richelle-T/exercise-tracker/assets/116057301/cfea3850-6d05-47d9-a190-91d5aa720f1a" alt="exercise-tracker-edit-exercise" width="600">

### Delete an exercise 
Click on the trash icon in the row for the exercise you wish to delete. 
