import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

const EditModal = ({
  closeModal, note, value, changeHandler,
  submitHandler, submitDisabled,
}) => (
  <div className="edit-modal-wrapper">
    <div className="edit-modal">
      <button onClick={closeModal} type="button" className="edit-modal__close-btn" />
      <span className="edit-modal__title">
        {note.name}
      </span>
      <textarea
        rows="6"
        value={value}
        onChange={changeHandler}
        placeholder="Enter some notes..."
      />
      <Button disabled={submitDisabled} onClick={submitHandler}>
        Save
      </Button>
    </div>
  </div>
);

EditModal.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  value: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired,
  submitDisabled: PropTypes.bool.isRequired,
};

export default EditModal;
