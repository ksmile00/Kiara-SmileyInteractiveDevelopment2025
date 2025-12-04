$(document).ready(function () {
  const text = "im going to drown you, love";
  const container = $("#circular-text");

  const radius = 9.5; // rem units for circle radius
  let angleStep = (2 * Math.PI) / text.length;
  let index = 0;

  function typeNextChar() {
    if (index >= text.length) return;

    let char = $('<span class="char"></span>').text(text[index]);
    let angle = index * angleStep;

    let x = radius * Math.cos(angle);
    let y = radius * Math.sin(angle);

    char.css({
      position: "absolute",
      left: `calc(50% + ${x}rem)`,
      top: `calc(50% + ${y}rem)`,
      transform: `translate(-50%, -50%) rotate(${angle + Math.PI / 2}rad)`
    });

    container.append(char);
    index++;

    setTimeout(typeNextChar, 90); // typing speed
  }

  typeNextChar();
});
