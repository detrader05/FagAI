<script>
  const steps = [
    "Scanning genetic Happiness...",
    "Scanning ancestors' Happiness levels...",
    "Calculating Happy particle footprint...",
    "Scanning vein pattern on dih...",
    "Accessing HappyAI database...",
    "Connecting to HappyCoin API..."
  ];

  const scanText = document.getElementById('scanText');

  function startScan() {
    // Disable the scan button after first click
    document.querySelector("button").disabled = true;

    scanText.innerHTML = '';
    scanText.style.opacity = 0;
    let stepIndex = 0;

    function showNextStep() {
      if (stepIndex < steps.length) {
        scanText.innerText = steps[stepIndex];
        scanText.style.opacity = 1;

        setTimeout(() => {
          scanText.style.opacity = 0;
          stepIndex++;
          setTimeout(showNextStep, 600);
        }, 1500);
      } else {
        const score = Math.floor(Math.random() * 11) + 90;
        setTimeout(() => {
          scanText.innerHTML = `
            <span class="rainbow-text">🎉 Happiness Level: ${score} 🎉</span>
            <br><br>
            <p>We recommend <strong>HappyCoin</strong> to solve your happy worries 🌟</p>
            <a href="https://dexscreener.com/" target="_blank" class="buy-button">🚀 Buy Now</a>
          `;
          scanText.style.opacity = 1;
        }, 600);
      }
    }

    showNextStep();
  }

  // Falling image effect
  const canvas = document.getElementById('rainbowCanvas');
  const ctx = canvas.getContext('2d');
  const image = new Image();
  image.src = "https://cdn.discordapp.com/attachments/1351686587477524480/1377442501333618771/Untitled_design_39.png?ex=6838facb&is=6837a94b&hm=c2dfb0cc82fd581e8b31bb872fa1cce05c1f530897a175c0cc1c18045102bd54&";

  let drops = [];

  function resetCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drops = Array.from({ length: Math.floor(canvas.width / 60) }, (_, i) => ({
      x: i * 60,
      y: Math.random() * canvas.height,
      speed: Math.random() * 2 + 1
    }));
  }

  window.addEventListener('resize', resetCanvas);
  image.onload = resetCanvas;

  function drawFallingImages() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let drop of drops) {
      ctx.drawImage(image, drop.x, drop.y, 40, 40);
      drop.y += drop.speed;
      if (drop.y > canvas.height) {
        drop.y = -40;
      }
    }
    requestAnimationFrame(drawFallingImages);
  }

  drawFallingImages();
</script>