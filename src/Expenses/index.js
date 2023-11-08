const Expenses = ({expList, deleteExpense}) => (
        <div>
            <h2>Lista wydatków</h2>
            <ul>
                {expList.map(exp => (
                    <li key={exp.id}>
                        {exp.name}{" "}
                        {exp.date}{" "}
                        {exp.value}{" "}
                        <button onClick={() => deleteExpense(exp.id)} >Usuń</button>
                    </li>
                ))}
            </ul>
        </div>
    );

export default Expenses;