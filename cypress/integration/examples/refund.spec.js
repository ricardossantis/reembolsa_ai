// const { it } = require("mocha");

context("Refund Page", () => {
  it("send refund request with valid credentials", () => {
    cy.visit("http://localhost:3000/novopedido");
  });
});
