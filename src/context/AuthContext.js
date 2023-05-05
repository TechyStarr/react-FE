import { createContext, useState, useEffect } from 'react' //import createContext function from react library   //useState hook to store user data   //useEffect hook to check if user is logged in


const AuthContext = createContext() //create context object to be used in other components  

export default AuthContext //export context object to be used in other components

export const AuthProvider = ({ children }) => { //create AuthProvider component to wrap around other components
    
    let [authTokens, setAuthTokens] = useState(null) //useState hook to store user data, set initial value to null
    let [user, setUser] = useState(null)

    let loginUser = async ( e ) => {
        e.preventDefault()
    

        let response = await fetch('http://127.0.0.1:8000/userapp/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ //convert object to string
                'username': e.target.username.value,
                'email': e.target.email.value,
                'password': e.target.password.value,
            })
        })
        let data = await response.json()
        if (response.status === 200){
            setAuthTokens(data)
            setUser(data.access)

        }else{
            alert('Something went wrong!')
        }

    }
    
    let contextData = {
        loginUser: loginUser

    }
    
    return (
        <AuthContext.Provider value={contextData} > 
        {children}</AuthContext.Provider> // return AuthContext.Provider component with value prop set to object with user data     //wrap children components in AuthContext.Provider component to make context object available to all components in app
    )

}