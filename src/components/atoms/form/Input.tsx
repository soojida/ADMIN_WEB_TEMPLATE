// 공통
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { transparentize } from "polished";

// 함수
import { useImage } from "@/hooks/components/input/useImage";
import { useInput } from "@/hooks/components/input/useInput";

// 컴포넌트
import Label, { LabelProps } from "../label/Label";
import Button from "../button/Button";

export type InputImages = {
  name?: string;
  preview?: string | null;
  file: File;
};

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
    | "file"
    | "image";
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
  // 이미지 아이디
  id?: string;
  // 이미지 다중 선택 여부
  multiple?: boolean;
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
  id,
  multiple,
  ...props
}: InputProps) => {
  // 타입이 파일인 경우 상태 관리
  const fileInputRef = useRef<HTMLInputElement>(null);
  const htmlForId = labelProps?.htmlFor ?? "file-input";
  const [localFileName, setLocalFileName] = useState("");

  // 타입이 이미지인 경우 상태 관리
  const [images, setImages] = useState<InputImages[]>([]);

  const { handleChangeFile, handleChangeImage, handleRemoveImage } = useImage({
    handlers: {
      onChange: (file: File) => {
        setLocalFileName(file.name);
      },
    },
    images,
    setImages,
  });

  // 타입이 이미지, 파일 이외의 경우 상태 관리
  const [dynamicMin] = useState(min ?? 0);

  const { dynamicValue, onHandleInputChange } = useInput({
    min,
    max,
    onChange,
  });

  switch (type) {
    // 타입이 image 인 경우 사용합니다. (ex. 썸네일 등 이미지 표출 시)
    case "image":
      return (
        <InputImageForm>
          <InputImageInner>
            <HiddenFileInput
              ref={fileInputRef}
              type="file"
              multiple={multiple}
              onClick={(e: any) => (e.target.value = "")}
              onChange={(e: any) => handleChangeImage(e)}
              {...props}
            />
            {/* 첨부 파일 선택 버튼 */}
            <ImageUpload>
              <ImageUploadInner className={className}>
                <Button
                  variant="primary"
                  size="small"
                  // 숨겨진 input 클릭
                  onClick={() => fileInputRef.current?.click()}
                >
                  파일 선택
                </Button>
              </ImageUploadInner>
              <ImageName>.jpg, .jpeg, .png </ImageName>
            </ImageUpload>

            {/* 첨부 파일 미리보기 */}
            {images.length > 0 && (
              <ImagePreviewForm>
                {images.map((file, index) => (
                  <ImageItem key={index}>
                    <ImageFile
                      src={file.preview ?? undefined}
                      alt={file.name}
                    />
                    <ImageName>{file.name}</ImageName>
                    <RemoveButton onClick={() => handleRemoveImage(index)}>
                      ❌
                    </RemoveButton>
                  </ImageItem>
                ))}
              </ImagePreviewForm>
            )}
          </InputImageInner>
        </InputImageForm>
      );
    // 타입이 file 인 경우 사용합니다. (ex. 엑셀 등의 첨부파일 표출 시)
    case "file":
      return (
        <InputFileForm>
          <InputStyle
            value={localFileName}
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
            // accept="image/*"
            disabled={disabled}
            onChange={(e: any) => {
              handleChangeFile({ id: htmlForId, e });
            }}
          />
        </InputFileForm>
      );
    // 이 외의 타입에 사용합니다.
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
            {...props}
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

// 타입이 이미지인 경우
const HiddenFileInput = styled.input`
  display: none;
`;
const InputImageForm = styled.div``;
const InputImageInner = styled.div`
  display: flex;
  gap: 8px;
`;
const ImageUpload = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const ImageUploadInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 100px;
  height: 100px;
  font-size: 12px;
  border-radius: 4px;
  border: 1px dashed ${({ theme }) => theme.color.blueGray200};
  background: ${({ theme }) => theme.color.blueGray50};

  &.error {
    border: 1px solid ${({ theme }) => theme.color.error};
    box-shadow: 0 0 3px 0
      ${({ theme }) => transparentize(0.5, theme.color.error)};
  }

  svg {
    font-size: 18px;
    fill: ${({ theme }) => theme.color.gray400};
  }
`;

const ImageItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  position: relative;
`;

const ImageFile = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color.blueGray100};
`;

const ImageName = styled.p`
  max-width: 90px;
  font-size: 12px;
  text-align: center;
  word-break: break-word;
`;

export const ImagePreviewForm = styled.div`
  display: flex;
  gap: 12px;
  overflow: auto;
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 2px;
  right: 0;
  width: 18px;
  border-radius: 0 4px 0 4px;
  background: none;
  color: ${({ theme }) => theme.color.error};
  font-size: 10px;
  cursor: pointer;
`;

// 타입이 파일인 경우 스타일 코드 ~
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
