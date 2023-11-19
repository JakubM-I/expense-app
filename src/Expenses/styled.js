import styled from 'styled-components';

export const StyledMain = styled.div`
    background: ${({theme}) => theme.colors.mainBackground};
    width: calc(100% - 20px);
    margin-inline: auto;
    overflow: hidden;
`

export const StyledListWrapper = styled.div`
    /* display: grid; */
    /* grid-template-columns: repeat(2, 1fr); */
    position: relative;
    /* overflow: auto;
    height: 100%;  */
`