import React, { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const memoizedValue = useMemo(() => [cart, setCart], [cart, setCart]);

    return (
        <CartContext.Provider value={memoizedValue}>
            {children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default CartContext;