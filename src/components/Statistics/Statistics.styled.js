import styled from 'styled-components';

export const Section = styled.section`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  width: 400px;
  max-height: 196px;
  background-color: whitesmoke;
  border-radius: 4px 4px 4px 4px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
`;

export const Title = styled.h1`
  padding-top: 30px;
  margin-bottom: 30px;
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  border-top: 1px solid #ececec;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 26px;
  min-width: 100px;
  font-size: 16px;
  line-height: 1.2;
  text-align: center;
  letter-spacing: 0.03em;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 0px rgb(0 0 0 / 20%);

  &:not(:last-child) {
    border-right: 1px solid #ececec;
  }
`;

export const Percentage = styled.span`
  margin-top: 7px;
  font-size: 22px;
`;
