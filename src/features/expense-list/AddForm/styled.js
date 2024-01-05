import styled from 'styled-components';

export const StyledForm = styled.form`
    width: calc(100% - 4em);
    margin-inline: auto;
    margin-block-start: 15px;
    margin-block-end: 35px;
    padding: 15px 10px;
    z-index: 1;
    display: grid;
    grid-template-columns: 1fr 100px;
    background: ${({theme}) => theme.colors.formBackground};
    border-radius: 5px;
    -webkit-box-shadow: 0px 0px 18px -9px rgba(66, 68, 90, 1);
    -moz-box-shadow: 0px 0px 18px -9px rgba(66, 68, 90, 1);
    box-shadow: 0px 0px 18px -9px rgba(66, 68, 90, 1);

    @media (max-width: 1249px){
        width: fit-content;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}){
        grid-template-columns: 1fr;
    }
`

export const StyledFormHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-block-end: 20px;
`

export const StyledCancelButton = styled.button`
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
`

export const StyledFormTitle = styled.p`
    margin: 0;
    font-weight: 500;
`

export const StyledFieldset = styled.fieldset`
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    border: none;

    @media (max-width: 1249px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        row-gap: 20px;
    }
    
    @media (max-width: 919px){
        grid-template-columns: 1fr;
    }
`

export const StyledFormItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 200px;

    label{
        margin-block-end: 3px;
        font-size: 14px;
    }

    input{
        padding: 2px;
        background: ${({theme}) => theme.colors.formBackground};
        border: none;
        border-bottom: 1px solid ${({theme}) => theme.colors.mainDarkColor};

        @media (max-width: 1249px){
            width: 100%;
        }
    }

    select{
        padding: 2px;
        background: ${({theme}) => theme.colors.formBackground};
        border: none;
        border-bottom: 1px solid ${({theme}) => theme.colors.mainDarkColor};

        @media (max-width: 1249px){
            width: 100%;
        }
    }
`

export const StyledValueWrapper = styled(StyledFormItem)`
    flex-direction: row;
    justify-content: center;
    gap: 5px;
    align-items: center;
    border-bottom: 2px solid ${({theme}) => theme.colors.mainDarkColor};

    input{
        border: none;
        background: ${({theme}) => theme.colors.formBackground};
        text-align: center;
        width: 100px;

        @media (max-width: 1249px){
            width: 100%;
        }
    }

    input::-webkit-inner-spin-button,
    input::-webkit-outer-spin-button{
        -webkit-appearance: none;
        appearance: none;
        -moz-appearance: textfield;
    }
`

export const StyledValueLabel = styled.span`
     font-size: 16px;
`

export const StyledNotesItem = styled(StyledFormItem)`
    max-width: 220px;
    width: 100%;
`

export const StyledNotesWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
    border-bottom: 1px solid ${({theme}) => theme.colors.mainDarkColor};

    input{
        border: none;
        flex-grow: 1;
    }

`

export const StyledLetterCounter = styled.span`
    font-size: 12px;
    color: ${({theme}) => theme.colors.commentsFont};
    align-self: flex-end;
    padding-block-end: 2px;
`

export const StyledButton = styled.button`
background: ${({theme}) => theme.colors.mainDarkColor};
    border: 1px solid ${({theme}) => theme.colors.mainDarkColor};
    border-radius: 5px;
    padding: 5px 15px;
    color: ${({theme}) => theme.colors.lightFont};
    transition: all 0.4s ease-in;
    align-self: center;
    justify-self: center;
    cursor: pointer;

    &:hover{
        background: ${({theme}) => theme.colors.buttonApproveBg};
        color: ${({theme}) => theme.colors.mainDarkColor};
    }

`