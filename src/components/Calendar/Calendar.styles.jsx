import styled from "styled-components";
import { ArrowStyledSVG } from "../../../styles/styledSVG";
import { Spinner } from "../AppointmentModal/AppointmentModal.styles";

export const CalendarContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
`;

export const WeekContainer = styled.div`
  /* autoprefixer grid: autoplace */
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-areas: ". . . . center . . . . ";
  justify-items: stretch;
  column-gap: 5px;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const WeekExpandable = styled.div`
  padding: 10px;
  border-radius: 10px 10px 0 0;
  min-height: 500px;
  max-height: ${(props) => (props.expanded ? "100%" : "500px")};
  background-color: #ffffff;
  transition: max-height 0.5s ease;
  overflow: hidden;
`;

export const DayContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
`;

export const DayName = styled.div`
  font-weight: 600;
`;

export const DayNumber = styled.div`
  color: #a0a7b1;
`;

export const MoreHoursContainer = styled.div`
  width: 100%;
  background-color: #ffffff;
  text-align: center;
  border-radius: 0 0 10px 10px;
`;

export const MoreHoursButton = styled.button`
  width: 75%;
  font-size: 18px;
  padding: 10px;
  color: ${({ theme }) => theme.mainColor};
  background-color: transparent;
  border: 0;
  border-top: 2px solid #edeff2;
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.mainColorDarker};
  }
`;

export const SpinnerCalendar = styled(Spinner)`
  grid-area: center;
`;

export const ArrowStyledSVGRight = styled(ArrowStyledSVG)`
  justify-self: center;
  fill: ${({ theme }) => theme.mainColor};
  cursor: Pointer;
  :hover {
    fill: ${({ theme }) => theme.mainColorDarker};
  }
`;

export const ArrowStyledSVGLeft = styled(ArrowStyledSVG)`
  justify-self: center;
  transform: rotate(180deg);
  fill: ${({ theme }) => theme.mainColor};
  :hover {
    fill: ${({ theme }) => theme.mainColorDarker};
  }
`;

export const ArrowContainer = styled.button`
  border: 0;
  background-color: transparent;
  justify-self: center;
  align-self: flex-start;
  cursor: pointer;
  :disabled {
    cursor: not-allowed;
    svg {
      fill: ${({ theme }) => theme.disabledColor};
    }
  }
`;
