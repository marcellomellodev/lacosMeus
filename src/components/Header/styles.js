import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  max-height: 150rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  border-bottom: 2px solid ${({theme}) => theme.COLORS.color5};  
  color: ${({theme}) =>theme.COLORS.color6};
 
  
  
  >.wrapper_logo_header{
    display:flex;
    align-items: center;
    gap: clamp(10px, 1vw, 50px);
    padding-top: 20px 0;


      >img{
        height: clamp(30px, 8vw, 80px);
        border-radius: 20%;
      } 

      >span{
        font-family: Philosopher;
        font-size: clamp(20px, 5vw, 60px);
        font-weight: 800;
      } 
    }

    .wrapper_nav_social{
      width: 100%;
      display: flex;
      justify-content: center;
      /* padding: 0 20px; */
      
  
      >.social_header{
        display: flex;
        gap: clamp(12px, 1.5vw + 1rem, 100px);
        font-size: clamp(12px, 1vw + 1rem, 30px);
      }
    }



  /*========== Responsive  ==========*/


  @media (min-width: 768px) {
    padding: 20px;
    gap: 30px;

    .wrapper_nav_social{
      justify-content: space-between;
    }
  }


  @media (min-width: 1480px)  {
    background-color: ${({ theme }) => theme.COLORS.color2};
    padding: 20px;
    gap: 30px;

    >.wrapper_logo_header{
      margin-left: 50px;

      >img{
        height: clamp(50px, 5vw, 120px);
      } 

      >span{
        font-size: clamp(24px, 10vw, 60px);
        font-weight: 800;
      } 
    }

    .wrapper_nav_social{
      /* justify-content: space-around; */
      padding: 0 clamp(16px, 2.5vw + 1rem, 100px);
    }
  }
`;



export const Nav_header = styled.div`
  display: none;

  >nav ul{
      display: flex;
      justify-content: space-around;
      gap: 20px;
      list-style: none;
      font-size: clamp(16px, 2vw, 25px);
    }

  @media (min-width: 768px)  {
    display: flex; 
  }
`;