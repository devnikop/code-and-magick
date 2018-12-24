'use strict';

(function () {
  var COUNT_OF_WIZARDS = 4;
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };

  var setupPlayerElement = document.querySelector('.setup-player');
  var setupWizardElement = setupPlayerElement.querySelector('.setup-wizard');

  var wizardCoatElement = setupWizardElement.querySelector('.wizard-coat');
  var wizardCoatField = setupPlayerElement.querySelector('input[name=coat-color]');

  var wizardEyesElement = setupWizardElement.querySelector('.wizard-eyes');
  var wizardEyesField = setupPlayerElement.querySelector('input[name=eyes-color]');

  var fireballWrapElement = setupPlayerElement.querySelector('.setup-fireball-wrap');
  var wizardFireballField = setupPlayerElement.querySelector('input[name=fireball-color]');

  window.colorize.addChangeColorEvent(wizardCoatElement, wizardCoatField, 'coat');
  window.colorize.addChangeColorEvent(wizardEyesElement, wizardEyesField, 'eyes');
  window.colorize.addChangeColorEvent(fireballWrapElement, wizardFireballField, 'fireball');


  var setupSimilarList = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < COUNT_OF_WIZARDS; i++) {
      fragment.appendChild(renderWizard(window.util.pickRandomValue(wizards)));
    }
    setupSimilarList.appendChild(fragment);
  };

  window.backend.load(successHandler, window.util.errorHandler);

  document.querySelector('.setup-similar').classList.remove('hidden');
})();
