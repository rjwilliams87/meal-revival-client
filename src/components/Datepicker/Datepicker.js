import React from "react";
import { DateTimePicker } from "react-widgets";

export default function renderDatePicker({
  input: { onChange, value },
  showTime
}) {
  return (
    <div>
      <DateTimePicker
        onChange={onChange}
        time={false}
        // value={!value ? null : new Date(value)}
        min={new Date()}
        format="MMM DD YYYY"
        // inputProps={}
      />
    </div>
  );
}

// export default renderDatePicker;
