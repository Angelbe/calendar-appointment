import styled from "styled-components";
import Arrow from "../svg/next.svg";
import CalendarConfirmed from "../svg/date.svg";
import Close from "../svg/cancel.svg";

export const ArrowStyledSVG = styled(Arrow)`
  width: 50px;
  height: 50px;
`;

export const CalendarConfirmedStyledSVG = styled(CalendarConfirmed)`
  width: 20px;
  height: 20px;
  margin-right: 15px;
`;

export const CloseStyledSVG = styled(Close)`
  fill: ${({ theme }) => theme.mainColor};
  cursor: pointer;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0;
  right: 0;
  :hover {
    fill: ${({ theme }) => theme.mainColorDarker};
  }
`;
