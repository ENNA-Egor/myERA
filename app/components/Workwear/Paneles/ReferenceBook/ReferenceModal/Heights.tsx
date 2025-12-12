import { EditIcon } from '../../../Icons/icons'
// 


export const Heights = () => {

    const buttonClisk = () => {
        console.log('Привет')
    }

    return (
        <div>
            <h3>Рост</h3>
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