import styled from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 20% 40% 1fr;
    grid-gap: 1rem;
`;

export const ListWrapper = styled.div`
    background: #f5f5f5;
    padding: 1rem;
    height: calc(100vh - 7rem);
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
