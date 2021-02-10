import db from '../db.json';
import Widget from '../src/components/Widget'
import QuizBackground from '../src/components/QuizBackground'
import React from 'react';
import QuizContainer from '../src/components/QuizContainer';
import Button from '../src/components/Button';
import AlternativesForm from '../src/components/AlternativeForm';


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

  function ResultsWidget({ results }){

    return(
      <Widget>
        <Widget.Header>
          <h2>Seu resultado:</h2>
        </Widget.Header>
    
        <Widget.Content>
<p>
  Quantidade de acertos: {results.reduce((somatoriaAtual, resultAtual) => {
    const isAcerto = resultAtual === true;
    var teste;

    if (isAcerto){
      return somatoriaAtual + 1;
      
    }
    return somatoriaAtual;
  }, 0
  )} questões
  </p>

<p>
  Seu histórico de acertos: 
</p>
<ul>
            {results.map((result, index) => (
                          <li key={`result_${result}`}>
         Questão {index + 1} 
         {' '}
             - 
              {result === true ?
               'Correta' :
                'Errada'}
              </li>
            ))
  
    }

    </ul>

        </Widget.Content>
      </Widget>
  )}

  
  function MessageWidget(){
 const acertosIndex = 0;
 
    const messages = db.Final[acertosIndex];

    return(
<Widget>
  <Widget.Header>

  {messages.message}

  </Widget.Header>
  <Widget.Content>

<img
alt="Descrição"
style={{
width: '100%',
height: '100%',
objectFit: 'cover',

}}
src={messages.gif}
/>
  </Widget.Content>
</Widget>
    )
  }


function QuestionWidget({
  question,
   totalQuestions,
  questionIndex,
  onSubimit,
  addResults,
}){
    const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
    const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);   
    const questionId = `question__${questionIndex}`;
    const isCorrect = selectedAlternative === question.answer;
    const hasAlternativeSelected = selectedAlternative !== undefined;

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

<AlternativesForm onSubmit={(infosDoEvento) => {
infosDoEvento.preventDefault();
setIsQuestionSubmited(true);
setTimeout(() =>{
  addResults(isCorrect);
  onSubimit();
  setIsQuestionSubmited(false);
  setSelectedAlternative(undefined);
}, 3 * 500 )
}}
>

{question.alternatives.map((alternative, alternativeIndex) => {
  const alternativeId = `alternative__${alternativeIndex}`;
  const AlternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
  const isSelected = selectedAlternative === alternativeIndex;
  return (

    <Widget.Topic
    as="label"
    key={alternativeId}
     htmlFor={alternativeId}
     data-selected={isSelected}
     data-status={isQuestionSubmited && AlternativeStatus}
     >
      <input
      style={{display: 'none'}}
      id={alternativeId}
      name={questionId}
      onChange={() => setSelectedAlternative(alternativeIndex)}
      type="radio"
      />
             {alternative}

    </Widget.Topic>
  )
})}


<Button type="submit" disabled={!hasAlternativeSelected}>
  Confirmar
       </Button>
{isQuestionSubmited && isCorrect}
{isQuestionSubmited && !isCorrect}
</AlternativesForm>
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
  const [results, setResults] = React.useState([]);
  const totalQuestions  = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  function addResults(result){
     setResults([
       ...results,
       result,

     ]);

  }
  
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
addResults={addResults}
  />
)}

{screenState === screenStates.LOADING_QUIZ && <LoadingWidgetQuiz />}
{screenState === screenStates.LOADING_RESULT && <LoadingWidgetResult />}

{screenState === screenStates.RESULT && <ResultsWidget results={results}/>}
{screenState === screenStates.RESULT && <MessageWidget results={results}/>
}

</QuizContainer>
   </QuizBackground>
  );
}