import Styled from "styled-components";
const ScToggleDark = Styled.div`
* {
    margin: 0;
    padding: 0;
  }
  .wrapper {
    position: relative;
    width: 100%;
    height: 50%;
  }
  .wrapper .switch {
    position: absolute;
    left: 50%;
    top: 60%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 25px;
  }
  .wrapper .switch input {
    display: none;
  }
  .wrapper .switch .wave {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 20px;
    width: 60px;
    height: 25px;
    display: none;
  }
  .wrapper .switch .wave:after {
    content: '';
    width: 20px;
    height: 1.5px;
    border-radius: 100%;
    background: #fff;
    position: absolute;
    top: 1.5px;
    left: 40%;
    opacity: 0.4;
  }
  .wrapper .switch .wave:before {
    content: '';
    width: 17.5px;
    height: 1px;
    border-radius: 100%;
    background: #fff;
    position: absolute;
    top: 5px;
    left: 30%;
    opacity: 0.3;
  }
  .wrapper .switch .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #e74a42;
    transition: all 1.4s;
    border-radius: 25px;
    z-index: 50;
    overflow: hidden;
  }
  .wrapper .switch .slider:before,
  .wrapper .switch .slider:after {
    position: absolute;
    content: '';
    height: 20px;
    width: 20px;
    left: 2.5px;
    bottom: 2.5px;
    border-radius: 15px;
    background-color: #fff;
  }
  .wrapper .switch .slider:before {
    transition: 0.4s;
  }
  .wrapper .switch .slider:after {
    transition: 0.5s;
  }
  .wrapper .switch .slider .fish {
    position: absolute;
    left: -20%;
    top: 20%;
    transition: 1.5s all;
  }
  .wrapper .switch .slider .fish .body {
    width: 10px;
    height: 10px;
    background: repeating-linear-gradient(
      -45deg,
      #e79c2a,
      #e79c2a 2.5px,
      #fb7813 2.5px,
      #fb7813 5px
    );
    border-radius: 0 100% 20% 100%;
    transform: rotate(-45deg);
    position: relative;
  }
  .wrapper .switch .slider .fish .eye {
    position: absolute;
    top: 4px;
    left: 7.5px;
    width: 2px;
    height: 2px;
    background-color: #000;
    border-radius: 100%;
  }
  .wrapper .switch .slider .fish .eye:after {
    content: '';
    width: 0.5px;
    height: 0.5px;
    background-color: #fff;
    border-radius: 100%;
    position: absolute;
    top: 25%;
    left: 25%;
  }
  .wrapper .switch .slider .fish .tail {
    width: 2.5px;
    height: 2.5px;
    background: repeating-linear-gradient(
      -45deg,
      #e79c2a,
      #e79c2a 2.5px,
      #fb7813 2.5px,
      #fb7813 5px
    );
    border-radius: 100% 10% 0 10%;
    transform: rotate(-45deg);
    position: absolute;
    left: -4px;
    top: 40%;
  }
  .wrapper .switch .sky {
    position: absolute;
    left: 18%;
    top: -42px;
    width: 25px;
    height: 25px;
    transform: scale(0);
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  .wrapper .switch .sky .sun .outer {
    background: #e77b21;
    width: 14px;
    height: 15px;
    position: absolute;
    top: -5px;
    border-radius: 1.5px;
  }
  .wrapper .switch .sky .sun .outer:before,
  .wrapper .switch .sky .sun .outer:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 15px;
    width: 15px;
    background: #e77b21;
    border-radius: 2.5px;
  }
  .wrapper .switch .sky .sun .outer:before {
    transform: rotate(30deg);
  }
  .wrapper .switch .sky .sun .outer:after {
    transform: rotate(60deg);
  }
  .wrapper .switch .sky .sun .inner {
    position: absolute;
    width: 13px;
    height: 13px;
    border-radius: 100%;
    background-color: #ffd65a;
    top: -4px;
    overflow: hidden;
  }
  .wrapper .switch .sky .sun .inner:before {
    content: '';
    width: 12.5px;
    height: 12.5px;
    border-radius: 100%;
    position: absolute;
    left: 1.5px;
    top: 7.5px;
    background: #ffc631;
  }
  .wrapper .switch .sky .cloud {
    position: absolute;
    filter: url('#cloud');
    z-index: -1;
  }
  .wrapper .switch .sky .cloud .rect {
    width: 25px;
    height: 4px;
    background: #fff;
    border-radius: 50px;
  }
  .wrapper .switch .sky .cloud .circle {
    border-radius: 100%;
    background: #fff;
    position: absolute;
  }
  .wrapper .switch .sky .cloud .circle-lg {
    width: 15px;
    height: 15px;
    top: -75%;
    left: 5%;
  }
  .wrapper .switch .sky .cloud .circle-sm {
    width: 12px;
    height: 12px;
    border-radius: 100%;
    left: 45%;
    top: -60%;
  }
  .wrapper .switch .sky .cloud1 {
    left: -80%;
    top: 10%;
  }
  .wrapper .switch input:checked + .slider {
    background-color: transparent;
  }
  .wrapper .switch input:checked + .slider .fish {
    animation: fishMovement 4s linear infinite;
  }
  .wrapper .switch input:checked ~ .wave {
    background-color: #3398d9;
    display: block;
    filter: url(#wave);
  }
  .wrapper .switch input:checked + .slider:before {
    transform: translateX(35px);
  }
  .wrapper .switch input:checked + .slider:after {
    transform: translateX(35px);
  }
  .wrapper .switch input:checked ~ .boat {
    top: -50%;
    opacity: 1;
    z-index: -1;
    animation: boatMovement 3s linear alternate infinite;
  }
  .wrapper .switch input:checked ~ .sky {
    transform: scale(1);
    opacity: 1;
  }
  .wrapper .switch input:checked ~ .sky .outer {
    animation: rotateSun 5s infinite linear;
  }
  .wrapper .switch input:checked ~ .sky .cloud {
    animation: swingCloud 10s infinite linear;
  }
  .wrapper .switch .boat {
    position: absolute;
    top: 100%;
    left: 25%;
    width: 20px;
    height: 50px;
    transition: 0.6s all cubic-bezier(0.68, -0.6, 0.32, 1.6);
    opacity: 0;
  }
  .wrapper .switch .boat .bottom {
    border-top: 7.5px solid #d64242;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    height: 0;
    width: 20px;
    border-radius: 1px;
  }
  .wrapper .switch .boat .bottom:after {
    content: '';
    width: 25px;
    border-top: 2px solid #000;
    border-left: 1.5px solid transparent;
    border-right: 1.5px solid transparent;
    height: 0;
    position: absolute;
    top: 1.5px;
    left: 1px;
    opacity: 0.2;
  }
  .wrapper .switch .boat .mast {
    position: absolute;
    width: 1.5px;
    height: 17.5px;
    background: #6f4914;
    left: 70%;
    bottom: 100%;
  }
  .wrapper .switch .boat .rectangle-sm {
    width: 0;
    height: 0;
    border-top: 7.5px solid transparent;
    border-left: 5px solid #d6d6d6;
    border-right: 5px solid transparent;
    border-radius: 0 0 0 0;
    position: absolute;
    left: 80%;
    bottom: 110%;
  }
  .wrapper .switch .boat .rectangle-lg {
    width: 0;
    height: 0;
    border-top: 12.5px solid transparent;
    border-left: 5px solid transparent;
    border-right: 7.5px solid #d6d6d6;
    border-radius: 0 0 0 0;
    position: absolute;
    left: 10%;
    bottom: 110%;
  }
  .wrapper a {
    color: #fff;
    padding: 7.5px;
    display: block;
    font-family: sans-serif;
    font-size: 5px;
    position: absolute;
  }
  svg {
    display: none;
  }
  @keyframes fishMovement {
    60% {
      transform: translate(-50%, 50%);
    }
    65% {
      transform: translate(50%, 50%);
    }
    100% {
      transform: translate(100px, 50%);
    }
  }
  @keyframes boatMovement {
    30% {
      transform: rotate(-5deg);
    }
    60% {
      transform: rotate(5deg);
    }
    100% {
      transform: rotate(0);
    }
  }
  @keyframes twinkling {
    30% {
      opacity: 0.4;
    }
    60% {
      transform: scale(1.2);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  @keyframes rotateSun {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes swingCloud {
    50% {
      transform: translateX(50px);
    }
  }
`;
export default ScToggleDark;