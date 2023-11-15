import styled, { css } from 'styled-components';

export const StyledEditModal = styled.div`
    position: absolute;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
    transition: left 0.8s ease-in;
    background: #fff;
    padding: 20px;
    border-radius: 8px;

    /* ${({ isEdit }) => isEdit && css`
        left: 50%;
        transform: translateX(-50%);
    `} */

    /* ${({ isEdit }) => !isEdit && css`
        left: -100px;
        transform: translateX(0);
    `} */
`

export const StyledInputsWrapper = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        margin-block-end: 15px;
`

export const StyledValueWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 5px;
    align-items: center;
    border-bottom: 2px solid #4A3A7A;
    width: fit-content;
    margin-block-end: 15px;
`
export const StyledValueInput = styled.input`
    text-align: center;
    border: none;
    font-size: 23px;
    /* margin-block-end: 10px; */
    width: 130px;
    /* max-width: 180px; */
`
export const StyledValueLabel = styled.span`
     font-size: 22px;
`

export const StyledDetailsWrapper = styled.div`
    margin-block-end: 15px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 20px;
    flex-basis: 100%;
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
    }
`

export const StyledNotesWrapper = styled(StyledWrapper)`
    width: 100%;

    input{
        width: 100%;
        padding: 3px;
        border: none;
        border-bottom: 1px solid #4A3A7A;
    }
`

export const StyledButtonWrapper = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
`

export const StyledButton = styled.button`
    background: #4A3A7A;
    border: 1px solid #4A3A7A;
    border-radius: 5px;
    padding: 5px 15px;
    color: #fff;
    transition: all 0.3s ease-in;
    cursor: pointer;

    &:hover{
        background: #f7f7f7;
        color: #4A3A7A;
    }
    `

export const StyledCancelButton = styled(StyledButton)`
    background: #fff;
    color: #4A3A7A;
`