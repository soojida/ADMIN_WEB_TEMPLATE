import React from "react";
import styled from "styled-components";

type DefaultLayoutProps = {
  className?: string;
  header?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
};

const DefaultLayout = ({
  className,
  header,
  children,
  footer,
}: DefaultLayoutProps) => {
  return (
    <LayoutContainer className={className}>
      <LayoutInner>
        {header && <LayoutHeader>{header}</LayoutHeader>}
        <LayoutContents>{children}</LayoutContents>
        {footer && <LayoutFooter>{footer}</LayoutFooter>}
      </LayoutInner>
    </LayoutContainer>
  );
};

export default React.memo(DefaultLayout);

const LayoutContainer = styled.div``;
const LayoutInner = styled.div``;
const LayoutHeader = styled.div``;
const LayoutContents = styled.div``;
const LayoutFooter = styled.div``;
