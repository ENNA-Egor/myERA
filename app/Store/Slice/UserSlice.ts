
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
    { id: 1, surname: 'Fert', first_name: 'Voljnd', patronymic: 'Dfrgy', profession:'arb', status: false, dateOut:'',editStatus: false},
    { id: 2, surname: 'Petr', first_name: 'Jhon', patronymic: 'Send' , profession:'Vod', status: false, dateOut:'',editStatus: false},
    { id: 3, surname: 'Singh', first_name: 'Evgen', patronymic: 'Virtor' , profession:'Tract', status: true, dateOut:'2025-12-25',editStatus: true},
    { id: 4, surname: 'Bobr', first_name: 'Dod', patronymic: 'Michail', profession:'Tract', status: false , dateOut:'',editStatus: false},
    { id: 5, surname: 'Bearn', first_name: 'Bob', patronymic: 'Oliver' , profession:'Vod', status: false, dateOut:'',editStatus: false},
    { id: 6, surname: 'Volod', first_name: 'Sem', patronymic: 'Victor' , profession:'arb', status: false, dateOut:'',editStatus: false},
    { id: 7, surname: 'Simson', first_name: 'Michael', patronymic: 'Victor' , profession:'arb', status: true, dateOut:'2025-12-09',editStatus: true},
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
    statusEditIvert: (state, action) => {
      const id = action.payload;
      const user = state.find((user) => user.id === id);
      // @ts-ignore
      user.editStatus = !user.editStatus;
    },
    userDateOut: (state, action) => {
      const dateOut = action.payload.newDateOut;
      const id = action.payload.selectId;
      const user = state.find((user) => user.id === id);
      // @ts-ignore
      user.dateOut = dateOut;
    },
  },
})


export const { addUser, removeUser, statusUserChecked, userDateOut, statusEditIvert} = userSlice.actions

export default userSlice.reducer
