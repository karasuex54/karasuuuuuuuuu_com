function hex2rgb(hex) {
  let r = hex.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  let c = null;
  if (r) {
    c = r.slice(1, 4).map(function (x) {
      return parseInt(x, 16);
    });
  }
  r = hex.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i);
  if (r) {
    c = r.slice(1, 4).map(function (x) {
      return 0x11 * parseInt(x, 16);
    });
  }
  if (!c) {
    return null;
  }
  return `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
}

function carsolChange() {
  let carsols = document.getElementsByClassName("carsol");
  const backColor = hex2rgb("#1E1E1E");
  const fontColor = hex2rgb("#FFFFFF");
  for (let i = 0; i < carsols.length; i++) {
    let car = carsols[i];
    car.style.color = car.style.color == backColor ? fontColor : backColor;
  }
}

function typeLike(param) {
  let el = document.querySelector(param.el);
  el.textContent = "";
  let speed = 100;
  let string = param.string.split("");
  string.forEach((char, index) => {
    setTimeout(() => {
      el.textContent += char;
    }, speed * index);
  });

  let el_text = document.querySelector(param.el_text);
  el_text.style.opacity = 0.0;
  while (el_text.lastChild) {
    el_text.removeChild(el_text.lastChild);
  }
  el_text.innerHTML = param.text_html;
  setTimeout(() => {
    el_text.style.opacity = 1.0;
  }, speed * string.length);
}

let commands = [
  {
    el: "#ls-command",
    string: "commands",
    el_text: "#ls-text",
    text_html: `<spam class="t1" onclick="typeLike(commands[1])">Whoami</spam>&nbsp;&nbsp;
    <spam class="t2" onclick="typeLike(commands[2])">Education</spam>&nbsp;&nbsp;
    <spam class="t3" onclick="typeLike(commands[3])">Internship</spam>&nbsp;&nbsp;
    <spam class="t4" onclick="typeLike(commands[4])">Sns</spam>`,
  },
  {
    el: "#detail-command",
    string: "Whoami",
    el_text: "#detail-text",
    text_html: `Name：Syumpei Karasuyama`,
  },
  {
    el: "#detail-command",
    string: "Education",
    el_text: "#detail-text",
    text_html: `<p>Master of Mathematical Information Science, The University of Electro-Communications<br>2020.04 -</p>
    <br>
    <p>Bachelor of Mathematical Information Science, The University of Electro-Communications<br>2016.04 - 2020.03</p>`,
  },
  {
    el: "#detail-command",
    string: "Internship",
    el_text: "#detail-text",
    text_html: `<p>NTT Communications Corporation<br>2021.02</p>
    <br>
    <p>Sansan, Inc.<br>2020.10</p>
    <br>
    <p>e-Seikatsu Co., Ltd.<br>2020.08</p>`,
  },
  {
    el: "#detail-command",
    string: "Sns",
    el_text: "#detail-text",
    text_html: `<p>Twitter :
    <a
      href="https://twitter.com/_karasu32"
      target="_blank"
      rel="noopener noreferrer"
      >@_karasu32</a
    ></p>
    <br>
    <p>GitHub :
    <a
      href="https://github.com/karasuex54"
      target="_blank"
      rel="noopener noreferrer"
      >karasuex54</a
    >
    </p>
    <br>
    <p>AtCoder :
    <a
      href="https://atcoder.jp/users/karasuex54"
      target="_blank"
      rel="noopener noreferrer"
      >karasuex54</a
    ></p>`,
  },
];

window.onload = function () {
  typeLike(commands[0]);
};

function test() {
  window.alert("aiueo");
}
