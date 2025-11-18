
import { createSlice} from '@reduxjs/toolkit'

const valueUser =  [
    { id: 1, surname: 'Иванов', first_name: 'Владимир', patronymic: 'Петрович', profession:'Рабочий' },
    { id: 2, surname: 'Петров', first_name: 'Иван', patronymic: 'Сидорович' , profession:'Воджитель'},
    { id: 3, surname: 'Сидоров', first_name: 'Юрий', patronymic: 'Викторович' , profession:'Тракторист'},
    { id: 4, surname: 'Бобров', first_name: 'Семён', patronymic: 'Николаевич', profession:'Тракторист' },
    { id: 5, surname: 'Мишин', first_name: 'Василий', patronymic: 'Олегович' , profession:'Водитель'},
    { id: 6, surname: 'Володин', first_name: 'Сидор', patronymic: 'Ефимович' , profession:'Рабочий'},
    { id: 7, surname: 'Сидоров', first_name: 'Михаил', patronymic: 'Викторович' , profession:'Рабочий'},
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
