# Phase 2: Cypress Automated Testing Project

This project demonstrates automated testing using Cypress for the two selected test cases.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Test Scenarios](#test-scenarios)


## Getting Started :memo:
                   
Follow the instructions below to set up and run the automated tests.

## Prerequisites :old_key: 

Make sure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) 

## Installation :gear:

1. Clone the repository:
```
 git clone https://github.com/Beat-tech/decadisTest
```

2. Navigate to the project directory
3. Install dependencies:
 ```  
   npm install
 ```
  
## Running Tests :arrow_forward:

To run the tests headed mode, use the following command:
```
  npx cypress open
```  
Select E2E Testing and then select the spec you want to run.


To run the tests headless mode, use the following command:
```
npx cypress run --browser chrome
```

Or if you want to run a specific spec, use:
```
npx cypress run --spec "cypress/e2e/my-test-file.cy.js"
```


## Test Scenarios :footprints:
:heavy_check_mark:**Contact Form**

- Submit the Contact form successfully.
  
- Invalid email format.
  
- Invalid email address.
  
- Invalid email company.
  
- Submit the form with missing optional fields.
   



:heavy_check_mark:**Accessibility**

- Run accessibility audit on homepage.
  
