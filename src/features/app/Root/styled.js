import styled from 'styled-components';

export const StyledExpesneList = styled.div`
    width: min(1300px, calc(100% - 3em));
    margin-inline: auto;
    height: 100%;
    display: grid;
    grid-template-columns: 250px 1fr;
    overflow: hidden;

    @media(max-width: ${({theme}) => theme.breakpoints.tablet}){
        grid-template-columns: 50px 1fr;
    }

    @media(max-width: ${({theme}) => theme.breakpoints.mobile}){
        grid-template-columns: 1fr;
    }
`