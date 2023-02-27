const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const changeSize = () => {
  const textSize = fontSizeControl.value;
  text.style.fontSize = textSize + "px";
};
fontSizeControl.addEventListener("input", changeSize);
