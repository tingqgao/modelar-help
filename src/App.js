import React from "react";
import styled from "styled-components";
import LogoSrc from "./assets/logo.png";
import AdjustSrc from "./assets/adjust.png";
import DuplicateSrc from "./assets/duplicate.png";
import ExtrudeSrc from "./assets/extrude.png";
import CreateSrc from "./assets/create.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #272525;
  height: 60px;
  padding: 0 20px;
  width: 100%;
`;

const Logo = styled.img`
  height: 30px;
  width: auto;
`;

const ReturnToApp = styled.a`
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  padding: 5px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin-top: 10px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: #000000;
  font-family: "Roboto", sans-serif;
  margin: 20px;
`;

const Subtitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
  color: #000000;
  font-family: "Roboto", sans-serif;
  margin: 20px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 20px;
`;

const RowImage = styled.img`
  width: 30px;
  height: auto;
`;

const RowTitle = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #000000;
  font-family: "Roboto", sans-serif;
  width: 150px;
  margin-left: 20px;
`;

const RowLabel = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #000000;
  font-family: "Roboto", sans-serif;
`;

function App() {
  return (
    <Wrapper>
      <TopBar>
        <Logo src={LogoSrc} />
        <ReturnToApp>Back to App</ReturnToApp>
      </TopBar>
      <Content>
        <Title>Basics Tutorial Page</Title>
        <Subtitle>Canvas Tools</Subtitle>
        <Row>
          <RowImage src={CreateSrc} />
          <RowTitle>Create</RowTitle>
          <RowLabel>
            Add a canvas to begin drawing. The canvas expands as you draw.
          </RowLabel>
        </Row>
        <Row>
          <RowImage src={AdjustSrc} />
          <RowTitle>Adjust</RowTitle>
          <RowLabel>
            Rotate canvas by clicking on the center of the axial globe and
            dragging the mouse
          </RowLabel>
        </Row>
        <Row>
          <RowImage src={DuplicateSrc} />
          <RowTitle>Duplicate</RowTitle>
          <RowLabel>
            Click on the canvas you want to copy, then press this button. A
            duplicated canvas will appear infront of the original canvas
          </RowLabel>
        </Row>
        <Row>
          <RowImage src={ExtrudeSrc} />
          <RowTitle>Extruded Canvas</RowTitle>
          <RowLabel>Click this to extrude</RowLabel>
        </Row>
      </Content>
    </Wrapper>
  );
}

export default App;
