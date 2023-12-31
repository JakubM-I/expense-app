import styled from 'styled-components';

export const StyledMobileHeader = styled.div`
    background: ${({theme}) => theme.colors.mainDarkColor};
    height: ${({theme}) => theme.dimensions.mobileHeaderHeight};
    position: relative;
    margin-block: ${({theme}) => theme.dimensions.mobileHeaderMarginBlock};
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({theme}) => theme.colors.lightFont};
`

export const StyledLogo = styled.img`
    width: 100%;
    max-width: 60px;
    padding: 8px;
`