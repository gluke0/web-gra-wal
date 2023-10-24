const canvasSizeSelect = document.getElementById('canvas-size');

document.getElementById('gradient-form').addEventListener('submit', function(event){
    event.preventDefault();

    const color1 = document.getElementById('color1').value;
    const color2 = document.getElementById('color2').value;
    const direction = document.getElementById('direction').value;
    const canvasSize = canvasSizeSelect.value;

    const canvas = document.getElementById('wallpaper');
    const ctx = canvas.getContext('2d');

    // gradient
    canvas.width = canvasSize;
    canvas.height = canvasSize;
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
const questionSize = document.getElementById('question-size');
const helpboxSize = document.getElementById('helpbox-size');

questionSize.addEventListener('mouseover',()=>{
helpboxSize.classList.remove('d-none');
});

questionSize.addEventListener('mouseout',()=>{
helpboxSize.classList.add('d-none');
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