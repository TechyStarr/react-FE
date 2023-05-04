import React from 'react'

const LoginPage = () => {
    return (
        <div>
            <form>
                <input type="text" name="username" placeholder="Enter your username" />
                <input type="email" name="email" placeholder="Enter your email address" />
                <input type="password" name="password" placeholder="Enter a password" />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default LoginPage
