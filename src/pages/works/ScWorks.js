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
  }
`
export default ScWorks;