import React, { useState } from 'react';

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';



const Question = ({ id, title, info }) => {
  
  // const toggleBtn = () ==> {
	// 	if () {
	// 		return <button onClick={} >+</button>;
	// 	} else {
	// 		return <button onClick={} >-</button>;
	// 	}
	// };



  return (
    <div>
			<h4>{title}</h4>
			<p>{info}</p>
		</div>
		
    /*
		  {toggleBtn}
    */
  );
};




export default Question;



