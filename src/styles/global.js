import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :root{
    font-size: 62.5%;

    --fs1: 'GlacialIndifferenceRegular', sans-serif;
    --fs2: "Mulish", sans-serif;
    --fs3: "Pacifico", cursive;
    --fs4:  "Poppins";
    --fs5:  "Abel", sans-serif;
    --fs6:  "Philosopher", sans-serif;
    --fs7:  "Rouge Script", cursive;
    --fs8:  "Sail", system-ui;
  }

  body{
    background-color: ${({theme}) => theme.COLORS.color1};
    color: ${({theme}) => theme.COLORS.color7};
    font-family: var(--fs1);
    font-size: 1.6rem;
  }

  a{
    text-decoration: none;
  }

  button, a{
    cursor: pointer;
    transition: filter 0.2s
  }

  button:hover, a:hover{
    filter: brightness(0.9)
  }
`;