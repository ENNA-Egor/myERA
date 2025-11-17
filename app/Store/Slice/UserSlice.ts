
import { createSlice} from '@reduxjs/toolkit'

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


export const { addUser, removeUser} = userSlice.actions

export default userSlice.reducer
