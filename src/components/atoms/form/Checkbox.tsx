// lib
import React from "react";

// style
import styled from "styled-components";
import Label from "../label/Label";

export type CheckboxProps = {
  className?: string;
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  label?: React.ReactNode;
};

const Checkbox = ({
  className,
  id,
  onChange,
  checked,
  disabled,
  onClick,
  label,
  ...props
}: CheckboxProps) => {
  return (
    <CheckboxForm className={className}>
      <Label htmlFor={id} {...props}>
        <CheckboxInput
          id={id}
          type="checkbox"
          onChange={onChange}
          checked={checked}
          disabled={disabled}
          onClick={onClick}
        />
        {label}
      </Label>
    </CheckboxForm>
  );
};

export default React.memo(Checkbox);

const CheckboxForm = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  label {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    font-weight: 400;
    cursor: pointer;
  }
`;

const CheckboxInput = styled.input`
  position: relative;
  appearance: none;
  padding: 0;
  margin: 0;
  width: 16px;
  height: 16px;
  border: 1px solid ${({ theme }) => theme.color.gray200};
  background: ${({ theme }) => theme.color.white};
  cursor: pointer;
  border-radius: 4px;
  flex: 0 0 auto;

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3Csvg stroke='%23fff' fill='%23fff' stroke-width='0' viewBox='0 0 20 20' aria-hidden='true' height='16px' width='16px' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clip-rule='evenodd'%3E%3C/path%3E%3C/svg%3E");
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: ${({ theme }) => theme.color.primary};
  }

  &:disabled {
    cursor: not-allowed;

    &:after {
      content: "";
      display: inline-block;
      position: absolute;
      left: 48%;
      top: -2px;
      width: 1px;
      height: 19px;
      background: ${({ theme }) => theme.color.gray200};
      transform: rotate(45deg) translateX(-50%);
    }

    &:checked {
      background-color: ${({ theme }) => theme.color.gray300};
    }
  }
`;
