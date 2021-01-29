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
   height: 80%;
   width: 90%;
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
  .input_nome{
  border-radius: 5px;
  height: 2.7rem;
  width: 90%;
  border: ${({theme }) => theme.colors.primary} solid 1px;
  background:none;
  color: white;
  }
  .botao_nome{
    border-radius: 5.5px;
    width: 90%;
    height: 2.7rem;
    outline: none;
   border: none;
   color: white;
   font-size: 18px;
   cursor: pointer;
   background-color: ${({theme }) => theme.colors.primary};
   transition: background 450ms;}

   .botao_nome:hover{
     background-color: ${({ theme }) => theme.colors.secondary};
   }
  
  .form_nome_jogar{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .logo_onepiece{
    height: 10.5rem;
    width: 22rem;

  }
`


const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Quiz One Piece</title>
      <link rel="shortcut icon" href="https://i.pinimg.com/originals/fa/b6/39/fab63979311738b5fe308cbd6dffb11f.png" type="image/x-icon"/>
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
