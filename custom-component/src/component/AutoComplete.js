import React, { useState } from "react";
import styled from "styled-components";
import { wordList } from "./common/constants";
import Text from "./common/Text";

const AutoComplete = () => {
  return (
    <DivBox>
      <AutoCompleteInput type="text" list="autoComplete" />
      <datalist id="autoComplete">
        {wordList.map((item, index) => (
          <option key={index} value={item} />
        ))}
      </datalist>
    </DivBox>
  );
};

export default AutoComplete;

const AutoCompleteInput = styled.input`
  width: 80%;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 14px;
  border: 1px solid #ccc;
  outline: none;
`;

const DivBox = styled.div`
  width: 700px;
  margin: 100px auto 50px auto;
  padding: 100px 0px;
  background-color: #333;
  border-radius: 30px;
`;
