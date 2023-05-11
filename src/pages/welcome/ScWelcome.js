import Styled from "styled-components";
const ScWelcome = Styled.div`
    width: 100%;
    padding-top: 60px;
    .main{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        div{
            width: 100%;
            height: 80%;
        }
        header, section{
            width: 80%;
            padding: 20px;

        }
        section{ 
            display: flex;
            text-align: center;
            flex-direction: column;
            align-items: center;
        }
        .me{
            padding: 20px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            
            .introduction{
                text-align: center;
                width: 75%;
                padding: 80px;
            }
            .myImage{
                display: flex;
                align-items: center;
                justify-content: center;
                img{width: 480px;}
            }
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