import Styled from "styled-components";
const ScNavbar = Styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    border-style: solid;
    border-color: #121212;

    .SocialMedia, .Works{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 0px;

      img{
        width: 40px;
        height: 40px;
      }
    }
    .SocialMedia{
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
        color: white;
        font-size: 15px;
        padding: 10px;
        text-decoration: blink;
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