import React, { useContext } from "react";
import moment from "moment";
import { StateContext } from "../../../pages/_app";
import { CalendarConfirmedStyledSVG } from "../../../styles/styledSVG";
import { AppointmentDescriptionContainer } from "./AppointmentDesciption.styles";

const AppointmentDescription = () => {
  const { stateContext } = useContext(StateContext);
  return (
    <AppointmentDescriptionContainer>
      <CalendarConfirmedStyledSVG />
      {moment(stateContext.dateAppointed).format("MMMM Do YYYY, HH:mm")}
    </AppointmentDescriptionContainer>
  );
};

export default AppointmentDescription;
