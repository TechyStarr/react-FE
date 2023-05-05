import React, {useContext} from 'react' //import React library and useContext hook to use context object, useContext hook returns value prop of context object passed to it
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext' //import context object from AuthContext.js file

const Header = () => {
    let {name} = useContext(AuthContext) //use useContext hook to use context object, useContext hook returns value prop of context object passed to it
    return (
        <div>
            <Link to="/">Home</Link>
            <span> | </span>
            <Link to="/login">Login</Link>
        <p>Hello {name}</p>
        </div>
    )
}

export default Header
