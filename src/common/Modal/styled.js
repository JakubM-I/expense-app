import styled, {css, keyframes} from 'styled-components';

export const StyledBackdrop = styled.div`
    position: fixed;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    inset: 0;
    visibility: hidden;
    top: 0;
    width: calc(100% - 1em);
    left: 50%;
    transform: translateX(-50%);
    /* transition: background 0.3s linear; */

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}){
        top: calc(${({ theme }) => theme.dimensions.mobileHeaderHeight} + ${({ theme }) => theme.dimensions.mobileHeaderMarginBlock});

    }

    ${({$isOpen}) => $isOpen && css`
        /* visibility: visible; */
        /* background: #0000005c; */
        animation: ${openModal} 0.3s linear forwards;
    ` }
`;

const openModal = keyframes`
    0%{visibility: hidden;}
    100%{visibility: visible; background: #0000005c;}
`

