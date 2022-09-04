import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 300px;
  margin: 2rem auto;

  .your-class-pagination {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    margin-bottom: 2rem;
    padding: 0;

    li {
      flex: 1;
      width: 100%;
      button {
        display: none;
        width: 100%;
        cursor: pointer;
        padding: 1rem;
      }
    }
  }
  .your-class-page {
    display: flex !important;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    border-bottom: 2px solid whitesmoke;

    &.is-active {
      border-bottom: 2px solid blue;
    }
  }
`;

const Home = () => {
  React.useEffect(() => {
    const buttons = document.querySelectorAll(".your-class-page");
    const years = [2021, 2022, 2023];

    console.log(buttons);

    buttons.forEach((item, index) => {
      item.innerHTML = `${years[index]}`;
    });
  }, []);
  return (
    <Wrapper>
      <Splide
        id="image-carousel"
        hasTrack={false}
        className="splide"
        aria-label="Beautiful Images"
        options={{
          arrows: false,
          classes: {
            pagination: "splide__pagination your-class-pagination",
            page: "splide__pagination__page your-class-page",
          },
        }}
      >
        <ul
          className="splide__pagination splide__pagination--ltr your-class-pagination"
          role="tablist"
          aria-label="Select a slide to show"
        />
        <SplideTrack>
          <SplideSlide>
            <Image src="/1.jpg" alt="" width={800} height={800} />
            <h3>Lorem ipsum dolor sit amet,</h3>
            <p>
              consectetur adipisicing elit. Iure esse ipsum quibusdam temporibus
              blanditiis veritatis suscipit, aspernatur facere asperiores
              dolorum fuga. Dolorem, reprehenderit! Facere quo sapiente
              reprehenderit fugit. Nobis, nisi!
            </p>
          </SplideSlide>
          <SplideSlide>
            <Image src="/2.jpg" alt="" width={800} height={800} />
            <h3>Lorem ipsum dolor sit amet,</h3>
            <p>
              consectetur adipisicing elit. Iure esse ipsum quibusdam temporibus
              blanditiis veritatis suscipit, aspernatur facere asperiores
              dolorum fuga. Dolorem, reprehenderit! Facere quo sapiente
              reprehenderit fugit. Nobis, nisi!
            </p>
          </SplideSlide>
          <SplideSlide>
            <Image src="/3.jpg" alt="" width={800} height={800} />
            <h3>Lorem ipsum dolor sit amet,</h3>
            <p>
              consectetur adipisicing elit. Iure esse ipsum quibusdam temporibus
              blanditiis veritatis suscipit, aspernatur facere asperiores
              dolorum fuga. Dolorem, reprehenderit! Facere quo sapiente
              reprehenderit fugit. Nobis, nisi!
            </p>
          </SplideSlide>
        </SplideTrack>
      </Splide>
    </Wrapper>
  );
};

export default Home;
