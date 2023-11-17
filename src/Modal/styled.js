import styled, {css} from 'styled-components';

export const StyledBackdrop = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    inset: 0;
    visibility: hidden;
    transition: background 0.2s linear;

    ${({isEdit}) => isEdit && css`
        visibility: visible;
        background: #0000005c;
    ` }
`;

