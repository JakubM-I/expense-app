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
    border-bottom: 1px solid ${({theme}) => theme.colors.mainBlackColor};
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
    position: relative;
    z-index: 1;
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
    color: ${({theme}) => theme.colors.mainBlackColor};
`

export const StyledCategoryItem = styled(StyledItem)`
    text-transform: capitalize;
    margin-block-end: 5px;
`

export const StyledCommentsItem = styled(StyledItem)`
    font-size: 16px;
    color: ${({theme}) => theme.colors.commentsFont};
`

export const StyledValueItem = styled(StyledItem)`
    margin-inline-start: auto;
`

export const StyledMobileEditButton = styled.button`
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    background: transparent;
    border: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
`

export const StyledButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 6px;

    @media(max-width: 549px){
        flex-direction: column;
        align-items: center;
    }
`

export const StyledButton = styled.button`
    border: none;
    border-radius: 5px;
    padding: 5px 6px 1px 7px;
    cursor: pointer;
`

export const StyledEditButton = styled(StyledButton)`
    /* margin-inline-end: 6px; */
    background: ${({theme}) => theme.colors.mainDarkColor};
    border: 1px solid ${({theme}) => theme.colors.mainDarkColor};
    color: ${({theme}) => theme.colors.lightFont};
    transition: all 0.4s ease-in;

    &:hover{
        background: ${({theme}) => theme.colors.buttonApproveBg};
        color: ${({theme}) => theme.colors.mainDarkColor};
    }
`

export const StyledDeleteButton = styled(StyledButton)`
    background: ${({theme}) => theme.colors.lightFont};
    border: 1px solid ${({theme}) => theme.colors.lightFont};
    color: ${({theme}) => theme.colors.mainDarkColor};
    transition: all 0.4s ease-in;

    &:hover{
        background: ${({theme}) => theme.colors.buttonCancelBg};
    }
`