import React, { useState } from "react";
import styled from "styled-components";
import { tabArr } from "./common/constants";
import Text from "./common/Text";

const Tab = () => {
  const [tabColor, setTapColor] = useState(0);
  const [tabContent, setTapContent] = useState(0);

  return (
    <DivBox>
      <TitleDivBox>
        {tabArr.map((item, index) => {
          return (
            <TabBar>
              <TabTitle
                className={index === tabColor ? "isActive" : ""}
                key={index}
                onClick={() => {
                  setTapColor(index);
                  setTapContent(index);
                }}
              >
                <Text>{item.title}</Text>
              </TabTitle>
            </TabBar>
          );
        })}
      </TitleDivBox>
      <ContentDivBox>
        {tabArr.map((item, index) => {
          return (
            <TabContent key={index}>
              <Text>{index === tabContent ? item.content : ""}</Text>
            </TabContent>
          );
        })}
      </ContentDivBox>
    </DivBox>
  );
};

export default Tab;

const TabTitle = styled.div`
  cursor: pointer;
`;

const TabContent = styled.div`
  position: absolute;
  margin: auto;
  width: 700px;
`;

const TabBar = styled.div`
  width: 100%;
  margin: auto;
  radius: 30px;
  & .isActive {
    background-color: #4900ce;
  }
`;

const TitleDivBox = styled.div`
  display: flex;
`;
const ContentDivBox = styled.div`
  display: flex;
`;

const DivBox = styled.div`
  width: 700px;
  margin: 100px auto 50px auto;
  padding: 30px 0px 100px 0px;
  background-color: #333;
  border-radius: 30px;
`;
