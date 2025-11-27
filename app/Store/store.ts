import { configureStore } from '@reduxjs/toolkit'
import userReduser from './Slice/UserSlice'
import modalReducer from './Slice/ModalWindowSlice'
import workswearReducer from './Slice/WorkwearSlice'
import referenceReducer from './Slice/ReferenceSlise'

export const store = configureStore({
  reducer: {
    users: userReduser,
     modal: modalReducer,
     workswears: workswearReducer,
     reference: referenceReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


