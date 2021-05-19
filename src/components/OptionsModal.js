import React from 'react';
import ReactModal from 'react-modal';

const OptionsModal = (props) => (
    <ReactModal
        isOpen={!!props.selectedOption}
        onRequestClose={props.clearSelectedOption}
        contentLabel="Selected Option"
        className="modal"
    >
        <h3 className="modal__title">Selected Option</h3>
        <p className="modal__body">{props.selectedOption}</p>
        <button className="button" onClick={props.clearSelectedOption}>Okay</button>
    </ReactModal>
);

export default OptionsModal;