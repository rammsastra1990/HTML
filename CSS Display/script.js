var blockDisplay = document.getElementById("block_width_display");
var blockInlineDisplay = document.getElementById("block-inline-width-display");
var inlineDisplay = document.getElementById("inline_width_display");

const inlineBlock001 = document.getElementById("inline-block-001");
const blockElement = document.querySelector(".pBlock");
const inlineBlockElement = document.querySelector(".pInlineBlock");

const pBlockElement = document.querySelector(".pBlock");
const pInlineBlock = document.querySelector(".pInlineBlock");
const pInline = document.querySelector(".pInline");

blockDisplay.addEventListener("input", () => {
  const widthValue = blockDisplay.value + "px";
  pBlockElement.style.width = widthValue;
});

blockInlineDisplay.addEventListener("input", () => {
  const widthValue = blockInlineDisplay.value + "px";
  pInlineBlock.style.width = widthValue;
});

inlineDisplay.addEventListener("input", () => {
  const widthValue = inlineDisplay.value + "px";
  pInline.style.width = widthValue;
});
