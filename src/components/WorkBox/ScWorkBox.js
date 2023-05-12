import Styled from "styled-components";
const ScWorkBox = Styled.div`
width: 50%;
.workbox{
    position: relative;
    border-radius: 0.5rem;
    margin: 20px;
    transition: all .2s;
    .workbox-info{
        bottom: 0;
        width: 100%;
        padding: 1rem 0rem;
        position: absolute;    
        background-color: #1e1e2fb3;
        border-bottom-left-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;

    }
    img{
        max-width: 100%;
        height: auto;
        border-radius: 0.5rem;
    }
}
`
export default ScWorkBox;