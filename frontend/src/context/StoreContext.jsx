import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
    const [cartItem, setCartItem] = useState({});
    const url = "http://localhost:4000";
    const [token, setToken] = useState({})
    const addToCart = (itemId) => {
        setCartItem((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1,
        }));
    };

    const removeFromCart = (itemId) => {
        setCartItem((prev) => {
            const newCount = prev[itemId] - 1;
            if (newCount <= 0) {
                const { [itemId]: _, ...rest } = prev; 
                return rest;
            }
            return { ...prev, [itemId]: newCount };
        });
    };

    console.log(cartItem)

    useEffect(() => {
        if(localStorage.getItem("token")){
            setToken(localStorage.getItem("token"))
        }
    }, []);

    const getCartAmountTotal = () => {
        let amount = 0;
        for (const item in cartItem) {
            debugger
            if (cartItem[item] > 0) {
                console.log(cartItem[item])
                let itemInfo = food_list.find((product) => product.name === item);
                if (itemInfo) {
                    debugger
                    amount += itemInfo.price * cartItem[item]; // Multiply price by quantity
                }
            }
        }
        return amount;
    };
    

    const contextValue = {
        food_list,
        cartItem,
        addToCart,
        removeFromCart,
        getCartAmountTotal,
        url,
        token,
        setToken
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};
