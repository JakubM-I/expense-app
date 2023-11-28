import styled from 'styled-components';

export const StyledForm = styled.form`
    width: calc(100% - 4em);
    margin-inline: auto;
    margin-block-start: 15px;
    margin-block-end: 35px;
    padding: 15px 10px;
    display: grid;
    grid-template-columns: 1fr 100px;
    background: ${({theme}) => theme.colors.formBackground};
    border-radius: 5px;
    -webkit-box-shadow: 0px 0px 18px -9px rgba(66, 68, 90, 1);
    -moz-box-shadow: 0px 0px 18px -9px rgba(66, 68, 90, 1);
    box-shadow: 0px 0px 18px -9px rgba(66, 68, 90, 1);
`
export const StyledFieldset = styled.fieldset`
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    border: none;
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
    }

    select{
        padding: 2px;
        background: ${({theme}) => theme.colors.formBackground};
        border: none;
        border-bottom: 1px solid ${({theme}) => theme.colors.mainDarkColor};
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
        text-align: center;
        width: 100px;
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