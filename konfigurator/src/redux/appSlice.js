import { createSlice } from "@reduxjs/toolkit";

function saveCartToStorage(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

const initialState = {
    productsList: [],
    filteredProducts: [],
    cart: JSON.parse(localStorage.getItem("cart") || "[]"),
    lastViewed: [],
    currentPrice: [],
    loadingStatus: "idle",
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        loadProducts: (state, action) => {
            state.productsList = action.payload;
        },
        loadCartList: (state, action) => {
            state.cart = action.payload;
            saveCartToStorage(state.cart);
        },
        setProductsLoadingState: (state, action) => {
            state.loadingStatus = action.payload;
        },
        clearCart: (state) => {
            state.cart = [];
            saveCartToStorage([]);
        },
        filterProducts: (state, action) => {
            const searchTerm = action.payload.toLowerCase();
            state.filteredProducts = state.productsList.filter(product =>
                product.name.toLowerCase().includes(searchTerm)
            );
        },
        setCurrentPrice: (state, action) => {
            state.currentPrice = action.payload;
        },
        addToLastViewed: (state, action) => {
            state.lastViewed = action.payload;
        },
        addToCart: (state, action) => {
            state.cart.push(action.payload);
            saveCartToStorage(state.cart);
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload);
            saveCartToStorage(state.cart);
        },
    },
});

export const {
    loadProducts,
    loadCartList,
    setProductsLoadingState,
    clearCart,
    filterProducts,
    setCurrentPrice,
    addToLastViewed,
    addToCart,
    removeFromCart,
} = appSlice.actions;

export default appSlice.reducer;
