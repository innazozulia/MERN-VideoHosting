import React from "react";
import styled from "styled-components";
import LogoIcon from "../img/logo.png";
import { GrHomeRounded } from "react-icons/gr";

const Container = styled.div`
  flex: 1;
  background-color: #202020;
  height: 100vw;
  color: white;
  font-size: 15px;
  position: sticky;
  top: 0;
`;
const Wrapper = styled.div`
  padding: 18px 26px;
`;
const Logo = styled.div`
  dispaly: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 25px;
`;
const Img = styled.img`
  height: 45px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;
  &:hover {
    // background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  //   border: 0.5px solid ${({ theme }) => theme.soft};
`;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={LogoIcon} />
        </Logo>
        <Item>
          <GrHomeRounded />
          Home
        </Item>
        <Item>Explore</Item>
        <Item>Subscriptions</Item>
        <Hr />
        <Item>Library</Item>
        <Item>History</Item>
        <Hr />
      </Wrapper>
    </Container>
  );
};

export default Menu;
