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
        time={showTime}
        value={!value ? null : new Date(value)}
        min={new Date()}
        value={new Date()}
        // inputProps={}
      />
    </div>
  );
}

// export default renderDatePicker;
