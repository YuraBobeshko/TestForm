import React from "react";
import PropTypes from "prop-types";

import Portal from "../portal/Portal";

const Modal = ({ title, isOpen, onCancel, onSubmit, children }) => {
  return (
    <>
      {isOpen && (
        <Portal className={"modalOverlay"}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <p className="modal-title h2">{title}</p>
                <button className={"btn btn-danger"} onClick={onCancel}>
                  X
                </button>
              </div>
              <div className="modal-body">{children}</div>
              <div className="modal-footer">
                <button className={"btn btn-danger"} onClick={onCancel}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.node
};

Modal.defaultProps = {
  title: "Modal title",
  isOpen: false,
  onCancel: () => {},
  onSubmit: () => {},
  children: null
};

export default Modal;
