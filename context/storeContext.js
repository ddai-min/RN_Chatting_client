import React, { createContext, useReducer } from "react";
import { initialStates } from "./contextAPI/states";
import { reducer } from "./contextAPI/reducers";
import { useActions } from "./contextAPI/actions";

const StoreContext = createContext(initialStates);

const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialStates);
    const actions = useActions(state, dispatch);

    return (
        <StoreContext.Provider value={{ state, dispatch, actions }}>
            {children}
        </StoreContext.Provider>
    );
};

export { StoreContext, StoreProvider };