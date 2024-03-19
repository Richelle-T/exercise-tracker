# Exercise Tracker SPA (MERN Stack)

This project is an assignment for building a Single Page Application (SPA) to track exercises completed by the user. It utilizes the MERN stack, consisting of MongoDB, Express.js, React, and Node.js. This README provides an overview of the project structure, functionality, technical requirements, and design features.

## Table of Contents
- [Project Overview](#project-overview)
- [Learning Outcomes](#learning-outcomes)
- [Data Model](#data-model)
- [REST API Endpoints](#rest-api-endpoints)
- [React UI](#react-ui)
- [Technical Requirements](#technical-requirements)
- [Design Features](#design-features)

## Project Overview

This project aims to create a web application where users can record their exercise activities. The application allows users to perform CRUD (Create, Read, Update, Delete) operations on exercises. It consists of a backend REST API built with Node.js and Express.js for handling data persistence in MongoDB. The frontend is developed using React, providing an intuitive user interface for managing exercises.

## Learning Outcomes

This assignment covers several learning outcomes, including understanding the React component lifecycle, working with React hooks like `useEffect` and `useHistory`, deploying a React app, utilizing the Fetch API for client-server communication, and managing state in React applications.

## Data Model

The exercise data is stored in MongoDB with the following schema:

- `name`: String, name of the exercise
- `reps`: Number, number of times the exercise was performed
- `weight`: Number, weight of the weights used for the exercise
- `unit`: String, unit of measurement of the weight (kgs or lbs)
- `date`: String, date the exercise was performed (format: MM-DD-YY)

## REST API Endpoints

The REST API provides the following endpoints for CRUD operations:

1. `POST /exercises`: Create a new exercise
2. `GET /exercises`: Retrieve all exercises
3. `GET /exercises/:_id`: Retrieve a specific exercise by ID
4. `PUT /exercises/:_id`: Update an existing exercise by ID
5. `DELETE /exercises/:_id`: Delete an exercise by ID

## React UI

The frontend comprises three main pages:

1. **Home Page**: Displays all exercises in a table format with options to delete or edit each exercise.
2. **Edit Exercise Page**: Allows users to edit existing exercises with pre-populated data.
3. **Create Exercise Page**: Enables users to add new exercises to the database.

## Technical Requirements

- Model code must be separate from controller code.
- Use of a `.env` file for configuring port and MongoDB connection string.
- Utilization of ES modules for the REST API.
- Function-based React components only.
- Proper CSS styling adhering to project guidelines.

## Design Features

- Semantic page layout using HTML tags like `<header>`, `<footer>`, and `<nav>`.
- Navigation component with links to Home Page and Create Exercise Page.
- Use of `<select>` element for unit selection.
- Custom styling following project CSS guidelines.

For detailed implementation and setup instructions, please refer to the codebase and documentation. This project is intended for educational purposes and can be publicly shared as part of a portfolio.

**Author**: [Your Name]  
**Copyright**: © [Year] [Your Name]

