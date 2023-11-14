import { nanoid } from "nanoid";
import { IconContext } from "react-icons";
import { FaRegTrashCan } from "react-icons/fa6"
import { FaRegEdit } from "react-icons/fa"
import { StyledExpenses, StyledDateList, StyledDayList, StyledDayListItem, StyledWrapper, StyledCategoryItem, StyledItemDesc, StyledValueItem, StyledDeleteButton, StyledEditButton, StyledCommentsItem } from "./styled";


const Expenses = ({ expList, deleteExpense, editExpense }) => {

    const allDatesList = expList.map(exp => ({ id: nanoid(), date: exp.date }))

    const datesList = [...new Map(allDatesList.map((m) => [m.date, m])).values()];

    // console.log(datesList);

    return (
        <StyledExpenses>
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
                                            <StyledItemDesc>
                                                <StyledCategoryItem>
                                                    {exp.category}
                                                </StyledCategoryItem>
                                                <StyledCommentsItem>
                                                    Uwagi:{" "}
                                                    {exp.name}{" "}
                                                </StyledCommentsItem>
                                            </StyledItemDesc>


                                            {/* {exp.date}{" "} */}
                                            <StyledValueItem>
                                                {exp.value} zł
                                            </StyledValueItem>

                                        </StyledWrapper>


                                        <div>
                                            <IconContext.Provider value={{ style: { color: "#fff" } }}>
                                                <StyledEditButton 
                                                    onClick={() => editExpense(exp.id)}>
                                                    <FaRegEdit />
                                                </StyledEditButton>
                                                <StyledDeleteButton 
                                                    onClick={() => deleteExpense(exp.id)}>
                                                    <FaRegTrashCan />
                                                </StyledDeleteButton>
                                            </IconContext.Provider>
                                        </div>
                                    </StyledDayListItem>
                                ))}
                            </StyledDayList>
                        </li>
                    ))
                }
            </StyledDateList>
        </StyledExpenses>
    );
};

export default Expenses;


