import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.COLORS.color1};
  background-color: ${({ theme }) => theme.COLORS.color2};

  display: grid;
  grid-template-rows: clamp(60px, 16vw + 1rem, 800px) auto auto auto;
  grid-template-areas:
    "header header"
    "carousel carousel"
    "content content"
    "footer footer"
  ;

  grid-template-columns: 1fr 1fr;

  min-height: 100vh;
  min-width: 348px;
  max-width: 100vw;

  header {
    grid-area: header;
    height: clamp(10px, 18vw, 300px);
  }

  @media (min-width: 768px) {
    header {
      height: clamp(10px, 18vw, 300px);
    }
  }

  @media (min-width: 900px) {
    header {
      height: clamp(10px, 16vw, 300px);
    }
  }


  /* .carousel {
    grid-area: carousel;
    display: flex;
    justify-content: center;
    width: 98.5%;
  } */

  main {
    grid-area: content;
    width: 100%;
    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around; */
    /* margin-top: 30px; */
    background-color: ${({ theme }) => theme.COLORS.color1};

    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
      "section1"
      "section2"
      "section3";
    min-height: 100vh;
  }

  footer {
    grid-area: footer;
    width: 100%;
    padding: 20px;
    text-align: center;
    background-color: ${({ theme }) => theme.COLORS.color3};
  }

 

  @media (min-width: 900px) {
    grid-template-rows: clamp(140px, 15vw + 1rem, 300px) auto auto auto;

  }

  /* @media (min-width: 1441px) {
    grid-template-rows: clamp(130px, 10vw + 40px, 170px) auto auto;
  } */
`;
