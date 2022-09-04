import React from "react";
import styled from "styled-components";

const Section = styled.section`
  overflow: hidden; // esconde tudo que pular da tela
  width: 100%;
`;
const Content = styled.div`
  display: flex;
  transition: transform 0.3s ease;
  transform: translateX(${(props) => props.position + "px"});
`;
const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 1rem auto;
  width: 80%;

  button {
    padding: 0.6rem;
  }
`;
export const SlideItem = styled.div`
  width: 80%; // ocupa 80% da tela
  flex-shrink: 0;
  margin: 0 10%;
  padding: 10rem 0;
  background: #fb5;
  border-radius: 4px;
  text-align: center;
`;

const slides = [1, 2, 3];

const Slide = () => {
  const [isDown, setIsDown] = React.useState(false);

  const dist = {
    startX: 0,
    finalPostion: 0,
    moviment: 0,
    movePosition: 0,
  };

  const [active, setActive] = React.useState(0);
  const [position, setPosition] = React.useState(0);

  const contentRef = React.useRef(null);

  function moveSlide(distX) {
    dist.movePosition = distX;
    contentRef.current.style.transform = `translateX(${distX}px)`;
  }

  function updatePosition(ClientX) {
    dist.moviment = (dist.startX - ClientX) * 1.6;
    return dist.finalPostion + dist.moviment;
  }

  function handleMouseMove(event) {
    if (!isDown) return false;
    event.preventDefault();

    const finalPosition = updatePosition(event.clientX);
    moveSlide(finalPosition);
  }

  function handlDownMouse(event) {
    event.preventDefault();
    setIsDown(true);
    dist.startX = event.clientX;
  }

  function handleEndEvent(event) {
    event.preventDefault();
    console.log("sair");
    setIsDown(false);
    dist.finalPostion = dist.movePosition;
  }

  React.useEffect(() => {
    const { width } = contentRef.current?.getBoundingClientRect();
    setPosition(-(width * active));
  }, [active]);
  function slidePrev() {
    setActive(0);
  }
  function SlideMiddle() {
    setActive(1);
  }

  function slideNext() {
    setActive(2);
  }

  return (
    <Section>
      <Nav>
        <button onClick={slidePrev}>2021</button>
        <button onClick={SlideMiddle}>2021</button>
        <button onClick={slideNext}>2022</button>
      </Nav>

      <Content
        ref={contentRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleEndEvent}
        onMouseUp={handleEndEvent}
        onMouseDown={handlDownMouse}
      >
        {slides.map((item) => {
          return <SlideItem key={item}>{item}</SlideItem>;
        })}
      </Content>
    </Section>
  );
};

export default Slide;
