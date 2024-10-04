describe('Toqio Contact Sales Form Tests', () => {
  beforeEach(() => {
        // Navigate to the Contact Sales page before each test
      cy.visit('https://toqio.co/contact-sales/')

      // Dismiss the cookie banner by clicking the accept button 
      cy.get('#hs-eu-confirmation-button').click();
  });

  it('TC001.1 - Submit the Contact form successfully', () => {
     

      // Fill the form fields
      cy.get('input[name="firstname"]').type('John');  
      cy.get('input[name="lastname"]').type('Doe');   
      cy.get('input[name="email"]').type('john.doe@decadis.com');  
      cy.get('input[name="company"]').type('Example Corp');  
      cy.get('input[name="phone"]').type('1234567890');  

      // Select the country for "Headquartered in" dropdown
      cy.get('#location_of_headquarters-45092bb0-9980-45b3-bf08-01bc672cf116_7451').select('Spain');  // Headquartered in

      // Agree to the Privacy Policy by checking the box
      cy.get('#LEGAL_CONSENT\\.subscription_type_46630711-45092bb0-9980-45b3-bf08-01bc672cf116_7451').check();

      // Submit the form
      cy.get('input[type="submit"]').click();

       //At this point the test will fail because of the captcha, as a security protocol I would not try to intercept it.
       //The best policy would be to have a test environment without the captcha or to disable it for the automation
       //The next line of code is only an example or what would follow without the captcha    

      // Assert that the form was submitted successfully
      cy.contains('Thanks for contacting us! Check your inbox for a follow up message and next steps.').should('be.visible');
  });

  it('TC001.2 - Invalid email format', () => {
     
      cy.get('input[name="email"]').type('invalid-email');
      cy.contains('Email must be formatted correctly.').should('be.visible');
  });

  it('TC001.3 - Invalid email address', () => {
     
      cy.get('input[name="email"]').type('john.doe@example.com');
      cy.contains('Please enter a valid email address.').should('be.visible');
  });

  it('TC001.4 - Invalid email company', () => {
     
      cy.get('input[name="email"]').type('john.doe@gmail.com');
      cy.contains('Please enter a different email address. This form does not accept addresses from gmail.com.').should('be.visible');
  });

  it('TC001.5 - Submit the form with missing optional fields', () => {
      // Fill only the required fields
      cy.get('input[name="firstname"]').type('John');  
      cy.get('input[name="lastname"]').type('Doe');    
      cy.get('input[name="email"]').type('john.doe@decadis.com');  
      
      cy.get('#location_of_headquarters-45092bb0-9980-45b3-bf08-01bc672cf116_7451').select('Spain');  

      cy.get('#LEGAL_CONSENT\\.subscription_type_46630711-45092bb0-9980-45b3-bf08-01bc672cf116_7451').check();

      cy.get('input[type="submit"]').click();

      //At this point the test will fail because of the captcha, as a security protocol I would not try to intercept it.
      //The best policy would be to have a test environment without the captcha or to disable it for the automation
      //The next line of code is only an example or what would follow without the captcha    

    // Assert that the form can still be submitted successfully
    cy.contains('Thank you for reaching out!').should('be.visible');
  });

  it('TC001.6 - Submit the form with missing mandatory fields', () => {
    // Don't fill out company name
    cy.get('input[name="firstname"]').type('John');
    cy.get('input[name="lastname"]').type('Doe');  
    cy.get('input[name="email"]').type('john.doe@decadis.com');

    // Submit the form
    cy.get('input[type="submit"]').click();
   
    // Assert the error message
    cy.contains('Please complete this required field.').should('be.visible');
    cy.contains('Please complete all required fields.').should('be.visible');
    
});
it('TC001.7 -Fills the form with special characters', () => {
  // Define special characters and input values
  const specialChars = [
    'John!@#',                      
    'Doe$%^',                       
    'john$%.doe@decadis.com',        
    'Example Corp*()',             
    '123-456-7890',                
  ];

  // Fill the form fields with special characters
  cy.get('input[name="firstname"]').clear().type(specialChars[0]);  
  cy.get('input[name="lastname"]').clear().type(specialChars[1]);   
  cy.get('input[name="email"]').clear().type(specialChars[2]);      
  cy.get('input[name="company"]').clear().type(specialChars[3]);    
  cy.get('input[name="phone"]').clear().type(specialChars[4]);      

  // Select the country for "Headquartered in" dropdown
  cy.get('#location_of_headquarters-45092bb0-9980-45b3-bf08-01bc672cf116_7451').select('Spain');  // Headquartered in

  // Agree to the Privacy Policy by checking the box
  cy.get('#LEGAL_CONSENT\\.subscription_type_46630711-45092bb0-9980-45b3-bf08-01bc672cf116_7451').check();

  // Submit the form
  cy.get('input[type="submit"]').click();

  //At this point the test will fail because of the captcha, as a security protocol I would not try to intercept it.
  //The best policy would be to have a test environment without the captcha or to disable it for the automation
  //The next line of code is only an example or what would follow without the captcha 

  cy.contains('Thanks for contacting us! Check your inbox for a follow up message and next steps.').should('be.visible');
});

});
