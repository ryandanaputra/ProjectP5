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
        <div class="category-header">
            <div class="category-card">
                <div class="category-card-img">
                    <img src="img/salad_buah.png" alt="">
                </div>
                <p>Paket</p>
            </div>
            <div class="category-card">
                <div class="category-card-img">
                    <img src="img/gado_gado.png" alt="">
                </div>
                <p>Makanan Berat</p>
            </div>
            <div class="category-card">
                <div class="category-card-img">
                    <img src="img/jaje.png" alt="">
                </div>
                <p>Jaje</p>
            </div>
            <div class="category-card">
                <div class="category-card-img">
                    <img src="img/es_teh.png" alt="">
                </div>
                <p>Minuman</p>
            </div>
        </div>
        <div class="promo-container">
            <h1 class="top-header-text">Promo</h1>
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
    </section>



    <?php include 'pages/navbar.html' ?>
</body>

</html>