// 공통
import React, { useEffect, useState } from "react";
import styled from "styled-components";

// 컴포넌트
import Radio, { RadioProps } from "./Radio";

export type RadioOption = {
  // input 값 설정
  value: string | number;
  // 라벨 텍스트
  label: string;
  // 비활성 여부
  disabled?: boolean;
  // 상태 변화 처리 함수
  onChange?: () => void;
  // 초기 checked 될 value 선택
  defaultChecked?: boolean;
};
type RadioFieldProps = {
  // 라디오 컨텐츠
  radios: RadioOption[];
  // 클래스명
  className?: string;
  radioProps?: RadioProps;
};

const RadioField = ({
  radios = [],
  className,
  radioProps,
}: RadioFieldProps) => {
  const defaultCheckedRadio = radios.find((item) => item.defaultChecked)?.value;
  const [selectRadio, setSelectRadio] = useState<string | number | null>(
    // defaultCheckedRadio null 또는 undefined 인 경우 radios[0]?.value 가 초기 선택 됩니다.
    defaultCheckedRadio ?? radios[0]?.value ?? null
  );

  const onChangeRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectRadio(e.target.value);
  };

  return (
    <RadioFieldForm className={className}>
      {radios.map(({ value, label, disabled, onChange }, idx) => (
        <Radio
          label={label}
          id={`radio-${idx}`}
          key={`radio-${idx}`}
          value={value}
          checked={selectRadio === value}
          onChange={(e) => {
            onChangeRadio(e);
            onChange && onChange();
          }}
          disabled={disabled}
          {...radioProps}
        />
      ))}
    </RadioFieldForm>
  );
};

export default React.memo(RadioField);

const RadioFieldForm = styled.div`
  display: flex;
  gap: 16px;
`;
