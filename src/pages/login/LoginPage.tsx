// 공통
import { useState } from "react";
import theme from "@/styles/theme";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// 컴포넌트
import Button from "@/components/atoms/button/Button";

import ErrorMessage from "@/components/atoms/message/ErrorMessage";

// 레이아웃
import LoginLayout from "@/layouts/LoginLayout";

// 이미지
import logoBI from "@/assets/logo.svg";

// 아이콘
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import InputField, {
  InputFieldGroup,
} from "@/components/templates/field/InputField";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [visiblePassword, setVisiblePassword] = useState<boolean>(false);
  return (
    <LoginLayout
      logo={logoBI}
      desc="응용기술개발팀 어드민 템플릿 가이드"
      footer={
        <Button
          className="w-full"
          variant="primary-dark"
          size="large"
          onClick={() => navigate("/sample")}
        >
          로그인
        </Button>
      }
    >
      {/* 아이디, 비밀번호 입력 영역 입니다. */}
      <InputFieldGroup>
        <InputField
          id="id"
          label="아이디"
          labelProps={{
            style: { color: theme.color.gray400, fontSize: "14px" },
          }}
          inputProps={{ placeholder: "아이디를 입력해주세요." }}
        />
        <InputField
          id="password"
          type={visiblePassword ? "text" : "password"}
          labelProps={{
            style: { color: theme.color.gray400, fontSize: "14px" },
          }}
          label="비밀번호"
          inputProps={{
            placeholder: "비밀번호를 입력해주세요.",
            children: (
              <VisibleButton
                className="icon"
                icon={visiblePassword ? <IoMdEye /> : <IoMdEyeOff />}
                onClick={() => setVisiblePassword((prev) => !prev)}
              />
            ),
          }}
        />
      </InputFieldGroup>
      {/* 에러메세지 표출 영역 입니다. */}
      <ErrorMessage>에러메세지는 여기에 공통으로 표출됩니다.</ErrorMessage>
    </LoginLayout>
  );
};

const VisibleButton = styled(Button)`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  min-width: 34px !important;
  border: 0;
  background: none;

  svg {
    font-size: 16px;
    fill: ${({ theme }) => theme.color.gray400};
  }
`;
