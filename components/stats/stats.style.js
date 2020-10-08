import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    align-content: flex-start;
    text-align: left;
    min-width: 300px;
    width: 20vw;
    height: 200px;
    margin: 5px 20px;
    padding: 15px 30px;
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    background-image: linear-gradient(to right top, #f5bb98, #f5ae8f, #f5a189, #f59485, #f38683);

    &:nth-child(2) {
        background-image: linear-gradient(to right top, #91bff3, #81b4f0, #71a9ed, #629dea, #5292e7);
    }
    &:nth-child(3) {
        background-image: linear-gradient(to right top, #93d5d0, #87d5cb, #7cd5c5, #73d5bd, #6bd4b4);
    }
`;

export const Text = styled.p`
    color: #fff;
    text-transform: capitalize;
    font-size: 16px;
    letter-spacing: 1px;
`;

export const Number = styled(Text)`
    font-size: 30px;
    font-weight: 600;
`;
