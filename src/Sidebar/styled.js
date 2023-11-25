import styled from 'styled-components';

export const StyledBar = styled.div`
    background: ${({theme}) => theme.colors.mainDarkColor};
    height: auto;
    position: relative;
    margin-block: 15px;
    
    h1{
        color: ${({theme}) => theme.colors.lightFont};
        text-align: center;
    }



`