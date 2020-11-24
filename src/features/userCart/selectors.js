import { selectUserCart } from "./userCartSlice"

import { createSelector } from "@reduxjs/toolkit"

export const getTotalPrice = createSelector(
  selectUserCart,
  items => items.reduce((acc, item) => acc + parseInt(item[0].price) * item[1], 0)
)