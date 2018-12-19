'use strict';

(function () {
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

  window.colorize = {
    addChangeColorEvent: function (element, field, type) {
      element.addEventListener('click', function () {
        var color = window.colorize.getRandomColor(type);
        if (element.tagName.toLowerCase() === 'div') {
          element.style.background = color;
          field.value = color;
        } else {
          element.style.fill = color;
          field.value = color;
        }
      });
    },
    getRandomColor: function (type) {
      var colorType;
      if (type === 'coat') {
        colorType = COAT_COLORS;
      } else if (type === 'eyes') {
        colorType = EYES_COLORS;
      } else if (type === 'fireball') {
        colorType = FIREBALL_COLORS;
      }
      return window.util.pickRandomValue(colorType);
    }
  };

})();
