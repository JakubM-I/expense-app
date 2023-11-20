import styled from 'styled-components';

export const StyledCategory = styled.div`
    width: calc(100% - 4em);
    margin-inline: auto;
`

export const StyledCategoryList = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`

export const StyledListItem = styled.li`
    background: ${({theme}) => theme.colors.formBackground};
    padding: 5px 8px;
    flex: 0 1 230px;
    display: flex;
    align-items: center;
    gap: 5px;
`

export const StyledCategoryName = styled.span`
    flex-grow: 1;
`

export const StyledButtonWrapper = styled.div`
    display: flex;
    gap: 5px;
`