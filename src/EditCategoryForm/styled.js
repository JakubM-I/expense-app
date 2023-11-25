import styled, {css} from 'styled-components';

export const StyledModal = styled.div`
    background: ${({theme}) => theme.colors.formBackground};
    padding: 20px;
    border-radius: 8px;
    -webkit-box-shadow: 0px 0px 18px -9px rgba(66, 68, 90, 1);
    -moz-box-shadow: 0px 0px 18px -9px rgba(66, 68, 90, 1);
    box-shadow: 0px 0px 18px -9px rgba(66, 68, 90, 1);
    transition: all 0.3s linear;
    opacity: 0;
    scale: 125%;

    ${({isOpen}) => isOpen && css`
        opacity: 1;
        scale: 100%;
    `}
`

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`

export const StyledInput = styled.input`
        padding: 2px;
        background: ${({theme}) => theme.colors.formBackground};
        border: none;
        border-bottom: 1px solid ${({theme}) => theme.colors.mainDarkColor};
`

export const StyledButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

export const StyledButton = styled.button`
    background: ${({theme}) => theme.colors.mainDarkColor};
    border: 1px solid ${({theme}) => theme.colors.mainDarkColor};
    border-radius: 5px;
    padding: 5px 15px;
    color: #fff;
    transition: all 0.4s ease-in;
    cursor: pointer;

    &:hover{
        background:  #eff9e9;  
        /* #f7f7f7 */
        color: #4A3A7A;
    }
    `

export const StyledCancelButton = styled(StyledButton)`
    background: #fff;
    color: ${({theme}) => theme.colors.mainDarkColor};

    &:hover{
        background: #f9e9e9;
    }
`