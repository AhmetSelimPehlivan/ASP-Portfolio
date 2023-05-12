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
        .example-appear {
            opacity: 0.01;
        }
        .example-appear.example-appear-active {
            opacity: 1;
            transition: opacity .5s ease-in;
        }
    }
    .interest-illusturation{
        img{width: 100%;}
    }
}
`
export default ScInterest;