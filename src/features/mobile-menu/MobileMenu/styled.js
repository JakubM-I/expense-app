import styled, {css, keyframes} from 'styled-components';

export const StyledMobileMenu = styled.div`
    transition: all 0.3s linear;
    position: absolute;
    top: calc(${({ theme }) => theme.dimensions.mobileHeaderHeight} + ${({ theme }) => theme.dimensions.mobileHeaderMarginBlock});
    right: 1.5em;
    background: ${({ theme }) => theme.colors.mainDarkColor};
    color: ${({ theme }) => theme.colors.lightFont};
    opacity: 0;
    /* scale: 125%; */

    ${({isOpen}) => isOpen && css`
        /* opacity: 1; */
        /* scale: 100%; */
        animation: ${openMenu} 0.4s linear forwards;
    `}

    ${({isOpen}) => !isOpen && css`
        /* opacity: 1; */
        /* scale: 100%; */
        animation: ${closeMenu} 0.4s linear forwards;
    `}
`

const openMenu = keyframes`
    0% {opacity: 0;}
    100% {opacity: 1;}
`

const closeMenu = keyframes`
    0% {opacity: 1;}
    100% {opacity: 0;}
    
`

export const StyledMobileMenuList = styled.ul`
    list-style: none;
    margin-block: 0px;
    padding: 10px;
`

export const StyledMobileMenuListItem = styled.li`
    margin-block-end: 8px;
    padding: 10px;
    cursor: pointer;
    transition: all 0.4s ease-in;

    &:has(a:hover){
        background: ${({theme}) => theme.colors.activeMenuItemBg};
    }

    a{
        color: ${({ theme }) => theme.colors.lightFont};
        font-size: 18px;
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
   
`