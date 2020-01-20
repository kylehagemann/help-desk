import React from "react";
import PropTypes from "prop-types";
import {
  Toast, ToastHeader, ToastBody,
} from "reactstrap";

class ToastError extends React.Component {
  render() {
    const { message } = this.props;
    return (
      <div className="d-flex justify-content-center p-3 bg-danger my-2 rounded">
        <Toast>
          <ToastHeader arialabel="Error" tabIndex="0">
            ERROR!
          </ToastHeader>
          <ToastBody arialabel={message} tabIndex="0">
            {message}
          </ToastBody>
        </Toast>
      </div>
    );
  }
}

ToastError.propTypes = {
  message: PropTypes.string.isRequired
}

export default ToastError;