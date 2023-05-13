import Styled from "styled-components";
const ScInterest = Styled.section`
.interest-box{
    display: flex;
    .interest-paragraphs{
        margin: 0px 75px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .interest-transition-enter {
            opacity: 0;
          }
          .interest-transition-enter-active {
            opacity: 1;
            transition: opacity 200ms;
          }
          .interest-transition-exit {
            opacity: 1;
          }
          .interest-transition-exit-active {
            opacity: 0;
            transition: opacity 200ms;
          }
    }
    .interest-illusturation{
        .my-node-enter {
            opacity: 0;
          }
          .my-node-enter-active {
            opacity: 1;
            transition: opacity 200ms;
          }
          .my-node-exit {
            opacity: 1;
          }
          .my-node-exit-active {
            opacity: 0;
            transition: opacity 200ms;
          }
        img{width: 100%;}
    }
}
`
export default ScInterest;