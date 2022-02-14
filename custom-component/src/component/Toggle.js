import React, { useState } from "react";
import styled from "styled-components";

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);
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
      <ToggleStateText>
        Toggle Switch {isToggled ? "On" : "Off"}
      </ToggleStateText>
    </DivBox>
  );
};

export default Toggle;

const DivBox = styled.div`
  width: 700px;
  margin: 100px 50px 50px 100px;
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

const ToggleStateText = styled.p`
  color: #fff;
  font-weight: bold;
`;
