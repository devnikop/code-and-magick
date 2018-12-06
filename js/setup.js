'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

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

var FIREBALL_COLORS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
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

var onSetupCloseEnterPress = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
};

var onPopupEscPress = function (evt) {
  var userNameField = document.querySelector('.setup-user-name');
  if ((evt.keyCode === ESC_KEYCODE) && (document.activeElement !== userNameField)) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');

  var setupClose = setup.querySelector('.setup-close');
  setupClose.addEventListener('click', closePopup);
  setupClose.addEventListener('keydown', onSetupCloseEnterPress);
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');

  var setupClose = setup.querySelector('.setup-close');
  setupClose.removeEventListener('click', closePopup);
  setupClose.removeEventListener('keydown', onSetupCloseEnterPress);
  document.removeEventListener('keydown', onPopupEscPress);
};

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

var setupPlayer = document.querySelector('.setup-player');

var setupWizard = setupPlayer.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var fireballWrap = document.querySelector('.setup-fireball-wrap');

wizardCoat.addEventListener('click', function () {
  var wizardCoatField = setupPlayer.querySelector('input[name=coat-color]');
  wizardCoatField.value = wizardCoat.style.fill = pickRandomValue(COAT_COLORS);
});

wizardEyes.addEventListener('click', function () {
  var wizardEyesField = setupPlayer.querySelector('input[name=eyes-color]');
  wizardEyesField.value = wizardEyes.style.fill = pickRandomValue(EYES_COLORS);
});

fireballWrap.addEventListener('click', function () {
  var wizardFireballField = setupPlayer.querySelector('input[name=fireball-color]');
  wizardFireballField.value = fireballWrap.style.background = pickRandomValue(FIREBALL_COLORS);
});


var setupSimilarList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var wizards = createWizards(FIRST_NAMES, LAST_NAMES, COAT_COLORS, EYES_COLORS);

drawWizards(wizards);

document.querySelector('.setup-similar').classList.remove('hidden');
