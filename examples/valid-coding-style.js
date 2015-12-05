let noteNumebrs = [ 60, 62, 64, 65, 67, 69, 71 ];

noteNumebrs = noteNumebrs.map(mtof);

global.console.log(noteNumebrs);

function mtof(value) {
  return Math.pow(2, (value / 69) / 12);
}
