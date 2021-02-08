import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget'
import QuizBackground from '../src/components/QuizBackground'
import GitHubCorner from '../src/components/GitHubCorner'
import React from 'react'; 
import Head from 'next/head';
import { useRouter } from 'next/router';
import Input from '../src/components/Input';
import QuizContainer from '../src/components/QuizContainer';
import Button from '../src/components/Button';



export default function Home(){
  const router = useRouter();
  const [name,setName] = React.useState('');

return (



  <QuizBackground backgroundImage={db.bg}>
  <QuizContainer>
      <Widget>
      <Widget.Header>
        <h1>{db.title}</h1>
      </Widget.Header>
      <Widget.Content>
        <p>{db.description}</p>

<form onSubmit={function (infosDoEvento) {
  infosDoEvento.preventDefault();
  router.push(`/quiz?name=${name}`)
}}
class="form_nome_jogar"
>
      <Input
      name="nomeDoUsuario"
      onChange={(infosDoEvento) => {
 setName(infosDoEvento.target.value);
      }}
      autocomplete="off"
      placeholder="Digite seu nome"
      value={name}
      />

<br></br>
<Button type="submit" disabled={name.length === 0} >
  <b>Vamos jogar, {name}!</b>
</Button>

      </form>

      </Widget.Content>
    </Widget>

    <Widget>
      <Widget.Content class="gif_chopper">
        <h1>Chopper mandou-lhe uma boa sorte! :D</h1>

      <img src="https://i.pinimg.com/originals/ed/67/0a/ed670a8b6b14dce2f0f580a3409aa46d.gif"
      alt="Gif do chopper"
      ></img>
      </Widget.Content>
    </Widget>
  </QuizContainer>
  <GitHubCorner projectUrl="https://github.com/DaviAChagas" />

</QuizBackground>
);
}
