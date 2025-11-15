// import { combineReducers } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit'

const valueUser =  [
    { id: 1, surname: 'Иванов', first_name: 'Владимир', patronymic: 'Петрович' },
    { id: 2, surname: 'Петров', first_name: 'Иван', patronymic: 'Сидорович' },
    { id: 3, surname: 'Сидоров', first_name: 'Юрий', patronymic: 'Викторович' },
    { id: 4, surname: 'Бобров', first_name: 'Семён', patronymic: 'Николаевич' },
    { id: 5, surname: 'Мишин', first_name: 'Василий', patronymic: 'Олегович' },
    { id: 6, surname: 'Володин', first_name: 'Сидор', patronymic: 'Ефимович' },
    { id: 7, surname: 'Сидоров', first_name: 'Михаил', patronymic: 'Викторович' },
]

const userSlice = createSlice({
  name: '@@users',
  initialState: valueUser,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload)
    },
    removeUser: (state, action) => {
      state.push(action.payload)
    },
  },
})

const toggleVisibleModal = createSlice({
  name: '@@toggle',
  initialState: false,
  reducers: {
    toggleModal: (state) => {
      return !state;
      //  console.log('НОВОЕ состояние в toggleModal:', state);
    },
  }
})
// Action creators are generated for each case reducer function
export const { addUser, removeUser} = userSlice.actions
export const {toggleModal} = toggleVisibleModal.actions

// export default userSlice.reducer
// export default toggleVisibleModal.reducer

// const rootReducer = combineReducers({
//       user: userSlice.reducer,
//       modal: toggleVisibleModal.reducer,
//     });

//     export default rootReducer;

export const store = configureStore({
  reducer:{
     user: userSlice.reducer,
      modal: toggleVisibleModal.reducer,
  }, 
})