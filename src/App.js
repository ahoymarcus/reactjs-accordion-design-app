import React, { useState } from 'react';

import data from './data';
import SingleQuestion from './Question';



function App() {
  // console.log(data);

  const renderQuestions = data.map((question) => {
		
		return <SingleQuestion key={question.id} {...question} />;
	});

  return (
    <main>
			<header>
				<h1>Questions</h1>
			</header>
			<div>
				<ul>
					{renderQuestions}
				</ul>
			</div>
		</main>
  );
}




export default App;


