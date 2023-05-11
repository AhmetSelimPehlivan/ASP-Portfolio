import Styled from "styled-components";
const ScNavbar = Styled.div`
    width: 100%;
    height: 60px;
    border-style: solid;
    border-color: #121212;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .SocialMedia, .Works{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px 0px;

      img{
        width: 30px;
        height: 30px;
      }
    }
    ul{
        display: flex;
        img{
            margin-left: 20px;
            font-size: 15px;
            cursor: pointer;
        }
    }
`;
export default ScNavbar;