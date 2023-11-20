import styled from 'styled-components';

export const StyledMenu = styled.ul`
        margin-block-start: 20px;
        padding: 0 10px;
        list-style: none;
        /* margin-inline-start: 10px; */
        font-size: 18px;
`

export const StyledMenuItem = styled.li`
    margin-block-end: 8px;
    padding: 5px;
    transition: all 0.4s ease-in;

    &:has(a:hover){
        background: #6a53ad;
    }

    a{
        color: #fff;
        text-decoration: none;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 6px;
    }
`