import styled from 'styled-components';
import React from 'react';
import KodakCanvas from './canvas/Kodak';

const Section = styled.div`
  height: 100vh; 
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  height: 100vh; 
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
  flex: 1;
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
  font-size: 24px;
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
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`



const Who = () => {
    return (
        <Section>
            <Container>
                <Left>
                    {/*3D Model goes here */}
                    <KodakCanvas />
                </Left>
                <Right>
                    <Title>Who We Are</Title>
                    <WhatWeDo>
                        <Line src="./img/line.png"/>
                        <Subtitle>Kodak, Fujifilm, & More</Subtitle>
                    </WhatWeDo>
                    <Desc>a local camera shop to fulfill all your camera needs.</Desc>
                    <Button>View our Pricing</Button>
                </Right>
            </Container>
        </Section>
    );
};

export default Who;