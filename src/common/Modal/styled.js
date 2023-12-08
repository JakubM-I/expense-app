import styled, {css} from 'styled-components';

export const StyledBackdrop = styled.div`
    position: fixed;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    inset: 0;
    visibility: hidden;
    transition: background 0.3s linear;

    ${({isOpen}) => isOpen && css`
        visibility: visible;
        background: #0000005c;
    ` }
`;

