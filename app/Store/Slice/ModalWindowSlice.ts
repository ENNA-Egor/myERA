import { createSlice} from '@reduxjs/toolkit'



const toggleVisibleModal = createSlice({
  name: '@@toggle',
  initialState: false,
  reducers: {
    toggleModal: (state) => {
      return !state;
    },
  }
})


export const {toggleModal} = toggleVisibleModal.actions

export default toggleVisibleModal.reducer