import React from 'react';
import './Popup.css';

function Popup({
  name,
  isOpen,
  onClose,
}) {
  const handelEsc = useCallback((event) => {
    if(event.keyCode === 27) {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    document.addEventListener("keydown", handelEsc);

    return () => {
      document.removeEventListener("keydown", handelEsc);
    };
  }, [handelEsc]);

  _handlerOverlayClose = (evt) => {
    if(evt.target.classList.contains('popup')) {
        this.close();
    }
  };

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