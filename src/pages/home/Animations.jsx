import { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const CardAnimation = () => {
  useEffect(() => {
    // Animation keyframes
    const fallingAnimation = (initialX) => keyframes`
      0% {
        transform: translate(${initialX}px, -1000px) rotateY(0deg);
      }        
      100% {
        transform: translate(${initialX}px, -600px) rotateY(360deg);
      }
    `;

    const Card = styled.div`
      /* Apply the animation to each card */
      position: absolute;
      width: 100px;
      height: 200px;
      transform-style: preserve-3d;
      animation: ${({ initialX }) => fallingAnimation(initialX)} 7s linear infinite forwards;
      
    `;

    const cardContainer = document.querySelector('.card-container');
    const cards = cardContainer.querySelectorAll('.card');

    cards.forEach((card, index) => {
      // Set different X positions for each card
      const initialX = index * 50;

      // Apply the animation to each card using Styled Components
      cardContainer.appendChild(
        <Card initialX={initialX} index={index} key={index}>
          <div className="front">
            <img src="https://resume.io/assets/media/skeleton-190b2a1e1dbef7a47ffdc.png" alt="" />
          </div>
          <div className="back"></div>
        </Card>
      );
    });
  }, []);

  return <div className="card-container"></div>;
};

export default CardAnimation;