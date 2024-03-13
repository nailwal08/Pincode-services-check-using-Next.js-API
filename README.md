# Pincode Locator

This allows users to input a pincode and fetch details like locality and district from a JSON database using an API endpoint. It provides a simple interface for quickly retrieving location information based on pincode.

## Features

- Input field for entering pincode
- Fetches locality and district based on entered pincode
- Displays fetched information
- Alerts user if pincode is not found in the database(using react-toastify library)

## Technologies Used

- Next
- JavaScript (ES6+)
- Fetch API
- React toastify
- JSON parsing

## Installation

1. Clone this repository:

   ```bash
   1. Install dependencies:
   npx create-next-app app-name
   cd app-name
   npm i react-toastify

   2. Start the development server:
   npm run dev

   Open your web browser and go to http://localhost:3000 to view the application.

   Usage
   -Enter a pincode in the input field.
   -Click the "Check" button.
   -The locality and district corresponding to the entered pincode will be displayed.
   -If the pincode is not found, an alert will be shown.

   " Contributions are welcome! Please feel free to submit any bug fixes, enhancements, or new features via pull requests. "

   file structure::
   --next-app
   |-database/pincodes.json
   |-pages/api/pincode.js
   |-pages/checkpincode.js
   
   
