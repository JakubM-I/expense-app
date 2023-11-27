import styled from 'styled-components';

export const StyledExpenses = styled.div`
    width: calc(100% - 4em);
    margin-inline: auto;
    height: 100%;
`

export const StyledDateList = styled.ul`
    list-style: none;
    background: ${({theme}) => theme.colors.mainBackground};
    padding-inline: 10px; 
    padding-block-end: 10px;
`

export const StyledDateListItem = styled.li`
    border-bottom: 1px solid #000;
`

export const StyledDayList = styled.ul`
    list-style: none;
    background: ${({theme}) => theme.colors.mainBackground};
`

export const StyledDayListItem = styled.li`
    background: ${({theme}) => theme.colors.formBackground};
    padding: 6px 8px;
    border-radius: 5px;
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

export const StyledEditButton = styled(StyledButton)`
    margin-inline-end: 6px;
    background: ${({theme}) => theme.colors.mainDarkColor};
    border: 1px solid ${({theme}) => theme.colors.mainDarkColor};
    color: #fff;
    transition: all 0.4s ease-in;

    &:hover{
        background: #eff9e9;
        color: #4A3A7A;
    }
`

export const StyledDeleteButton = styled(StyledButton)`
    background: #fff;
    border: 1px solid #fff;
    color: ${({theme}) => theme.colors.mainDarkColor};
    transition: all 0.4s ease-in;

    &:hover{
        background: #f9e9e9;
    }
`