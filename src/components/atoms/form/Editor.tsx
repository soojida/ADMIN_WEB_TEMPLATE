// 공통
import React, { useState } from "react";
import styled from "styled-components";

// 라이브러리
import ReactQuill from "react-quill-new";
import "quill/dist/quill.snow.css";

const Editor = () => {
  const [value, setValue] = useState("");

  const formats = [
    "bold",
    "italic",
    "underline",
    "strike", // 텍스트 스타일
    "color",
    "background", // 글자색, 배경색
    "header", // 헤딩
    "list",
    "bullet", // 리스트
    "link",
    "image",
    "video", // 링크, 이미지, 비디오
    "align", // 정렬
    "script", // 위첨자/아래첨자
    "indent", // 들여쓰기
    "size", // 글자 크기
    "font", // 글꼴
  ];

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"], // 굵게, 기울임, 밑줄, 취소선
      // [{ header: 1 }, { header: 2 }], // 헤딩 1, 2
      [{ list: "ordered" }, { list: "bullet" }], // 순서있는 리스트, 불릿 리스트
      [{ script: "sub" }, { script: "super" }], // 아래 첨자, 위 첨자
      [{ indent: "-1" }, { indent: "+1" }], // 들여쓰기
      [{ direction: "rtl" }], // 텍스트 방향
      [{ size: ["small", false, "large", "huge"] }], // 글자 크기
      [{ color: [] }, { background: [] }], // 글자색, 배경색
      [{ font: [] }], // 글꼴
      [{ align: [] }], // 정렬
      ["link", "image"], // 링크, 이미지
      ["clean"], // 서식 제거
    ],
  };
  return (
    <EditorForm>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
        formats={formats} // formats 기반 modules 표출되므로 필수 입력
      />
    </EditorForm>
  );
};

export default React.memo(Editor);

const EditorForm = styled.div`
  .ql-toolbar.ql-snow,
  .ql-container.ql-snow {
    border: 1px solid ${({ theme }) => theme.color.blueGray100};
  }
  // 툴바 영역 스타일
  .ql-toolbar.ql-snow {
    text-align: left;
    border-radius: 4px 4px 0 0;
  }
  // 툴바 내용 영역 스타일
  .ql-container.ql-snow {
    height: 150px;
    min-height: 150px;
    overflow: auto;
    border-radius: 0 0 4px 4px;
  }
  // 글자 기울임
  .ql-editor em {
    font-style: italic !important;
  }
`;
