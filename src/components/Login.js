import React from "react";
import styled from "styled-components";
import { TbArticle } from "react-icons/tb";
import { IoPeople } from "react-icons/io5";
import { IoCalendarClear } from "react-icons/io5";
import { MdOutlineWork } from "react-icons/md";
import { IoMdLaptop } from "react-icons/io";
const Login = () => {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="" />
        </a>
        <div className=" hidden sm:flex   ml-[300px] ">
          <div className="mx-3 cursor-pointer ">
            <TbArticle className=" w-6 h-6 " />
            <p className=" text-xs text-center">Article</p>
          </div>
          <div className=" mx-3 cursor-pointer">
            <IoPeople className=" w-6 h-6" />
            <p className=" text-xs text-center">People</p>
          </div>
          <div className=" mx-3 cursor-pointer">
            <IoCalendarClear className=" w-6 h-6" />
            <p className=" text-xs text-center">Learning</p>
          </div>
          <div className=" mx-3 cursor-pointer">
            <MdOutlineWork className=" w-6 h-6" />
            <p className=" text-xs text-center">Job</p>
          </div>
          <div className=" mx-3 cursor-pointer">
            <IoMdLaptop className=" w-6 h-6" />
            <p className=" text-xs text-center">Get the app</p>
          </div>
        </div>

        <div>
          <Join> Join now</Join>

          <SignIn>Sign in</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Discover what your network can do for you</h1>
        </Hero>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding: 0;
`;
const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;
  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;
const Join = styled.a`
  font-size: 15px;
  padding: 10px 12px;
  border-radius: 23px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 550;
  margin-right: 12px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;
const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 500;
  line-height: 40px;
  padding: 10px 24px;

  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    cursor: pointer;
    text-decoration: none;
  }
`;

const Section = styled.section`
  display: flex;
  align-content: start;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
  }
`;
export default Login;
