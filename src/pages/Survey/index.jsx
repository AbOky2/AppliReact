import React from 'react'
import { Link, Outlet, useParams } from 'react-router-dom';
import { useState } from 'react';

function Survey() {
  const [question, setQuestion] = useState(0);
  const {questionNumbers} = useParams();
  const questionNumbersInt = parseInt(questionNumbers);
  const suivant =  questionNumbersInt +1; 
  const precedent = questionNumbersInt==1 ? 1 : questionNumbersInt -1;
 
  return (
    <div>
        <h1>Questionnaire 🧮</h1>
        <h2>Question {questionNumbers}</h2>

        <Link to={`/survey/${precedent}`}>Question precedente </Link>
        {questionNumbersInt ==10 ? <Link to='/results'>Result</Link> :
                <Link to={`/survey/${suivant}/`}> Question suivante         </Link>

        }
      
        <Outlet />
    </div>
  )
}

export default Survey