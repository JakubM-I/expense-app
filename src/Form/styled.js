import styled from 'styled-components';

export const StyledForm = styled.form`
    width: calc(100% - 4em);
    margin-inline: auto;
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
    border-radius: 15px;
    position: relative;
    left: 50%;
    transform: translateX(-50%) ;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }
`