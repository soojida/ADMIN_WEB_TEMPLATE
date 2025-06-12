// 공통
import React from "react";
import styled from "styled-components";

// 컴포넌트
import Button, { ButtonStyle } from "../button/Button";

// 아이콘
import {
  MdOutlineKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";

type PaginationProps = {
  className?: string;
  currentPage?: number;
  totalPages?: number;
  pageGroup?: number[];
};

const Pagination = ({
  className,
  currentPage = 1,
  totalPages = 1,
  pageGroup,
}: PaginationProps) => {
  // pageGroup이 전달되지 않으면 [currentPage]만 보여줌
  const pages = pageGroup && pageGroup.length > 0 ? pageGroup : [currentPage];

  return (
    <PaginationForm className={className}>
      <PaginationInner>
        {/* 이전 페이지 버튼 */}
        <PrevButton
          className="icon"
          variant={currentPage > 1 ? "" : "secondary"}
          disabled={currentPage === 1}
          // onClick={() => handlePageChange(currentPage - 1)}
        >
          <MdOutlineKeyboardArrowLeft />
        </PrevButton>

        {/* 페이지 번호 버튼 */}
        {pages.map((page) => (
          <Pageination
            key={page}
            variant={currentPage === page ? "primary" : ""}
            className={currentPage === page ? "active icon" : "icon"}
            // onClick={() => handlePageChange(page)}
          >
            {page}
          </Pageination>
        ))}

        {/* 다음 페이지 버튼 */}
        <NextButton
          className="icon"
          variant={currentPage < totalPages ? "" : "secondary"}
          disabled={currentPage === totalPages}
          // onClick={() => handlePageChange(currentPage + 1)}
        >
          <MdKeyboardArrowRight />
        </NextButton>
      </PaginationInner>
    </PaginationForm>
  );
};

export default React.memo(Pagination);

const PaginationForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PaginationInner = styled.div`
  display: flex;

  ${ButtonStyle} {
    padding: 0;
    margin-left: -1px;
    border: 1px solid ${({ theme }) => theme.color.gray200};
    box-sizing: border-box;

    &.active {
      border: 1px solid ${({ theme }) => theme.color.primary};
    }

    svg {
      font-size: 16px;
    }
  }
`;

const PrevButton = styled(Button)`
  border-radius: 4px 0 0 4px;
`;

const NextButton = styled(Button)`
  border-radius: 0 4px 4px 0;
`;

const Pageination = styled(Button)`
  border-radius: 0;
`;
