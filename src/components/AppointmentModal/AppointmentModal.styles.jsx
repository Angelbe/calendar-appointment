import styled, { keyframes } from "styled-components";

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const Spinner = styled.div`
  border: 0.2em solid;
  border-color: ${({ theme }) => theme.mainColorLighter};
  border-top: 0.2em solid;
  border-top-color: ${({ theme }) => theme.mainColor};
  border-radius: 50%;
  width: 2.28571429rem;
  height: 2.28571429rem;
  animation: ${spin} 0.6s linear infinite;
`;

export const AppointmentModalContainer = styled.div`
  position: relative;
  padding: 10%;
  min-height: 300px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export const DayHour = styled.button`
  text-align: center;
  font-weight: 600;
  width: 100%;
  padding: 10px 0;
  margin-top: 15px;
  border: 0;
  font-size: 18px;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const DayFreeHour = styled(DayHour)`
  color: ${({ theme }) => theme.mainColor};
  background-color: ${({ theme }) => theme.mainColorLighter};
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.mainColorDarker};
  }
`;

export const DayDisabledHour = styled(DayHour)`
  color: ${({ theme }) => theme.disabledColor};
  background-color: ${({ theme }) => theme.disabledColorLighter};
  cursor: not-allowed;
`;

export const ConfirmButton = styled.button`
  color: #ffffff;
  background-color: ${({ theme }) => theme.mainColor};
  text-align: center;
  font-weight: 600;
  width: 100%;
  padding: 10px 0;
  margin-top: 50px;
  border: 0;
  font-size: 18px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: background-color 0.25s ease;
  :hover {
    background-color: ${({ theme }) => theme.mainColorDarker};
  }
`;