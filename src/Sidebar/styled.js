import styled from 'styled-components';

export const StyledBar = styled.div`
    background: ${({theme}) => theme.colors.mainDarkColor};
    
    h1{
        color: ${({theme}) => theme.colors.lightFont};
        text-align: center;
    }
    
    ul{
        padding: 0;
        list-style: none;
        margin-inline-start: 10px;
    }

    ul li a{
        color: #fff;

    }

`