import { configureStore } from '@reduxjs/toolkit'
import userReduser from './UserSlice'
import modalReducer from './ModalSlice';

export const store = configureStore({
  reducer: {
    user: userReduser,
    modal: modalReducer,
  },
})


// Типизация для RootState (полезно для хуков useSelector)
export type RootState = ReturnType<typeof store.getState>;
// Типизация для AppDispatch (полезно для хуков useDispatch)
export type AppDispatch = typeof store.dispatch;