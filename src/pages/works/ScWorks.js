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
      &:nth-child(even) {
          animation: left2right 25s linear infinite;
      }
      
      &:nth-child(odd) {
          animation: right2left 25s linear infinite;
      }
  }

    @keyframes left2right {
        0% {
          left: -300px;
        }
        100% {
          left: 0%;
        }
    }
    @keyframes right2left {
          0% {
            right: 100%;
          }
          100% {
            right: 0%;
          }
    }
    

`
export default ScWorks;