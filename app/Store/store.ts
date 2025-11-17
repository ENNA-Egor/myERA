import { configureStore } from '@reduxjs/toolkit'
import userReduser from './Slice/UserSlice'
import modalReducer from './Slice/ModalWindowSlice'

export const store = configureStore({
  reducer: {
    user: userReduser,
    modal: modalReducer,
  },
})


