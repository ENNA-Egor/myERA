// src/features/modalSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Определяем тип состояния для модального окна
interface ModalState {
  isOpen: boolean;
  // Можно добавить другие свойства, если нужно (например, тип модального окна, его содержимое)
  // modalType?: string;
  // modalData?: any;
}

// Начальное состояние
const initialState: ModalState = {
  isOpen: false,
};

export const modalSlice = createSlice({
  name: 'modal', // Уникальное имя для этого слайса
  initialState,
  reducers: {
    // Редюсер для открытия модального окна
    openModal: (state) => {
      state.isOpen = true;
    },
    // Редюсер для закрытия модального окна
    closeModal: (state) => {
      state.isOpen = false;
    },
    // Редюсер для переключения состояния модального окна (открыть, если закрыто; закрыть, если открыто)
    toggleModal: (state) => {
      state.isOpen = !state.isOpen;
    },
    // Если нужно устанавливать конкретное состояние
    setModalState: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

// Экспортируем actions для использования в компонентах
export const { openModal, closeModal, toggleModal, setModalState } = modalSlice.actions;

// Экспортируем сам редюсер
export default modalSlice.reducer;
