import React from "react";
import styled from "styled-components";
import Text from "./Text";

const ModalBox = (props) => {
  const { children, closeModal } = props;

  return (
    <ModalDivBox>
      {children}
      <CloseButton
        onClick={() => {
          closeModal();
        }}
      >
        ❎
      </CloseButton>
      <Text>Hello Codestates!</Text>
    </ModalDivBox>
  );
};

export default ModalBox;

const ModalDivBox = styled.div`
  width: 300px;
  padding: 20px 0px 30px 0px;
  background-color: black;
  border-radius: 30px;
  margin: -90px 200px;
  position: absolute;
`;

const CloseButton = styled.div`
  cursor: pointer;
`;
