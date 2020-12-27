import React from 'react';
import './Popup.css';

function Popup({
  name,
  isOpen,
  onClose,
}) {
  const handlerEsc = useCallback((e) => {
    if(e.keyCode === 27) {
      onClose();
    }
  }, [onClose]);

  const handlerOverlayClose = useCallback((e) => {
    if(e.target.classList.contains('popup')) {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    document.addEventListener("click", handlerOverlayClose);

    return () => {
      document.removeEventListener("click", handlerOverlayClose);
    };
  }, [handlerOverlayClose]);

  useEffect(() => {
    document.addEventListener("keydown", handlerEsc);

    return () => {
      document.removeEventListener("keydown", handlerEsc);
    };
  }, [handlerEsc]);

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