/// <reference types = "Cypress"/>

import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
let data = require("../../fixtures/example.json");


Given('Visit google home page',()=>{
    cy.viewport(1024, 768);
    cy.visit("https://www.google.com/");
})

When("search tom and jerry" , ()=>{
    // cy.get("input[class='gLFyf']").type('tom and jerry');
    cy.get("input[class='gLFyf']").type(data.keywordsToSearch);
    cy.contains('Google Search').click();
})