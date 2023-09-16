import React, {PropsWithChildren} from "react";

type UpdateBalanceAction = { type: "update-balance"; asset: string; balance: string };

type Action =
    | UpdateBalanceAction

type Dispatch = (action: Action) => void;


type State = {
    balances: Map<string, string | number>;
};

const initialState: State = {
    balances: new Map<string, string | number>()
} as const;

function storeReducer(state: State, action: Action): State {
    switch (action.type) {
        case "update-balance": {
            const {asset, balance} = action;
            const newState = {...state} as State;
            newState.balances[asset] = balance;
            return newState;
        }
        default: {
            throw new Error("Unhandled action type");
        }
    }
}

const StoreContext = React.createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined);

function StoreProvider({children}: PropsWithChildren) {
    const [state, dispatch] = React.useReducer(storeReducer, initialState);
    const value = {state, dispatch};

    return (
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
    );
}

function useStore() {
    const context = React.useContext(StoreContext);
    if (context === undefined) {
        throw new Error("useStore must be used within a StoreProvider");
    }
    return context;
}

export {StoreProvider, useStore};
