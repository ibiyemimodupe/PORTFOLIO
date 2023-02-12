import React from "react";
import IconLink from "./IconLink";
import img from "./images/github.png"
import Image from "./images/netlify.png";


export default function Card(props) {
  const { title, description, link, source, pic } = props;
  return (
    <div className="card">
      <img className="card--img" src={pic} alt="img"/>
      <h2 className="card--title">{title}</h2>
      <p className="card--price">{description}</p>
     
        <div className="icon-btn">
          <button >
              <IconLink link={link} icon= {<img src= {img} alt="myself" width="40%" />}/>
          </button>
          {/* <br /> */}
          <button>
              <IconLink link={source}  icon={<img src= {Image} alt="myself" width="40%" />} />
          </button>
        </div>
    
    </div>
  );
}
