/// <reference types = "Cypress"/>

import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
 
Given('Visit google home page',()=>{
    cy.visit("https://www.google.com/");
})

When("search tom and jerry" , ()=>{
    cy.get("input[class='gLFyf']").type('tom and jerry');
    cy.contains('Google Search').click();
})