import React, { useState } from "react";
const LoginContext = React.createContext({});
export function LoginContextProvider(props) {
    const [isLogin, setIsLogin] = useState(false);
    return (
        <LoginContext.Provider value={{ isLogin: isLogin, setIsLogin: setIsLogin }}>
            {props.children}
        </LoginContext.Provider>
    );
}

export const useLoginContext = () => React.useContext(LoginContext);