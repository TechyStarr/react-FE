import React, {useContext} from 'react' //import React library and useContext hook to use context object, useContext hook returns value prop of context object passed to it
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext' //import context object from AuthContext.js file

const Header = () => {
    let {user} = useContext(AuthContext) //use useContext hook to use context object, useContext hook returns value prop of context object passed to it
    return (
        <div>
            <Link to="/">Home</Link>
            <span> | </span>
            {user ? (
                <p>Logout</p>
            ) : (
                <Link to="/login">Login</Link>
            )}
            
            {user && <p>Hello {user.email}</p>}
        
        </div>
    )
}

export default Header
