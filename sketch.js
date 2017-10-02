function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(230);

  let hr = hour();
  let min = minute();
  let sc = second();

  let height = windowHeight / 3;

  let hourWidth = 0;
  let minWidth = 0;
  let secWidth = 0;

  noStroke();
  fill(26, 82, 118);
  hourWidth = map(hr % 12, 0, 12, 0, windowWidth);
  rect(0, 0, hourWidth, height);

  fill(46, 134, 193);
  minWidth = map(min, 0, 60, 0, windowWidth);
  rect(0, height, minWidth, height);

  fill(93, 173, 226);
  secWidth = map(sc, 0, 60, 0, windowWidth);
  rect(0, height * 2, secWidth, height);

}
