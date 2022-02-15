import React, { useState } from "react";
import styled from "styled-components";
import Text from "./common/Text";

const Tag = () => {
  const [isFocus, setIsFocus] = useState(false);
  function focusOn() {
    setIsFocus(true);
  }
  function focusOff() {
    setIsFocus(false);
  }

  const [tagArr, setTagArr] = useState(["Codestates", "kongom2", "coding"]);
  const [tagValue, setTagValue] = useState("");

  function tagReset() {
    setTagValue("");
  }
  function tagInput(e) {
    setTagValue(e.target.value);
  }
  function addTag(e) {
    if (e.key === "Enter") {
      setTagArr([...tagArr, e.target.value]);
      tagReset();
    }
  }
  function removeTag(text) {
    const newArr = tagArr.filter((x) => x !== text);
    setTagArr(newArr);
  }

  return (
    <DivBox>
      <TagBox focus={isFocus}>
        {tagArr.map((x, idx) => {
          return (
            <TagContent key={idx}>
              <Text>{x}</Text>
              <Button
                onClick={() => {
                  removeTag(x);
                }}
              >
                ❎
              </Button>
            </TagContent>
          );
        })}
        <Input
          onChange={tagInput}
          onKeyPress={addTag}
          onFocus={focusOn}
          onBlur={focusOff}
          value={tagValue}
          placeholder="Press enter to add tags"
        />
      </TagBox>
    </DivBox>
  );
};

export default Tag;
const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background: none;
  outline: none;
`;

const Button = styled.button`
  border: none;
  background-color: #fff;
  font-size: 0.5rem;
  padding: 0;
  font-weight: bold;
  cursor: pointer;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  text-align: center;
`;

const TagBox = styled.div`
  width: 80%;
  height: 50px;
  border: ${(props) => (props.focus ? "1px solid #000" : "1px solid #ccc")};
  border-radius: 10px;
  padding: 10px;
  margin: auto;
  background-color: #fff;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-break: normal;
`;

const TagContent = styled.div`
  padding: 5px 10px;
  height: 30px;
  background-color: #4900ce;
  color: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-right: 5px;
  white-space: nowrap;
`;

const DivBox = styled.div`
  width: 700px;
  margin: 100px auto 50px auto;
  padding: 100px 0px;
  background-color: #333;
  border-radius: 30px;
`;
