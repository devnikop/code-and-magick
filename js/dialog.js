'use strict';

(function () {

  var onSetupCloseEnterPress = function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  };

  var onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closePopup);
  };

  var openPopup = function () {
    setup.classList.remove('hidden');

    var setupClose = setup.querySelector('.setup-close');
    setupClose.addEventListener('click', closePopup);
    setupClose.addEventListener('keydown', onSetupCloseEnterPress);
    document.addEventListener('keydown', onPopupEscPress);
  };

  var onSetupOpenEnterPress = function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  };

  var closePopup = function () {
    setup.classList.add('hidden');

    var setupClose = setup.querySelector('.setup-close');
    setupClose.removeEventListener('click', closePopup);
    setupClose.removeEventListener('keydown', onSetupCloseEnterPress);
    document.removeEventListener('keydown', onPopupEscPress);
  };

  var successHandler = function () {
    closePopup();
  };

  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  setupOpen.addEventListener('click', openPopup);
  setupOpen.addEventListener('keydown', onSetupOpenEnterPress);

  var userNameField = document.querySelector('.setup-user-name');
  userNameField.addEventListener('keydown', function (evt) {
    evt.stopPropagation();
  });

  var dialogHandler = setup.querySelector('.upload');
  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      dragged = true;
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY,
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (evtDev) {
          evtDev.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  var setupWizardFormElement = setup.querySelector('.setup-wizard-form');
  setupWizardFormElement.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.backend.save(new FormData(setupWizardFormElement), successHandler, window.util.errorHandler);
  });
})();

