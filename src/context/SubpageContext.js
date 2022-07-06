import React, {useState} from "react";
const SubpageContext = React.createContext({});
export function SubpageContextProvider(props) {
    const [activeId, setActiveId] = useState(1);
    return (
        <SubpageContext.Provider value={{ activeId: activeId, setActiveId: setActiveId }}>
            {props.children}
        </SubpageContext.Provider>
    );
}

export const useSubpageContext = () => React.useContext(SubpageContext);