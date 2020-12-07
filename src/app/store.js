import { configureStore } from '@reduxjs/toolkit'

import counterReducer from '../features/counter/counterSlice'
import itemsReducer from '../features/items/itemsSlice'
import userCartReducer from '../features/userCart/userCartSlice'
import postsReducer from '../features/posts/postsSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    items: itemsReducer,
    userCart: userCartReducer,
    posts: postsReducer
  },
});
