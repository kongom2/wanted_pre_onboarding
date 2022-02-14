import React, { useState } from "react";
import styled from "styled-components";
import Text from "./common/Text";

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);
  console.log(isToggled);
  return (
    <DivBox>
      <Label>
        <Input
          type="checkbox"
          value={isToggled}
          onChange={() => setIsToggled(!isToggled)}
        />
        <Slider className="slider" />
      </Label>
      <Text>Toggle Switch {isToggled ? "On" : "Off"}</Text>
    </DivBox>
  );
};

export default Toggle;

const DivBox = styled.div`
  width: 700px;
  margin: 100px auto 50px auto;
  padding: 100px 0px;
  background-color: #333;
  border-radius: 30px;
`;

const Label = styled.label`
  position: relative;
  display: inline-block;

  width: 68px;
  height: 34px;
`;

const Input = styled.input`
  // opacity: 0;
  // width: 0;
  // height: 0;
  &:checked + .slider {
    background-color: #4900ce;
  }
  &:checked + .slider:before {
    transform: translateX(34px);
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  border-radius: 34px;
  background-color: #ccc;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.4s;

  &:before {
    border-radius: 26px;
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: #fff;
    transition: 0.4s;
  }
`;
