import styled from 'styled-components';

export const StyledForm = styled.form`
    width: calc(100% - 4em);
    margin-inline: auto;
    margin-block-start: 15px;
    margin-block-end: 35px;
    padding-block-end: 15px;
    border-bottom: 1px solid #000;
    display: grid;
    grid-template-columns: 1fr 100px;
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
`

export const StyledButton = styled.button`
    padding: 8px 20px;
    border-radius: 8px;
    border: none;
    background: #24f34a;
    align-self: center;
    justify-self: center;
    /* position: relative;
    left: 50%;
    transform: translateX(-50%); */
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }
`