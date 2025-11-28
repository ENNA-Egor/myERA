import { createSlice, nanoid} from '@reduxjs/toolkit'



interface references {
//   id: string; // nanoid возвращает строку
//   idUser: string; // nanoid возвращает строку
//   typeWorkswear: string;
//   date_issue: Date; 
//   wearing_period: number; 
//   prise: number;
//   residual_prise: number;
//   size: string;
//   height: string;
    price: [{id: string, value: number}],
    typesWorkswear: [{id: string, name: string}],
    wearingPeriod : [{id: string, value: number}],
    size : [{id: string, siz: string}],
    height: [{id: string, nameProf: string}],
}


const references = {
    prices :[
        {id: '1', value: 1000},
    ],
    typesWorkswears : [
        {id: '1', name: 'Зимний костюм'}
    ],
    wearingPeriods : [
        {id: '1', period: 2}
    ],
    sizes : [
        {id: '1', size: '44-46'},
        {id: '2', size: '48-50'},
        {id: '3', size: '52-54'},
        {id: '4', size: '56-58'},
        {id: '5', size: '60-62'},
    ],
    heights : [
        {id: '1', value: '170-176'}
    ],
}

const referencesSlice = createSlice({
  name: '@@references',
  initialState: references,
  reducers: {
    addReferences: (state, action) => {
    //   state.push(action.payload)
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
    removeReferences: (state, action) => {
    //   state.push(action.payload)
    },
  },
})


export const { addReferences, removeReferences} = referencesSlice.actions

export default referencesSlice.reducer