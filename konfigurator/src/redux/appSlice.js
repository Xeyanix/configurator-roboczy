import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: "app",
    initialState: {
        productsList: [],
        filteredProducts: [],
        cart: [],
        lastViewed: [],
        currentPrice: [],
        loadingStatus: "idle",
    },
    reducers: {
        loadProducts: (state, action) => {
            state.productsList = action.payload;
        },
        loadCartList: (state, action) => {
            state.cart = action.payload;

        },
        setProductsLoadingState: (state, action) => {
            state.loadingStatus = action.payload;
        },
        clearCart: (state) => {
            state.cart = [];
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
        removeFromCart: (state, action) => {    // <--- DODANE!
            state.cart = state.cart.filter(item => item.id !== action.payload);
        }

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
    removeFromCart,
} = appSlice.actions;

export default appSlice.reducer;
