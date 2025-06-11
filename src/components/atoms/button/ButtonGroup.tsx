// 공통
import React from "react";
import styled from "styled-components";

// 컴포넌트
import Button, { ButtonProps } from "./Button";

type ButtonGroupProps = {
  buttons: (ButtonProps & { text: string | React.ReactNode })[];
  className?: string;
  style?: React.CSSProperties;
};

const ButtonGroup = ({ buttons, className, style }: ButtonGroupProps) => {
  return (
    <ButtonGroupForm className={className} style={style}>
      {buttons.map(({ text, ...rest }, idx) => (
        <Button key={idx} {...rest}>
          {text} {/* text를 children으로 사용 */}
        </Button>
      ))}
    </ButtonGroupForm>
  );
};

export default React.memo(ButtonGroup);

const ButtonGroupForm = styled.div`
  display: flex;
  gap: 8px;
`;
