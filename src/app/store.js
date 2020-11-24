import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import itemsReducer from '../features/items/itemsSlice'
import userCartReducer from '../features/userCart/userCartSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    items: itemsReducer,
    userCart: userCartReducer
  },
});
