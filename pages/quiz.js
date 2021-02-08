import db from '../db.json';
import Widget from '../src/components/Widget'
import QuizBackground from '../src/components/QuizBackground'
import React from 'react';
import QuizContainer from '../src/components/QuizContainer';
import Button from '../src/components/Button';


function LoadingWidgetQuiz(){
return(
  <Widget>
    <Widget.Header>
      <h2>Carregando o quiz...</h2>
    </Widget.Header>

    <Widget.Content>
<img src="https://media1.giphy.com/media/AyCbZVuOqD5MA/source.gif" 
  style={{
    width: '100%',
    height: '230px',
    objectFit: 'cover',
  }}
/>
    </Widget.Content>
  </Widget>
);

}

function LoadingWidgetResult(){
  return(
    <Widget>
      <Widget.Header>
        <h2>Carregando o resultado...</h2>
      </Widget.Header>
  
      <Widget.Content>
  <img src="https://media3.giphy.com/media/LJMPfwHLEljwY/giphy.gif?cid=ecf05e47w3ljn3aryxa7b8n5jc7xushmxetz4b822njiefs9&rid=giphy.gif" 
    style={{
      width: '100%',
      height: '280px',
      objectFit: 'cover',
    }}
  />
      </Widget.Content>
    </Widget>
  );
  
  }

function QuestionWidget({
  question,
   totalQuestions,
  questionIndex,
  onSubimit,
}){
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
  style={{
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    
  }}
  src={question.image}
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
onSubimit();
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
LOADING_QUIZ: 'LOADING_QUIZ',
LOADING_RESULT: 'LOADING_RESULT',
RESULT: 'RESULT',

};

export default function QuizPage() {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING_QUIZ);
  const totalQuestions  = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  React.useEffect(() =>{
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1750);
  }, []);

  function handleSubmit(){
    const nextQuestion = questionIndex + 1;
    if(nextQuestion < totalQuestions){
      setCurrentQuestion(questionIndex + 1);
    }
    else{
          setScreenState(screenStates.LOADING_RESULT);
          setTimeout(() => {
            setScreenState(screenStates.RESULT);
          }, 1 * 1750);
  }}

  return (

   <QuizBackground backgroundImage={db.bg}>
<QuizContainer>

{screenState === screenStates.QUIZ && (
<QuestionWidget 
question={question}
totalQuestions={totalQuestions}
questionIndex={questionIndex}
onSubimit={handleSubmit}
  />
)}

{screenState === screenStates.LOADING_QUIZ && <LoadingWidgetQuiz />}
{screenState === screenStates.LOADING_RESULT && <LoadingWidgetResult />}

{screenState === screenStates.RESULT &&
 <Widget>
   <Widget.Header>
    <h3>Seu resultado:</h3> 
   </Widget.Header>
  <Widget.Content>
    Você acertou X questões
  </Widget.Content>
   </Widget>}

</QuizContainer>
   </QuizBackground>
  );
}