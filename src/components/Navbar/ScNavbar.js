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
  
  padding-top: 10px;
  .navbar-list{
    top: 50px;
    left: 0px;
    position: absolute;
    flex-direction: column;
    align-items: flex-start;

    .Works, .HomePage{
      display: ${({ isClicked }) => (isClicked ? 'flex' : 'none')};
      flex-direction: column;
      align-items: flex-start;
      a{
        margin: 5px 25px;
      }
      .Gmail p{ display: none; }
    }
    .DarkMode{
      top: 10px;
      align-self: center;
    }
    
    .nav-icon {
      display: block;
      position: absolute;
      top: -40px;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
    }
  }
}
`;
export default ScNavbar;