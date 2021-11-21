import React, { useState } from 'react';

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';



const Question = ({ title, info }) => {
  const [ showInfo, setShowInfo ] = useState(false);


  const renderIcon = () => {
    if (showInfo) {
      return <AiOutlineMinus />;
    } else {
      return <AiOutlinePlus />
    }
  };
  
  const toggleBtn = () => {
		if (!showInfo) {
		  setShowInfo(true);
		} else {
			setShowInfo(false);
		}
	};


  return (
    <article className="question">
      <header>
			  <h4>{title}</h4>
        <button className="btn" onClick={toggleBtn} >{renderIcon()}</button>
      </header>

      {showInfo && <p>{info}</p>}

		</article>
  );
};




export default Question;



