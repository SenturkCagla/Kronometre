const baslat = document.getElementById("buton");
const durdur = document.getElementById("buton");
const zaman = document.getElementById("zaman");
const body = document.body;

let dakika = 0,
  saniye = 0,
  salise = 0;
let interval = null;
let calisiyor = false;

function kronometre() {
  salise += 1;
  if (salise === 100) {
    salise = 0;
    saniye++;
  }
  if (saniye === 60) {
    saniye = 0;
    dakika++;
  }

  let d = String(dakika).padStart(2, "0");
  let s = String(saniye).padStart(2, "0");
  let ms = String(salise).padStart(2, "0");

  zaman.textContent = `${d}:${s},${ms}`;
}

baslat.addEventListener("click", function () {
  if (!calisiyor) {
    baslat.innerHTML = "❚❚";
    interval = setInterval(kronometre, 10);
    calisiyor = true;

    body.classList.remove("mavi", "kirmizi");
    body.classList.add("yesil");
  } else {
    baslat.innerHTML = "▶";
    clearInterval(interval);
    calisiyor = false;

    body.classList.remove("yesil", "mavi");
    body.classList.add("kirmizi");
  }
});

tekrar.addEventListener("click", function () {
  clearInterval(interval);
  dakika = 0;
  saniye = 0;
  salise = 0;
  zaman.textContent = "00:00,00";
  baslat.innerHTML = "▶";
  calisiyor = false;

  body.classList.remove("yesil", "kirmizi");
  body.classList.add("mavi");
});
