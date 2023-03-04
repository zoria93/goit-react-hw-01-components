import styled from 'styled-components';

export const Wrapper = styled.div`
margin-top: 10px;
padding-top: 40px;
background-color: aliceblue;
width: 350px;
height: 400px;
margin-right: auto;
margin-left: auto;
border-radius: 4px 4px 4px 4px;
box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%);
`

export const Photo = styled.img`
width: 120px;
height: 120px;
margin-left: auto;
margin-right: auto;
border-radius: 50%;
background-color: white;
`
export const Name = styled.p`
margin-top: 40px;
margin-bottom: 10px;
    font-weight: 500;
    font-size: 24px;
    line-height: 1.2;
    text-align: center;
    letter-spacing: .03em;
    color: black;
`
export const Tag = styled.p`
margin-bottom: 10px;
font-size: 18px;
    line-height: 1.2;
    text-align: center;
    letter-spacing: .03em;
    color: #757575;
`
export const Location = styled.p`
    margin-bottom: 40px;
    font-size: 18px;
    line-height: 1.2;
    text-align: center;
    letter-spacing: .03em;
    color: #757575;
`

export const List = styled.ul`
display: flex;
/* justify-content: space-evenly; */
border-top: 1px solid #ECECEC;
`
export const Item = styled.li`
    display: grid;
    padding: 31px;
    font-size: 16px;
    line-height: 1.2;
    text-align: center;
    letter-spacing: .03em;
    color: #757575;

   &:not(:last-child) {
    border-right: 1px solid #ECECEC ;
}
`

export const Quantity = styled.span`
font-weight: 600;
    font-size: 20px;
    line-height: 1.2;
    text-align: center;
    letter-spacing: .03em;
    color: black;
`