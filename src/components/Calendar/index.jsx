import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "../../../pages/_app";
import { getWeekAppointments } from "../../services/calendar.services";
import AppointmentModal from "../AppointmentModal";
import {
  CalendarContainer,
  WeekContainer,
  WeekExpandable,
  DayContainer,
  DayNumber,
  DayName,
  MoreHoursContainer,
  MoreHoursButton,
  SpinnerCalendar,
  ArrowStyledSVGLeft,
  ArrowStyledSVGRight,
  ArrowContainer,
} from "./Calendar.styles";

const Calendar = () => {
  const { stateContext } = useContext(StateContext);
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [weekAppointments, setWeekAppointments] = useState([]);
  const [weekMonday, setWeekMonday] = useState(null);
  const weekDays = [];

  useEffect(() => {
    setLoading(true);
    const monday = moment()
      .add(7 * (page - 1), "days")
      .isoWeekday(1)
      .format("LLLL");
    getWeekAppointments({ date: monday })
      .then((r) => {
        setWeekMonday(monday);
        setWeekAppointments(r);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page]);

  if (weekMonday) {
    for (let i = 0; i <= 6; i += 1) {
      const dayBeingConstructed = moment(weekMonday).add(i, "days");
      const appointmentsOfThisDay = weekAppointments.filter((appointment) => {
        let result = false;
        if (moment(appointment.Start).isSame(dayBeingConstructed, "days")) {
          result = true;
        }
        return result;
      });
      weekDays.push(
        <DayContainer key={moment(dayBeingConstructed).format("dddd")}>
          <DayName>{dayBeingConstructed.format("dddd")}</DayName>
          <DayNumber>{dayBeingConstructed.format("DD MMM")}</DayNumber>
          {appointmentsOfThisDay.map((appointment) => {
            return (
              <AppointmentModal
                key={
                  moment(dayBeingConstructed).format("dddd") + appointment.Start
                }
                appointment={appointment}
                taken={
                  appointment.Taken ||
                  moment().isAfter(appointment.Start, "minutes") ||
                  moment(stateContext.dateAppointed).isSame(
                    appointment.Start,
                    "minutes"
                  )
                }
              />
            );
          })}
        </DayContainer>
      );
    }
  }

  return (
    <CalendarContainer>
      <p>
        <b> Did you have an unexpected Situation?</b> <br />
        You can change the appointment for when it suits you better
      </p>
      <WeekExpandable expanded={expanded}>
        <WeekContainer>
          {loading ? (
            <SpinnerCalendar />
          ) : (
            <>
              <ArrowContainer
                disabled={page === 1}
                onClick={() => {
                  if (page > 1) {
                    setPage(page - 1);
                  }
                }}
              >
                <ArrowStyledSVGLeft />
              </ArrowContainer>

              {weekDays}
              <ArrowContainer>
                <ArrowStyledSVGRight
                  onClick={() => {
                    setPage(page + 1);
                  }}
                />
              </ArrowContainer>
            </>
          )}
        </WeekContainer>
      </WeekExpandable>
      <MoreHoursContainer>
        <MoreHoursButton onClick={() => setExpanded(!expanded)}>
          see more hours
        </MoreHoursButton>
      </MoreHoursContainer>
    </CalendarContainer>
  );
};

export default Calendar;
