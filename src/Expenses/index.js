import { nanoid } from "nanoid";

const Expenses = ({ expList, deleteExpense }) => {
    const allDatesList = expList.map(exp => ({ id: nanoid(), date: exp.date }))

    const datesList = [...new Map(allDatesList.map((m) => [m.date, m])).values()];

    console.log(datesList);

    return (
        <div>
            <h2>Lista wydatków</h2>
            <ul>
                {[...datesList]
                    .sort((a, b) => new Date(b.date) - new Date(a.date))
                    .map(date => (
                        <li key={date.id}>
                            <h3 >{date.date}</h3>
                            <ul>
                                {expList.filter(exp => exp.date === date.date).map(exp => (
                                    <li key={exp.id}>
                                        {exp.name}{" "}
                                        {exp.date}{" "}
                                        {exp.value} zł{" "}
                                        <button onClick={() => deleteExpense(exp.id)} >Usuń</button>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Expenses;