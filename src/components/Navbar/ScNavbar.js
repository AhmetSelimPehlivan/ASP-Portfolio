import Styled from "styled-components";
const ScNavbar = Styled.div`
    width: 100%;
    padding-top: 50px;
    height: 100px;
    display: flex;
    align-items: center;
    border-style: solid;
    border-color: #121212;

    .Mail, .Works{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 0px;

      img{
        width: 40px;
        height: 40px;
      }

      a{
        color: #FFF;
        transition: all 0.3s;
        position: relative;
        transition: all 0.3s;
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
          border-top-color: rgba(255,255,255,0.5);
          border-bottom-color: rgba(255,255,255,0.5);
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
    }
    .Mail{
        display: flex;
        img{
            margin-left: 20px;
            font-size: 15px;
            cursor: pointer;
        }
        .Gmail{
          color: white;
          font-size: 15px;
          text-decoration: blink;
          display: flex;
          align-items: center;
          justify-content: center;
          img{
            padding-right: 5px;
          }
        }
    }
    .Works{
      a{
        font-size: 15px;
        margin: 10px 25px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      img{
        padding-right: 5px;
      }
    }
`;
export default ScNavbar;