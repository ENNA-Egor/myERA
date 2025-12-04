import { createSlice, nanoid} from '@reduxjs/toolkit'
// import { useSelector} from 'react-redux'
// import {RootState} from  '../../Store/store';
// const idSelectedUser = useSelector((state: RootState) => state.modal.idSelectedUser);



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
  fixStatus: boolean;
}

const now =new Date().toLocaleDateString('en-EN');


// ]
const valueUser =  [
    { id: 11, idUser:1, typeWorkswear:'Костюм зимний',date_issue: '2025.11.10', wearing_period: 2, prise: 2500, residual_prise: 0, size: '48-50', height: '182-188', fixStatus: false},
    { id: 18, idUser:1, typeWorkswear:'Костюм летний',date_issue: '2025.09.10', wearing_period: 1, prise: 1000, residual_prise: 0, size: '48-50', height: '182-188', fixStatus: false},
    { id: 12, idUser:2, typeWorkswear:'Костюм летний',date_issue: '2025.11.10', wearing_period: 1, prise: 1000, residual_prise: 0, size: '48-50', height: '182-188', fixStatus: false},
    { id: 19, idUser:2, typeWorkswear:'Костюм зимний',date_issue: '2025.11.20', wearing_period: 2, prise: 2500, residual_prise: 0, size: '48-50', height: '182-188', fixStatus: false},
    { id: 13, idUser:3, typeWorkswear:'Костюм зимний',date_issue: '2025.11.10', wearing_period: 2, prise: 2500, residual_prise: 0, size: '48-50', height: '182-188', fixStatus: false },
    { id: 14, idUser:4, typeWorkswear:'Костюм зимний',date_issue: '2025.11.10', wearing_period: 2, prise: 2500, residual_prise: 0, size: '48-50', height: '182-188', fixStatus: false },
    { id: 15, idUser:5, typeWorkswear:'Костюм летний',date_issue: '2025.11.10', wearing_period: 1, prise: 1000, residual_prise: 0, size: '48-50', height: '182-188', fixStatus: false },
    { id: 16, idUser:6, typeWorkswear:'Костюм зимний',date_issue: '2025.11.10', wearing_period: 2, prise: 2500, residual_prise: 0, size: '48-50', height: '182-188', fixStatus: false },
    { id: 17, idUser:7, typeWorkswear:'Костюм летний',date_issue: '2025.11.10', wearing_period: 1, prise: 1000, residual_prise: 600, size: '48-50', height: '182-188', fixStatus: false },
    { id: 20, idUser:7, typeWorkswear:'Костюм зимний',date_issue: '2024.11.14', wearing_period: 2, prise: 2500, residual_prise: 900, size: '48-50', height: '182-188', fixStatus: false },
    { id: 21, idUser:7, typeWorkswear:'Плащь дождевик',date_issue: '2025.11.14', wearing_period: 1.5, prise: 1500, residual_prise: 900, size: '48-50', height: '182-188', fixStatus: true },
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
      prepare: (workswear, idSelectedUser) => ({
        payload: {
          idUser: idSelectedUser,
          typeWorkswear: workswear.selectedTypeWorkswear,
          date_issue: now,
          wearing_period: workswear.selectedWearingPeriods,
          prise: workswear.selectedPriceValue,
          residual_prise: 0,
          size: workswear.selectedSize,
          height: workswear.selectedHeight,
          id: nanoid()
        }
      })
    },
    removeWorkWear: (state, action) => {
      state.push(action.payload)
      console.log ('12345')
    },
    workWearStatusFix: (state, action) => {
      state.push(action.payload)
      console.log ('67890')
    },
  },
})


export const { addWorkWear, removeWorkWear, workWearStatusFix } = workwearsSlice.actions

export default workwearsSlice.reducer