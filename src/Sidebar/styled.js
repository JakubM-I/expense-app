import styled from 'styled-components';

export const StyledBar = styled.div`
    background: ${({theme}) => theme.colors.background};
    
    h1{
        color: ${({theme}) => theme.colors.lightFont};
        text-align: center;
    }
`