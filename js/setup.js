'use strict';

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

var pickRandomValue = function (arr) {
  var result = arr[Math.floor(Math.random() * arr.length)];
  return result;
};

var randomSwapFullName = function (firstName, lastName) {
  var result = '';
  if (Math.round(Math.random())) {
    result = firstName + ' ' + lastName;
  } else {
    result = lastName + ' ' + firstName;
  }
  return result;
};

var createWizards = function (firstNames, lastNames, coatColors, eyesColors) {
  var wizards = [];
  for (var i = 0; i < 4; i++) {
    var wizard = {
      name: randomSwapFullName(pickRandomValue(firstNames), pickRandomValue(lastNames)),
      coatColor: pickRandomValue(coatColors),
      eyesColor: pickRandomValue(eyesColors)
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

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var setupSimilarList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var wizards = createWizards(FIRST_NAMES, LAST_NAMES, COAT_COLORS, EYES_COLORS);

drawWizards(wizards);

document.querySelector('.setup-similar').classList.remove('hidden');
