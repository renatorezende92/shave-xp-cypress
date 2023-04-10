

class Header {
    userShouldBeLoggedIn(name) {

        const firstName = name.split(' ')[0]

        cy.get('.logged-user div a')
            .should('be.visible')
            .should('have.text', 'Olá, ' + name)
    }
}

export default new Header()