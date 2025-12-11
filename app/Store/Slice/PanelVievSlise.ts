import { createSlice} from '@reduxjs/toolkit'


interface statusTabs {
    id: number;
    statusTab: boolean;
    nane: string;
}

const statusTabs = [
    {id: 1, statusTab: true, name: 'Полный список'},
    {id: 2, statusTab: false, name: 'Поиск'},
    {id: 3, statusTab: false, name: 'Новая карточка'},
    {id: 4, statusTab: false, name: 'Остатки'},
    {id: 5, statusTab: false, name: 'Приход'},
    {id: 6, statusTab: false, name: 'Справочники'},
]



const panelVievSlise = createSlice({
    name: '@@vievstatus',
    initialState: statusTabs,
    reducers : {
        selectStatusViev: (state, action) => {
            const id = +action.payload;
            state.forEach((item) => {
                item.statusTab = (item.id === id);
            });
        },
    },
})


export const { selectStatusViev} = panelVievSlise.actions;

export default panelVievSlise.reducer