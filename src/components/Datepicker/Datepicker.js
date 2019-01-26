import React from "react";
import { DateTimePicker, momentLocalizer } from "react-widgets";
import Moment from "moment";

export default function Datepicker(props) {
  return (
    <div>
      <DateTimePicker
        defaultValue={new Date()}
        formant={{ raw: "MMM dd, yyyy" }}
        time={false}
        min={Date.now()}
      />
    </div>
  );
}
