import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import itemsReducer from '../features/items/itemsSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    items: itemsReducer
  },
});
