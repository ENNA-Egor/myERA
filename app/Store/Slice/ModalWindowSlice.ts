import { createSlice} from '@reduxjs/toolkit'


interface ModalState {
  isVisible: boolean;
   visibleID: number;
  // Добавьте другие свойства сюда, если понадобится
  // someOtherProperty: string;
}


const ModalState = {
  isVisible: false, 
  visibleID: 0,
};


const toggleVisibleModal = createSlice({
  name: '@@toggle',
  initialState:ModalState,
  reducers: {
    toggleModal:(state, action) => {
      // Здесь Immer работает, потому что state - это объект, и мы мутируем его свойство
       state.isVisible = ! state.isVisible; // <-- Мутируем свойство объекта
        state.visibleID = action.payload;
      //  state.visibleID = id
    },
    
  }
})


export const {toggleModal} = toggleVisibleModal.actions

export default toggleVisibleModal.reducer