// 공통
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// 이미지
import logoLightBI from "@/assets/logo_w.svg";
import logoDarkBI from "@/assets/logo.svg";
import Button from "@/components/atoms/button/Button";

// 아이콘
import { GoTriangleDown } from "react-icons/go";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";

// 함수
import useClickOutside from "@/hooks/common/useClickOutside";

// 컴포넌트
import ButtonGroup from "@/components/atoms/button/ButtonGroup";

// 상태 관리
import { useThemeStore } from "@/stores/common/useThemeSotre";
import { transparentize } from "polished";

const Header = () => {
  const navigate = useNavigate();
  const utilInfoRef = useRef<HTMLDivElement | null>(null);
  const [isToggle, setIsToggle] = useState<boolean>(false);
  const { isDarkMode, setIsDarkMode } = useThemeStore();

  // 외부 영역 클릭 감지, 툴팁 표출 제어 함수
  useClickOutside(utilInfoRef, () => setIsToggle(false));

  return (
    <HeaderLayout>
      <HeaderLogo onClick={() => navigate("/main")}>
        {/* BI 표출 영역입니다. */}
        <img src={isDarkMode ? logoLightBI : logoDarkBI} alt="BI" />
      </HeaderLogo>

      <HeaderUtil>
        {/* 👀 사용성에 따라 다크/라이트 모드 UI 선택 후 해당 컴포넌트 제거 */}
        <ThemeButtonGroup
          buttons={[
            {
              text: (
                <BsMoonStarsFill
                  style={{ fill: isDarkMode ? "#c1f65e" : "#dddddd" }}
                />
              ),
              size: "small",
              className: isDarkMode ? "active icon" : "icon",
              onClick: () => setIsDarkMode(true),
            },
            {
              text: (
                <BsFillSunFill
                  style={{
                    fontSize: "15px",
                    fill: !isDarkMode ? "#fbb44d" : "#eeeeee",
                  }}
                />
              ),
              size: "small",
              className: !isDarkMode ? "active icon" : "icon",
              onClick: () => setIsDarkMode(false),
            },
          ]}
        />
        <UtilInner ref={utilInfoRef}>
          {/* 게정 정보 표출 영역입니다. */}
          <Button
            icon={
              <GoTriangleDown
                style={{
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
            <UtilTooltip isDarkMode={isDarkMode}>
              <Button onClick={() => navigate("/login")}>로그아웃</Button>
            </UtilTooltip>
          )}
        </UtilInner>
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
  padding: 0 26px;
  background: ${({ theme }) => theme.background};
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;
const HeaderLogo = styled.div`
  display: flex;
  align-items: flex-end;
  cursor: pointer;
  color: ${({ theme }) => theme.text};

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
  display: flex;
  align-items: center;
  gap: 16px;

  button {
    color: ${({ theme }) => theme.text};
  }

  svg {
    fill: ${({ theme }) => theme.text};
  }
`;

const UtilInner = styled.div`
  position: relative;
`;
const UtilTooltip = styled.div<{ isDarkMode: boolean }>`
  position: absolute;
  left: 50%;
  top: 38px;
  display: flex;
  flex-direction: column;
  width: max-content;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.background};
  border: 1px solid
    ${({ theme, isDarkMode }) =>
      !isDarkMode
        ? theme.color.blueGray100
        : transparentize(0.6, theme.color.blueGray100)};
`;

const ThemeButtonGroup = styled(ButtonGroup)`
  button {
    color: ${({ theme }) => theme.text};
    font-weight: 600;
    background: ${({ theme }) => theme.background};
    border-radius: 0;
    border: 1px solid ${({ theme }) => theme.color.blueGray100};
    border-radius: 20px;
  }
`;
