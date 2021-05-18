import React from 'react';
import ReactModal from 'react-modal';

const OptionsModal = (props) => (
    <ReactModal
        isOpen={!!props.selectedOption}
        onRequestClose={props.clearSelectedOption}
        contentLabel="Selected Option"
    >
        <h3>Selected Option</h3>
        <p>{props.selectedOption}</p>
        <button onClick={props.clearSelectedOption}>Okay</button>
    </ReactModal>
);

export default OptionsModal;