import { createSlice} from '@reduxjs/toolkit'


interface ModalState {
  isVisible: boolean;
   visibleID: string;
  // Добавьте другие свойства сюда, если понадобится
  // someOtherProperty: string;
}


const ModalState = {
  isVisible: false, // Начальное состояние: модальное окно закрыто
  visibleID: '',
};


const toggleVisibleModal = createSlice({
  name: '@@toggle',
  initialState:ModalState,
  reducers: {
    toggleModal:(state) => {
      // Здесь Immer работает, потому что state - это объект, и мы мутируем его свойство
       state.isVisible = ! state.isVisible; // <-- Мутируем свойство объекта
    },
    
  }
})


export const {toggleModal} = toggleVisibleModal.actions

export default toggleVisibleModal.reducer