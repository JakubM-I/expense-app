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
    align-items: center;
    justify-content: flex-start;
    margin-block-end: 10px;
    padding-inline: 2px;

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
`

export const StyledLogo = styled.img`
    width: 100%;
    max-width: 46px;
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
        width: 100%;
        max-width: 186px;
        overflow: hidden;
        white-space: nowrap;

        ${({$collapseMenu}) => $collapseMenu && css`
            animation: ${hideTitle} 0.7s linear forwards;
        `}

        ${({$collapseMenu, $closeMenu}) => !$collapseMenu && $closeMenu && css`
            animation: ${showTitle} 0.75s linear forwards;
        `}

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
    padding: 5px 2px;
    width: 100%;
    transition: all 0.4s linear;

    &:hover{
        background: #6a53ad;
    }
`
const hideItem = keyframes`
    0% {max-width: 187px;}
    100% {max-width: 0px;}
`

export const StyledAddMark = styled.span`
    color: ${({theme}) => theme.colors.lightFont};
    display: flex;
    align-items: center;
    justify-content: center;

    svg{
        height: 22px;
        width: 22px;
        flex-shrink: 0;
    }
`

export const StyledAddName = styled.span`
    width: 100%;
    max-width: 187px;
    text-align: left;
    overflow: hidden;
    white-space: nowrap;

    ${({$collapseMenu}) => $collapseMenu && css`
            animation: ${hideItem} 0.7s linear forwards;
        `}

    ${({$collapseMenu, $closeMenu}) =>  $collapseMenu && $closeMenu && css`
        display: none;
    `}


    @media(max-width: ${({theme}) => theme.breakpoints.tablet}){
        display: none;
    }
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