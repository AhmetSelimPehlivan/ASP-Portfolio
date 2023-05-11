import Styled from "styled-components";
const ScFooter = Styled.div`
width: 80%;
.footer {
    padding: 24px 0 24px 250px; }
    .footer [class*="container-"] {
      padding: 0; }
    .footer .nav {
      display: inline-block;
      float: left;
      margin-bottom: 0;
      padding-left: 30px;
      list-style: none; }
    .footer .nav-item {
      display: inline-block; }
      .footer .nav-item:first-child a {
        padding-left: 0; }
    .footer .nav-link {
      color: #ffffff;
      padding: 0 0.5rem;
      font-size: 0.75rem;
      text-transform: uppercase;
      text-decoration: none; }
      .footer .nav-link:hover {
        text-decoration: none; }
    .footer .copyright {
      font-size: 0.75rem;
      line-height: 1.8;
      color: #ffffff; }
    .footer:after {
      display: table;
      clear: both;
      content: " "; }
 
      .white-content .full-page .footer ul li a {
        color: #1d253b; }
      .white-content .full-page .footer .copyright {
        color: #1d253b; }
        .white-content .footer ul li a {
            color: #1d253b; }
          .white-content .footer .copyright {
            color: #1d253b; }
  @media screen and (max-width: 991px) {
    .footer {
      padding-left: 0px; }
      .footer .copyright {
        text-align: right;
        margin-right: 15px; } }
  
  @media screen and (min-width: 992px) {
    .footer .copyright {
      float: right;
      padding-right: 30px; } }
  
  @media screen and (max-width: 768px) {
    .footer nav {
      display: block;
      margin-bottom: 5px;
      float: none; } }
  
  @media screen and (max-width: 576px) {
    .footer {
      text-align: center; }
      .footer .copyright {
        text-align: center; }
      .footer .nav {
        float: none;
        padding-left: 0; } }
`;
export default ScFooter;