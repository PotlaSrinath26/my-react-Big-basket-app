import { configureStore, createSlice } from "@reduxjs/toolkit";

// Products Slice
const productsSlice = createSlice({
  name: "products",
  initialState: {
    Veg: [
      { name: "Tomato", price: 68, image: 'tomatoes.jpg' },
      { name: "Carrot", price: 80, image: 'Carrot.jpg' },
      { name: "Beetroot", price: 95, image: 'Beetroot.jpg' },
      { name: "Potatoes", price: 60, image: 'Potatoes.jpg' },
      { name: "Cabbage", price: 35, image: 'Cabbage.jpg' },
      { name: "Cauliflower", price: 50, image: 'Cauliflower.jpg' },
      { name: "Onions", price: 120, image: 'Onions.jpg' },
      { name: "Chillis", price: 20, image: 'Chillis.jpg' },
      { name: "Green Beans", price: 70, image: 'Green Beans.jpg' },
      { name: "Lady Finger", price: 30, image: 'Lady Finger.jpg' },
      { name: "Tomato", price: 68, image: 'tomatoes.jpg' },
      { name: "Carrot", price: 80, image: 'Carrot.jpg' },
      { name: "Beetroot", price: 95, image: 'Beetroot.jpg' },
      { name: "Potatoes", price: 60, image: 'Potatoes.jpg' },
      { name: "Cabbage", price: 35, image: 'Cabbage.jpg' },
      { name: "Cauliflower", price: 50, image: 'Cauliflower.jpg' },
      { name: "Onions", price: 120, image: 'Onions.jpg' },
      { name: "Chillis", price: 20, image: 'Chillis.jpg' },
      { name: "Green Beans", price: 70, image: 'Green Beans.jpg' },
      { name: "Lady Finger", price: 30, image: 'Lady Finger.jpg' },
    ],
    NonVeg: [
      { name: "Chicken", price: 300, image: 'Chicken.jpg' },
      { name: "FishCurry", price: 560, image: 'Fish curry.jpg' },
      { name: "MuttonCurry", price: 700, image: 'Mutton curry.jpg' },
      { name: "PrawnsFry", price: 660, image: 'Prawns fry.jpg' },
      { name: "BeefFry", price: 999, image: 'Beef fry.webp' },
      { name: "Bread Omelette", price: 49, image: 'Eggs.jpg' },
      { name: "ChickenCurries", price: 179, image: 'Chicken Curries.jpg' },
      { name: "AolloFish", price: 399, image: 'AlloFish.jpg' },
      { name: "FishSalmon", price: 299, image: 'Fish Salmon.jpg' },
      { name: "DuckMeat", price: 769, image: 'DuckMeat.jpg' },
      { name: "Chicken", price: 300, image: 'Chicken.jpg' },
      { name: "FishCurry", price: 560, image: 'Fish curry.jpg' },
      { name: "MuttonCurry", price: 700, image: 'Mutton curry.jpg' },
      { name: "PrawnsFry", price: 660, image: 'Prawns fry.jpg' },
      { name: "BeefFry", price: 999, image: 'Beef fry.webp' },
      { name: "Bread Omelette", price: 49, image: 'Eggs.jpg' },
      { name: "ChickenCurries", price: 179, image: 'Chicken Curries.jpg' },
      { name: "AolloFish", price: 399, image: 'AlloFish.jpg' },
      { name: "FishSalmon", price: 299, image: 'Fish Salmon.jpg' },
      { name: "DuckMeat", price: 769, image: 'DuckMeat.jpg' },
    ],
    Milkshake: [
      { name: "Chocolate Milkshake", price: 99, image: 'Chocolate milkshake.jpg' },
      { name: "Chip Milkshake", price: 79, image: 'Chip Milkshake.jpg' },
      { name: "Dryfruit Milkshake", price: 149, image: 'Dryfruitmilkshake.jpg' },
      { name: "Mango Milkshake", price: 49, image: 'MangoMilkshake.png' },
      { name: "Strawberry Milkshake", price: 97, image: 'StrawberryMilkshake.png' },
      { name: "Kaju Milkshake", price: 149, image: 'KajuMilkshake.jpg' },
      { name: "Oreo Milkshake", price: 150, image: 'OreoMilkshake.jpg' },
      { name: "Banana Milkshake", price: 39, image: 'BananaMilkshake.jpg' },
      { name: "Apple Milkshake", price: 89, image: 'AppleMilkshake.jpg' },
      { name: "SP Milkshake", price: 69, image: 'SP Milkshake.jpg' },
      { name: "Chocolate Milkshake", price: 99, image: 'Chocolate milkshake.jpg' },
      { name: "Chip Milkshake", price: 79, image: 'Chip Milkshake.jpg' },
      { name: "Dryfruit Milkshake", price: 149, image: 'Dryfruitmilkshake.jpg' },
      { name: "Mango Milkshake", price: 49, image: 'MangoMilkshake.png' },
      { name: "Strawberry Milkshake", price: 97, image: 'StrawberryMilkshake.png' },
      { name: "Kaju Milkshake", price: 149, image: 'KajuMilkshake.jpg' },
      { name: "Oreo Milkshake", price: 150, image: 'OreoMilkshake.jpg' },
      { name: "Banana Milkshake", price: 39, image: 'BananaMilkshake.jpg' },
      { name: "Apple Milkshake", price: 89, image: 'AppleMilkshake.jpg' },
      { name: "SP Milkshake", price: 69, image: 'SP Milkshake.jpg' }
    ],
    Chocolates: [
      { name: "CadburyDairyMilk", price: 110, image: 'Cadbury Dairy Milk.jpg' },
      { name: "KitKat", price: 80, image: 'KitKat.jpg' },
      { name: "AmulChocolate", price: 50, image: 'Amul chocolate.jpg' },
      { name: "5Star", price: 10, image: '5Star.jpg' },
      { name: "MarsBar", price: 35, image: 'Marsbar.jpg' },
      { name: "Hersheybar", price: 50, image: 'Hersheybar.jpg' },
      { name: "Snickers", price: 120, image: 'Snickers.jpg' },
      { name: "Munch", price: 20, image: 'Munch.jpg' },
      { name: "Ferrero Rocher", price: 70, image: 'Ferrero Rocher.jpg' },
      { name: "Mist Dark", price: 30, image: 'Mist Dark.jpg' },
      { name: "CadburyDairyMilk", price: 110, image: 'Cadbury Dairy Milk.jpg' },
      { name: "KitKat", price: 80, image: 'KitKat.jpg' },
      { name: "AmulChocolate", price: 50, image: 'Amul chocolate.jpg' },
      { name: "5Star", price: 10, image: '5Star.jpg' },
      { name: "MarsBar", price: 35, image: 'Marsbar.jpg' },
      { name: "Hersheybar", price: 50, image: 'Hersheybar.jpg' },
      { name: "Snickers", price: 120, image: 'Snickers.jpg' },
      { name: "Munch", price: 20, image: 'Munch.jpg' },
      { name: "Ferrero Rocher", price: 70, image: 'Ferrero Rocher.jpg' },
      { name: "Mist Dark", price: 30, image: 'Mist Dark.jpg' }
    ]
  },
  reducers: {}
});

// Load cart from localStorage
const savecart = localStorage.getItem("cart");
const localStoragecart = savecart ? JSON.parse(savecart) : [];

// Cart Slice
const cartSlice = createSlice({
  name: "cart",
  initialState: localStoragecart,
  reducers: {
    AddToCart: (state, action) => {
      const item = state.find(i => i.name === action.payload.name);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementItem: (state, action) => {
      const item = state.find(i => i.name === action.payload.name);
      if (item) item.quantity += 1;
    },
    decrementItem: (state, action) => {
      const item = state.find(i => i.name === action.payload.name);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    RemoveCart: (state, action) => {
      return state.filter(i => i.name !== action.payload.name);
    },
    clearCart: () => []
  }
});

// Order Slice
const orderSlice = createSlice({
  name: "orders",
  initialState: [],
  reducers: {
    orderDetails: (state, action) => {
      state.push(action.payload);
    }
  }
});

// Configure Store
const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
    orders: orderSlice.reducer,
  }
});

// Save cart to localStorage on every state change
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("cart", JSON.stringify(state.cart));
});

// Exports
export const { AddToCart, RemoveCart, incrementItem, decrementItem, clearCart } = cartSlice.actions;
export const { orderDetails } = orderSlice.actions;

export default store;
