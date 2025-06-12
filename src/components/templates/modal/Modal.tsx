// 공통
import React from "react";
import styled, { useTheme } from "styled-components";

// 상태 관리
import { useModalStore } from "@/stores/components/useModalStore";

// 아이콘
import { IoCloseOutline } from "react-icons/io5";

// 컴포넌트
import Button from "@/components/atoms/button/Button";

// 유틸리티
import { getBackgroundStyle } from "@/utils/components/modal/getBackgroundStyle";

export type ModalProps = {
  // 아이디명
  id?: string;
  // 헤더 영역 표출 판단
  isHeader?: boolean;
  // 모달 타이틀
  title?: string | React.ReactNode;
  // 모달 닫기 버튼 클릭 시 호출 함수
  onClick?: () => void;
  // 모달 하단 내용 (주로 버튼 사용)
  footer?: React.ReactNode;
  // 모달 컨텐츠
  children: React.ReactNode;
  // 모달 배경색상 설정
  background?: "dimmed" | "non";
  // 모달 사이즈
  width?: string;
};

const Modal = ({
  id,
  isHeader = true,
  title,
  onClick,
  footer,
  children,
  background = "dimmed",
  width,
}: ModalProps) => {
  const { onCloseModal } = useModalStore();
  const theme = useTheme();

  return (
    <ModalContainer id={id}>
      <ModalArea background={background}>
        <ModalFrame background={background}>
          <ModalInner className="modal__inner" width={width}>
            {isHeader && (
              <ModalHeader className="modal__header">
                {title && <ModalTitle>{title}</ModalTitle>}
                <Button
                  className="icon"
                  onClick={() => {
                    onCloseModal();
                    if (onClick) onClick();
                  }}
                >
                  <IoCloseOutline style={{ stroke: theme.color.gray400 }} />
                </Button>
              </ModalHeader>
            )}
            <ModalContents className="modal__contents">
              {children}
            </ModalContents>
            {footer && (
              <ModalFooter className="modal__footer">{footer}</ModalFooter>
            )}
          </ModalInner>
        </ModalFrame>
      </ModalArea>
    </ModalContainer>
  );
};
export default React.memo(Modal);

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
export const ModalArea = styled.div<ModalProps>`
  display: flex;
  flex-direction: column;
  height: 100%;

  &:before {
    display: block;
    flex: 1 1 0%;
    background: rgba(0, 0, 0, 0.15);
    content: "";
  }
  &:after {
    display: block;
    flex: 1 1 0%;
    background: rgba(0, 0, 0, 0.15);
    content: "";
  }
  ${({ background }) => getBackgroundStyle(background)}
`;
const ModalFrame = styled.div<ModalProps>`
  display: flex;
  justify-content: center;
  flex: 0;
  height: 83.3%;
  ${({ background }) => getBackgroundStyle(background)}
`;
const ModalInner = styled.div<{ width?: string }>`
  display: flex;
  flex-direction: column;
  position: relative;
  background: ${({ theme }) => theme.color.white};
  border-radius: 8px;
  min-width: ${({ width }) => (width === undefined ? "auto" : width)};
  max-width: ${({ width }) => (width === undefined ? "auto" : width)};
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.05);
`;
export const ModalHeader = styled.div<{ title?: string }>`
  display: flex;
  align-items: center;
  padding: 16px 20px 8px;
  z-index: 2;

  button {
    margin-left: auto;
  }
`;
const ModalTitle = styled.h2`
  font-size: 16px;
`;
export const ModalContents = styled.div`
  padding: 16px 20px;
  font-size: 14px;
`;
export const ModalFooter = styled.div`
  width: 100%;
  padding: 8px 20px 16px;

  .btn__group {
    justify-content: flex-end;

    button {
      flex: 0 0 auto;
      padding: 0 24px;
    }
  }
`;
