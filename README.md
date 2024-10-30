# Rent a Car

## Overview

**Rent a Car** is a web application designed to simplify the process of renting vehicles. The platform allows users to create accounts, browse available cars, make reservations, and manage their bookings with ease. The admin panel provides comprehensive control over vehicle management, locations, and user interactions.

## Features

### User Features
- **User Authentication**: Sign up and log in to manage reservations.
- **Reservation System**: Browse available cars and make reservations for specific dates and locations.
- **Account Management**: Users can view and manage their reservations.

### Admin Panel Features
- **Car Management**: Add, edit, or remove car brands and models.
- **Location Management**: Manage rental locations, including adding and editing details.
- **Contact Form Management**: View and respond to messages submitted through the contact form.
- **Reservation Management**: View all reservations made by users and cancel bookings if necessary.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Bootstrap**: A responsive CSS framework for styling and layout.
- **Redux**: A state management library for managing application state.
- **Redux Persist**: A library to persist and rehydrate the Redux state.
- **Firebase**: A comprehensive app development platform, used for authentication, database, and hosting.

## Purpose

The purpose of this project is to provide a seamless and user-friendly platform for vehicle rentals, allowing users to easily book cars online and manage their bookings. The admin panel gives administrators full control over the platform's content and user interactions.


## Setup and Installation

1. Install dependencies:
    ```bash
    npm install
    ```
2. Create a `.env` file in the root directory and add the following environment variables:
    ```plaintext
    REACT_APP_FIREBASE_API_KEY=
    REACT_APP_FIREBASE_AUTH_DOMAIN=
    REACT_APP_FIREBASE_PROJECT_ID=
    REACT_APP_FIREBASE_STORAGE_BUCKET=
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
    REACT_APP_FIREBASE_APP_ID=
    REACT_APP_FIREBASE_MEASUREMENT_ID=
    REACT_APP_RECAPTCHA_SITE_KEY=
    REACT_APP_RECAPTCHA_TEST_SITE_KEY=
    ```
3. Set up Firebase configuration:
    - Create a Firebase project and fill in the above environment variables with your Firebase configuration details.
4. Run the development server:
    ```bash
    npm start
    ```