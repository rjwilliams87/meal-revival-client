import React from "react";
import "./Input.css";

export default class Input extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.meta.active && this.props.meta.active) {
      this.input.focus();
    }
  }
  render() {
    const Element = this.props.element || "input";

    let error;
    if (this.props.meta.touched && this.props.meta.error) {
      error = <div className="form__error">{this.props.meta.error}</div>;
    }
    return (
      <div>
        <div className="error__container">
          <label
            htmlFor={this.props.input.name}
            className={this.props.labelClass}
          >
            {this.props.label}
          </label>
          {error}
        </div>
        <Element
          {...this.props.input}
          id={this.props.input.name}
          type={this.props.type}
          className={this.props.className}
          ref={input => (this.input = input)}
          maxLength={this.props.maxLength}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}
