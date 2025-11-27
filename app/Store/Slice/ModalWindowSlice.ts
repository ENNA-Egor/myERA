import { createSlice} from '@reduxjs/toolkit'


interface ModalState {
  isVisible: boolean;
  visibleID: number;
  workwearVisible: boolean;
  visibleWorkwear: number;
}


const ModalState = {
  isVisible: false,
  visibleID: 0, 
  workwearVisible:false,
  visibleWorkwear: 1, 
};


const toggleVisibleModal = createSlice({
  name: '@@toggle',
  initialState:ModalState,
  reducers: {
    toggleModal:(state, action) => {
       state.isVisible = ! state.isVisible; // <-- Мутируем свойство объекта
        state.visibleID = action.payload;
    },
    toggleWorkswear:(state, action) => {
       state.workwearVisible = ! state.workwearVisible; // <-- Мутируем свойство объекта
        state.visibleWorkwear = action.payload;
    },
    
  }
})


export const {toggleModal, toggleWorkswear} = toggleVisibleModal.actions

export default toggleVisibleModal.reducer