import React from 'react';
import PropTypes from 'prop-types';

import Portal from '../portal/Portal';

import './Modal.css';

const Modal = ({
  title, isOpen, onCancel, onSubmit, children,
}) => {

  return (
    <>
      { isOpen &&
        <Portal>
          <div className="modalOverlay">
            <div className="modalWindow">
              <div className="modal-header">
                <div className="modal-title">{title}</div>
                <button className={'btn btn-danger'} name="times" onClick={onCancel}>X</button>
              </div>
              <div className="modal-body">
                {children}
              </div>
              <div className="modal-footer">
                <button className={'btn btn-danger'} onClick={onCancel} invert>Cancel</button>
              </div>
            </div>
          </div>
        </Portal>
      }
    </>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.node,
};

Modal.defaultProps = {
  title: 'Modal title',
  isOpen: false,
  onCancel: () => {},
  onSubmit: () => {},
  children: null,
};

export default Modal;
