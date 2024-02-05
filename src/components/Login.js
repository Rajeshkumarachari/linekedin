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
          <img src="/images/login-hero.svg" alt="reading_logo" />
        </Hero>
        <Form>
          <Google>
            <img src="/images/google.svg" alt="google_logo_login" />
            Sign in with Google
          </Google>
        </Form>
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

// const Hero = styled.div`
//   width: 100%;
//   h1 {
//     padding-bottom: 0;
//     width: 50%;
//     font-size: 46px;
//     font-weight: 200;
//     color: #b44627;
//     line-height: 70px;
//     @media (max-width: 768px) {
//       text-align: center;
//       font-size: 20px;
//       width: 100%;
//       line-height: 2;
//     }
//     img {
//       // z-index: -1;
//       width: 700px;
//       height: 670px;
//       position: absolute;
//       // margin-left: 1100px;
//       bottom: -2px;
//       right: -150px;
//       @media (max-width: 768px) {
//         top: 230px;
//         width: initial;
//         position: initial;
//         height: initial;
//       }
//     }
//   }
// `;
const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }

  img {
    /* z-index: -1; */
    width: 700px;
    height: 670px;
    position: absolute;
    bottom: -2px;
    right: -150px;
    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      position: initial;
      height: initial;
    }
  }
`;
const Form = styled.div`
  margin-top: 100px;
  width: 408px;
  @media (max-width: 768px) {
    margin: 20px;
  }
`;

const Google = styled.button`
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
`;

export default Login;
