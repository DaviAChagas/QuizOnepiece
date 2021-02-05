import { createGlobalStyle, ThemeProvider } from 'styled-components';
import db from '../db.json';
import Head from 'next/head';
import React from 'react'; 

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;

    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
 .gif_chopper img{
   margin-top: 3.8px;
   margin-bottom: 6px;
   border-radius: 5px;
    }
  .gif_chopper{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 8px;
  }

`


const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>

    <title>Quiz One Piece</title>
    <link rel="shortcut icon" href="https://i.pinimg.com/originals/fa/b6/39/fab63979311738b5fe308cbd6dffb11f.png" type="image/x-icon"/>

    <meta property="og:title" content="Quiz de One Piece" />
    <meta property="og:description" content="Este site foi desenvolvido como um treinamento de React.js, Next.js, JavaScript e CSS3, além de ser o meu primeiro repositório no GitHub e meu primeiro contato com Git, ainda não entendendo tão bem o que cada coisa faz e seus comandos. No entanto, esperamos que seja um quiz interessante para os fãs da obra, e que tenham uma ótima experiência com a interface! :D" />
    <meta property="og:image" content=" https://i1.wp.com/www.selectgame.com.br/wp-content/uploads/2019/07/One-Piece-Pirate-Warriors-4-Imagem-Topo-Wallpaper-Full-HD-1920x1080.jpg?fit=1920%2C1080&ssl=1" />
    
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"/>
    </Head>

      <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
