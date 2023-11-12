import { nanoid } from "nanoid";
import EditForm from "../EditForm";
import { useState } from "react";

const Expenses = ({ expList, deleteExpense, editExpense}) => {

    const allDatesList = expList.map(exp => ({ id: nanoid(), date: exp.date }))

    const datesList = [...new Map(allDatesList.map((m) => [m.date, m])).values()];

    // console.log(datesList);

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
                                        {exp.category}{" "}
                                        <button onClick={() => deleteExpense(exp.id)} >Usuń</button>
                                        <button onClick={() => editExpense(exp.id)}>Edit</button>
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