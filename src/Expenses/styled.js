import styled from 'styled-components';

export const StyledExpenses = styled.div`
    width: calc(100% - 4em);
    margin-inline: auto;
`

export const StyledDateList = styled.ul`
    list-style: none;
    padding-inline: 10px;    
`

export const StyledDayList = styled.ul`
    list-style: none;
`

export const StyledDayListItem = styled.li`
    padding-block: 6px;
    border-bottom: 1px solid #000;
    margin-block-end: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`

export const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-grow: 1;
`

export const StyledItemDesc = styled.span`
    display: flex;
    flex-direction: column;
    flex: 1;
`

export const StyledItem = styled.span`
    font-size: 18px;
    color: #0c0c0c;
`

export const StyledCategoryItem = styled(StyledItem)`
    text-transform: capitalize;
    margin-block-end: 5px;
`

export const StyledCommentsItem = styled(StyledItem)`
    font-size: 16px;
    color: #7e7f7f;
`

export const StyledValueItem = styled(StyledItem)`
    margin-inline-start: auto;
`

export const StyledButtonWrapper = styled.div`
`

export const StyledButton = styled.button`
    border: none;
    border-radius: 5px;
    padding: 5px 6px 1px 7px;
    cursor: pointer;
`

export const StyledDeleteButton = styled(StyledButton)`
    background: #f32424;
`

export const StyledEditButton = styled(StyledButton)`
    background: #24f34a;
    margin-inline-end: 5px;
`