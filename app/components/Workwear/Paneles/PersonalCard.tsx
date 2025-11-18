

export const PersonalCard =() => {

    return (
        <div className="persCard">
            <h3>Новая карточка</h3>
            <div className="persCardBlok">
                <label className="persCardData">
                    Фамилия
                <input type="Text" className="inputCard" name='surname'></input>
                </label>
            </div>
            <div className="persCardBlok">
                <label className="persCardData">
                Имя
                <input type="Text" className="inputCard" name='first_name'></input>
                </label>
            </div>
            <div className="persCardBlok">
                <label className="persCardData">
                    Отчество
                <input type="Text" className="inputCard" name='patronymic'></input>
                </label>
            </div>
            <div className="persCardBlok">
                <label className="persCardData">
                    Профессия
                <input type="Text" className="inputCard" name='profession'></input>
                </label>
            </div>
            <button className="personInput btnMenu allBtn">Add</button>
        </div>
    )
}