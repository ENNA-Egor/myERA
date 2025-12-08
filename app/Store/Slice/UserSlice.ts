
import { createSlice, nanoid} from '@reduxjs/toolkit'

interface valueUser {
  id: string; // nanoid возвращает строку
  surname: string;
  first_name: string;
  patronymic: string;
  profession: string;
  status: boolean;
  dateOut: Date;
}

const valueUser =  [
    { id: 1, surname: 'Fert', first_name: 'Voljnd', patronymic: 'Dfrgy', profession:'arb', status: false, dateOut:''},
    { id: 2, surname: 'Petr', first_name: 'Jhon', patronymic: 'Send' , profession:'Vod', status: false, dateOut:''},
    { id: 3, surname: 'Singh', first_name: 'Evgen', patronymic: 'Virtor' , profession:'Tract', status: true, dateOut:''},
    { id: 4, surname: 'Bobr', first_name: 'Dod', patronymic: 'Michail', profession:'Tract', status: false , dateOut:''},
    { id: 5, surname: 'Bearn', first_name: 'Bob', patronymic: 'Oliver' , profession:'Vod', status: false, dateOut:''},
    { id: 6, surname: 'Volod', first_name: 'Sem', patronymic: 'Victor' , profession:'arb', status: false, dateOut:''},
    { id: 7, surname: 'Simson', first_name: 'Michael', patronymic: 'Victor' , profession:'arb', status: true, dateOut:''},
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
          status: false,
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
    },
    userDateOut: (state, action) => {
      const id = action.payload;
      const dateOut = action.payload;
      const user = state.find((user) => user.id === id);
      // @ts-ignore
      // user.dateOut = dateOut;
      console.log(id);
      console.log(dateOut);
      console.log(user);
    },
  },
})


export const { addUser, removeUser, statusUserChecked, userDateOut} = userSlice.actions

export default userSlice.reducer
