import { createSlice} from '@reduxjs/toolkit'


interface ModalState {
  isVisible: boolean;
   visibleID: number;
  // Добавьте другие свойства сюда, если понадобится
  // someOtherProperty: string;
}


const ModalState = {
  isVisible: false, // Начальное состояние: модальное окно закрыто
  visibleID: 0,
};


const toggleVisibleModal = createSlice({
  name: '@@toggle',
  initialState:ModalState,
  reducers: {
    toggleModal:(state, id) => {
      // Здесь Immer работает, потому что state - это объект, и мы мутируем его свойство
       state.isVisible = ! state.isVisible; // <-- Мутируем свойство объекта
       console.log (id)
      //  state.visibleID = id
    },
    
  }
})


export const {toggleModal} = toggleVisibleModal.actions

export default toggleVisibleModal.reducer