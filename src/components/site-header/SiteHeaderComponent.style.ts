import styled from 'styled-components';

export const Wrapper = styled.div`
    .header {
        display: flex;
        align-items: center;
        color: #fff;
        grid-gap: 1rem;
        justify-content: space-between;
    }
`;

export const Logo = styled.h4`
    font-family: cursive;
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0;
`;

export const ProfileDetailsWrapper = styled.div`
    background: #fff;
    z-index: 99;
    padding: 1rem;
    position: absolute;
    right: 0;
    top: 4rem;
`;
