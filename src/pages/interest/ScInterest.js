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
            width: 100%;
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
          @media screen and (min-width: 768px) and (max-width: 1200px) {
            margin: 5px;
            .illusturation{
              height: 110px;
              margin: 50px;
            }
          }
          @media screen and (max-width: 768px) {
            .paragraph h3{
              margin: 20px;
            }
            .illusturation{
              display: none;
            }
          }
        }
    }
}
`
export default ScInterest;