document.getElementById('gradient-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const color1 = document.getElementById('color1').value;
    const color2 = document.getElementById('color2').value;
    const direction = document.getElementById('direction').value;

    const canvas = document.getElementById('wallpaper');
    const ctx = canvas.getContext('2d');

    // gradient
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