window.onload = () => {
  const canvas = document.getElementById('myCanvas');

  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');

    drawPoster(ctx);
  }
}

function drawPoster(ctx) {
  ctx.beginPath();
  ctx.moveTo(0, 0);

  // Top Edge
  ctx.bezierCurveTo(0, 0, 50, 10, 100, 0);
  ctx.lineTo(105, 10);
  ctx.lineTo(110, 0);
  ctx.bezierCurveTo(110, 0, 140, 2, 150, 0);

  // Right Edge
  ctx.bezierCurveTo(150, 0, 155, 10, 140, 15);
  ctx.bezierCurveTo(140, 15, 145, 20, 150, 40);
  ctx.lineTo(150, 80);
  ctx.lineTo(130, 82);
  ctx.lineTo(150, 84);
  ctx.bezierCurveTo(150, 84, 140, 90, 150, 170);
  ctx.lineTo(145, 172);
  ctx.lineTo(150, 174);
  ctx.lineTo(140, 176);
  ctx.lineTo(150, 178);
  ctx.bezierCurveTo(150, 178, 145, 185, 150, 200);

  // Bottom Edge
  ctx.bezierCurveTo(150, 200, 70, 190, 40, 200);
  ctx.lineTo(37, 195);
  ctx.lineTo(34, 200);
  ctx.bezierCurveTo(34, 200, 20, 195, 0, 200);

  // Left Edge
  ctx.bezierCurveTo(0, 200, 5, 170, 0, 145);
  ctx.lineTo(15, 142);
  ctx.lineTo(0, 137);
  ctx.bezierCurveTo(0, 137, 10, 90, 0, 60);
  ctx.lineTo(10, 58);
  ctx.lineTo(6, 48);
  ctx.lineTo(8, 45);
  ctx.bezierCurveTo(8, 45, 10, 30, 5, 10);
  ctx.lineTo(0, 0);

  const gradient = ctx.createLinearGradient(0, 0, 150, 200);
  gradient.addColorStop(0, '#f5f5dc');
  gradient.addColorStop(0.5, '#d7ccc8');
  gradient.addColorStop(1, '#f5f5dc');
  ctx.fillStyle = gradient;
  ctx.fill();

  // Text and center rectangle
  const f = new FontFace('Cowboy', 'url(CowboyMovie.ttf)');
  f.load().then(() => {
    ctx.fillStyle = 'black';
    ctx.strokeRect(51, 76, 48, 48);
    ctx.font = '48px Cowboy';
    ctx.fillText('WANTED', 20, 60);
    ctx.fillText('REWARD', 20, 180);
  });

  ctx.stroke();
}
