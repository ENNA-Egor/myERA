import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [
    { id: 1, surname: 'Иванов', first_name: 'Владимир', patronymic: 'Петрович' },
    { id: 2, surname: 'Петров', first_name: 'Иван', patronymic: 'Сидорович' },
    { id: 3, surname: 'Сидоров', first_name: 'Юрий', patronymic: 'Викторович' },
    { id: 4, surname: 'Бобров', first_name: 'Семён', patronymic: 'Николаевич' },
    { id: 5, surname: 'Мишин', first_name: 'Василий', patronymic: 'Олегович' },
    { id: 6, surname: 'Володин', first_name: 'Сидор', patronymic: 'Ефимович' },
    { id: 7, surname: 'Сидоров', first_name: 'Михаил', patronymic: 'Викторович' },
]}

export const userSlice = createSlice({
  name: '@@users',
  initialState,
  reducers: {
    addUser: (state) => {
      state.value =  []
    },
    removeUser: (state) => {
      state.value = []
    },
  },
})

// Action creators are generated for each case reducer function
export const { addUser, removeUser} = userSlice.actions

export const userReduser =userSlice.reducer