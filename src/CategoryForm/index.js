import { useRef, useState } from "react";

const CategoryForm = ({isEdit, addCategory, setIsEdit}) => {

    const [categoryName, setCategoryName] = useState();
    const inputRef = useRef(null)

    const submit = (e) => {
        e.preventDefault();

        if (!categoryName.trim()) {
            return
        }

        addCategory(categoryName.trim());
        setIsEdit(false)
        setCategoryName("");
    }

    return(
        // isEdit &&(
            <div>
            <form onSubmit={submit}>
                <input 
                    ref={inputRef}
                    value={categoryName}
                    onChange={({target}) => setCategoryName(target.value)}
                />
                <button>Zapisz</button>
                {/* <button onClick={() => setIsEdit(false)}>Anuluj</button> */}
            </form>
        </div>
        // )

    )
};

export default CategoryForm;