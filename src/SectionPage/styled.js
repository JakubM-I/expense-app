import styled from 'styled-components';

export const StyledSectionPage = styled.main`
    background: ${({theme}) => theme.colors.mainBackground};
    width: calc(100% - 20px);
    margin-inline: auto;
    overflow: hidden;
`