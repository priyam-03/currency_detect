import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
// import { useGetDetailsQuery } from "../app/services/auth/authService";
import { logout } from "../features/auth/authActions";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircle";
const Landing = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <Container>
      <SlideOne>
        <div className="main">
          <div className="text">
            <div className="product-name">Vision Bridge</div>
            <h2>
              Helping to break down barriers for the visually impaired and
              create new opportunities for independence.
            </h2>
            <div className="btns">
              <div className="btn">Launch Product</div>
              <div className="btn">Family Member</div>
            </div>
          </div>
          <div className="image">
            <img
              src="https://im.indiatimes.in/media/content/2018/Feb/_1518700069.jpg"
              alt=""
            />
          </div>
        </div>
        <DancerDownIcon>
          <ExpandMoreIcon style={{ fontSize: "2rem", fill: "#333" }} />
        </DancerDownIcon>
      </SlideOne>

      <SlideTwo>
        <div className="heading">Feature Highlights</div>
        <p>
          Our primary objective is to empower individuals with visual
          impairments by providing valuable information on how machine learning
          can assist them. We showcase some of the cutting-edge models we have
          developed, including currency recognition and traffic signal
          recognition. These innovative solutions are designed to enhance
          accessibility and independence for visually impaired individuals,
          allowing them to confidently navigate their daily lives. Discover how
          our machine learning models are unlocking new possibilities and
          advancing inclusivity, providing valuable support to those with visual
          impairments
        </p>
        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQriWIJatWOHiJct0kGSnu5g9mkK6fip8nEv2a8SwQ-RkhHdJuwTyvdUYGkiyyT7C6nABc&usqp=CAU" className='mid-img' alt="" /> */}
        {/* <img src="https://d3i71xaburhd42.cloudfront.net/4276c52caffea457787ce4d3e6504832beddc397/1-Figure1-1.png" className='mid-img' alt="" /> */}
        <img
          src="https://w.ndtvimg.com/sites/21/2015/10/30063740/Augmented-Reality-Applications-Helping-the-Blind-to-See.jpg"
          className="mid-img"
          alt=""
        />
        <img
          src="https://d3i71xaburhd42.cloudfront.net/4276c52caffea457787ce4d3e6504832beddc397/1-Figure1-1.png"
          className="mid-img"
          alt=""
        />
        <img
          src="https://pub.mdpi-res.com/sensors/sensors-22-08914/article_deploy/html/images/sensors-22-08914-g005.png?1668756145"
          className="mid-img"
          alt=""
        />
        <img
          src="https://i.ytimg.com/vi/_RpSaj9j-GY/maxresdefault.jpg"
          className="mid-img"
          alt=""
        />

        <div className="sub-heading">1. Currency Recognition</div>
        <p>
          Our primary objective is to empower individuals with visual
          impairments by providing valuable information on how machine learning
          can assist them. We showcase some of the cutting-edge models we have
          developed, including currency recognition and traffic signal
          recognition. These innovative solutions are designed to enhance
          accessibility and independence for visually impaired individuals,
          allowing them to confidently navigate their daily lives. Discover how
          our machine learning models are unlocking new possibilities and
          advancing inclusivity, providing valuable support to those with visual
          impairments
        </p>

        <div className="sub-heading">2. Obstetrical Recognition</div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          iusto, sequi maxime vero voluptatum labore perferendis saepe debitis
          assumenda eligendi voluptate commodi sit nulla! Voluptates labore
          quibusdam eius repellat voluptatibus.
        </p>

        <div className="sub-heading">3. Traffic Signal Recognition</div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          dolores ad nesciunt quia expedita inventore omnis, aspernatur cumque
          ab laborum corrupti vel eum dicta at molestias animi maxime soluta
          repellat?
        </p>
      </SlideTwo>
    </Container>
  );
};

export default Landing;

const Container = styled.div`
  .gradient-text {
    background-color: rgb(243, 236, 120);
    background-image: linear-gradient(92deg, rgb(0, 102, 255), rgb(93, 255, 0));
    background-size: 100%;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const SlideOne = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 500px;

  .main {
    padding-top: 70px;
    height: calc(100vh - 70px);
    min-height: calc(500px - 70px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 60px;

    .text {
      margin-right: 30px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .product-name {
        font-size: 1rem;
        /* background-color: #333; */
        /* color: white; */
        /* padding: 10px 15px; */
        letter-spacing: 0.1rem;
        margin-bottom: 10px;
      }

      h2 {
        font-weight: 400;
        font-size: 1.75rem;
        letter-spacing: 0.1rem;
      }

      .btns {
        display: flex;

        .btn {
          font-size: 0.8rem;
          background-color: #333;
          color: white;
          padding: 10px 15px;
          letter-spacing: 0.1rem;
          margin-top: 60px;
          margin-right: 10px;
          cursor: pointer;
        }
      }
    }

    .image {
      img {
        width: calc(45vw - 30px);
      }
    }
  }
`;

const DancerDownIcon = styled.div`
  position: absolute;
  bottom: 50px;
  width: 98%;
  display: grid;
  place-items: center;
  animation: animateDown infinite 1.5s;

  @keyframes animateDown {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(5px);
    }
    60% {
      transform: translateY(3p);
    }
  }
  @media only screen and (max-width: 600px) {
    bottom: 10px;
  }
`;

const SlideTwo = styled.div`
  padding: 60px;

  .heading {
    font-size: 1.75rem;
    font-weight: 400;
    margin-bottom: 20px;
  }

  .sub-heading {
    font-size: 1.25rem;
    font-weight: 400;
    margin-top: 50px;
    margin-bottom: 15px;
  }

  .image {
  }

  .mid-img {
    height: 180px;
    border: 1px solid black;
    padding: 10px;
    margin-right: 10px;
    margin-top: 20px;
  }

  p {
    font-size: 1.15rem;
    font-weight: 200;
    margin-bottom: 10px;
  }
`;
