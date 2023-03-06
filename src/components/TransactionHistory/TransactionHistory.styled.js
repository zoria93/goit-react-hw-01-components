import styled from 'styled-components';

export const Table = styled.table`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  border-collapse: collapse;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 14%) 0px 1px 1px,
    rgb(0 0 0 / 20%) 0px 2px 1px;
`;

export const TableHead = styled.th`
  padding: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 300px;
  color: white;
  background-color: darkblue;
  border: 1px solid gray;
`;

export const TableData = styled.td`
  padding: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  color: dimgrey;
  border: 1px solid gray;
`;

export const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: gainsboro;
  }
  &:nth-child(even) {
    background-color: whitesmoke;
  }
`;
