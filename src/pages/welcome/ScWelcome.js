import Styled from "styled-components";
const ScWelcome = Styled.div`
    .main{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        
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