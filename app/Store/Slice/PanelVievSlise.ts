import { createSlice} from '@reduxjs/toolkit'


interface statusTabs {
    id: number;
    statusTab: boolean;
}

const statusTabs = [
    {id: 1, statusTab: false},
    {id: 2, statusTab: true},
    {id: 3, statusTab: false},
    {id: 4, statusTab: false},
    {id: 5, statusTab: false},
]



const panelVievSlise = createSlice({
    name: '@@vievstatus',
    initialState: statusTabs,
    reducers : {
        selectStatusViev: (state, action) => {
    },
    },
})


export const { selectStatusViev} = panelVievSlise.actions;

export default panelVievSlise.reducer