const { createYield } = require("typescript");

context("Login Page", () => {
  it("logs in with valid credentials", () => {
    cy.visit("http://localhost:3000");

    cy.get(".sc-iJCRLp").contains("Reembolsa.ai");
    cy.contains("Cadastro");
    cy.contains("Login");
    cy.contains("Contato");
    cy.get(":nth-child(6) > .sc-iklIKw").contains("Quero participar");

    cy.get('[href="/cadastro"]').click();
  });
});
