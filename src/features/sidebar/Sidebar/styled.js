import styled, {css} from 'styled-components';

export const StyledBar = styled.div`
    background: ${({theme}) => theme.colors.mainDarkColor};
    height: auto;
    position: relative;
    margin-block: 15px;
    display: flex;
    flex-direction: column;
`

export const StyledHeader = styled.div`
    width: 100%;
    padding-block-start: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

export const StyledLogo = styled.img`
    width: 100%;
    max-width: 60px;
    padding: 8px;
`

export const StyledHeaderTitle = styled.h1`
        color: ${({theme}) => theme.colors.lightFont};
        text-align: center;
        margin-block-start: 5px;
        transition: all 0.8s ease-in;

        ${({collapseMenu}) => collapseMenu && css`
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