import styled from 'styled-components';

export const CarouselContainer = styled.div`
  grid-area: carousel;
  height: 200px;
  min-width: 98.8%;
  position: relative;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5); /* Define uma sombra */
  margin-top: 10px;


  /*========== Responsive  ==========*/
  @media (max-width: 480px) { /* Ajuste para dispositivos móveis menores */
    height: 150px;
  }

  @media (max-width: 768px) { /* Ajuste para dispositivos móveis */
    height: 300px;
  }

  @media (min-width: 1024px) { /* Ajuste para tablets */
    height: 450px;
  }


`;

export const Button = styled.button`
  position: absolute;
  background: none;
  border: none;
  outline: none;
  font-size: 1.8rem;
  z-index: 2;
  cursor: pointer;
  color: rgb(252, 204, 144);
  transform: translateY(-50%);
  top: 50%;

  ${({ id }) => id === 'prev' ? 'left: 10px;' : 'right: 10px;'};

  @media (min-width: 768px) { /* Ajuste para dispositivos móveis */
    font-size: 2.6rem;

  }
`;

export const SlideList = styled.ul`
  list-style: none;
`;

export const SlideItem = styled.li`
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: ${({ isActive }) => isActive ? '1' : '0'};
  transition: .8s ease-in-out;
  animation: zoomin 20s ease forwards;
`;

export const SlideImage = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
