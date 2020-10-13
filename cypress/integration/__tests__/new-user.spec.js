const { createYield } = require("typescript");

context("Create a new user", () => {
  it("create a new user and logs in with valid credentials", () => {
    cy.visit("http://localhost:3000");

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
    cy.get('[href="/cadastro"]').click();
  });
});
