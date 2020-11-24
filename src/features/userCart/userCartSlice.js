import { createSlice } from "@reduxjs/toolkit"

export const userCartSlice = createSlice({
  name: "userCart",
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      const item = state.find(item => item[0].id === action.payload.product.id)
      if (item) {
        item[1]++
        return 
      }

      state.push([action.payload.product, 1])
    },
    removeProduct: (state, action) => {
      const item = state.find(item => item[0].id === action.payload.id)
      if (item[1] > 1) {
        item[1]--
        return
      }

      return state.filter(item => item[0].id !== action.payload.id)
    }
  }
})

export const { addProduct, removeProduct } = userCartSlice.actions

export const selectUserCart = state => state.userCart

export default userCartSlice.reducer