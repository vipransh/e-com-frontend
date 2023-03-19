import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name: "cart",
    initialState: {
        products: [],
    },
    reducers: {
        addProduct: (state, action)=>{
            const itemInCart=state.products.find((item)=>item._id===action.payload._id);
            if(itemInCart)
            {
                itemInCart.quantity++;
            }
            else
            {
                state.products.push({...action.payload, quantity: 1});
            }
        },
        increamentQuantity: (state, action)=>{
            const item=state.products.find((item)=>item._id===action.payload._id);
            item.quantity++;
        },
        decrementQuantity: (state, action)=>{
            const item=state.products.find((item)=>item._id===action.payload._id);
            if(item.quantity>1)
            item.quantity--;
        },
        removeItem: (state, action)=>{
            const item=state.products.filter((item)=>item._id!==action.payload._id);
            state.products=item;
        },
        clearCart: (state)=>{
            state.products=[];
        }
    },
});

export const {addProduct, increamentQuantity, decrementQuantity, removeItem, clearCart}=cartSlice.actions;
export default cartSlice.reducer;