import db from '../db.json';
import Widget from '../src/components/Widget'
import QuizBackground from '../src/components/QuizBackground'
import React from 'react';
import QuizContainer from '../src/components/QuizContainer';
import Button from '../src/components/Button';


function LoadingWidget(){
return(
  <Widget>
    <Widget.Header>
      Carregando...
    </Widget.Header>

    <Widget.Content>
      [Deafio do Loading]
    </Widget.Content>
  </Widget>
);

}

function QuestionWidget({
  question,
   totalQuestions,
  questionIndex,}){
    const questionId = `question__${questionIndex}`;
  return(
    <Widget>
  <Widget.Header>

    <h3>
      Pergunta {questionIndex + 1} de {`${totalQuestions}`}
    </h3>
  </Widget.Header>


<img
  alt="Descrição"
  styled={{
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    
  }}
  src="https://placehold.it/400x150"
  />
<Widget.Content>
<h2>
  {question.title}
</h2>
<p>
  {question.description}
</p>

<form onSubmit={(infosDoEvento) => {
infosDoEvento.preventDefault();
}}
>

{question.alternatives.map((alternative, alternativeIndex) => {
  const alternativeId = `alternative__${alternativeIndex}`;

  return (

    <Widget.Topic
    as="label"
     htmlFor={alternativeId}
     >
      <input
      style={{display: 'none'}}
      id={alternativeId}
      name={questionId}
      type="radio"
      />
             {alternative}

    </Widget.Topic>
  )
})}

 


<Button type="submit">
  Confirmar
       </Button>
       </form>

   </Widget.Content>
</Widget>
  );
}

const screenStates = {
QUIZ: 'QUIZ',
LOADING: 'LOADING',
RESULT: 'RESULT',

};

export default function QuizPage() {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const totalQuestions  = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  React.useEffect(() =>{
    setTimeout(() => {
      setScreenState(screenStates.QUIZ );
    }, 1 * 1000);
  }, []);


  return (

   <QuizBackground backgroundImage={db.bg}>
<QuizContainer>

{screenState === screenStates.QUIZ && (
<QuestionWidget 
question={question}
totalQuestions={totalQuestions}
questionIndex={questionIndex}
  />
)}

{screenState === screenStates.LOADING && <LoadingWidget />}

{screenState === screenStates.RESULT && <div>Você acertou x questões, foda-se</div>}

</QuizContainer>
   </QuizBackground>
  );
}
