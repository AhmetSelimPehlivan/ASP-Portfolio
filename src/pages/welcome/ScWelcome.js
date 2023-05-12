import Styled from "styled-components";
const ScWelcome = Styled.div`
    width: 100%;
    padding-top: 60px;
    .main{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
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

                .socialMedia{
                    padding: 50px;
                    a{
                        padding: 7px;
                    }
                }
            }
            .myImage{
                display: flex;
                align-items: center;
                justify-content: center;
                img{width: 480px;}
            }
        }
    }
`
export default ScWelcome;