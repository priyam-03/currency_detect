import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
// import { useGetDetailsQuery } from "../app/services/auth/authService";
import { logout } from "../features/auth/authActions";
import { setCredentials } from "../features/auth/authSlice";
import styled from "styled-components";
// import { profile } from "../features/auth/authActions";
import "../styles/header.css";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  console.log(userInfo);
  // dispatch(profile());
  // automatically authenticate user if token is found
  // const { data, isFetching } = useGetDetailsQuery("userDetails", {
  //   pollingInterval: 900000, // 15mins
  // });

  // useEffect(() => {
  //   if (data) dispatch(setCredentials(data));
  // }, [data, dispatch]);

  return (
    <header>
      <Slide>
        <div className="nav">
          <div className="logo">
            <div className="image">
              <img
                src="https://avatars.githubusercontent.com/u/100950301?s=280&v=4"
                alt=""
              />
            </div>
            <div className="text">
              <div className="product-name">Vision Bridge</div>
              <div className="team-name">Hackathon project by team SUWI</div>
            </div>
          </div>
          <div className="sign-in">
            {userInfo ? (
              <div>
                <button className="button" onClick={() => dispatch(logout())}>
                  Logout
                </button>
                <NavLink to="/user-profile">
                  <img
                    className="profile-image"
                    src={`http://localhost:4000/${userInfo.user.avatar.filePath}`}
                    alt="img"
                  />
                </NavLink>
              </div>
            ) : (
              <div>
                <NavLink className="link-text" to="/login">
                  Login
                </NavLink>
                <NavLink className="link-text" to="/register">
                  Register
                </NavLink>
              </div>
            )}
            {/* <div className="icon">
              <AccountCircleOutlinedIcon
                style={{ fontSize: "2rem", fill: "#333" }}
              />
            </div> */}
          </div>
        </div>
      </Slide>
    </header>
  );
};

export default Header;
const Slide = styled.div`
  .nav {
    height: 70px;
    width: 100%;
    position: relative;
    top: 0px;
    left: 0px;
    z-index: 100;

    display: flex;
    align-items: center;
    padding: 0 60px;
    justify-content: space-between;

    border-bottom: 1px solid rgb(233, 229, 229);
    background-color: rgba(255, 255, 255, 0.83);
    box-shadow: rgba(0, 0, 0, 0.05) 1px 1px 10px 0px;
    backdrop-filter: blur(8px);

    .logo {
      display: flex;
      align-items: center;

      .image {
        height: 50px;
        margin-right: 10px;
        img {
          height: 100%;
        }
      }

      .text {
        .product-name {
          font-size: 1.25rem;
          font-weight: 500;
        }

        .team-name {
          font-size: 0.75rem;
          font-weight: 300;
        }
      }
    }

    .sign-in {
      display: flex;
      flex-direction: row;
      align-items: center;

      .link-text {
        font-size: 0.9rem;
        margin-right: 5px;
        font-weight: 200;
      }

      .icon {
        svg {
          font-size: 3rem;
          height: 2rem;
          fill: blue;
        }
      }
    }
  }
`;
