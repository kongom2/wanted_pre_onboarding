import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const { children } = props;
  return <P>{children}</P>;
};

export default Text;

const P = styled.p`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  line-height: 25px;
  display: block;
`;
