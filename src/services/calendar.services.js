import axios from "axios";
import moment from "moment";

export const getWeekAppointments = ({ date }) => {
  return axios({
    method: "get",
    url: `https://draliatest.azurewebsites.net/api/availability/GetWeeklySlots/${moment(
      date
    ).format("YYYYMMDD")}`,
    headers: { "content-type": "application/json" },
  })
    .then((r) => r.data)
    .catch((e) => console.error(e));
};

export const postAppointment = ({ appointment }) => {
  return axios({
    method: "post",
    url: "https://draliatest.azurewebsites.net/api/availability/BookSlot",
    headers: { "content-type": "application/json" },
    data: {
      Start: moment(appointment.Start).format("YYYY-MM-DD HH:mm:ss"),
      End: moment(appointment.End).format("YYYY-MM-DD HH:mm:ss"),
      Comments: "Nice guy",
      Patient: {
        Name: "Frank",
        SecondName: "Goodwill",
        Email: "frank.goodwill#gmail.com",
        Phone: "649731824",
      },
    },
  }).then((r) => r.data);
};
