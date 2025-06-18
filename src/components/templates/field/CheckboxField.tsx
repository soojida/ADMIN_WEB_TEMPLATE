// 공통
import React from "react";
import styled from "styled-components";

// 컴포넌트
import Checkbox, { CheckboxProps } from "@/components/atoms/form/Checkbox";

export type CheckboxOption = {
  // 라벨 텍스트
  label: string;
  // 비활성 여부
  disabled?: boolean;
};
type CheckboxFieldProps = {
  // 체크박스 컨텐츠
  checkboxs?: CheckboxOption[];
  // 클래스명
  className?: string;
  checkboxProps?: CheckboxProps;
};

const CheckboxField = ({
  checkboxs = [],
  className,
  checkboxProps,
}: CheckboxFieldProps) => {
  return (
    <CheckboxFieldForm className={className}>
      {checkboxs.map(({ label, disabled }, idx) => (
        <Checkbox
          label={label}
          key={`checkbox-${idx}`}
          disabled={disabled}
          {...checkboxProps}
        />
      ))}
    </CheckboxFieldForm>
  );
};

export default React.memo(CheckboxField);

const CheckboxFieldForm = styled.div`
  display: flex;
  gap: 16px;
`;
