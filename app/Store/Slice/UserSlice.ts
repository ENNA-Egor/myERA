
import { createSlice, nanoid} from '@reduxjs/toolkit'

interface valueUser {
  id: string; // nanoid возвращает строку
  surname: string;
  first_name: string;
  patronymic: string;
  profession: string;
  status: boolean;
}

const valueUser =  [
    { id: 1, surname: 'Иванов', first_name: 'Владимир', patronymic: 'Петрович', profession:'Рабочий', status: false },
    { id: 2, surname: 'Петров', first_name: 'Иван', patronymic: 'Сидорович' , profession:'Воджитель', status: false},
    { id: 3, surname: 'Сидоров', first_name: 'Юрий', patronymic: 'Викторович' , profession:'Тракторист', status: true},
    { id: 4, surname: 'Бобров', first_name: 'Семён', patronymic: 'Николаевич', profession:'Тракторист', status: false },
    { id: 5, surname: 'Мишин', first_name: 'Василий', patronymic: 'Олегович' , profession:'Водитель', status: false},
    { id: 6, surname: 'Володин', first_name: 'Сидор', patronymic: 'Ефимович' , profession:'Рабочий', status: false},
    { id: 7, surname: 'Сидоров', first_name: 'Михаил', patronymic: 'Викторович' , profession:'Рабочий', status: true},
]

const userSlice = createSlice({
  name: '@@users',
  initialState: valueUser,
  reducers: {
    addUser: {
      reducer: (state, action) => {
        state.push(action.payload)
      },
      // @ts-ignore
      prepare: (user) => ({
        payload: {
          surname: user.surname,
          first_name: user.first_name,
          patronymic: user.patronymic,
          profession: user.profession,
          id: nanoid()
        }
      })
    },
    removeUser: (state, action) => {
      state.push(action.payload)
    },
    statusUserChecked: (state, action) => {
      const id = action.payload;
      const user = state.find((user) => user.id === id);
      // @ts-ignore
      user.status = !user?.status;
       // @ts-ignore
      console.log (user.status)
    },
  },
})


export const { addUser, removeUser, statusUserChecked} = userSlice.actions

export default userSlice.reducer
