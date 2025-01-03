import { useState } from "react";

import Login from "../containers/Login/login";
import RouteApplication from "../Components/route";

function Auth(){
    // const [isLogged, setIsLogged] = useState(!!localStorage.getItem("token"));
    const [isLogged, setIsLogged] = useState(true);

    return isLogged ? <RouteApplication /> : <Login setIsLogged={setIsLogged} />;
}

export default Auth;