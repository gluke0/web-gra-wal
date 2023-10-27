const canvasSizeH = document.querySelector('#canvas-height');
const canvasSizeW = document.querySelector('#canvas-width');

// check sizes fields
function validateCanvasSize() {
  if (canvasSizeH.value === 'null'){
    canvasSizeH.classList.add('errorsize');
    return false;
  }

  if (canvasSizeW.value === 'null'){
    canvasSizeW.classList.add('errorsize');
    return false;
  }

  return true;
}

document.getElementById('gradient-form').addEventListener('submit', function(event){
  event.preventDefault();

  if (!validateCanvasSize()){
    return;
  }

  const color1 = document.getElementById('color1').value;
  const color2 = document.getElementById('color2').value;
  const direction = document.getElementById('direction').value;
  const canvasHeight = canvasSizeH.value;
  const canvasWidth = canvasSizeW.value;

  const canvas = document.getElementById('wallpaper');
  const ctx = canvas.getContext('2d');
  canvas.classList.remove('d-none');

  // gradient
  canvas.width = canvasHeight;
  canvas.height = canvasWidth;
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);

  switch (direction) {
    case "top":
      gradient.addColorStop(0, color1);
      gradient.addColorStop(1, color2);
      break;
    case "bottom":
      gradient.addColorStop(0, color2);
      gradient.addColorStop(1, color1);
      break;
  }

  // style
  ctx.fillStyle = gradient;

  // fill the canva with the result
  ctx.fillRect(0, 0, canvas.width, canvas.height);
});

// question mark box
const question = document.getElementById('question');
const helpbox = document.getElementById('helpbox');

question.addEventListener('mouseover',()=>{
  helpbox.classList.remove('d-none');
});

question.addEventListener('mouseout',()=>{
  helpbox.classList.add('d-none');
});

// question mark box
const questionSizeH = document.getElementById('question-h');
const questionSizeW = document.getElementById('question-w');
const helpboxSizeH = document.getElementById('helpbox-size-h');
const helpboxSizeW = document.getElementById('helpbox-size-w');


questionSizeH.addEventListener('mouseover',()=>{
  helpboxSizeH.classList.remove('d-none');
});

questionSizeH.addEventListener('mouseout',()=>{
  helpboxSizeH.classList.add('d-none');
});


questionSizeW.addEventListener('mouseover',()=>{
  helpboxSizeW.classList.remove('d-none');
});

questionSizeW.addEventListener('mouseout',()=>{
  helpboxSizeW.classList.add('d-none');
});

// download button
const download = document.querySelector('#download');
const canvas = document.querySelector('#wallpaper');
const submitButton = document.querySelector('#gradient-form input[type="submit"]');

submitButton.addEventListener('click',()=>{
  download.classList.remove('d-none');
});

download.addEventListener('click',()=>{
  const wLink = canvas.toDataURL();

  const link = document.createElement('a');
  link.href = wLink;
  link.download = 'wallpaper';

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
});

// refresh page
const reset = document.querySelector('#reset');

function refreshPage(){
  location.reload();
}

submitButton.addEventListener('click',()=>{
  reset.classList.remove('d-none');
});

// trending sizes
const trending = document.querySelector('.trending');

submitButton.addEventListener('click',()=>{
  trending.classList.add('d-none');
})
