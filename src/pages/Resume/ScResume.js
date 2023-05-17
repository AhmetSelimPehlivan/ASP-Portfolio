import Styled from "styled-components";
const ScResume = Styled.section`
 border: 4px solid #525f7f;
 border-radius: 15px;
 text-align: initial;
 margin-top: 40px;

 @media screen and (min-width: 768px) and (max-width: 1200px) {
    margin-top: 15px;
}
 div{
    text-align: initial;
 }
 .education{
    width: 85%;
    display: flex;
    margin: 20px 0px;
    justify-content: space-between;
    @media screen and (max-width: 767px) {
        width: 92%;
    }

    .school{
        .school-title{
            border-bottom: 1px solid #ccc;
            padding-bottom: 5px;
            margin-top: 1rem;
            margin-bottom: 0.3rem;

            @media screen and (min-width: 768px) and (max-width: 1200px) {
                margin-right: 15px;
            }
        }
        .graduation-date{
            font-style: italic;
            font-weight: 200;
        }
    }
    .box-divider{
        border-left: 1px solid #525f7f;
        margin: 0px 0.7rem;
    }
    .language{
        .progress-bullets{
            margin-bottom: 2em;
            
            .progress-title {
                display: block;
                margin-top: 1rem;
            }
            .progress-bar{
                .bullet{
                    width: 1em;
                    height: 1em;
                    border-radius: 50%;
                    border-width: 1px;
                    border-style: solid;
                    border-color: #d14b4a;
                    margin-right: 0.31em;
                    display: inline-block;
                    vertical-align: middle;
                }
                .fill{
                    background-color: #d14b4a;
                }
            }
            .progress-exam p{
                font-style: italic;
                margin-top: 3px;
            }

            @media screen and (max-width: 767px) {
                .progress-bar{
                    .bullet{
                        width: 0.5em;
                        height: 0.5em;
                        border-radius: 50%;
                        border-width: 1px;
                        border-style: solid;
                        border-color: #d14b4a;
                        margin-right: 0.31em;
                        display: inline-block;
                        vertical-align: middle;
                    }
                    .fill{
                        background-color: #d14b4a;
                    }
                }
                .progress-exam p{
                    font-style: italic;
                    margin-top: 3px;
                }
            }
        }
        @media screen and (min-width: 768px) and (max-width: 1200px) {
            margin-left: 10px;
        }
    }
 }
 .experiences{
    width: 85%;
    .jobs{
        margin: 50px 0px;
        margin-left: 170px;
        position: relative;
        &:before {
            top: 10px;
            left: 0;
            bottom: 0;
            width: 1.5px;
            content: '';
            opacity: .5;
            position: absolute;
            background-color: #d14b4a;
        }
        .job-box{
            position: relative;
            padding-left: 20px;
            margin-bottom: 60px;
            &::before {
                content: "";
                top: 9px;
                left: -2px;
                position: absolute;
                width: 6px;
                height: 6px;
                border-radius: 50%;    
                background-color: #fff;
            }
            .job-date {
                margin-right: 20px;
                padding: 8px 6px;
                font-size: .875em;
                text-align: center;
                position: absolute;
                width: 140px;
                right: 100%;
                top: -4px;
                background-color: #d14b4a;
                &:before {
                  display: none;
                }
                &:after {
                    display: inline-block;
                    content: '';
                    position: absolute;
                    right: -25px;
                    bottom: 2px;
                    color: #d14b4a;
                    
                    border-top: 16px solid transparent;
                    border-bottom: 16px solid transparent;
                    border-right: 13px solid transparent;
                    border-left: 13px solid;
                  }
                }

                @media screen and (min-width: 768px) and (max-width: 1200px){

                }
            }

            .company{
                display: flex;
                align-items: center;
                margin: 0.7rem 0rem;
                .company-name{
                    font-size: 16px;
                }
                img{
                    width: 28px;
                    padding: 6px;
                    margin-right: 6px;
                    border-radius: 50%;
                    background-color: #FFFFFF;
                }
            }
        }
    }
 }
 .Skills{
    width: 85%;
    .skills-header{
        margin-bottom: 25px;
    }
    ul{
        display: flex;
        flex-wrap: wrap;
        margin: 1rem 0rem;

        li {
            width: 65px;
            height: 65px;
            float: left;
            font-size: 2em;
            margin: 5px;
            background-color: #d14b4a;
            display: flex;
            justify-content: center;
            align-items: center;    
            border-radius: 50%;
            transition: color 0.2s;
        
            i {
                position: relative;
                z-index: 1;
            }
          
            .inner {
                width: 0px;
                height: 0px;
                background-color: #ffffff;
                display: block;
                position: absolute;
                border-radius: 50%;
                transition: all 0.1s;
              }
          
            &:hover {
                color: #d14b4a;
                background-color: #d14b4a;

                .inner{
                    height: 60px;
                    width: 60px;
                }
            }

            @media screen and (min-width: 768px) and (max-width: 1200px){
                width: 52px;
                height: 52px;
                font-size: 1.2em;
                margin: 3px;

                &:hover {
                    .inner{
                        height: 50px;
                        width: 50px;
                    }
                }
            }
            @media screen and (max-width: 768px){
                width: 32px;
                height: 32px;
                font-size: 0.8em;
                margin: 3px;

                &:hover {
                    .inner{
                        height: 30px;
                        width: 30px;
                    }
                }
            }
        }
    }
 }
`
export default ScResume;