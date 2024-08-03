// CPC

import { createContext } from "react";

export const CartContextApi = createContext()
export const CartContextApiProviderFunc = ({children})=>{

    

    return <CartContextApi.Provider>{children}</CartContextApi.Provider>

}