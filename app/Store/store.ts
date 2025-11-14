import { configureStore } from '@reduxjs/toolkit'
import userReduser from './UserSlice'

export const store = configureStore({
  reducer: {
    user: userReduser,
  },
})


