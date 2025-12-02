import { createSlice} from '@reduxjs/toolkit'


interface ModalState {
  isVisible: boolean;
  visibleID: number;
  workwearVisible: boolean;
  visibleWorkwear: number;
  userVisible: boolean;
  visiblUser: number;
  idSelectedUser: string;
}


const ModalState = {
  isVisible: false,
  visibleID: 0, 
  workwearVisible:false,
  visibleWorkwear: 1,
  idSelectedUser: '', 
  userVisible: false,
  visibleUser: 2,
};


const toggleVisibleModal = createSlice({
  name: '@@toggle',
  initialState:ModalState,
  reducers: {
    toggleModal:(state, action) => {
       state.isVisible = ! state.isVisible; // <-- Мутируем свойство объекта
        state.visibleID = action.payload;
        state.idSelectedUser = action.payload;
    },
    toggleWorkswear:(state, action) => {
       state.workwearVisible = ! state.workwearVisible; // <-- Мутируем свойство объекта
        state.visibleWorkwear = action.payload;
    },
    toggleVisibleUser:(state, action) => {
       state.userVisible = ! state.userVisible; // <-- Мутируем свойство объекта
        state.visibleUser = action.payload;
    },
    
  }
})


export const {toggleModal, toggleWorkswear, toggleVisibleUser} = toggleVisibleModal.actions

export default toggleVisibleModal.reducer