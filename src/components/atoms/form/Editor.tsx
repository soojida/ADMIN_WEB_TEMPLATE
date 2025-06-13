// 공통
import React from "react";
import styled from "styled-components";

type EditorProps = {};

const Editor = ({}: EditorProps) => {
  return <EditorForm></EditorForm>;
};

export default React.memo(Editor);

const EditorForm = styled.div`
  border-radius: 4px;
  padding: 12px;
  min-height: 150px;
  border: 1px solid ${({ theme }) => theme.color.blueGray100};
`;
