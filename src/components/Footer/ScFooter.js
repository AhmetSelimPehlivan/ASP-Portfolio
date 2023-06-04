import Styled from "styled-components";
const ScFooter = Styled.div`
width: 100%;
display: flex;
justify-content: center;

.footer {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 40px 0px;

  a{
    margin: 5px;
    font-size: 15px;
  }
  .nav{
    display: flex;
    justify-content: center;
    align-items: center;

    li{
      margin: 5px;
      font-weight: 200;
    }
  }
}
  
@media screen and (max-width: 768px) {
  .footer {
    margin: 75px 0px;
    a{
      margin: 0px;
      font-size: 14px;
    }
    .nav li{
        margin: 3px;
    }   
}
`;
export default ScFooter;