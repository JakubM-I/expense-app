import styled, {css} from 'styled-components';

export const StyledBar = styled.div`
    background: ${({theme}) => theme.colors.mainDarkColor};
    height: auto;
    position: relative;
    margin-block: 15px;
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