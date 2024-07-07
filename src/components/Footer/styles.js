import styled from "styled-components";

export const Container = styled.section` 
    grid-area: footer;

    width: 100%;
    min-height: 600px;

    background-color: ${({ theme }) => theme.COLORS.color6};

    color: white;
    display: flex;
    flex-direction: column;
    padding: 50px 25px 20px;

    h1{
      color: #FFF;
      font-family: Philosopher;
      font-size: 40px;
      margin: 0 0 30px 30px;

    }
    
    >.wrapper-footer{
      display: flex;
      flex-direction: column;
      
      >.wrapper-box-footer{
        width: 100%;
        
        >.wrapper-sections{
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 30px;

          
          h3{
            color: #D9D9D9;
            font-family: Poppins;
            font-size: 14px;
            font-weight: 700;
            letter-spacing: 0.7px;
            text-transform: uppercase;
          }
          
          li{
            list-style: none;
            color: #D9D9D9;
            font-family: Poppins;
            font-size: 16px;
            font-weight: 500;
            letter-spacing: 0.7px;
            margin-bottom: 10px;
  
          }
  
          .box-section{
            display: flex;
            justify-content: space-around;
            align-items: center;
  
            a{
              color: white;
            }
          }
        }
      }
      
      >.wrapper-box-social{
        display: flex;
        justify-content: center;
        font-size: 30px;
        
        .social-footer{
          display: flex;
          gap: 50px;
          margin-top: 30px;
        }
      }
    }
  
    >.footer-info{
      width: 100%;
      /* height: 56px; */
      border-top: 1px solid ${({ theme }) => theme.COLORS.color2};
  
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      line-height: 25px;

      margin-top: 30px;

      >span{
        font-size: 10px;
      }
    }


  @media (min-width: 500px) {
    h1{
      margin: 0 0 30px 80px;
    }
  }

       

  @media (min-width: 1000px) {
    color: white;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 0;
    padding: 50px 0 0 0;

    min-height: 100%;
  
    h1{
      color: #FFF;
      font-family: Philosopher;
      font-size: 48px;
      /* font-weight: 400; */
      margin-bottom: 30px;
    }
    
    >.wrapper-footer{
      width: 80vw;
  
      display: flex;
      /* align-items: self-start; */
      justify-content: center;
  
      >.wrapper-box-footer{
        width: 100%;
        height: 300px;
        
        >.wrapper-sections{
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          
          h3{
            color: #D9D9D9;
            font-family: Poppins;
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 0.7px;
            text-transform: uppercase;
          }

          ul{
            display: flex;
            flex-direction: column;
            align-items: center;
            
            >li{
              list-style: none;
              color: #D9D9D9;
              font-family: Poppins;
              font-size: 16px;
              font-weight: 500;
              letter-spacing: 0.7px;
              margin-bottom: 10px;
            }
          }
          
  
          .box-section{
            display: flex;
            flex-direction: column;
            gap: 30px;

            height: 123px;
  
            a{
              color: white;
            }
          }
        }
      }
      
      >.wrapper-box-social{
        display: flex;
        justify-content: center;
        /* align-items: center; */
        font-size: 20px;
  
        .social-footer{
          display: flex;
          gap: 50px;
          margin-top: 30px;
        }
      }
    }
  
    >.footer-info{
      width: 100%;
      height: 40px;
      border-top: 1px solid ${({ theme }) => theme.COLORS.color2};
  
      display: flex;
      align-items: center;
      justify-content: center;  
    }
  }
`;