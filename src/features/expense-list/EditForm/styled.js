import styled, { css, keyframes } from 'styled-components';

export const StyledEditModal = styled.div`
    transition: all 0.3s linear;
    background: ${({theme}) => theme.colors.formBackground};
    padding: 20px;
    border-radius: 8px;
    -webkit-box-shadow: 0px 0px 18px -9px rgba(66, 68, 90, 1);
    -moz-box-shadow: 0px 0px 18px -9px rgba(66, 68, 90, 1);
    box-shadow: 0px 0px 18px -9px rgba(66, 68, 90, 1);
    opacity: 0;
    scale: 125%;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}){
        width: calc(100% - 10px);
        max-width: 380px;
    }

    ${({isOpen}) => isOpen && css`
        /* animation: ${openModal} 0.3s linear forwards; */
        opacity: 1;
        scale: 100%;
    `}
`

const openModal = keyframes`
    0% {opacity: 0; scale: 125%;}
    100% {opacity: 1; scale: 100%;}
`

export const StyledFormHeader = styled.div`
    margin-block-start: 0.3em;
    margin-block-end: 1.2em;
    width: 100%;
    position: relative;
    text-align: left;

    @media(max-width: ${({theme}) => theme.breakpoints.tablet}){
        text-align: center;
        }
`

export const StyledBackButton = styled.button`
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    background: none;
    border: none;
    width: 35px;
    line-height: 1;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    cursor: pointer;
`

export const StyledFormTitle = styled.p`
    margin: 0;
    font-weight: 500;
`

export const StyledDeleteButton = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    border-radius: 5px;
    padding: 5px 6px 1px 7px;
    background: ${({theme}) => theme.colors.lightFont};
    border: 1px solid ${({theme}) => theme.colors.lightFont};
    color: ${({theme}) => theme.colors.mainDarkColor};
    transition: all 0.4s ease-in;
    cursor: pointer;

    /* &:hover{
        background: ${({theme}) => theme.colors.buttonCancelBg};
    } */
`

export const StyledFieldset = styled.fieldset`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        margin-block-end: 15px;
        border: none;
`

export const StyledValueWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 5px;
    align-items: center;
    border-bottom: 2px solid ${({theme}) => theme.colors.mainDarkColor};
    width: fit-content;
    margin-block-end: 15px;
    position: relative;

    input::-webkit-inner-spin-button,
    input::-webkit-outer-spin-button{
        -webkit-appearance: none;
        appearance: none;
        -moz-appearance: textfield;
    }
`
export const StyledValueInput = styled.input`
    text-align: center;
    border: none;
    background: ${({theme}) => theme.colors.formBackground};
    font-size: 23px;
    width: 130px;
`
export const StyledValueLabel = styled.span`
     font-size: 22px;
     position: absolute;
     right: 0px;
     padding-inline-end: 4px;
     top: 50%;
     transform: translateY(-50%);
`

export const StyledDetailsWrapper = styled.div`
    margin-block-end: 15px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 20px;
    flex-basis: 100%;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}){
        flex-wrap: wrap;
    }
`

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    label{
        margin-block-end: 3px;
        font-size: 14px;
    }

    input{
        padding: 2px;
        background: ${({theme}) => theme.colors.formBackground};
        border: none;
        border-bottom: 1px solid ${({theme}) => theme.colors.mainDarkColor};
    }

    select{
        padding: 2px;
        background: ${({theme}) => theme.colors.formBackground};
        border: none;
        border-bottom: 1px solid ${({theme}) => theme.colors.mainDarkColor};
    }
`

export const StyledNotesWrapper = styled(StyledWrapper)`
    width: 100%;
`

export const StyledNotesInputWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
    border-bottom: 1px solid ${({theme}) => theme.colors.mainDarkColor};
    position: relative;

    input{
        border: none;
        padding: 3px;
        flex-grow: 1;
    }
`


export const StyledLetterCounter = styled.span`
    font-size: 12px;
    color: ${({theme}) => theme.colors.commentsFont};
    align-self: flex-end;
    padding-inline-end: 2px;
    padding-block-end: 2px;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
`

export const StyledButtonWrapper = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;

    @media(max-width: ${({theme}) => theme.breakpoints.tablet}){
        gap: 0;
    }
`

export const StyledButton = styled.button`
    background: ${({theme}) => theme.colors.mainDarkColor};
    border: 1px solid ${({theme}) => theme.colors.mainDarkColor};
    border-radius: 5px;
    padding: 5px 15px;
    color: ${({theme}) => theme.colors.lightFont};
    transition: all 0.4s ease-in;
    cursor: pointer;

    &:hover{
        background: ${({theme}) => theme.colors.buttonApproveBg};  
        color: ${({theme}) => theme.colors.mainDarkColor};
    }
    `

export const StyledCancelButton = styled(StyledButton)`
    background: ${({theme}) => theme.colors.lightFont};
    color: ${({theme}) => theme.colors.mainDarkColor};

    &:hover{
        background: ${({theme}) => theme.colors.buttonCancelBg};
    }

    @media(max-width: ${({theme}) => theme.breakpoints.tablet}){
        display: none;
    }
`