// lib
import React from "react";

// style
import styled from "styled-components";

// components
import Input, { InputProps } from "./Input";
import Label, { LabelProps } from "../label/Label";

type InputFieldProps = {
  label?: string;
  id?: string;
  type?:
    | "text"
    | "password"
    | "email"
    | "tel"
    | "number"
    | "search"
    | "url"
    | undefined;
  direction?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
  inputProps?: InputProps;
  labelProps?: LabelProps;
  errorMessage?: string;
};

const InputField = ({
  label,
  id,
  type,
  direction = "column",
  labelProps = {},
  inputProps = {},
  onChange,
  onKeyDown,
  errorMessage,
}: InputFieldProps) => {
  return (
    <InputFieldForm direction={direction}>
      {label && (
        <Label htmlFor={id} {...labelProps}>
          {label}
        </Label>
      )}
      <Input
        type={type}
        onChange={onChange}
        onKeyDown={onKeyDown}
        errorMessage={errorMessage}
        {...inputProps}
      />
      {/* 에러 메시지 */}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputFieldForm>
  );
};
export default React.memo(InputField);

const InputFieldForm = styled.div<{ direction: string }>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: 4px;
`;

export const InputFieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ErrorMessage = styled.span`
  padding-left: 12px;
  margin-top: 4px;
  padding-right: 5px;
  color: ${({ theme }) => theme.color.primary};
  font-size: 13px;
  letter-spacing: 0.3px;
  font-weight: 400;
`;
