// import { Route, Redirect } from "react-router-dom";

// const PrivateRoute = ({children, ...rest}) => {
//     console.log('private route works')
//     return(
//         <Route {...rest}>{children}</Route>
//     )
// }

// export default PrivateRoute;

import { Navigate } from 'react-router-dom';

const PrivateRoute = (Component) => {
    const auth = false; //your logic

    return auth ? <Component /> : <Navigate to="/login" />
}

export default PrivateRoute;