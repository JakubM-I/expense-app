import styled from 'styled-components';

export const StyledCategory = styled.div`
    width: calc(100% - 4em);
    margin-inline: auto;
`

export const StyledCategoryList = styled.ul`
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 10px;
`

export const StyledListItem = styled.li`
    background: ${({theme}) => theme.colors.formBackground};
    padding: 5px 8px;
    /* flex: 0 1 230px; */
    display: flex;
    align-items: center;
    gap: 5px;
`

export const StyledFirstListItem = styled(StyledListItem)`
    background: ${({theme}) => theme.colors.mainBackground};
    justify-content: center;
`

export const StyledAddButton = styled.button`
    background: ${({theme}) => theme.colors.mainDarkColor};
    border: 1px solid ${({theme}) => theme.colors.mainDarkColor};
    border-radius: 5px;
    padding: 5px 15px;
    color: ${({theme}) => theme.colors.lightFont};
    transition: all 0.4s ease-in;
    align-self: center;
    justify-self: center;
    cursor: pointer;

    &:hover{
        background: ${({theme}) => theme.colors.buttonApproveBg};
        color: ${({theme}) => theme.colors.mainDarkColor};
    }

`

export const StyledCategoryName = styled.span`
    flex-grow: 1;
    text-overflow: ellipsis;
`

export const StyledButtonWrapper = styled.div`
    display: flex;
    gap: 6px;
`

export const StyledActionButton = styled.button`
    border: none;
    border-radius: 5px;
    padding: 5px 6px 1px 7px;
    cursor: pointer;
`

export const StyledEditButton = styled(StyledActionButton)`
    background: ${({theme}) => theme.colors.mainDarkColor};
    border: 1px solid ${({theme}) => theme.colors.mainDarkColor};
    color: ${({theme}) => theme.colors.lightFont};
    transition: all 0.4s ease-in;

    &:hover{
        background: ${({theme}) => theme.colors.buttonApproveBg};
        color: ${({theme}) => theme.colors.mainDarkColor};
    }
`

export const StyledDeleteButton = styled(StyledActionButton)`
    background: ${({theme}) => theme.colors.lightFont};
    border: 1px solid ${({theme}) => theme.colors.lightFont};
    color: ${({theme}) => theme.colors.mainDarkColor};
    transition: all 0.4s ease-in;

    &:hover{
        background: ${({theme}) => theme.colors.buttonCancelBg};
    }
`