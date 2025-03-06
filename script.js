document.addEventListener("DOMContentLoaded", function () {
  const categoryCards = document.querySelectorAll(".category-card");

  categoryCards.forEach((card) => {
    card.addEventListener("click", function () {
      const category = this.getAttribute("data-category");
      updateContent(category);
    });
  });

  function updateContent(category) {
    const contentContainer = document.querySelector("#content-container");
    const topHeaderText = document.querySelector("#top-header-text");

    // Clear existing content
    contentContainer.innerHTML = "";

    // Update top header text and content based on category
    if (category === "makanan_berat") {
      topHeaderText.textContent = "Makanan Berat";
      contentContainer.innerHTML = `
        <div class="container-contents">
        <div class="popular-container">
          <div class="popular-card">
            <div class="popular-card-img">
              <img src="img/nasi_campur_bali.png" alt="">
            </div>
            <div class="text-wrapper">
              <p class="food-card-name">Nasi Campur Bali</p>
              <p class="price-card">Rp 15.000,00</p>
            </div>
            <i class='bx bxs-plus-circle'></i>
          </div>
          <div class="popular-card">
            <div class="popular-card-img">
              <img src="img/tipat_cantok.png" alt="">
            </div>
            <div class="text-wrapper">
              <p class="food-card-name">Tipat Cantok</p>
              <p class="price-card">Rp 25.000,00</p>
            </div>
            <i class='bx bxs-plus-circle'></i>
          </div>
          <div class="popular-card">
            <div class="popular-card-img">
              <img src="img/tipat_cantok.png" alt="">
            </div>
            <div class="text-wrapper">
              <p class="food-card-name">Tipat Cantok</p>
              <p class="price-card">Rp 25.000,00</p>
            </div>
            <i class='bx bxs-plus-circle'></i>
          </div>
          <div class="popular-card">
            <div class="popular-card-img">
              <img src="img/tipat_cantok.png" alt="">
            </div>
            <div class="text-wrapper">
              <p class="food-card-name">Tipat Cantok</p>
              <p class="price-card">Rp 25.000,00</p>
            </div>
            <i class='bx bxs-plus-circle'></i>
          </div>
          <div class="popular-card">
            <div class="popular-card-img">
              <img src="img/tipat_cantok.png" alt="">
            </div>
            <div class="text-wrapper">
              <p class="food-card-name">Tipat Cantok</p>
              <p class="price-card">Rp 25.000,00</p>
            </div>
            <i class='bx bxs-plus-circle'></i>
          </div>
          <div class="popular-card">
            <div class="popular-card-img">
              <img src="img/tipat_cantok.png" alt="">
            </div>
            <div class="text-wrapper">
              <p class="food-card-name">Tipat Cantok</p>
              <p class="price-card">Rp 25.000,00</p>
            </div>
            <i class='bx bxs-plus-circle'></i>
          </div>
          <div class="popular-card">
            <div class="popular-card-img">
              <img src="img/tipat_cantok.png" alt="">
            </div>
            <div class="text-wrapper">
              <p class="food-card-name">Tipat Cantok</p>
              <p class="price-card">Rp 25.000,00</p>
            </div>
            <i class='bx bxs-plus-circle'></i>
          </div>
          <div class="popular-card">
            <div class="popular-card-img">
              <img src="img/tipat_cantok.png" alt="">
            </div>
            <div class="text-wrapper">
              <p class="food-card-name">Tipat Cantok</p>
              <p class="price-card">Rp 25.000,00</p>
            </div>
            <i class='bx bxs-plus-circle'></i>
          </div>
          <div class="popular-card">
            <div class="popular-card-img">
              <img src="img/tipat_cantok.png" alt="">
            </div>
            <div class="text-wrapper">
              <p class="food-card-name">Tipat Cantok</p>
              <p class="price-card">Rp 25.000,00</p>
            </div>
            <i class='bx bxs-plus-circle'></i>
          </div>
          <div class="popular-card">
            <div class="popular-card-img">
              <img src="img/tipat_cantok.png" alt="">
            </div>
            <div class="text-wrapper">
              <p class="food-card-name">Tipat Cantok</p>
              <p class="price-card">Rp 25.000,00</p>
            </div>
            <i class='bx bxs-plus-circle'></i>
          </div>
        </div>
      `;
    } else if (category === "jaje") {
      topHeaderText.textContent = "Jaje";
      contentContainer.innerHTML = `
<div class="container-contents">
        <div class="popular-container">
          <div class="popular-card">
            <div class="popular-card-img">
              <img src="img/nasi_campur_bali.png" alt="">
            </div>
            <div class="text-wrapper">
              <p class="food-card-name">Nasi Campur Bali</p>
              <p class="price-card">Rp 15.000,00</p>
            </div>
            <i class='bx bxs-plus-circle'></i>
          </div>
          <div class="popular-card">
            <div class="popular-card-img">
              <img src="img/tipat_cantok.png" alt="">
            </div>
            <div class="text-wrapper">
              <p class="food-card-name">Tipat Cantok</p>
              <p class="price-card">Rp 25.000,00</p>
            </div>
            <i class='bx bxs-plus-circle'></i>
          </div>
          <div class="popular-card">
            <div class="popular-card-img">
              <img src="img/tipat_cantok.png" alt="">
            </div>
            <div class="text-wrapper">
              <p class="food-card-name">Tipat Cantok</p>
              <p class="price-card">Rp 25.000,00</p>
            </div>
            <i class='bx bxs-plus-circle'></i>
          </div>
          <div class="popular-card">
            <div class="popular-card-img">
              <img src="img/tipat_cantok.png" alt="">
            </div>
            <div class="text-wrapper">
              <p class="food-card-name">Tipat Cantok</p>
              <p class="price-card">Rp 25.000,00</p>
            </div>
            <i class='bx bxs-plus-circle'></i>
          </div>
          <div class="popular-card">
            <div class="popular-card-img">
              <img src="img/tipat_cantok.png" alt="">
            </div>
            <div class="text-wrapper">
              <p class="food-card-name">Tipat Cantok</p>
              <p class="price-card">Rp 25.000,00</p>
            </div>
            <i class='bx bxs-plus-circle'></i>
          </div>
          <div class="popular-card">
            <div class="popular-card-img">
              <img src="img/tipat_cantok.png" alt="">
            </div>
            <div class="text-wrapper">
              <p class="food-card-name">Tipat Cantok</p>
              <p class="price-card">Rp 25.000,00</p>
            </div>
            <i class='bx bxs-plus-circle'></i>
          </div>
          <div class="popular-card">
            <div class="popular-card-img">
              <img src="img/tipat_cantok.png" alt="">
            </div>
            <div class="text-wrapper">
              <p class="food-card-name">Tipat Cantok</p>
              <p class="price-card">Rp 25.000,00</p>
            </div>
            <i class='bx bxs-plus-circle'></i>
          </div>
          <div class="popular-card">
            <div class="popular-card-img">
              <img src="img/tipat_cantok.png" alt="">
            </div>
            <div class="text-wrapper">
              <p class="food-card-name">Tipat Cantok</p>
              <p class="price-card">Rp 25.000,00</p>
            </div>
            <i class='bx bxs-plus-circle'></i>
          </div>
          <div class="popular-card">
            <div class="popular-card-img">
              <img src="img/tipat_cantok.png" alt="">
            </div>
            <div class="text-wrapper">
              <p class="food-card-name">Tipat Cantok</p>
              <p class="price-card">Rp 25.000,00</p>
            </div>
            <i class='bx bxs-plus-circle'></i>
          </div>
          <div class="popular-card">
            <div class="popular-card-img">
              <img src="img/tipat_cantok.png" alt="">
            </div>
            <div class="text-wrapper">
              <p class="food-card-name">Tipat Cantok</p>
              <p class="price-card">Rp 25.000,00</p>
            </div>
            <i class='bx bxs-plus-circle'></i>
          </div>
        </div>
      `;
    } else if (category === "minuman") {
      topHeaderText.textContent = "Minuman";
      contentContainer.innerHTML = `
<div class="container-contents">
        <div class="popular-container">
          <div class="popular-card">
            <div class="popular-card-img">
              <img src="img/nasi_campur_bali.png" alt="">
            </div>
            <div class="text-wrapper">
              <p class="food-card-name">Nasi Campur Bali</p>
              <p class="price-card">Rp 15.000,00</p>
            </div>
            <i class='bx bxs-plus-circle'></i>
          </div>
          <div class="popular-card">
            <div class="popular-card-img">
              <img src="img/tipat_cantok.png" alt="">
            </div>
            <div class="text-wrapper">
              <p class="food-card-name">Tipat Cantok</p>
              <p class="price-card">Rp 25.000,00</p>
            </div>
            <i class='bx bxs-plus-circle'></i>
          </div>
          <div class="popular-card">
            <div class="popular-card-img">
              <img src="img/tipat_cantok.png" alt="">
            </div>
            <div class="text-wrapper">
              <p class="food-card-name">Tipat Cantok</p>
              <p class="price-card">Rp 25.000,00</p>
            </div>
            <i class='bx bxs-plus-circle'></i>
          </div>
          <div class="popular-card">
            <div class="popular-card-img">
              <img src="img/tipat_cantok.png" alt="">
            </div>
            <div class="text-wrapper">
              <p class="food-card-name">Tipat Cantok</p>
              <p class="price-card">Rp 25.000,00</p>
            </div>
            <i class='bx bxs-plus-circle'></i>
          </div>
          <div class="popular-card">
            <div class="popular-card-img">
              <img src="img/tipat_cantok.png" alt="">
            </div>
            <div class="text-wrapper">
              <p class="food-card-name">Tipat Cantok</p>
              <p class="price-card">Rp 25.000,00</p>
            </div>
            <i class='bx bxs-plus-circle'></i>
          </div>
          <div class="popular-card">
            <div class="popular-card-img">
              <img src="img/tipat_cantok.png" alt="">
            </div>
            <div class="text-wrapper">
              <p class="food-card-name">Tipat Cantok</p>
              <p class="price-card">Rp 25.000,00</p>
            </div>
            <i class='bx bxs-plus-circle'></i>
          </div>
          <div class="popular-card">
            <div class="popular-card-img">
              <img src="img/tipat_cantok.png" alt="">
            </div>
            <div class="text-wrapper">
              <p class="food-card-name">Tipat Cantok</p>
              <p class="price-card">Rp 25.000,00</p>
            </div>
            <i class='bx bxs-plus-circle'></i>
          </div>
          <div class="popular-card">
            <div class="popular-card-img">
              <img src="img/tipat_cantok.png" alt="">
            </div>
            <div class="text-wrapper">
              <p class="food-card-name">Tipat Cantok</p>
              <p class="price-card">Rp 25.000,00</p>
            </div>
            <i class='bx bxs-plus-circle'></i>
          </div>
          <div class="popular-card">
            <div class="popular-card-img">
              <img src="img/tipat_cantok.png" alt="">
            </div>
            <div class="text-wrapper">
              <p class="food-card-name">Tipat Cantok</p>
              <p class="price-card">Rp 25.000,00</p>
            </div>
            <i class='bx bxs-plus-circle'></i>
          </div>
          <div class="popular-card">
            <div class="popular-card-img">
              <img src="img/tipat_cantok.png" alt="">
            </div>
            <div class="text-wrapper">
              <p class="food-card-name">Tipat Cantok</p>
              <p class="price-card">Rp 25.000,00</p>
            </div>
            <i class='bx bxs-plus-circle'></i>
          </div>
        </div>
      `;
    }
    else {
      // Reset to default content
      topHeaderText.textContent = "Menu";
      contentContainer.innerHTML = `
        <h1 class="top-header-text">Promo</h1>
        <div class="container-contents">
          <div class="promo-card">
            <div class="promo-content">
              <h2>Penawaran Hari Ini</h2>
              <h1>Gratis Jajanan Bali</h1>
              <p>*minimal pembelian Rp50.000,00</p>
            </div>
            <div class="promo-image">
              <img src="img/kumpulan_makanan.png">
            </div>
          </div>
        </div>
        <h1 class="top-header-text">Popular</h1>
        <div class="popular-container">
          <div class="popular-card">
            <div class="popular-card-img">
              <img src="img/nasi_campur_bali.png" alt="">
            </div>
            <div class="text-wrapper">
              <p class="food-card-name">Nasi Campur Bali</p>
              <p class="price-card">Rp 15.000,00</p>
            </div>
            <i class='bx bxs-plus-circle'></i>
          </div>
          <div class="popular-card">
            <div class="popular-card-img">
              <img src="img/tipat_cantok.png" alt="">
            </div>
            <div class="text-wrapper">
              <p class="food-card-name">Tipat Cantok</p>
              <p class="price-card">Rp 25.000,00</p>
            </div>
            <i class='bx bxs-plus-circle'></i>
          </div>
        </div>
      `;
    }
  }
});
