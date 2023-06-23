import { Route, RouteProps, useNavigate } from "react-router-dom";

export interface Props {
    isAuth: boolean;
}

const ProtectedRoute = ({isAuth, ...routeProps}: Props)=>{
    const navigate = useNavigate()
    if(isAuth){
        return <Route {...routeProps}/>
    }
    return navigate('/auth')
}


export default ProtectedRoute;