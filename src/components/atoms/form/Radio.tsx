// 공통
import React from "react";
import styled from "styled-components";

// 컴포넌트
import Label from "../label/Label";

export type RadioProps = {
  // input과 label 연결
  id: string;
  // input 값 설정
  value: string | number;
  // 라벨 텍스트
  label: React.ReactNode;
  // radio 그룹 연결
  name?: string;
  // 선택 여부
  checked?: boolean;
  // 상태 변화 처리 함수
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // 비활성 여부
  disabled?: boolean;

  // 클래스명
  className?: string;
};
const Radio = ({
  className,
  id,
  value,
  name,
  checked,
  onChange,
  disabled,
  label,
  ...props
}: RadioProps) => {
  return (
    <RadioForm className={className}>
      <Label htmlFor={id} {...props}>
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        {label}
      </Label>
    </RadioForm>
  );
};

export default React.memo(Radio);

const RadioForm = styled.div`
  display: flex;

  label {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    font-weight: 400;
    cursor: pointer;
  }

  input[type="radio"] {
    appearance: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.color.gray200};

    &:disabled {
      border-color: ${({ theme }) => theme.color.gray200};
      cursor: not-allowed;
    }

    &:checked {
      border: none;
      background: url("data:image/svg+xml,%3Csvg stroke='%23244410' fill='%23244410' stroke-width='0' viewBox='0 0 24 24' height='22px' width='22px' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='none' d='M0 0h24v24H0V0z'%3E%3C/path%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'%3E%3C/path%3E%3Ccircle cx='12' cy='12' r='5'%3E%3C/circle%3E%3C/svg%3E")
        no-repeat center center;

      &:disabled {
        border-color: ${({ theme }) => theme.color.gray200};
        background: url("data:image/svg+xml,%3Csvg stroke='%23d0d5dd' fill='%23d0d5dd' stroke-width='0' viewBox='0 0 24 24' height='22px' width='22px' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='none' d='M0 0h24v24H0V0z'%3E%3C/path%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'%3E%3C/path%3E%3Ccircle cx='12' cy='12' r='5'%3E%3C/circle%3E%3C/svg%3E")
          no-repeat center center;
        cursor: not-allowed;
      }
    }
  }
`;
