import React, { useState, useContext } from "react";
import moment from "moment";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import {
  AppointmentModalContainer,
  DayFreeHour,
  DayDisabledHour,
  ConfirmButton,
  Spinner,
} from "./AppointmentModal.styles";
import { postAppointment } from "../../services/calendar.services";
import { StateContext } from "../../../pages/_app";
import { CloseStyledSVG } from "../../../styles/styledSVG";

const AppointmentModal = ({ appointment, taken }) => {
  const { setStateContext } = useContext(StateContext);
  const [loading, setLoading] = useState(false);
  const [errorCall, setErrorCall] = useState(false);
  const [successCall, setSuccessCall] = useState(false);
  // console.log({ appointment, taken });

  return (
    <Popup
      trigger={
        taken ? (
          <DayDisabledHour disabled>
            {moment(appointment.Start).format("HH:mm")}
          </DayDisabledHour>
        ) : (
          <DayFreeHour>{moment(appointment.Start).format("HH:mm")}</DayFreeHour>
        )
      }
      modal
      nested
      onClose={() => {
        setErrorCall(false);
        setLoading(false);
        setSuccessCall(false);
      }}
    >
      {(close) => {
        if (loading) {
          return (
            <AppointmentModalContainer className="modal">
              <Spinner />
            </AppointmentModalContainer>
          );
        }
        if (errorCall) {
          return (
            <AppointmentModalContainer className="modal">
              <CloseStyledSVG onClick={close}></CloseStyledSVG>
              there was an error please try again
            </AppointmentModalContainer>
          );
        }
        if (successCall) {
          return (
            <AppointmentModalContainer className="modal">
              <CloseStyledSVG onClick={close}></CloseStyledSVG>
              Appointment Changed
            </AppointmentModalContainer>
          );
        }

        return (
          <AppointmentModalContainer className="modal">
            <CloseStyledSVG onClick={close}></CloseStyledSVG>
            <h3>
              <b>Reschedule</b>
            </h3>
            Click the button to confirm:
            <ConfirmButton
              onClick={() => {
                setLoading(true);
                postAppointment({ appointment })
                  .then(() => {
                    setStateContext((prevState) => {
                      return {
                        ...prevState,
                        dateAppointed: moment(appointment.Start).format(
                          "LLLL"
                        ),
                      };
                    });
                    setSuccessCall(true);
                  })
                  .catch(() => setErrorCall(true))
                  .finally(() => {
                    setLoading(false);
                  });
              }}
            >
              {moment(appointment.Start).format("MMMM Do YYYY, HH:mm")}
            </ConfirmButton>
          </AppointmentModalContainer>
        );
      }}
    </Popup>
  );
};

export default AppointmentModal;
