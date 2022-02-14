import React, { useState } from "react";
import styled from "styled-components";
import ModalBox from "./common/ModalBox";
import Text from "./common/Text";

const Modal = () => {
  const [isModal, setIsModal] = useState(false);
  console.log(isModal);
  return (
    <DivBox>
      <ModalButton
        value={isModal}
        onClick={() => {
          setIsModal(true);
        }}
      >
        <Text>Open Modal</Text>
      </ModalButton>
      {isModal === true ? (
        <ModalBox
          closeModal={() => {
            setIsModal(false);
          }}
        />
      ) : null}
    </DivBox>
  );
};

export default Modal;

const ModalButton = styled.button`
  width: 140px;
  margin: auto;
  border: 0px;
  border-radius: 30px;
  background-color: #4900ce;
  cursor: pointer;
`;

const DivBox = styled.div`
  width: 700px;
  margin: 100px auto 50px auto;
  padding: 100px 0px;
  background-color: #333;
  border-radius: 30px;
`;
