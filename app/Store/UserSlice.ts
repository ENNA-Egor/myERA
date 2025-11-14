import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [
    { id: 1, surname: 'Иванов', first_name: 'Владимир', patronymic: 'Петрович' },
    { id: 2, surname: 'Петров', first_name: 'Иван', patronymic: 'Сидорович' },
    { id: 3, surname: 'Сидоров', first_name: 'Юрий', patronymic: 'Викторович' },
    { id: 4, surname: 'Бобров', first_name: 'Семён', patronymic: 'Николаевич' },
    { id: 5, surname: 'Мишин', first_name: 'Василий', patronymic: 'Олегович' },
    { id: 6, surname: 'Володин', first_name: 'Сидор', patronymic: 'Ефимович' },
    { id: 7, surname: 'Сидоров', first_name: 'Михаил', patronymic: 'Викторович' },
]}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value = 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default userSlice.reducer