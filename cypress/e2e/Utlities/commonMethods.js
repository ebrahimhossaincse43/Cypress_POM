export function dataSend(xpath, value) {
    return cy.xpath(xpath).type(value);
}

export function titleVerify(expectedTitle){
    return cy.title().should('eq', expectedTitle)
}

export function takeFullScreenshot(scName){
    return cy.screenshot(scName);
}

export function takeSpecificSC(xpath, scName){
    return cy.xpath(xpath).screenshot(scName);
}

export function time(){
    return cy.wait(5000);
}


