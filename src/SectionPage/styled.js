import styled from 'styled-components';

export const StyledSectionPage = styled.main`
    background: ${({theme}) => theme.colors.mainBackground};
    width: calc(100% - 20px);
    margin-inline: auto;
    margin-block: 15px;
    overflow-y: auto;
    height: calc(100svh - 30px);
    display: flex;
    flex-direction: column;
`