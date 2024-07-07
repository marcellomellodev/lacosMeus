import styled from "styled-components";

export const Container = styled.section`

  /* background-color: red; */

  position: absolute;
  backdrop-filter: blur(3px);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-self: center;
  justify-content: center;	

  color: ${({theme}) =>theme.COLORS.color7};
  background: rgb(220,195,178);
  background: linear-gradient(90deg, rgba(220,195,178,1) 0%, rgba(111,112,107,1) 79%);

  >svg{
    position: absolute;
    top: 1;
    right: 1;
  }

  >nav{
    display: flex;
    /* align-items: center;
    justify-content: center;
    flex-direction: column; */

    ul{
      list-style: none;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
     
      gap: 2rem;
    }
   
  }

`;