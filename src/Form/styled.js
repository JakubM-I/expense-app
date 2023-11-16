import styled from 'styled-components';

export const StyledForm = styled.form`
    width: calc(100% - 4em);
    margin-inline: auto;
    margin-block-start: 15px;
    margin-block-end: 35px;
    padding: 15px 10px;
    /* border-bottom: 1px solid #000; */
    display: grid;
    grid-template-columns: 1fr 100px;
    background: ${({theme}) => theme.colors.formBackround};
    border-radius: 5px;
    -webkit-box-shadow: 0px 0px 18px -9px rgba(66, 68, 90, 1);
    -moz-box-shadow: 0px 0px 18px -9px rgba(66, 68, 90, 1);
    box-shadow: 0px 0px 18px -9px rgba(66, 68, 90, 1);
`
export const StyledFieldset = styled.fieldset`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: none;
`

export const StyledFormItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 0 1 250px;

    label{
        margin-block-end: 3px;
        font-size: 14px;
    }

    input{
        padding: 2px;
        background: ${({theme}) => theme.colors.formBackround};
        border: none;
        border-bottom: 1px solid ${({theme}) => theme.colors.mainDarkColor};
    }

    select{
        padding: 2px;
        background: ${({theme}) => theme.colors.formBackround};
        border: none;
        border-bottom: 1px solid ${({theme}) => theme.colors.mainDarkColor};
    }
`

export const StyledButton = styled.button`
background: ${({theme}) => theme.colors.mainDarkColor};
    border: 1px solid ${({theme}) => theme.colors.mainDarkColor};
    border-radius: 5px;
    padding: 5px 15px;
    color: #fff;
    transition: all 0.4s ease-in;
    align-self: center;
    justify-self: center;
    cursor: pointer;

    &:hover{
        background: #f7f7f7;
        color: #4A3A7A;
    }

`