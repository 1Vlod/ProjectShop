import { createSlice } from "@reduxjs/toolkit"

export const foodSlice = createSlice({
  name: "Food",
  initialState: {
    loading: "idle",
    foodItem: {}
  },
  reducers: {
    foodItemLoading(state, action) {
      if (state.loading === "idle") {
        state.loading = "pending"
      }
    },
    foodItemReceived(state, action) {
      if (state.loading === "pending") {
        state.loading = "idle"
        state.foodItem = action.payload
      }
    }
  }
})

export const { foodItemLoading, foodItemReceived } = foodSlice.actions

export const fetchFoodItem = ({ query }) => async dispatch => {
  dispatch(foodItemLoading())
  let response

  if (query) {
    response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
  } else {
    response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
  }

  const data = await response.json()
  console.log(data)
  dispatch(foodItemReceived(data.meals[0]))
}

export const foodSelector = state => state.food

export default foodSlice.reducer