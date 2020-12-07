import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchFoodItemById = createAsyncThunk(
  "posts/fetchByIdStatus",
  async (postId, thunkAPI) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const data = await response.json()
    return data
  }
)

export const foodSlice = createSlice({
  name: "Food",
  initialState: {
    loading: "idle",
    foodItems: []
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
        state.foodItems = action.payload
      }
    }
  },
  extraReducers: {
    [fetchFoodItemById.fulfilled]: (state, action) => {
      state.foodItems.push(action.payload)
    }
  }
}) 

export const { foodItemLoading, foodItemReceived } = foodSlice.actions

export const fetchFoodItem = () => async dispatch => {
  dispatch(foodItemLoading())

  const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
  const data = await response.json()

  dispatch(foodItemReceived(data.meals))
}

export const foodSelector = state => state.food

export default foodSlice.reducer