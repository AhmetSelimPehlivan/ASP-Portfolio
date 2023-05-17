import Styled from "styled-components";
const ScWorks = Styled.section`
  .workbox-container{
      display: flex;
      flex-wrap: wrap;
      text-align: center;

      .webApps, .nativeApp, .games{
          display: flex;
          flex-wrap: wrap;
      }
      h2{
        padding-left: 20px;
      }

    @media screen and (max-width: 768px){
      display: flex;
      justify-content: center;
      margin-top: 50px;

      .webApps, .nativeApp, .games{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      h2{
        padding: 0px;
      }
    }
  }
  
`
export default ScWorks;