import Styled from "styled-components";
const ScResume = Styled.section`
 background-color: #525f7f;
 border-radius: 15px;
 text-align: initial;
 color: #FFFFFF;
 
    $dark: #20826c;
    $light: #fff;
    $spacing: 40px;
    $border: 2px;

    $hover-size: $spacing * 2 - $border * 2;
    $hover-margin: -38px;

 div{
    text-align: initial;
 }
 .education{
    width: 100%;
    display: flex;
    justify-content: space-evenly;

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
    .jobs{
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
            margin-bottom: 45px;
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
                margin-left: 0;
                margin-right: 22px;
                padding: 8px 6px;
                font-size: 0.875em;
                text-align: center;
                position: absolute;
                width: 160px;
                right: 100%;
                left: auto;
                top: -4px;
                background-color: #d14b4a;
                &:before {
                  display: none;
                }
            
                &:after {
                    content: "";
                    top: 0;
                    left: 100%;
                    width: 0;
                    height: 0;
                    position: absolute;
                    background-color: #d14b4a;
                    border-top: 16px solid transparent!important;
                    border-bottom: 16px solid transparent!important;
                    border-right: 10px solid transparent!important;
                    border-left: 10px solid transparent;
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
    width: 100%;
    ul{
        display: flex;
        li {
            float: left;
            font-size: 2em;
            margin-right: $spacing;
            line-height: $spacing * 2;
            position: relative;
            text-align: center;
            
            div {
              background-color: $light;
              color: $dark;
              display: block;
              height: $spacing * 2;
              position: relative;
              text-decoration: none;
              width: $spacing * 2;
              
              @include border-radius(50%);
              @include transition(color 0.1s);
          
              i {
                position: relative;
                z-index: 1;
              }
          
              .inner {
                background-color: $dark;
                display: block;
                height: 0;
                left: 50%;
                margin: 0;
                position: absolute;
                top: 50%;
                width: 0;
            
                @include border-radius(50%);
                @include transition(all 0.1s);
              }
          
              &:hover {
                color: $light;
          
                .inner {
                  height: $hover-size;
                  margin-left: $hover-margin;
                  margin-top: $hover-margin;
                  width: $hover-size;
                }
              }
        }
    }
 }

`
export default ScResume;