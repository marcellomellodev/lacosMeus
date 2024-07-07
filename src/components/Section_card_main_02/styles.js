import styled from "styled-components";

export const Container = styled.section`
  grid-area: section2;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({theme}) =>theme.COLORS.color4};
  color: ${({theme}) =>theme.COLORS.color7};

  padding: 50px 0 150px 0;

  >h2{
    display: flex;
    justify-content: center;

    color: #6D3D1E;
    font-size: clamp(14px, 3vw + 1rem, 60px);
    font-family: var(--fs6);
    line-height: 100px;
  }

  >.wrapperCard{
    width: 100%;
    height: 600px;
    gap: 20px 0;

    
    display: grid;
    grid-template-areas:
    "boxCard1 boxCard2"
    "boxCard3 boxCard4";      ;
    
    justify-content: space-around;

    #boxCard1{
      grid-area: boxCard1;
      height: 300px;
    }

    #boxCard2{
      grid-area: boxCard2;
      height: 300px;
    }

    #boxCard3{
      grid-area: boxCard3;
      height: 300px;
    }

    #boxCard4{
      grid-area: boxCard4;
      height: 300px;
    }

    .box_card_main{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      width: clamp(130px, 40vw + 1rem, 480px);
    }
        
    >.box_card_main img{
      max-width: 98%;
      width: clamp(130px, 80vw, 480px);

      height: 220px;
      border-radius: 20px 20px 10px 10px;

      display: block;
      
      flex-shrink: 0;
      object-fit: cover;
    }
    
    /* .box{
      position: absolute;
      top: 4px;
      left: 17px;
      width: 80%;
      height: 67%;

      Garante que o tamanho total inclua a borda
      box-sizing: border-box; 
      Cor e tamanho da borda
      border: 2px solid #FFF;
    } */

    p{
      width: 100%;

      display: flex;
      justify-content: center;

      font-size: clamp(14px, 2vw, 30px);

      line-height: clamp(12px, 5vw, 40px);
      color: ${({theme}) =>theme.COLORS.color7};

      margin-top: 1rem;
    }

    span{
      color: ${({theme}) =>theme.COLORS.color7};
      display: flex;
      justify-content: center;

      font-weight: 700;
      font-size: clamp(12px, 1vw + 1rem, 32px);

      line-height: 2rem;
    }
  }

  /*========== Responsive  ==========*/
  @media (min-width: 451px) and (max-width: 767px) {

  }

  @media (min-width: 1024px)  {
    min-width: 900px;
    min-height: 80vh;

    display: flex; 
    flex-direction: column;
    justify-content:center;
    align-items: center;
    gap: 80px;
  
    background-color: ${({theme}) =>theme.COLORS.color4};

  
    >h2{
      color: #6D3D1E;
      font-size: clamp(30px, 5vw, 80px);
      font-family: var(--fs6);
      font-weight: 700;
     
      line-height: 100px;
    }
  
    >.wrapperCard{
      height: 450px;

      display: flex;
      gap: 0;

      #boxCard1{
        grid-area: boxCard1;
        display: flex;
        
        justify-content:space-around;
        margin-bottom: 0;
      }

      #boxCard2{
        grid-area: boxCard2;
        display: flex;

        justify-content:space-around;
        margin-bottom: 0;
      }

      #boxCard3{
        grid-area: boxCard3;

        display: flex;
        justify-content:space-around;
        margin-bottom: 0;
      }

      #boxCard4{
        grid-area: boxCard4;

        display: flex;
        justify-content:space-around;
        margin-bottom: 0;
      }

       
      .box_card_main{
        position: relative;
        display: inline-block;
      }
      
      >.box_card_main img{
        display: block;
        
        border-radius: 30px;

        flex-shrink: 0;
        object-fit: cover;
        
        width: clamp(130px, 22vw, 300px);
        height: clamp(130px, 24vw, 360px);
        
      }
     
      /* .box{
        position: absolute;
        top: 13px;
        left: 19px;
        width: 88%;
        height: 78%;
        border: 5px solid #979797; 
        box-sizing: border-box; 
        border: 2px solid #FFF;
      } */
  
      p{
        color: ${({theme}) =>theme.COLORS.color7};
        display: flex;
        justify-content: center;
        margin-top: 30px;
        margin-left: 20px;

        font-size: clamp(14px, 5vw, 22px); 
      }
  
      span{
        color: ${({theme}) =>theme.COLORS.color7};
        display: flex;
        justify-content: center;

        font-weight: 900;
        font-size: 2rem;
      }
    }
  }
`;