import React, { useState } from "react";
import styled from "styled-components";
import neex from '/img/neex.png';
import neex3 from '/img/neex-3.jpg';
import neex4 from '/img/neex-4.jpg';
import neex5 from '/img/neex-5.jpg';
import neex6 from '/img/neex-6.jpg';
import neex7 from '/img/neex-7.jpg';


const data = [
  "Sony",
  "Canon",
  "Nikon",
  "35mm Film",
];

const images = {
  "Sony": neex3,
  "Canon": neex4,
  "Nikon": neex5,
  "35mm Film": neex
}

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: #ffc906;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    height: 700px;
  }
`;

const Works = () => {
  const [work, setWork] = useState(null);

  const handleWorkClick = (item) => {
    const imageFile = images[item];
    setWork(imageFile);
  };
  
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => handleWorkClick(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
        {work && <img src={work} alt="gallery" />}
      </Right>
      </Container>
    </Section>
  );
};


export default Works;