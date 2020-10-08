import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 0 20px;
`;

export const Col = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ColHeader = styled.div`
    font-size: 18px;
    font-weight: 600;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    letter-spacing: 1px;
    padding: 8px 10px;
    background-color: ${props => !!props.selected?'#edf1f2':'white'}
`;