<?php 
    if ($_POST["e-mail"] == "G231210030@sakarya.edu.tr" && $_POST["password"] == "G231210030") {
        echo "Hoşgeldin G231210030";
        exit();
    } else {
        // Hatalı mesajı göstermek yerine doğrudan yönlendirme yapıyoruz
        header("Refresh: 3; url=giris.html");
        echo "ŞİFRE YA DA E-MAİL BİLGİSİ HATALI! GİRİŞ SAYFASINA YÖNLENDİRİLİYORSUNUZ...";
        exit();
    }
?>
