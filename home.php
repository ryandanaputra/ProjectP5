<?php include 'remove_cache.php'; ?>
<?php include 'db_connection.php'; ?>

<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel="stylesheet" href="css/style.css">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <script src="script.js"></script>
</head>

<body>
    <section id="home">
        <div class="top-header">
            <h1 class="top-header-text">Menu</h1>
            <img class="logo" src="img/logo.png" alt="logo">
        </div>
        <div class="search-bar">
            <i class='bx bx-search'></i>
            <input type="search" name="search" id="search">
        </div>
        <?php include 'pages/category-header.html'; ?>
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
                    <p class="food-card-name">
                        Nasi Campur Bali
                    </p>
                    <p class="price-card">
                        Rp 15.000,00
                    </p>
                </div>
                <i class='bx bxs-plus-circle'></i>
            </div>
            <div class="popular-card">
                <div class="popular-card-img">
                    <img src="img/tipat_cantok.png" alt="">
                </div>
                <div class="text-wrapper">
                    <p class="food-card-name">
                        Tipat Cantok
                    </p>
                    <p class="price-card">
                        Rp 25.000,00
                    </p>
                </div>
                <i class='bx bxs-plus-circle'></i>
            </div>
        </div>
        </div>
    </section>



    <?php include 'pages/navbar.html' ?>
</body>

</html>