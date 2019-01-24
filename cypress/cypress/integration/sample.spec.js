describe("Basic Site Functions", function() {
  it("Main page loads", function() {
    cy.visit("http://localhost:3000");
    cy.contains("Learn React");
  });
});
