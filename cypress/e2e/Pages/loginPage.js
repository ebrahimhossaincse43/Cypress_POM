class login{
   
    loginProcess(){
        const data = require('../Pages/loginPageLocatorsAndData.json')
        const method = require('../Utlities/commonMethods')
        method.titleVerify("OrangeHRM")
        method.dataSend(data.userName, data.user_value)
        method.dataSend(data.password,data.user_pass )
        method.time()
        method.takeSpecificSC(data.submit, 'submitButton')
        cy.xpath(data.submit).click()
        method.time()
        method.takeFullScreenshot('afterLogin')  
    }
}export default login

