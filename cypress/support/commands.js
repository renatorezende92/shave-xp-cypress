Cypress.Commands.add('createUser', (user) => {
    cy.task('removeUser', user.email)
        .then(function (result) {
            cy.log(result)
        })

    cy.request({
        method: 'POST',
        url: 'http://localhost:3333/users',
        body: user
    }).then(function (response) {
        expect(response.status).to.eq(201)
    })
})