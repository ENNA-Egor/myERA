
import React, {useState} from "react";
import { useDispatch} from 'react-redux'
import {addUser } from '../../../Store/Slice/UserSlice'


export const PersonalCard =() => {

    const initialNewUsers ={
       surname: '',
       first_name: '',
       patronymic: '', 
       profession: '',
    }
    
    const [user, setUser] = useState(initialNewUsers);
    
    const handleChange = (event) => {
        setUser ({
            ...user,
            [event.target.name]: (event.target.value)
         })
    }

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        dispatch(addUser(user))
    }

    return (
        <div className="persCard">
            <h3>Новая карточка</h3>
            <div className="persCardBlok">
                <label className="persCardData">
                    Фамилия
                <input type="Text" className="inputCard" name='surname' onChange={handleChange}></input>
                </label>
            </div>
            <div className="persCardBlok">
                <label className="persCardData">
                Имя
                <input type="Text" className="inputCard" name='first_name' onChange={handleChange}></input>
                </label>
            </div>
            <div className="persCardBlok">
                <label className="persCardData">
                    Отчество
                <input type="Text" className="inputCard" name='patronymic' onChange={handleChange}></input>
                </label>
            </div>
            <div className="persCardBlok">
                <label className="persCardData">
                    Профессия
                <input type="Text" className="inputCard" name='profession' onChange={handleChange}></input>
                </label>
            </div>
            <button className="personInput btnMenu allBtn"  onClick={handleSubmit}>Add</button>
        </div>
    )
}