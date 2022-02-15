import React, { useState } from "react";
import styled from "styled-components";
import Text from "./common/Text";
import { defaultInfo } from "./common/constants";

const ClickToEdit = () => {
  const [name, setName] = useState(defaultInfo.name);
  const [editName, setEditName] = useState(false);

  function changeName(e) {
    setName(e.target.value);
    setEditName(e.target.value);
  }
  function changeEditName() {
    setEditName(true);
  }

  const [age, setAge] = useState(defaultInfo.age);
  const [editAge, setEditAge] = useState(false);

  function changeAge(e) {
    setAge(e.target.value);
    setEditAge(false);
  }
  function changeEditAge() {
    setEditAge(true);
  }

  return (
    <DivBox>
      <EditBox>
        <EditInnerBox>
          <Text>이름</Text>
          {editName ? (
            <EditInput type="text" onBlur={changeName} defaultValue={name} />
          ) : (
            <TextInput type="text" onFocus={changeEditName} value={name} />
          )}
        </EditInnerBox>
        <EditInnerBox>
          <Text>나이</Text>
          {editAge ? (
            <EditInput type="text" onBlur={changeAge} defaultValue={age} />
          ) : (
            <TextInput type="text" onFocus={changeEditAge} value={age} />
          )}
        </EditInnerBox>
      </EditBox>

      <ContentBox>
        <Text>이름 : {name}</Text> <Text>나이 : {age}</Text>
      </ContentBox>
    </DivBox>
  );
};

export default ClickToEdit;

const ContentBox = styled.div`
  display: flex;
  width: 40%;
  margin: auto;
  gap: 50px;
`;

const EditBox = styled.div`
  width: 100%;
  padding: 20px;
`;

const EditInnerBox = styled.div`
  width: 40%;
  margin: auto;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

const EditInput = styled.input`
  height: 30px;
  padding: 5px 10px;
  border-radius: 14px;
  text-align: center;
`;

const TextInput = styled.input`
  height: 30px;
  padding: 5px 10px;
  text-align: center;
  border-radius: 14px;
  color: #732ce6;
`;

const DivBox = styled.div`
  width: 700px;
  margin: 100px auto 50px auto;
  padding: 100px 0px;
  background-color: #333;
  border-radius: 30px;
`;
