'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var CHART_GAP_LEFT = 40;
var CHART_GAP_TOP = 110;
var COLUMN_GAP = 50;
var FONT_GAP = 20;
var FONT_GAP_TOP = 40;
var barHeight = 150 - FONT_GAP - GAP;
var BAR_WIDTH = 40;

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(
      x,
      y,
      CLOUD_WIDTH,
      CLOUD_HEIGHT
  );
};

window.renderStatistics = function (ctx, names, times) {

  renderCloud(
      ctx,
      CLOUD_X + GAP,
      CLOUD_Y + GAP,
      'rgba(0, 0, 0, 0.7)'
  );
  renderCloud(
      ctx,
      CLOUD_X,
      CLOUD_Y,
      '#fff'
  );

  ctx.fillStyle = '#000';

  ctx.font = '16px PT Mono';
  ctx.fillText(
      'Ура вы победили!',
      CLOUD_X + GAP,
      CLOUD_Y + FONT_GAP_TOP
  );
  ctx.fillText(
      'Список результатов:',
      CLOUD_X + GAP,
      CLOUD_Y + FONT_GAP_TOP + FONT_GAP
  );

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var currentChartHeight = (barHeight * times[i]) / maxTime;

    ctx.fillText(
        Math.round(times[i]),
        CLOUD_X + CHART_GAP_LEFT + (BAR_WIDTH + COLUMN_GAP) * i,
        CLOUD_Y + CHART_GAP_TOP + (barHeight - currentChartHeight) - GAP
    );

    //  Color for current chart
    ctx.fillStyle = 'hsl(240,' + Math.random() * 100 + '%, 50%)';
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }

    ctx.fillRect(
        CLOUD_X + CHART_GAP_LEFT + (BAR_WIDTH + COLUMN_GAP) * i,
        CLOUD_Y + CHART_GAP_TOP + (barHeight - currentChartHeight),
        BAR_WIDTH,
        currentChartHeight
    );

    //  Reset chart color
    ctx.fillStyle = '#000';

    ctx.fillText(
        names[i],
        CLOUD_X + CHART_GAP_LEFT + (BAR_WIDTH + COLUMN_GAP) * i,
        CLOUD_Y + CHART_GAP_TOP + barHeight + FONT_GAP
    );
  }
};
