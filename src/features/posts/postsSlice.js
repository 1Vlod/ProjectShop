import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchPostById = createAsyncThunk(
  "posts/fetchByIdStatus",
  async (postId, thunkAPI) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const data = await response.json()
    return data
  }
)

export const postsSlice = createSlice({
  name: "Posts",
  initialState: {
    loading: "idle",
    posts: []
  },
  reducers: {
    postsLoading(state, action) {
      if (state.loading === "idle") {
        state.loading = "pending"
      }
    },
    postsReceived(state, action) {
      if (state.loading === "pending") {
        state.loading = "idle"
        state.posts = action.payload
      }
    }
  },
  extraReducers: {
    [fetchPostById.fulfilled]: (state, action) => {
      state.posts.push(action.payload)
    }
  }
}) 

export const { postsLoading, postsReceived } = postsSlice.actions

export const fetchPosts = () => async dispatch => {
  dispatch(postsLoading())

  const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
  const data = await response.json()

  dispatch(postsReceived(data.meals))
}

export const postsSelector = state => state.posts

export default postsSlice.reducer