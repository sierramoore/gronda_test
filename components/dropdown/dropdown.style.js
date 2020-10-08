import styled from 'styled-components';

export const DropDownContainer = styled("div")`
    width: 250px;
    margin: 0 15px;
`;
export const DropDownHeader = styled("div")`
  padding: 10px 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  border:  1px solid #e4e8ed;
  font-weight: 500;
  font-size: 16px;
  background: #ffffff;
`;

export const DropDownList = styled("ul")`
  background: #ffffff;
  border: 1px solid #e4e8ed;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
`;
export const ListItem = styled("li")`
  list-style: none;
  font-size: 16px;
  padding: 10px 12px;
  transition: box-shadow 100ms ease-in;

  &:hover {
      box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.15);
      font-weight: 500;
  }
`;