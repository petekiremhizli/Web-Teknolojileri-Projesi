<?php
// İletişim formundan gönderilen verileri alma kısmı
$text = $_POST['text'];
$password = $_POST['password'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$gender = $_POST['gender'];
$textarea = $_POST['textarea'];

// Verileri görüntülemek için ekrana yazdırma kısmı
echo "Metin Kutusu: " . $text . "<br>";
echo "Şifre Kutusu: " . $password . "<br>";
echo "E-posta: " . $email . "<br>";
echo "Telefon: " . $tel . "<br>";
echo "Cinsiyet: " . $gender . "<br>";
echo "Metin Alanı: " . $textarea . "<br>";
?>
