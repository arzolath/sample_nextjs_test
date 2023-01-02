describe('Test', () => {
	it('should fill and submit form in page 3', () => {
		// Start from the index page
		cy.visit('http://localhost:3000/', { timeout: 30000 })

		// Find a link with an href attribute containing "page3" and click it
		cy.get('a[href*="page3"]').click()

		// The new url should include "/about"
		cy.url().should('include', '/page3')

		// Enter an Email address
		cy.get("#email").type("business@arzolath.com")

		// Select the yes option
		cy.get("#yes").check()

		// Send form
		cy.get("#submit").click()
	})
})