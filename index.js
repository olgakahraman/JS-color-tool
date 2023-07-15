const hexInput = document.querySelector("#hexInput");
const inputColor = document.querySelector("#inputColor");

hexInput.addEventListener("keyup", () => {
  const hex = hexInput.value;
  if(!isValidHex(hex)) return;

  const strippedHex = hex.replace("#", "");


  inputColor.style.backgroundColor = "#" + strippedHex;
});

const isValidHex = (hex) => {
  if (!hex) return false;

  const srtippedHex = hex.replace("#", "");
  return srtippedHex.length === 3 || srtippedHex.length === 6;
};
