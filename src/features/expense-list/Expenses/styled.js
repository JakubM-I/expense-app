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
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    width: fit-content;
    padding: 5px 10px;
    border-radius: 50%;
    z-index: 2;
    position: absolute;
    bottom: 20px;
    right: calc(50% - 50px);
    transform: translateX(-50%);
    background: ${({theme}) => theme.colors.mainDarkColor};
    border: 1px solid ${({theme}) => theme.colors.mainDarkColor};
    box-shadow: 0px -1px 6px 2px #afadad;
    color: ${({theme}) => theme.colors.lightFont};
    line-height: 1;
    font-size: 25px;
    font-weight: 400;
    transition: all 0.4s ease-in;
    cursor: pointer;

    &:hover{
        background: ${({theme}) => theme.colors.buttonApproveBg};
        color: ${({theme}) => theme.colors.mainDarkColor};
    }

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
        top: 0;
    }
`