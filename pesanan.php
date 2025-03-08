<?php include 'remove_cache.php'; ?>
<?php include 'db_connection.php'; ?>

<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pesanan</title>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <section id="pesanan">
        <div class="img-pesanan">
            <img src="img/tipat_cantok2.png" alt="">
        </div>
        <div class="deskripsi-pesanan">
            <div class="rating-harga-container">
                <div class="rating-pesanan">
                    <i class='bx bxs-star'><span>4.8</span></i>
                </div>
                <div class="harga-pesanan">
                    <p>Rp. 15.000,00</p>
                </div>
            </div>
            <div class="nama-quantity-container">
                <div class="nama-pesanan">
                    <h1>Tipat Cantok</h1>
                </div>
                <div class="quantity-pesanan">
                    <i class='bx bx-minus-circle'></i>
                    <p>1</p>
                    <i class='bx bx-plus-circle'></i>
                </div>
            </div>
            <div class="deskripsi-pesanan-container">
                <p>Tipat Cantok adalah makanan khas Bali yang terdiri dari tipat (nasi ketan yang diiris tipis-tipis) yang disajikan dengan sayuran dan bumbu kacang.</p>
            </div>
            <div class="tambahan-container">
                <h1>Tambahan</h1>
                <div class="tambahan-pesanan">
                    <div class="tambahan-card">
                        <img src="img/es_teh.png" alt="">
                        <i class='bx bxs-plus-circle'></i>
                    </div>
                    <div class="tambahan-card">
                        <img src="img/es_pisang_ijo.jpg" alt="">
                        <i class='bx bxs-plus-circle'></i>
                    </div>
                    <div class="tambahan-card">
                        <img src="img/lemperayam.jpg" alt="">
                        <i class='bx bxs-plus-circle'></i>
                    </div>
            </div>
            <a href="#" class="tambah-pesanan-btn">Tambah Pesanan</a>
        </div>
    </section>
</body>

</html>