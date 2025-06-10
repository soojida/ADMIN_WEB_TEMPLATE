// 공통
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { transparentize } from "polished";
import { useNavigate } from "react-router-dom";

// 이미지
import logoBI from "@/assets/logo_w.svg";
import Button from "@/components/atoms/button/Button";

// 아이콘
import { GoTriangleDown } from "react-icons/go";
import useClickOutside from "@/hooks/common/useClickOutside";

const Header = () => {
  const navigate = useNavigate();
  const utilInfoRef = useRef<HTMLDivElement | null>(null);
  const [isToggle, setIsToggle] = useState<boolean>(false);

  // 외부 영역 클릭 감지, 툴팁 표출 제어 함수
  useClickOutside(utilInfoRef, () => setIsToggle(false));

  return (
    <HeaderLayout>
      <HeaderLogo onClick={() => navigate("/main")}>
        {/* BI 표출 영역입니다. */}
        <img src={logoBI} alt="BI" />
      </HeaderLogo>
      <HeaderUtil ref={utilInfoRef}>
        {/* 게정 정보 표출 영역입니다. */}
        <Button
          icon={
            <GoTriangleDown
              style={{
                fill: "white",
                transform: isToggle ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          }
          direction="right"
          size="large"
          style={{
            padding: 0,
          }}
          onClick={() => setIsToggle((prev) => !prev)}
        >
          admin
        </Button>
        {/* 게정 부가 정보 표출 영역입니다. */}
        {isToggle && (
          <UtilTooltip>
            <Button onClick={() => navigate("/login")}>로그아웃</Button>
          </UtilTooltip>
        )}
      </HeaderUtil>
    </HeaderLayout>
  );
};

export default React.memo(Header);

const HeaderLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 52px;
  flex: 0 0 52px;
  padding: 0 32px;
  background: ${({ theme }) => theme.color.primary};
`;
const HeaderLogo = styled.div`
  display: flex;
  align-items: flex-end;
  cursor: pointer;
  color: ${({ theme }) => theme.color.white};

  img {
    height: 20px;
    object-fit: cover;
  }

  span {
    line-height: 1;
    font-size: 14px;
    margin-left: 6px;
    font-weight: 500;
  }
`;
const HeaderUtil = styled.div`
  position: relative;
`;
const UtilTooltip = styled.div`
  position: absolute;
  left: 50%;
  display: flex;
  flex-direction: column;
  width: max-content;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.color.primary};
  border: 1px solid ${({ theme }) => transparentize(0.8, theme.color.white)};
`;
