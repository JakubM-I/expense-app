import styled, {css, keyframes} from 'styled-components';

export const StyledBar = styled.div`
    background: ${({theme}) => theme.colors.mainDarkColor};
    height: auto;
    position: relative;
    margin-block: 15px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const StyledHeader = styled.div`
    position: relative;
    width: 100%;
    margin-block-start: 20px;
    height: 52px;
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
    margin-block-end: 10px;
    /* gap: 5px; */

    &::after{
        content: "";
        display: block;
        position: absolute;
        height: 1px;
        background: #fff;
        bottom: -10px;
        left: 0;
        right: 0;
        width: 90%;
        margin-inline: auto;
    }

    /* ${({collapseMenu}) => collapseMenu && css`
        gap: 0;
    `} */
`

export const StyledLogo = styled.img`
    width: 100%;
    max-width: 50px;
    padding-inline: 5px;
    padding-block-end: 10px;
`

const hideTitle = keyframes`
    0% {max-width: 186px; padding-inline: 5px;}
    100% {max-width: 0px; padding-inline: 0;}
`
const showTitle = keyframes`
    0% {max-width: 0px; padding-inline: 0;}
    100% {max-width: 186px; padding-inline: 5px;}
`

export const StyledHeaderTitle = styled.h1`
        color: ${({theme}) => theme.colors.lightFont};
        display: block;
        font-size: 28px;
        text-align: center;
        margin: 0;
        white-space: nowrap;
        padding-inline: 5px;
        /* visibility: visible; */
        /* opacity: 1; */
        width: 100%;
        max-width: 186px;
        /* max-height: auto; */
        /* transition: all 0.8s ease-in; */

        ${({collapseMenu}) => collapseMenu && css`
            /* display: none; */
            /* visibility: hidden; */
            /* opacity: 0; */
            /* max-width: 0; */
            /* padding-inline: 0; */
            /* max-height: 0; */
            /* margin-block-start: 0; */
            animation: ${hideTitle} 0.7s linear forwards;
        `}

        ${({collapseMenu, closeMenu}) => !collapseMenu && closeMenu && css`
            animation: ${showTitle} 0.75s linear forwards;
        `}



        /* ${({closeMenu}) => closeMenu && css`
            display: none;
        `} */

        /* ${({openMenu}) => openMenu && css`
            animation: ${showTitle} 0.8s linear forwards;
        `} */

        /* ${({collapseMenu}) => collapseMenu === false && css`
            animation: ${showTitle} 0.8s linear forwards;
        `} */

        /* ${({closeMenu}) => closeMenu === false && css`
            display: block;
        `} */

        @media(max-width: ${({theme}) => theme.breakpoints.tablet}){
            display: none;
        }
`

export const StyledAddButtonWrapper = styled.div`
    width: 100%;
    padding: 0 12px;
`

export const StyledAddButton = styled.button`
    background: none;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    border: none;
    font-size: 18px;
    color: ${({theme}) => theme.colors.lightFont};
    display: flex;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    padding: 5px;
    width: 100%;

    &:hover{
        background: #6a53ad;
    }

`

export const StyledAddMark = styled.span`
    color: ${({theme}) => theme.colors.mainDarkColor};
    background: ${({theme}) => theme.colors.lightFont};
    border-radius: 50%;
    padding: 2px 6px;
    line-height: 1;
`

export const StyledButtonWrapper = styled.div`
    margin-block-start: auto;
    margin-block-end: 10px;
    display: grid;
    justify-items: right;
    padding-inline-end: 10px;

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}){
        display: none;
    }
`

export const StyledCollapseButton = styled.button`
    color: ${({theme}) => theme.colors.lightFont};
    background: none;
    border: none;
    cursor: pointer;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    
`