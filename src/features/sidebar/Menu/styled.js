import styled from 'styled-components';

export const StyledMenu = styled.ul`
        margin-block-start: 20px;
        padding: 0 12px;
        list-style: none;
        font-size: 18px;
`

export const StyledMenuItem = styled.li`
    margin-block-end: 8px;
    padding: 5px;
    transition: all 0.4s ease-in;

    &:has(a:hover){
        background: ${({theme}) => theme.colors.activeMenuItemBg};
    }

    a{
        color: ${({theme}) => theme.colors.lightFont};
        text-decoration: none;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 8px;
    }

    svg{
        height: 1.3em;
        width: 1.3em;
    }

    @media(max-width: ${({theme}) => theme.breakpoints.tablet}){
        padding: 2px;

        a{
            justify-content: center;
        }
    }
`

export const StyledMenuItemName = styled.span`
    @media(max-width: ${({theme}) => theme.breakpoints.tablet}){
        display: none;
    }
`