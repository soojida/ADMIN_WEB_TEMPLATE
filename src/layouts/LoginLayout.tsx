import React from "react";
import styled from "styled-components";

type LoginLayoutProps = {
  className?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  logo?: string | undefined;
  desc?: React.ReactNode;
};

const LoginLayout = ({
  className,
  children,
  footer,
  logo,
  desc,
}: LoginLayoutProps) => {
  return (
    <LoginContainer className={className}>
      <LoginForm>
        <LoginInner>
          <LoginHeader>
            <h1 className="logo">
              <img src={logo} alt="BI" />
              {desc && <span>{desc}</span>}
            </h1>
          </LoginHeader>
          <LoginContents>{children}</LoginContents>
          {footer && <LoginFooter>{footer}</LoginFooter>}
        </LoginInner>
      </LoginForm>
    </LoginContainer>
  );
};

export default React.memo(LoginLayout);

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.color.background};

  &:before,
  &:after {
    content: "";
    display: block;
    flex: 1 1 0%;
  }
`;
const LoginForm = styled.div`
  display: flex;
  justify-content: center;
  flex: 0;
`;
const LoginInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* width: 440px; */
  min-width: 420px;
  min-height: 500px;
  padding: 64px 52px 68px 52px;
  background: ${({ theme }) => theme.color.white};
  border-radius: 8px;
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.05);
`;
const LoginHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  width: 100%;

  h1 {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 200px;
      object-fit: cover;
    }

    span {
      margin-top: 18px;
      color: ${({ theme }) => theme.color.gray500};
      line-height: 1;
      font-size: 14px;
      font-weight: 400;
    }
  }

  h2 {
    color: ${({ theme }) => theme.color.gray600};
    font-size: 24px;
    font-weight: 600;
  }
`;
const LoginContents = styled.div`
  position: relative;
  width: 100%;
  padding: 48px 0 64px;
`;
const LoginFooter = styled.div`
  width: 100%;
`;
