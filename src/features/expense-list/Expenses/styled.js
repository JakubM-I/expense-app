import styled from 'styled-components';

export const PageHeader = styled.div`
    background: ${({theme}) => theme.colors.mainBackground};
    position: sticky;
    top: 0;
    z-index: 2;

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}){
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
    }
`

export const MobileAddButton = styled.button`
    width: fit-content;
    padding: 10px;
    border-radius: 50%;
    position: absolute;
    bottom: 10px;
    right: 10px;

`

export const ListHeaderWrapper = styled.div`
    background: ${({theme}) => theme.colors.mainBackground};
    position: sticky;
    z-index: 2;
    top: 186px;

    @media(max-width: ${({theme}) => theme.breakpoints.desktop}){
        top: 250px;
    }

    @media(max-width: ${({theme}) => theme.breakpoints.small}){
        top: 357px;
    }

    @media(max-width: ${({theme}) => theme.breakpoints.tablet}){
        top: 60px;
    }
`