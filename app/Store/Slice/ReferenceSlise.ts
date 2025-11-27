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
    profession : [{id: string, nameProf: string}],
    size : [{id: string, nameProf: string}],
}


const references = {
    price :[
        {id: '', value: 0},
    ],
    typesWorkswear : [
        {id: '', name: ''}
    ],
    wearingPeriod : [
        {id: '', period: 0}
    ],
    profession : [
        {id: '', nameProf: ''}
    ],
    size : [
        {id: '1', nameProf: '44-46'},
        {id: '1', nameProf: '48-50'},
        {id: '1', nameProf: '52-54'},
        {id: '1', nameProf: '56-58'},
        {id: '1', nameProf: '60-62'},
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