import React , {useContext} from 'react'
import AuthContext from '../context/AuthContext'

const LoginPage = () => {
    let {loginUser} = useContext(AuthContext)

    return (
        <div>
            <form onSubmit={loginUser}>
                <input type="text" name="username" placeholder="Enter your username" />
                <input type="email" name="email" placeholder="Enter your email address" />
                <input type="password" name="password" placeholder="Enter a password" />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default LoginPage
