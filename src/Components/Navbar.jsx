import React from 'react';
import styled from 'styled-components';
import {Search, ShoppingCartOutlined, Menu} from '@material-ui/icons';
import { Badge } from '@material-ui/core';


const Container = styled.div`
    height: 60px;
    background-color: pink;
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;

`;
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;
const SearchContainer = styled.div`
    border: 1px solid black;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
    background-color: pink;
`;
const Center = styled.div`
    flex: 1;
    text-align: center;
    @media screen and (max-width: 768px) {
        margin-left: 10px;
`;
const Logo= styled.h1`
    font-weigth: bold;
    @media screen and (max-width: 768px) {
        margin-left: 10px;
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media screen and (max-width: 768px) {
        display: none;
`;
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer; 
    margin-left: 25px;
` ;
const Bars = styled.span`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1rem;
    cursor: pointer;
    margin-right: 20px;
  }
`;
  


const Navbar = () => {
  
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input/>
                    <Search style={{color: 'black', fontSize: 16}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>NAVBAR</Logo>
            </Center>
            <Right>
                <MenuItem>ABOUT</MenuItem>
                <MenuItem>CONTACT</MenuItem>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined/>
                    </Badge>
                </MenuItem>
            </Right>
            <Bars>
                <Menu/>
            </Bars>
        </Wrapper>
    </Container>
  )
}

export default Navbar
