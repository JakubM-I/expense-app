import { useState } from "react";

const CategoryForm = ({isEdit, addCategory, setIsEdit}) => {

    const [categoryName, setCategoryName] = useState();

    const submit = (e) => {
        e.preventDefault();

        if (!categoryName.trim()) {
            return
        }

        addCategory(categoryName.trim());
    }

    return(
        // isEdit &&(
            <div>
            <form onSubmit={submit}>
                <input 
                    value={categoryName}
                    onChange={({target}) => setCategoryName(target.value)}
                />
                <button onClick={() => setIsEdit(false)}>Zapisz</button>
            </form>
        </div>
        // )

    )
};

export default CategoryForm;