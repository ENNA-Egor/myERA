import React, {useState} from 'react'
import { UserData} from './User'

const userValue = {
    users:[
        {id: 1, surname:'Иванов', first_name: 'Владимир', patronymic: 'Петрович'},
        {id: 2, surname:'Петров', first_name: 'Иван', patronymic: 'Сидорович'},
        {id: 3, surname:'Сидоров', first_name: 'Юрий', patronymic: 'Викторович'},
        {id: 4, surname:'Бобров', first_name: 'Семён', patronymic: 'Николаевич'},
        {id: 5, surname:'Мишин', first_name: 'Василий', patronymic: 'Олегович'},
        {id: 6, surname:'Володин', first_name: 'Сидор', patronymic: 'Ефимович'}
    ]
}

export const MainPanel =() => {

    const [user, setUser] = useState(userValue);

    return (
        <div>
            <UserData/>
        </div>
    )
}

