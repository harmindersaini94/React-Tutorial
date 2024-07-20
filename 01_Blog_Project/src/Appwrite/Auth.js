import {envObj} from '../Config/Config'
import { Client, Account, ID } from "appwrite";

// Documentation Link: https://appwrite.io/docs/references/cloud/client-web/account
// A good practice here is to create a class and then create every thing in this class

class AppwriteAuth{
     client = new Client();
     account;

    constructor(){
        // here we will initialize the client and account properties
        this.client.setEndpoint(envObj.ENDPOINT)
        .setProject(envObj.PROJECT_ID);

        this.account = new Account(this.client);
    }

    // we are assuming that the user wil pass a obj with email, password and username, so we are directly destructuring here
     createAccount = async ({name, email, password}) => {
        // we are gonna make use of async and await here, can also use promise  no issue
        try {
            // we can put some error check here 
            // ID.unique() is what appwrite required, so that is why we are creating one. ID is provded by appwrite itself
            const accountCreated = await this.account.create(ID.unique(), name, email, password);
            if(accountCreated){
                // Call method to login directly
                return LoginAccount({email, password})
            }
            else return accountCreated // This we will se what kind of output we are getting
        } catch (error) {
            throw error
        }
    }

    async LoginAccount({email, password}) {
        try {
            const loggedIn = await this.account.createEmailPasswordSession(email, password);
            return loggedIn;
            
        } catch (error) {
            throw error
        }
    }

    // Another method to check at any time that we are logged in or not
    async isLoggedIn() {
        try {
            const loggedIn = await this.account.get();
            return loggedIn;
            
        } catch (error) {
            throw error
        }
        return null; // Just in case out try catch fail
    }

    async Logout() {
        try {
            await this.account.deleteSessions();
            
        } catch (error) {
            throw error
        }
    }
}

// So create an object here now
const objAppWrite = new AppwriteAuth()
export default objAppWrite  // No we can import this object in the module and access the function with dot (.) to get the functionality


// A benefit of this file is that if we need to make use of some other service like Firebase then only thing we need to do is change this file, and 
// only need to change the content of each function. Function name will remain the same and our app will not break as long as the functionality is working fine