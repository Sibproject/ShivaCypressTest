describe ('Test the input field for signup button (css locators)', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('No embedded data provided for react element keyboard-shortcuts-dialog')) {
            // Ignore this specific error
            return false; // Prevents the test from failing
        }
        // Optionally, log the error to the console
        console.error('Uncaught exception:', err);
        return true; // Let other errors fail the test
    });

    
    beforeEach(() => {
        cy.visit('https://github.com/') //navigate to github home page
    });

    it('navigate to github url and verify input and signup fields', () => {
        cy.visit('https:/github.com/') //navigate to github home page
        cy.get('#hero_user_email').type('shiva_raj@gmail.com') //id tag is optional
        cy.contains('Sign up for GitHub').click(); // Clicks the button with specific text
        cy.url().should('include', 'https://github.com/signup?source=form-home-signup&user_email=');
        cy.get('.signup-form-fields__h2').contains("Sign up to GitHub") //check if header has the label "Sign up to GitHub"
        cy.xpath("//input[@id='email']").should('exist'); ////input[@id='email']
        cy.xpath("//input[@id='password']").should('exist');
        cy.xpath("//input[@id='login']").should('exist');
    });
})