import styled from 'styled-components';

export const StyledMobileHeader = styled.div`
    background: ${({theme}) => theme.colors.mainDarkColor};
    height: 80px;
    position: relative;
    margin-block: 15px;
`

export const StyledLogo = styled.img`
    width: 100%;
    max-width: 60px;
    padding: 8px;
`