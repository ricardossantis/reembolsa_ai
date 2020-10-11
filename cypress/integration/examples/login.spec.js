const { createYield } = require("typescript");

context("Login Page", () => {
  it("logs in with valid credentials", () => {
    cy.visit("http://localhost:3000");

    cy.contains("Cadastro");
    cy.contains("Login");
    cy.contains("Contato");
    cy.contains("Quero participar");

    cy.get(".sc-lmgQde > :nth-child(3)").click();

    cy.get("#basic_company").type("Kenzie");
    cy.get("#basic_email").type("teste@kenzie.com");
    cy.get("#basic_password").type("123456");
    cy.get("#basic_confirmPassword").type("123456");
    cy.get(".ant-btn > .anticon > svg").click();

    cy.get('[href="/login"]').click();

    cy.get("#email").type("teste@kenzie.com");
    cy.get("#password").type("123456");
    cy.get(".ant-btn-primary").click();

    cy.get("#register_email > .ant-input").type("ze@kenzie.com");
    cy.get("#register_password > .ant-input-affix-wrapper > .ant-input").type(
      "123456"
    );
    cy.get("#register_fullName > .ant-input").type("José da Silva Santos");
    cy.get("#register_user > .ant-input").type("Zezinho");
    cy.get("#register_roll > .ant-input").type("analista");
    cy.get("#register_amountLimit > .ant-input").type("400");
    cy.get(".ant-btn > span").click();
  });
});
