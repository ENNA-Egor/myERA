import { createSlice, nanoid} from '@reduxjs/toolkit'


// interface valueUser {
//   id: string; // nanoid возвращает строку
//   idUser: string; // nanoid возвращает строку
//   typeWorkswear: string;
//   dataWorkswear: [danfWork];
// }
interface valueUser {
  id: string; // nanoid возвращает строку
  idUser: string; // nanoid возвращает строку
  typeWorkswear: string;
  date_issue: Date; 
  wearing_period: number; 
  prise: number;
  residual_prise: number;
  size: string;
  height: string;
}

// interface danfWork {
//   date_issue: Date; 
//   date_dismissal: Date; 
//   prise: number;
//   residual_prise: number;
//   size: string;
//   height: string;
// }

// const valueUser =  [
//     { id: 11, idUser:1, typeWorkswear:'Костюм зимний', dataWorkswear:[
//         {date_issue: '', date_dismissal: '', prise: 0, residual_prise: 0, size: '', height: ''}
//     ]},
//     { id: 12, idUser:2, typeWorkswear:'Костюм зимний', dataWorkswear:[
//         {date_issue: '', date_dismissal: '', prise: 0, residual_prise: 0, size: '', height: ''}
//     ]},
//     { id: 13, idUser:3, typeWorkswear:'Костюм зимний', dataWorkswear:[
//         {date_issue: '', date_dismissal: '', prise: 0, residual_prise: 0, size: '', height: ''}
//     ] },
//     { id: 14, idUser:4, typeWorkswear:'Костюм зимний', dataWorkswear:[
//         {date_issue: '', date_dismissal: '', prise: 0, residual_prise: 0, size: '', height: ''}
//     ] },
//     { id: 15, idUser:5, typeWorkswear:'Костюм зимний', dataWorkswear:[
//         {date_issue: '', date_dismissal: '', prise: 0, residual_prise: 0, size: '', height: ''}
//     ] },
//     { id: 16, idUser:6, typeWorkswear:'Костюм зимний', dataWorkswear:[
//         {date_issue: '', date_dismissal: '', prise: 0, residual_prise: 0, size: '', height: ''}
//     ] },
//     { id: 17, idUser:7, typeWorkswear:'Костюм зимний', dataWorkswear:[
//         {date_issue: '', date_dismissal: '', prise: 0, residual_prise: 0, size: '', height: ''}
//     ] },
// ]
const valueUser =  [
    { id: 11, idUser:1, typeWorkswear:'Костюм зимний',date_issue: '2025.11.10', wearing_period: 2, prise: 2500, residual_prise: 0, size: '48-50', height: '182-188'},
    { id: 18, idUser:1, typeWorkswear:'Костюм летний',date_issue: '2025.09.10', wearing_period: 1, prise: 1000, residual_prise: 0, size: '48-50', height: '182-188'},
    { id: 12, idUser:2, typeWorkswear:'Костюм летний',date_issue: '2025.11.10', wearing_period: 1, prise: 1000, residual_prise: 0, size: '48-50', height: '182-188'},
    { id: 19, idUser:2, typeWorkswear:'Костюм зимний',date_issue: '2025.11.20', wearing_period: 2, prise: 2500, residual_prise: 0, size: '48-50', height: '182-188'},
    { id: 13, idUser:3, typeWorkswear:'Костюм зимний',date_issue: '2025.11.10', wearing_period: 2, prise: 2500, residual_prise: 0, size: '48-50', height: '182-188' },
    { id: 14, idUser:4, typeWorkswear:'Костюм зимний',date_issue: '2025.11.10', wearing_period: 2, prise: 2500, residual_prise: 0, size: '48-50', height: '182-188' },
    { id: 15, idUser:5, typeWorkswear:'Костюм летний',date_issue: '2025.11.10', wearing_period: 1, prise: 1000, residual_prise: 0, size: '48-50', height: '182-188' },
    { id: 16, idUser:6, typeWorkswear:'Костюм зимний',date_issue: '2025.11.10', wearing_period: 2, prise: 2500, residual_prise: 0, size: '48-50', height: '182-188' },
    { id: 17, idUser:7, typeWorkswear:'Костюм летний',date_issue: '2025.11.10', wearing_period: 1, prise: 1000, residual_prise: 600, size: '48-50', height: '182-188' },
    { id: 20, idUser:7, typeWorkswear:'Костюм зимний',date_issue: '2024.11.14', wearing_period: 2, prise: 2500, residual_prise: 900, size: '48-50', height: '182-188' },
    { id: 21, idUser:7, typeWorkswear:'Плащь дождевик',date_issue: '2025.11.14', wearing_period: 1.5, prise: 1500, residual_prise: 900, size: '48-50', height: '182-188' },
]


const workwearsSlice = createSlice({
  name: '@@workswears',
  initialState: valueUser,
  reducers: {
    addWorkWear: {
      reducer: (state, action) => {
        state.push(action.payload)
      },
     // @ts-ignore
      prepare: (workswear) => ({
        payload: {
          typeWorkswear: workswear.typeWorkswear,
          date_issue: workswear.date_issue,
          wearing_period: workswear.wearing_period,
          prise: workswear.prise,
          residual_prise: 0,
          size: workswear.size,
          height: workswear.height,
          id: nanoid()
        }
      })
    },
    removeWorkWear: (state, action) => {
      state.push(action.payload)
    },
  },
})


export const { addWorkWear, removeWorkWear} = workwearsSlice.actions

export default workwearsSlice.reducer