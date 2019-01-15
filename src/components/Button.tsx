import * as React from "react";
import styled from "styled-components";

interface ButtonProps {
  label: string;
}

const ButtonSFC: React.SFC<ButtonProps> = props => {
  const { label } = props;
  return <button>{label}</button>;
};

export const Button = styled(ButtonSFC)`
  background-color: blue;
  padding: 20px;
`;

export default Button;
