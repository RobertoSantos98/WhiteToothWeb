import { useState } from "react";

import Login from "../containers/Login/login";
import Home from "../containers/Home/home";

function Auth(){
    const [isLogged, setIsLogged] = useState(!!localStorage.getItem("token"));

    return isLogged ? <Home /> : <Login setIsLogged={setIsLogged} />;
}

export default Auth;