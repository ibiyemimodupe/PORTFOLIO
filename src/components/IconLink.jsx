import React from 'react';



export default function IconLink(props) {

   const {link, icon } = props;

   return (

      <a href={link} target={"_blank"} rel="noopener noreferrer">

     {icon} 
     

      </a>

   );

}

