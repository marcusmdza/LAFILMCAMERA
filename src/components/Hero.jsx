import styled from 'styled-components';
import React from 'react';
import Navbar from './Navbar';
import CamerasCanvas from './canvas/Camera';

const Section = styled.div`
  height: 100vh; 
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const Container = styled.div`
  height: 100vh; 
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`

const Title = styled.h1`
  font-size: 74px;
`

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const Line = styled.img`
  height: 5px;
`

const Subtitle = styled.h2`
  color: #ffc906;
`

const Desc = styled.p`
  font-size: 12px;
  color: lightgray;
`

const Button = styled.button`
  background-color: #ffc906;
  color: black;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`


const Right = styled.div`
  flex: 3;
  position: relative;

`



const Hero = () => {
    return (
        <Section>
            <Navbar />
            <Container>
                <Left>
                    <Title>Buy. Sell. Repair.</Title>
                    <WhatWeDo>
                        <Line src="./img/line.png"/>
                        <Subtitle>Vintage Cameras & Film Development</Subtitle>
                    </WhatWeDo>
                    <Desc>This website is a project created to resemble a website for the business "LA Film Camera". 
                        Please note that this is not an official website for the business, but rather a project made for 
                        demonstration and educational purposes only.</Desc>
                    <Button>Learn More</Button>
                </Left>
                <Right>
                    {/*3D Model goes here */}
                    <CamerasCanvas />
                </Right>
            </Container>
        </Section>
    );
};

export default Hero;