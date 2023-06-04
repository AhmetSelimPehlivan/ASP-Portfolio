import Styled from "styled-components";
const ScNavbar = Styled.div`
.navbar-list{
  width: 100%;
  padding-top: 50px;
  height: 100px;  
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-style: solid;
  border-color: #121212;
  
  a{
    position: relative;
    transition: all 0.3s;
    margin: 0px 20px;
    
    svg{
      font-size: 25px;
      margin: 10px;
    }
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      opacity: 0;
      transition: all 0.3s;
      border-top-width: 1px;
      border-bottom-width: 1px;
      border-top-style: solid;
      border-bottom-style: solid;
      transform: scale(0.1, 1);
    }
    &:hover {
      letter-spacing: 1.5px;
    }
    &:hover::before {
      opacity: 1;	
      transform: scale(1, 1);	
    }
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      transition: all 0.3s;
    }
    &:hover::after {
      opacity: 0;	
      transform: scale(0.1, 1);
    }
  }
  .Works, .HomePage{
    display: flex;
    align-items: center;
    justify-content: center;

    a{
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .DarkMode{
    position: absolute;
  }
  .nav-icon {
    display: none;
  }
}
.hamburger-list{
  display: none;
}
@media screen and (max-width: 1200px) {
  .navbar-list{
    height: 70px;
    padding-top: 30px;
    a svg{
      margin: 5px;
    }
    .DarkMode{
      margin-left: 30px;
    }
  }
  .Works a, .HomePage a{
    font-size: 0.8rem;
    margin: 0px 5px;
  }
}

@media screen and (max-width: 768px) {
  padding-top: 0px;
  .navbar-list{
    .Works, .HomePage{
      display: none;
    }
    
    .nav-icon {
      right: 0;
      top: 23px;
      display: block;
      position: absolute;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
    }
  }
  .hamburger-list{
    top: 0px;
    width: 40%;
    height: 100%;
    z-index: 100;
    display: flex;
    opacity: ${({isClicked}) => (isClicked ? "1" : "0")};
    left: ${({isClicked}) => (isClicked ? "0%" : "-35%")};
    transition: left 0.8s, opacity 0.8s;
    background: #004e16;
    position: fixed;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    .HomePage{margin-top: 30px;}
    
    p{color: white;}
    a{
      display: flex;
      align-items: center;
      margin: 10px;
      font-size: 15px;
      color: white !important;
      svg{
        width: 25px;
        margin: 8px;
        font-size: 20px;
      }
    }
  }
}
`;
export default ScNavbar;