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
    <article className="question">
      <header>
			  <h4>{title}</h4>
        <button className="btn" >btn</button>
      </header>
      
			<p>{info}</p>

		</article>
  );
};




export default Question;



