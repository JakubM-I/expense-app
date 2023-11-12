import styled from 'styled-components';

export const StyledMain = styled.div`
    background: ${({theme}) => theme.colors.mainBackground};
`

export const StyledListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`