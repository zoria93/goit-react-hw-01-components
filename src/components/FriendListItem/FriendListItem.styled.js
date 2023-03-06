import styled from 'styled-components';

export const Span = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: ${props => {
    if (props.isOnline) {
      return 'green';
    } else {
      return 'red';
    }
  }};
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 4px 4px 4px 4px;
  box-shadow: rgb(0 0 0 / 12%) 0px 0px 1px 3px, rgb(0 0 0 / 14%) 0px 0px 1px,
    rgb(0 0 0 / 20%) 0px 1px 1px;

  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const FriendsName = styled.p`
  margin-left: 15px;
  font-size: 20px;
  font-weight: 500;
`;
