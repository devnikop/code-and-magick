'use strict';

(function () {
  var FIRST_NAMES = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];

  var LAST_NAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];

  var randomSwapFullName = function (firstName, lastName) {
    var result = '';
    if (Math.round(Math.random())) {
      result = firstName + ' ' + lastName;
    } else {
      result = lastName + ' ' + firstName;
    }
    return result;
  };

  var createWizards = function (firstNames, lastNames) {
    var wizards = [];
    for (var i = 0; i < 4; i++) {
      var wizard = {
        name: randomSwapFullName(window.util.pickRandomValue(firstNames), window.util.pickRandomValue(lastNames)),
        coatColor: window.colorize.getRandomColor('coat'),
        eyesColor: window.colorize.getRandomColor('eyes')
      };
      wizards[i] = wizard;
    }
    return wizards;
  };

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };

  var drawWizards = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < wizards.length; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    setupSimilarList.appendChild(fragment);
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

  var wizards = createWizards(FIRST_NAMES, LAST_NAMES);

  drawWizards(wizards);

  document.querySelector('.setup-similar').classList.remove('hidden');
})();
