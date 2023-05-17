import Styled from "styled-components";
const ScWelcome = Styled.div`
.main{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .me{
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: calc(100vh - 130px);

        .introduction{
            width: 75%
            display: flex;
            text-align: center;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .myImage{
            display: flex;
            align-items: center;
            justify-content: center;
            max-width: 480px;
            img{
                width: 100%;
            }
        }
        @media screen and (min-width: 768px) and (max-width: 1200px) {
            margin-top: 15px;
            height: calc(100vh - 100px);
            .myImage{
                max-width: 325px;
            }
        }
    }
    .session-divider{
        width: 100%;
        height: 75px;
    }
}
`
export default ScWelcome;