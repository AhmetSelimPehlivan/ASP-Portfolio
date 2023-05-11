import Styled from "styled-components";
const ScWelcome = Styled.div`
    background-color: #121212;
    color: #FFFFFF;
    width: 100%;
    padding-top: 40px;
    .main{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        div{
            width: 100%;
            height: 80%;
        }
        .me{
            width: 80%;
            padding: 20px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            .myImage{
                width: 320px;
            }
        }
        section{
            width: 80%;
            padding: 20px;    
            display: flex;
            text-align: center;
            flex-direction: column;
            align-items: center;
        }
        .interest{
            .example-appear {
                opacity: 0.01;
            }
            .example-appear.example-appear-active {
                opacity: 1;
                transition: opacity .5s ease-in;
            }
        }
        .work{
            .workbox-container{
                display: flex;
                text-align: center;
            }
        }
        .resume{
        }
    }
`
export default ScWelcome;