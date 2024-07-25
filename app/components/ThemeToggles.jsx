// components/ThemeToggles.jsx
import React from "react";
import styled from "styled-components";
import { useTheme } from "../ThemeProvider.";

const SwitchContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 55px;
  height: 28px;
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.checked ? "#ccc" : "#000000"};
  transition: .4s;
  border-radius: 28px;
  
  &:before {
    position: absolute;
    content: "";
    height: 24px;
    width: 24px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
    transform: ${props => props.checked ? "translateX(26px)" : "translateX(0)"};
  }
`;

const ThemeToggles = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <SwitchContainer >
      <SwitchInput type="checkbox" onChange={toggleTheme} checked={theme === "dark"} />
      <Slider checked={theme === "dark"} />
    </SwitchContainer>
  );
};

export default ThemeToggles;
