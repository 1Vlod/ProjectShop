import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: "User",
    userCart: []
  },
  reducers: {
    addProduct: (state, action) => {
      const item = state.userCart.find(item => item[0].id === action.payload.product.id)
      if (item) {
        item[1]++
        return 
      }

      state.userCart.push([action.payload.product, 1])
    },
    removeProduct: (state, action) => {
      const item = state.userCart.find(item => item[0].id === action.payload.id)
      if (item[1] > 1) {
        item[1]--
        return
      }

      state.userCart = state.userCart.filter(item => item[0].id !== action.payload.id)
    },
    changeName: (state, action) => {
      state.userName = action.payload.userName
    }
  }
})

export const { addProduct, removeProduct, changeName } = userSlice.actions

export const selectUserCart = state => state.user.userCart
export const selectUserName = state => state.user.userName

export default userSlice.reducer