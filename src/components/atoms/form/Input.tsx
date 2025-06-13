// 공통
import React, { useState } from "react";
import styled from "styled-components";
import { transparentize } from "polished";

// 함수
import { useInput } from "@/hooks/components/input/useInput";
import Label, { LabelProps } from "../label/Label";

export type InputProps = {
  // input type 설정 (HTML의 input type 속성에 있는 값들로 제한)
  type?:
    | "text"
    | "password"
    | "email"
    | "number"
    | "search"
    | "tel"
    | "url"
    | "file";
  // placeholder
  placeholder?: string;
  // input 외부의 요소 설정 (ex. 버튼)
  children?: React.ReactNode | string;
  // 클래스명
  className?: string;
  // 활성화 여부
  disabled?: boolean;
  // 입력값 반환 함수
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
  // input 내부 아이콘 사용시
  icon?: React.ReactNode;
  // 글자수 입력값 제한
  maxLength?: number;
  // 글자수 입력 최소값
  min?: number;
  /// 글자수 입력 최대값
  max?: number;
  // 에러메세지
  errorMessage?: string;
  // 스타일
  style?: React.CSSProperties;
  // 데이터
  value?: string | number;
  // 라벨 속성 사용
  labelProps?: LabelProps;
};

const Input = ({
  type = "text",
  placeholder,
  children,
  className,
  disabled = false,
  onChange,
  onKeyDown,
  icon,
  maxLength,
  min,
  max,
  errorMessage,
  style,
  value,
  labelProps,
  ...rest
}: InputProps) => {
  const htmlForId = labelProps?.htmlFor ?? "file-input";
  const [dynamicMin] = useState(min ?? 0);
  const [localFileName, setLocalFileName] = useState("");
  const { dynamicValue, onHandleInputChange } = useInput({
    min,
    max,
    onChange,
  });

  const isValidImageExtension = (fileName: any) => {
    const allowedExtensions = ["jpg", "jpeg", "png"];
    const extension = fileName.split(".").pop().toLowerCase();

    return allowedExtensions.includes(extension);
  };

  const handleFileChange = (id: any, e: any) => {
    e.stopPropagation();

    if (e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      const fileName = selectedFile.name;

      const isImageUpload = id?.toLowerCase().includes("image");

      if (isImageUpload && !isValidImageExtension(fileName)) {
        alert("이미지 파일만 업로드 가능합니다. (.jpg, .jpeg, .png)");
        return;
      }

      if (onChange) {
        onChange(selectedFile);
      } else {
        setLocalFileName(selectedFile.name);
      }
    }
  };

  switch (type) {
    case "file":
      return (
        <InputFileForm>
          <InputStyle
            value={value == null || value === "" ? localFileName : value}
            className={className}
            placeholder={placeholder}
            readOnly
            disabled={disabled}
          />
          <InputFileLabel
            className={disabled ? "disabled" : ""}
            htmlFor={htmlForId}
            {...labelProps}
          />
          <input
            type="file"
            id={htmlForId}
            accept="image/*"
            disabled={disabled}
            onChange={(e) => {
              handleFileChange(htmlForId, e);
            }}
          />
        </InputFileForm>
      );
    default:
      return (
        <InputForm className={className} style={style}>
          <InputStyle
            type={type}
            placeholder={placeholder}
            value={value}
            disabled={disabled}
            onChange={onHandleInputChange}
            onKeyDown={onKeyDown}
            icon={icon}
            min={dynamicMin}
            max={max}
            className={errorMessage ? "error" : ""}
            {...rest}
          />
          {/* 내부 아이콘 */}
          {icon && <Icon>{icon}</Icon>}
          {/* 내부 글자수 제한 */}
          {maxLength && (
            <MaxLength>
              ({dynamicValue.length}/{max})
            </MaxLength>
          )}

          {/* 외부 버튼 */}
          {children}
        </InputForm>
      );
  }
};
export default React.memo(Input);

const InputFileForm = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
  }
`;

const InputFileLabel = styled(Label)`
  display: flex;
  align-items: center;
  height: 36px;
  padding: 0 12px;
  flex: 0 0 auto;
  color: ${({ theme }) => theme.color.primary}!important;
  font-size: 13px;
  font-weight: 400;
  border-radius: 4px;
  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.primary};
  cursor: pointer;

  &.disabled {
    height: 38px;
    color: ${({ theme }) => theme.color.gray300}!important;
    background: ${({ theme }) => theme.color.background};
    border: 1px solid ${({ theme }) => theme.color.gray200};
    box-sizing: content-box;
  }
`;

const InputForm = styled.div`
  position: relative;
  display: flex;
  gap: 4px;
`;

const InputStyle = styled.input<{ icon?: any }>`
  width: 100%;
  height: 38px;
  padding: ${({ icon }) => (icon ? "0 42px 0 12px" : "0 12px")};
  font-size: 13px;
  border: 1px solid ${({ theme }) => theme.color.blueGray100};
  background: ${({ theme }) => theme.color.white};
  border-radius: 4px;

  &:focus,
  &.focus {
    border: 1px solid ${({ theme }) => theme.color.primary};
    box-shadow: 0 0 3px 0
      ${({ theme }) => transparentize(0.5, theme.color.primary)};
  }
  &.error {
    border: 1px solid ${({ theme }) => theme.color.primary};
    box-shadow: 0 0 3px 0
      ${({ theme }) => transparentize(0.5, theme.color.primary)};
  }
  &::placeholder {
    color: ${({ theme }) => theme.color.gray300};
    font-size: 13px;
  }

  &:disabled {
    color: ${({ theme }) => theme.color.gray400};
    background: ${({ theme }) => theme.color.gray100};
  }
`;

const Icon = styled.span`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.color.gray300};
`;

const MaxLength = styled.span`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.color.gray400};
  font-size: 12px;
`;
