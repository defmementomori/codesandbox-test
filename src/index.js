import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  console.log(inputText);
  console.log("-------");
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
