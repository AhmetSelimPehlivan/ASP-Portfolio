import Styled from "styled-components";
const ScInterest = Styled.section`
.interest{
    display: flex;
    justify-content: center;
    align-items: center;

    .interest-paragraph{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;

        .interest-box{
          margin: 25px;
          display: flex;
          justify-content: center;
          align-items: center;
          
          .paragraph{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
          }
          .illusturation{
            height: 250px;
            margin: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            img{
              position: absolute;
            }
          }
        }
    }
    .illusturation{
      width: 100%;
    }
}
`
export default ScInterest;