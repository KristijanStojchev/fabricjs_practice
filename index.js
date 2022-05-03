const canvas = new fabric.Canvas("canvas", {
  width: 800,
  height: 800,
  backgroundColor: "red",
});

const generateRect = () => {
  let inputValueHeight = document.getElementById("height").value;
  let inputValueWidth = document.getElementById("width").value;
  let inputValueX = document.getElementById("horizontal").value;
  let inputValueY = document.getElementById("vertical").value;

  const rect = new fabric.Rect({
    originX: "top",
    originY: "left",
    top: inputValueX,
    left: inputValueY,
    height: inputValueHeight,
    width: inputValueWidth,
    backgroundColor: "blue",
  });

  canvas.add(rect);
};

canvas.renderAll();
