import open_url from "../Base/openUrl"
import login from "../Pages/loginPage"

describe('Orange HRM', ()=>{
    //className objName = new className()
    const url = new open_url()
    const loginPage = new login()

    it('Test', ()=>{
        url.openUrl()
        loginPage.loginProcess()
    })
})