import { createSlice } from "@reduxjs/toolkit";

// --- STAŁE ---
const summaryInitial = {
    motherboard: null,
    processor: null,
    ram: null,
    ssd: null,
    charger: null,
    gpu: null,
    case: null,
};

function saveCartToStorage(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// --- DODAJ TO: Ładowanie summaryConfig z localStorage ---
function loadSummaryFromStorage() {
    try {
        const data = localStorage.getItem("summaryConfig");
        return data ? JSON.parse(data) : { ...summaryInitial };
    } catch {
        return { ...summaryInitial };
    }
}

// --- DODAJ TO: Zapisywanie summaryConfig do localStorage ---
function saveSummaryToStorage(summaryConfig) {
    localStorage.setItem("summaryConfig", JSON.stringify(summaryConfig));
}

// --- INICJALNY STAN ---
const initialState = {
    productsList: [],
    filteredProducts: [],
    cart: JSON.parse(localStorage.getItem("cart") || "[]"),
    lastViewed: [],
    currentPrice: [],
    loadingStatus: "idle",
    summaryConfig: loadSummaryFromStorage(), // <--- POBIERA Z LOCALSTORAGE!
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
     
        setConfigPart: (state, action) => {
            const { type, part } = action.payload;
            state.summaryConfig[type] = part;
            saveSummaryToStorage(state.summaryConfig); // <--- ZAPIS
        },
        clearConfigPart: (state, action) => {
            const { type } = action.payload;
            state.summaryConfig[type] = null;
            saveSummaryToStorage(state.summaryConfig); // <--- ZAPIS
        },
        clearAllConfig: (state) => {
            state.summaryConfig = { ...summaryInitial };
            saveSummaryToStorage(state.summaryConfig); // <--- ZAPIS
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
    setConfigPart,
    clearConfigPart,
    clearAllConfig,
} = appSlice.actions;

export default appSlice.reducer;
