import styled from 'styled-components';

export const StyledMain = styled.div`
    background: ${({theme}) => theme.colors.mainBackground};
    width: calc(100% - 20px);
    margin-inline: auto;
    overflow: hidden;
`