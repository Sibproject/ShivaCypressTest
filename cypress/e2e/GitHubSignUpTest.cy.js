describe('Verify Github sign up test', () => { 
    it('should show error when email is already associated with an account', () => {
        // Visit the GitHub signup page
        cy.visit('https://github.com/signup?source=form-home-signup&user_email=')

        // Input an email that is already associated with an account
        cy.xpath("//input[@id='email']").type('demogithub@gmail.com')
        cy.xpath("//input[@id='password']").type('Shiva123!')
        cy.xpath("//input[@id='login']").type('shiva_raj')

        // Click the sign-up button
        cy.xpath("//button[@type='button']//span[@class='Button-content']").click()

        // Assert that the email error message is displayed
        cy.contains('The email you have provided is already associated with an account.').should('be.visible')
    })

    it('should show error for weak password', () => {
        // Visit the GitHub signup page
        cy.visit('https://github.com/signup?source=form-home-signup&user_email=')

        // Input valid email and username but a weak password
        cy.xpath("//input[@id='email']").type('githubdemo123@example.com')
        cy.xpath("//input[@id='password']").type('12345') // Weak password
        cy.xpath("//input[@id='login']").type('validusername')

        // Click the sign-up button
        cy.xpath("//button[@type='button']//span[@class='Button-content']").click()

        // Assert that the password strength error message is displayed
        cy.contains('Password should be at least 15 characters OR at least 8 characters including a number and a lowercase letter.').should('be.visible')
        cy.contains('Password is too short').should('be.visible')
    })

    it('should show error for invalid username format', () => {
        // Visit the GitHub signup page
        cy.visit('https://github.com/signup?source=form-home-signup&user_email=')

        // Input valid email and password but an invalid username
        cy.xpath("//input[@id='email']").type('newuser@example.com')
        cy.xpath("//input[@id='password']").type('SecurePassword123')
        cy.xpath("//input[@id='login']").type('-invaliduser-') // Invalid username with hyphen at the start and end

        // Click the sign-up button
        cy.xpath("//button[@type='button']//span[@class='Button-content']").click()

        // Assert that the username error message is displayed
        cy.contains('Username may only contain alphanumeric characters or single hyphens, and cannot begin or end with a hyphen.').should('be.visible')
    })

    it('should be able to continue with valid inputs', () => {
        // Visit the GitHub signup page
        cy.visit('https://github.com/signup?source=form-home-signup&user_email=')

        // Input valid email and password but an invalid username
        cy.xpath("//input[@id='email']").type('demogithub123@gmail.com')
        cy.xpath("//input[@id='password']").type('DrinkTeaDaily@123')
        cy.xpath("//input[@id='login']").type('musicfan1') // Invalid username with hyphen at the start and end

        // Click the sign-up button
        cy.xpath("//button[@type='button']//span[@class='Button-content']").click()
    })
})
