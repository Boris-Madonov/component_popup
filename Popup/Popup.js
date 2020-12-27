import React from 'react';
import './Popup.css';

function Popup({
  name,
  isOpen,
  onClose,
}) {
  return(
    <section className={`popup popup__${name} ${isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <button
          className="popup__close-button"
          type="button"
          onClick={onClose}
        >
        </button>
      </div>
    </section>
  );
}

export default Popup