import styled, {css, keyframes} from 'styled-components';

export const StyledMenu = styled.ul`
        margin-block-start: 0px;
        padding: 0 12px;
        list-style: none;
        font-size: 18px;
`

export const StyledMenuItem = styled.li`
    margin-block-end: 8px;
    padding: 5px;
    transition: all 0.4s linear;

    &:has(a:hover){
        background: ${({theme}) => theme.colors.activeMenuItemBg};
    }

    a{
        color: ${({theme}) => theme.colors.lightFont};
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
    }

    svg{
        height: 22px;
        width: 22px;
        flex-shrink: 0;
    }

    ${({collapseMenu}) => collapseMenu && css`
        padding: 2px;
        /* transition: 0.8s ease-in; */

        /* a{
            justify-content: center;
        } */
    `}

    @media(max-width: ${({theme}) => theme.breakpoints.tablet}){
        padding: 2px;

        a{
            justify-content: center;
        }
    }
`
const hideItem = keyframes`
    0% {max-width: 187px;}
    100% {max-width: 0px;}
`

const showItem = keyframes`
    0% {max-width: 0px;}
    100% {max-width: 187px;}
`

export const StyledMenuItemName = styled.span`
    display: block;
    white-space: nowrap;
    width: 100%;
    max-width: 187px;

    ${({collapseMenu}) => collapseMenu && css`
        /* max-width: 0; */
        /* display: none; */
        animation: ${hideItem} 0.7s linear forwards;
    `}

    ${({collapseMenu, closeItem}) => !collapseMenu && closeItem && css`
        animation: ${showItem} 0.75s linear forwards;
    `}

    ${({collapseMenu, closeItem}) =>  collapseMenu && closeItem && css`
            display: none;
        `}

    @media(max-width: ${({theme}) => theme.breakpoints.tablet}){
        display: none;
    }
`