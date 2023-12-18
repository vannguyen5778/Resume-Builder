import styled, { keyframes } from "styled-components";

const CardAnimation = () => {
  const Card = styled.div`
    position: absolute;
    width: 100px;
    height: 200px;
    transform-style: preserve-3d;
    animation-delay: ${(Math.floor(Math.random() * 10) + 1) * 1000}ms;
    animation: ${({ initialX }) => fallingAnimation(initialX)} 10s linear
      infinite forwards;
  `;

  const fallingAnimation = (initialX) => keyframes`
    0% {
      transform: translate(${
        initialX * 400 + 50
      }px, -550px) rotateY(0deg);
    }        
    100% {
      transform: translate(${
        initialX * 400  + 50
      }px, 200px) rotateY(360deg);
    }
  `;

  return (
    <>
      {[...Array(4)].map((_, index) => (
        <Card initialX={index} index={index} key={index}>
          <div className="front">
            <img
              src="https://resume.io/assets/media/skeleton-190b2a1e1dbef7a47ffdc.png"
              alt=""
            />
          </div>
          <div className="back"></div>
        </Card>
      ))}
    </>
  );
};

export default CardAnimation;
