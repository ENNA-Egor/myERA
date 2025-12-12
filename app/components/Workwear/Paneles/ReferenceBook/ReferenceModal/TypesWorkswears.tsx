import { EditIcon } from '../../../Icons/icons'
// 


export const TypesWorkswears = () => {

    const buttonClisk = () => {
        console.log('Привет')
    }

    return (
        <div>
            <h3>Тип СИЗ</h3>
            <input type="Text"></input>
            <button
                className="allBtn btnMenu editMenu"
                onClick={() => buttonClisk()}
            >
                <EditIcon size={25} fill={'aqua'} />
            </button>
        </div>
    )
}