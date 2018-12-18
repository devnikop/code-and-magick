'use strict';

window.colorize = (function () {
  var COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var EYES_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  return {
    changeWizardCoatColor: function (setupPlayer, wizardCoat) {
      var wizardCoatField = setupPlayer.querySelector('input[name=coat-color]');
      wizardCoatField.value = wizardCoat.style.fill = window.util.pickRandomValue(COAT_COLORS);
    },
    changeWizardEyesColor: function (setupPlayer, wizardEyes) {
      var wizardEyesField = setupPlayer.querySelector('input[name=eyes-color]');
      wizardEyesField.value = wizardEyes.style.fill = window.util.pickRandomValue(EYES_COLORS);
    },
    changeWizardFireballColor: function (setupPlayer, fireballWrap) {
      var wizardFireballField = setupPlayer.querySelector('input[name=fireball-color]');
      wizardFireballField.value = fireballWrap.style.background = window.util.pickRandomValue(FIREBALL_COLORS);
    },
    getRandomCoatColor: function () {
      return window.util.pickRandomValue(COAT_COLORS);
    },
    getRandomEyesColor: function () {
      return window.util.pickRandomValue(EYES_COLORS);
    }
  };

})();
