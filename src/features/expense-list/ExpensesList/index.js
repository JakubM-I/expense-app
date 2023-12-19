import { nanoid } from "nanoid";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import {
    StyledExpenses,
    StyledDateList,
    StyledDateListItem,
    StyledDayList,
    StyledDayListItem,
    StyledWrapper,
    StyledCategoryItem,
    StyledItemDesc,
    StyledValueItem,
    StyledMobileEditButton,
    StyledButtonWrapper,
    StyledDeleteButton,
    StyledEditButton,
    StyledCommentsItem
} from "./styled";


const ExpensesList = ({ expList, deleteExpense, editSelectItem }) => {

    const allDatesList = expList.map(exp => ({ id: nanoid(), date: exp.date }))

    const datesList = [...new Map(allDatesList.map((m) => [m.date, m])).values()];

    return (
        <StyledExpenses>
            <StyledDateList>
                {[...datesList]
                    .sort((a, b) => new Date(b.date) - new Date(a.date))
                    .map(date => (
                        <StyledDateListItem key={date.id}>
                            <h3 >{date.date}</h3>
                            <StyledDayList>
                                {expList
                                    .filter(exp => exp.date === date.date)
                                    .map(exp => (
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
                                                <StyledValueItem>
                                                    {exp.value} zł
                                                </StyledValueItem>
                                            </StyledWrapper>
                                            {window.innerWidth < 792 ?
                                                (<StyledMobileEditButton 
                                                    onClick={() => editSelectItem(exp.id)}>
                                                </StyledMobileEditButton>) 
                                                : (<StyledButtonWrapper>
                                                    <StyledEditButton
                                                        onClick={() => editSelectItem(exp.id)}>
                                                        <FaRegEdit />
                                                    </StyledEditButton>
                                                    <StyledDeleteButton
                                                        onClick={() => deleteExpense(exp.id)}>
                                                        <FaRegTrashCan />
                                                    </StyledDeleteButton>
                                                </StyledButtonWrapper>)
                                            }

                                        </StyledDayListItem>
                                    ))}
                            </StyledDayList>
                        </StyledDateListItem>
                    ))
                }
            </StyledDateList>
        </StyledExpenses>
    );
};

export default ExpensesList;


