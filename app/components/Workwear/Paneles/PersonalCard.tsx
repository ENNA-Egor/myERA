
import React, {useState} from "react";
// import {RootState} from '../../../Store/store'
import { useDispatch, useSelector} from 'react-redux'
import {addUser } from '../../../Store/Slice/UserSlice'

// const initialNewUsers ={
//    surname: '',
//    first_name: '',
//    patronymic: '', 
//    profession: '',
// }

// const [user, setUser] = useState(initialNewUsers);

// const handleChange = (event) => {
//     console.log (event.target)
//     setUser ({
//         ...user,
//         [event.target.name]: (event.target.value)
//      })

//      console.log (user);
// }

//  console.log (user);

export const PersonalCard =() => {

    const dispatch = useDispatch();
    // const selectUserAll = useSelector((state: RootState) => state.users);

    const handleSubmit = (event) => {
        console.log (event.target)
        // dispatch(addUser(event.target.surname.value, event.target.first_name.value, event.target.patronymic.value, event.target.profession.value,))
        // console.log (selectUserAll)
    }

    return (
        <div className="persCard">
            <h3>Новая карточка</h3>
            <div className="persCardBlok">
                <label className="persCardData">
                    Фамилия
                <input type="Text" className="inputCard" name='surname' /*</label>onChange={handleChange}*/></input>
                </label>
            </div>
            <div className="persCardBlok">
                <label className="persCardData">
                Имя
                <input type="Text" className="inputCard" name='first_name' /*</label>onChange={handleChange}*/></input>
                </label>
            </div>
            <div className="persCardBlok">
                <label className="persCardData">
                    Отчество
                <input type="Text" className="inputCard" name='patronymic' /*</label>onChange={handleChange}*/></input>
                </label>
            </div>
            <div className="persCardBlok">
                <label className="persCardData">
                    Профессия
                <input type="Text" className="inputCard" name='profession' /*</label>onChange={handleChange}*/></input>
                </label>
            </div>
            <button className="personInput btnMenu allBtn"  onClick={handleSubmit}>Add</button>
        </div>
    )
}