import styled, { css } from 'styled-components';

export const StyledEditModal = styled.div`
    position: absolute;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
    transition: left 0.8s ease-in;
    background: #fff;
    padding: 20px;
    border-radius: 5px;

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
    margin-block-end: 10px;
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

export const StyledButtonWrapper = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
`