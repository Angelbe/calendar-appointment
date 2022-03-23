import styled from "styled-components";

export const HomeContainer = styled.div`
  /* autoprefixer grid: autoplace */
  display: grid;
  grid-template-columns: [page-start]15% [main-start] 70% [main-end] 15% [page-end];
  grid-template-rows: [header-start] 150px [header-end main-start] 1fr [main-end footer-start] 100px [footer-end];
  min-height: 100vh;
  background-color: #edeff2;
  overflow-y: auto;
  box-sizing: content-box;
`;

export const HomeHeader = styled.header`
  grid-row: header-start / header-end;
  grid-column: page-start / page-end;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HomeMain = styled.main`
  grid-row: main-start / main-end;
  grid-column: page-start / page-end;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 25px;
  padding: 0 10%;
  overflow-y: auto-scroll;
  margin-bottom: 20px;
`;

export const ReturnArrow = styled.div`
  cursor: pointer;
  margin-top: 25px;
  grid-row: main-start / main-end;
  grid-column: page-start / main-start;
  display: flex;
  justify-content: flex-end;
`;

export const HomeFooter = styled.footer`
  grid-row: footer-start / footer-end;
  grid-column: page-start / page-end;
  width: 100%;
  height: 100px;
  align-self: baseline;
  border-top: 1px solid #000000;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 15px;
  div {
    margin-top: 10px;
  }
  background-color: #edeff2;
`;
