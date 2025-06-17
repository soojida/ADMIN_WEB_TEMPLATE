import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
      box-sizing: border-box;
  }
  * {
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.color.gray900};
    font-family: "Pretendard Variable", -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", sans-serif;
    font-weight: 400;
  }
  /* 시간 popover 섹션 영역 여백 제거 */
  .MuiMultiSectionDigitalClockSection-root::after{
      height: auto!important;
  }
  
  body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    width: var(--app-width);
    height: var(--app-height);
    touch-action: auto;
    letter-spacing: -0.03em;
    padding: 0;
    margin: 0;
    /* touch-action: pan-x pan-y; */
  }
  html,body,div,span,object,h1,h2,h3,h4,h5,h6,p,blockquote,pre,abbr,address,cite,code,del,em,img,ins,q,strong,sub,sup,b,i,dl,dt,dd,ol,ul,li,a,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,figcaption,figure,footer,header,hgroup,menu,nav,section,summary,time,mark,audio,video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    -webkit-text-size-adjust: none;
  }
  /* IE의 경우 */
  input::-ms-clear,
  input::-ms-reveal{
    display:none;
  }
  /* 크롬의 경우 */
  input::-webkit-search-decoration,
  input::-webkit-search-cancel-button,
  input::-webkit-search-results-button,
  input::-webkit-search-results-decoration{
    display:none;
  }
  article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section {
    display: block
  }

  ul,ol,li,dl {
      list-style: none
  }

  blockquote,q {
    quotes: none
  }

  blockquote:before,blockquote:after,q:before,q:after {
    content: '';
  }

  a,a:link,a:hover,a:active {
    color: #333;
    text-decoration: none;
  }

  em,i,address {
    font-style: normal;
    font-weight: normal;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  img,fieldset {
    border: 0;
  }

  hr,legend {
    display: none;
  }

  textarea {
    resize: none;

    &:focus-visible {
      outline: none;
    }
  }

  input[type="time"],
  input[type="date"] {
    font-size: 12px;
  }

  input[type="time"]::-webkit-calendar-picker-indicator,
  input[type="date"]::-webkit-calendar-picker-indicator{
    padding: 16px 0;
    position: absolute;
    right: 8px;
  }

  input[type="time"]::-webkit-calendar-picker-indicator {
    width: 18px;
    height: 18px;
    /* background-image: url("data:image/svg+xml,%3Csvg stroke='currentColor' fill='%2348575e' stroke-width='0' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z'%3E%3C/path%3E%3Cpath d='M13 7h-2v6h6v-2h-4z'%3E%3C/path%3E%3C/svg%3E"); */
    background-image: url("data:image/svg+xml,%3Csvg stroke='currentColor' fill='%23b4bbc1' stroke-width='0' viewBox='0 0 512 512' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-opacity='.9'%3E%3Cpath d='M255.8 48C141 48 48 141.2 48 256s93 208 207.8 208c115 0 208.2-93.2 208.2-208S370.8 48 255.8 48zm.2 374.4c-91.9 0-166.4-74.5-166.4-166.4S164.1 89.6 256 89.6 422.4 164.1 422.4 256 347.9 422.4 256 422.4z'%3E%3C/path%3E%3Cpath d='M266.4 152h-31.2v124.8l109.2 65.5 15.6-25.6-93.6-55.5V152z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  }

  /* icon color : #b4bbc1 */
  input[type="date"]::-webkit-calendar-picker-indicator {
    width: 18px;
    height: 18px;
    background-image: url("data:image/svg+xml,%3Csvg stroke='currentColor' fill='%2348575e' stroke-width='0' viewBox='0 0 1024 1024' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z'%3E%3C/path%3E%3C/svg%3E");
    background-image: url("data:image/svg+xml,%3Csvg stroke='currentColor' fill='%23b4bbc1' stroke-width='0' viewBox='0 0 1024 1024' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z'%3E%3C/path%3E%3C/svg%3E");
  }

  input[type="number"] {
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  textarea,input {
    -webkit-border-radius: 1px;
    -webkit-appearance: none;
    /*form요소의 기본 스타일을 없앰*/
  }
  button, input, select {
    border: 0;
    margin: 0;
    padding: 0;
    background: none;
    outline: 0;
    cursor: pointer;
    color: #333;
  }
  button {
    &:disabled,
    &[disabled] {
        cursor: default;
    }
  }
  input {
    position: relative;
    cursor: text;
  }
  select {
    appearance: none;
    background: url("data:image/svg+xml,%3Csvg stroke='currentColor' fill='%2348575e' stroke-width='0' viewBox='0 0 1024 1024' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.2 275.4c0-8.6 3.4-17.401 10-24.001 13.2-13.2 34.8-13.2 48 0l451.8 451.8 445.2-445.2c13.2-13.2 34.8-13.2 48 0s13.2 34.8 0 48L542 775.399c-13.2 13.2-34.8 13.2-48 0l-475.8-475.8c-6.8-6.8-10-15.4-10-24.199z'%3E%3C/path%3E%3C/svg%3E") no-repeat right 8px center;
    background-size: 10px;
  }
  /* 스크롤바 스타일 */
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background: ${({ theme }) => theme.color.gray200};
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.color.blueGray50};
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.color.gray300};
    cursor: pointer;
  }
   /* 비활성화 */
  .disabled,
  :disabled {
    color: ${({ theme }) => theme.color.gray300};
    background: ${({ theme }) => theme.color.gray100};
    border-color: ${({ theme }) => theme.color.gray200};
    cursor: not-allowed;

    svg {
      fill: #98a2b3;
    }
    &:hover {
      color: ${({ theme }) => theme.color.gray300};
      background: ${({ theme }) => theme.color.gray100};
      border-color: ${({ theme }) => theme.color.gray200};
      cursor: not-allowed;
    }
  }
`;
