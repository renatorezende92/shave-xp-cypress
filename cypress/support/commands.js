Cypress.Commands.add('createUser', (user) => {

    // cy.request({
    //     method: 'DELETE',
    //     url: 'http://localhost:5000/user/' + user.email
    // }).then(function (response) {
    //     expect(response.status).to.eq(204)
    // })

    cy.log(JSON.stringify(user))

    cy.request({
        method: 'POST',
        url: 'http://localhost:5000/user',
        body: user
    }).then(function (response) {
        expect(response.status).to.eq(201)
    })
})