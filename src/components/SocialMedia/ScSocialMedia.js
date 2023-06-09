import Styled from "styled-components";
const ScSocialMedia = Styled.div`
padding: 50px 5px;
a{
    padding: 8px;
}

img:hover {
    background: #dddddd;
    border-radius: 50%;
    box-shadow: 0 0 5px #dddddd,
                0 0 10px #dddddd,
                0 0 15px #dddddd,
                0 0 30px #dddddd;
}
@media screen and (max-width: 768px){
    padding: 25px 3px;
    a{padding: 4px;}
}
`
export default ScSocialMedia;