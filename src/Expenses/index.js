import { nanoid } from "nanoid";
import { FaRegTrashCan } from "react-icons/fa6"
import { FaRegEdit } from "react-icons/fa"
import { StyledDateList, StyledDayList, StyledDayListItem, StyledWrapper } from "./styled";
import EditForm from "../EditForm";
import { useState } from "react";

const Expenses = ({ expList, deleteExpense, editExpense }) => {

    const allDatesList = expList.map(exp => ({ id: nanoid(), date: exp.date }))

    const datesList = [...new Map(allDatesList.map((m) => [m.date, m])).values()];

    // console.log(datesList);

    return (
        <div>
            <h2>Lista wydatków</h2>
            <StyledDateList>
                {[...datesList]
                    .sort((a, b) => new Date(b.date) - new Date(a.date))
                    .map(date => (
                        <li key={date.id}>
                            <h3 >{date.date}</h3>
                            <StyledDayList>
                                {expList.filter(exp => exp.date === date.date).map(exp => (
                                    <StyledDayListItem key={exp.id}>
                                        <StyledWrapper >
                                            {exp.category}{" "}
                                            Uwagi:{" "}
                                            {exp.name}{" "}
                                            {/* {exp.date}{" "} */}
                                            {exp.value} zł{" "}
                                        </StyledWrapper>


                                        <div>
                                            <button onClick={() => editExpense(exp.id)}>
                                                <FaRegEdit />
                                            </button>
                                            <button onClick={() => deleteExpense(exp.id)}>
                                                <FaRegTrashCan />
                                            </button>
                                        </div>
                                    </StyledDayListItem>
                                ))}
                            </StyledDayList>
                        </li>
                    ))
                }
            </StyledDateList>
        </div>
    );
};

export default Expenses;


