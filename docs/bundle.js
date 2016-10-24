(function (exports) {
'use strict';

// import noise from 'noisejs'

var grid = function (x,y) {
  // return noise.simplex2(x / 100, y / 100)
  return 'C'
};

// helper for displaying grid
var Table = function Table ( container, w, h ) {
  var this$1 = this;


  this.w = w;
  this.h = h;
  this.table = document.createElement('table');

  for (var i = 0; i < w; i++) {

    var tr = document.createElement('tr');

    for (var j = 0; j < h; j++) {

      var td = document.createElement('td');

      tr.appendChild(td);
    }

    this$1.table.appendChild(tr);

  }

  container.appendChild(this.table);
};

// populate fill cell with a callback
Table.prototype.fill = function fill (fn) {
    var this$1 = this;

  var cells = this.table.getElementsByTagName('td');

  for (var i = 0; i < this.w; i++) {
    for (var j = 0; j < this.h; j++) {
      cells[i + (j*this$1.w)].innerText = fn(i,j);
    }
  }
};

var incr = function (x,y) { return letter((x + y * 25) % 26); };


// 0 -> a, 26 -> z
var letter = function (i) { return (i + 10).toString(36); };

exports.grid = grid;
exports.Table = Table;
exports.incr = incr;

}((this.words = this.words || {})));
