import { createSlice, nanoid} from '@reduxjs/toolkit'


interface valueUser {
  id: string; // nanoid возвращает строку
  idUser: string; // nanoid возвращает строку
  typeWorkswear: string;
  dataWorkswear: [danfWork];
}

interface danfWork {
  date_issue: Date; 
  date_dismissal: Date; 
  prise: number;
  residual_prise: number;
  size: string;
  height: string;
}

const valueUser =  [
    { id: 11, idUser:1, typeWorkswear:'Костюм зимний', dataWorkswear:[
        {date_issue: '', date_dismissal: '', prise: 0, residual_prise: 0, size: '', height: ''}
    ]},
    { id: 12, idUser:2, typeWorkswear:'Костюм зимний', dataWorkswear:[
        {date_issue: '', date_dismissal: '', prise: 0, residual_prise: 0, size: '', height: ''}
    ]},
    { id: 13, idUser:3, typeWorkswear:'Костюм зимний', dataWorkswear:[
        {date_issue: '', date_dismissal: '', prise: 0, residual_prise: 0, size: '', height: ''}
    ] },
    { id: 14, idUser:4, typeWorkswear:'Костюм зимний', dataWorkswear:[
        {date_issue: '', date_dismissal: '', prise: 0, residual_prise: 0, size: '', height: ''}
    ] },
    { id: 15, idUser:5, typeWorkswear:'Костюм зимний', dataWorkswear:[
        {date_issue: '', date_dismissal: '', prise: 0, residual_prise: 0, size: '', height: ''}
    ] },
    { id: 16, idUser:6, typeWorkswear:'Костюм зимний', dataWorkswear:[
        {date_issue: '', date_dismissal: '', prise: 0, residual_prise: 0, size: '', height: ''}
    ] },
    { id: 17, idUser:7, typeWorkswear:'Костюм зимний', dataWorkswear:[
        {date_issue: '', date_dismissal: '', prise: 0, residual_prise: 0, size: '', height: ''}
    ] },
]


const workwearSlice = createSlice({
  name: '@@workswear',
  initialState: valueUser,
  reducers: {
    addWorkWear: (state, action) => {
      state.push(action.payload)
    // {
    //   reducer: (state, action) => {
    //     state.push(action.payload)
    //   },
      // @ts-ignore
    //   prepare: (user) => ({
    //     payload: {
    //       surname: user.surname,
    //       first_name: user.first_name,
    //       patronymic: user.patronymic,
    //       profession: user.profession,
    //       id: nanoid()
    //     }
    //   })
    },
    removeWorkWear: (state, action) => {
      state.push(action.payload)
    },
  },
})


export const { addWorkWear, removeWorkWear} = workwearSlice.actions

export default workwearSlice.reducer