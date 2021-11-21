import React, { useState } from 'react';

import data from './data';
import SingleQuestion from './Question';



function App() {
  // console.log(data);
  const [ questions, setQuestions ] = useState(data);

  const renderQuestions = questions.map((question) => {
		
		return <SingleQuestion key={question.id} {...question} />;
	});

  return (
    <main>
			<div className="container" >
				<h3>Questions and Answers about login</h3>

        <section className="info" >
          {renderQuestions}
        </section>
			</div>
		</main>
  );
}




export default App;


