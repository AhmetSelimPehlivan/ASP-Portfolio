import Styled from "styled-components";
const ScResume = Styled.section`
 background-color: #525f7f;
 border-radius: 15px;
 text-align: initial;
 color: #FFFFFF;
 div{
    text-align: initial;
 }
 .education{
    width: 85%;
    display: flex;
    justify-content: space-between;

    .school{
        .school-title{
            border-bottom: 1px solid #ccc;
            padding-bottom: 5px;
            margin-top: 12px;
        }
        .graduation-date{
            font-style: italic;
            font-weight: 200;
        }
    }
    .divider{
        border-left: 1px solid #12161a;
    }
    .language{
        .progress-bullets{
            margin-bottom: 2em;
            
            .progress-title {
                font-size: 1.2em;
                line-height: 1.2em;
                display: block;
                margin-bottom: 0.5em;
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
            .progress-level{
                margin-left: 5px;
            }
            .progress-exam p{
                font-style: italic;
                margin-top: 3px;
            }
        }
    }
 }
 .experiences{
    width: 85%;
    .jobs{
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
            }

            .company{
                display: flex;
                align-items: center;
                margin-bottom: 6px;
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
    ul{
        display: flex;
        li {
            width: 70px;
            height: 70px;
            float: left;
            font-size: 2em;
            margin-right: 10px;
            background-color: #12161a;
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
                background-color: #525f7f;
                display: block;
                position: absolute;
                border-radius: 50%;
                transition: all 0.1s;
              }
          
            &:hover {
                color: #12161a;
                background-color: #12161a;

                .inner{
                    height: 65px;
                    width: 65px;
                }
            }
        }
    }
 }

`
export default ScResume;