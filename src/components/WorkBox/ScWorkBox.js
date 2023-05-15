import Styled from "styled-components";
const ScWorkBox = Styled.div`
width: 50%;
display: inline-block;
.workbox{
    position: relative;
    border-radius: 0.5rem;
    margin: 20px;

    .workbox-info{
        bottom: 5px;
        width: 100%;
        padding: 1rem 0rem;
        position: absolute;    
        background-color: #1e1e2fb3;
        border-bottom-left-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
        animation: fadeInUp 0.3s ease backwards;
    }
    img{
        max-width: 100%;
        height: auto;
        border-radius: 0.5rem;
    }
    
    @keyframes fadeInUp{
      0%{transform:translate(0px, 50px); opacity: 0;}
      100%{transform:translate(0px, 0px); opacity: 1;}
    }
}
`
export default ScWorkBox;