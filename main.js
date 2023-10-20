document.getElementById('gradient-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const color1 = document.getElementById('color1').value;
    const color2 = document.getElementById('color2').value;
    const direction = document.getElementById('direction').value;

    const canvas = document.getElementById('wallpaper');
    const ctx = canvas.getContext('2d');

    // gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);

    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);

    // style
    ctx.fillStyle = gradient;

    // fill the canva with the result
    ctx.fillRect(0, 0, canvas.width, canvas.height);
});
