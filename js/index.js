function hex2rgb(hex) {
  // https://www.yoheim.net/blog.php?q=20171007
  let r = hex.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i)
  let c = null
  if (r) {
      c = r.slice(1,4).map(function(x) { return parseInt(x, 16) })
  }
  r = hex.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i)
  if (r) {
      c = r.slice(1,4).map(function(x) { return 0x11 * parseInt(x, 16) })
  }
  if (!c) {
      return null
  }
  return `rgb(${c[0]}, ${c[1]}, ${c[2]})`
}

function CarsolChange() {
  let carsols = document.getElementsByClassName("carsol");
  const backColor = hex2rgb("#1E1E1E");
  const fontColor = hex2rgb("#FFFFFF");
  for (let i = 0; i < carsols.length; i++) {
    let car = carsols[i];
    car.style.color = (car.style.color == backColor) ? fontColor : backColor;
  }
}

setInterval(CarsolChange, 1000);
