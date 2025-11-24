onload = () => {
  document.body.classList.remove("container");
};

// Floating romantic hearts
function createLove() {
  const loveContainer = document.querySelector(".love-container");
  const love = document.createElement("div");
  love.classList.add("love");

  // Emoji hati
  const hearts = ["❤️", "❤️", "❤️", "❤️", "❤️"];
  love.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

  // Posisi acak
  love.style.left = Math.random() * 100 + "vw";

  // Ukuran acak
  love.style.fontSize = 18 + Math.random() * 20 + "px";

  loveContainer.appendChild(love);

  // Hapus elemen setelah animasi selesai
  setTimeout(() => {
    love.remove();
  }, 4000);
}

// Buat hati setiap 500–900ms
setInterval(createLove, 700);
