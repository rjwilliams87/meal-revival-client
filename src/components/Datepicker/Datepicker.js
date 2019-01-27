import React from "react";
import DatePicker from "react-datepicker";

const renderDatePicker = ({
  input,
  label,
  labelClass,
  selected,
  className,
  type,
  meta: { touched, error }
}) => (
  <div>
    <div className="error__container">
      <label className={labelClass}>{label}</label>
      {touched && error && <div className="form__error">{error}</div>}
    </div>
    <DatePicker
      {...input}
      selected={selected}
      className={className}
      placeholderText="MM DD YYYY"
      type={type}
      dateForm="MM/DD/YYYY"
      minDate={new Date()}
    />
  </div>
);

export default renderDatePicker;
