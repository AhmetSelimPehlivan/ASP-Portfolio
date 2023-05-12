import React, { useState } from "react";
import ScWorkBox from "./ScWorkBox";
import {string} from 'prop-types';

function WorkBox({title, paragraph, link, img}) {
  const [showInfo, setShowInfo] = useState(false);

  const handleMouseEnter = () => {
    setShowInfo(true);
  };

  const handleMouseLeave = () => {
    setShowInfo(false);
  };
  return (
    <ScWorkBox>
        <a href={link} target="_blank">
        <div className="workbox" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            {showInfo && (
              <div className="workbox-info">
                <h4>{title}</h4>
                <p>{paragraph}</p>
              </div>
            )}
          <img src={img}></img>
        </div>
        </a>
    </ScWorkBox>
  );
}
WorkBox.propTypes = {
    title: string,
    paragraph: string,
    link: string,
    image: string,
  };
  
WorkBox.defaultProps = {
    title: "Lorem Ipsum",
    paragraph: "Lorem Ipsum Amed Mamet",
    link: "",
    image: "",
};
export default WorkBox;
