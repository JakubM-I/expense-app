import { useState, useEffect } from "react";
import { categories } from "../utilities/categories";

const EditForm = ({ editItem, saveEditExpense, isEdit, setIsEdit }) => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("")

    useEffect(() => {
        setName(editItem ? editItem.name : "");
        setDate(editItem ? editItem.date : "");
        setValue(editItem ? editItem.value : "");
        setCategory(editItem ? editItem.category : "");
    }, [editItem])

    const selectId = editItem.id;

    const submit = (e) => {
        e.preventDefault();
        saveEditExpense(selectId, name.trim(), date, value, category)
        setIsEdit(false);
    }

    const cancelEdit = () => {
        setIsEdit(false);
    };

    return (
        isEdit && (
            <form onSubmit={submit} >
            <div>
                <span>
                    <label htmlFor="name">Nazwa</label>
                    <input id="name"
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                    />
                </span>
                <span>
                    <label htmlFor="date">Data</label>
                    <input id="date"
                        type="date"
                        value={date}
                        onChange={({ target }) => setDate(target.value)}
                    />
                </span>
                <span>
                    <label htmlFor="value">Wartość</label>
                    <input id="value"
                        value={value}
                        onChange={({ target }) => setValue(target.value)}
                    />
                </span>
                <span>
                    <label htmlFor="category">Kategoria</label>
                    <select
                        id="category"
                        value={category}
                        onChange={({ target }) => setCategory(target.value)}
                    >
                        {categories.map(cat => (
                            <option key={cat.id} value={cat.name.toLowerCase()}>{cat.name}</option>
                        ))}
                    </select>
                </span>
            </div>
            <button>Zapisz</button>
            <button onClick={() => cancelEdit()}>Anuluj</button>
        </form>
        )
    )
};

export default EditForm;