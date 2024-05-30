const generateBtn = document.querySelector(".btn");

const colorGenerator = () => {
  const randomNumber = Math.floor(Math.random() * 16777215);
  const hexCode = "#" + randomNumber.toString(16);
  document.querySelector(".container").style.backgroundColor = hexCode;
  document.querySelector(".color-code").innerText = hexCode;
  document.querySelector(".btn2").addEventListener("click", () => {
    navigator.clipboard.writeText(hexCode);
  });
};

generateBtn.addEventListener("click", colorGenerator);

// Initial Call
colorGenerator();
