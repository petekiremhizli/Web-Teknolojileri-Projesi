<?php 
    if ($_POST["e-mail"] == "G231210030@sakarya.edu.tr" && $_POST["password"] == "G231210030") {
         echo "Hoşgeldin " . $_POST["name"];
         exit();
                
    } else {
                   
        echo "Şifre ya da e-mail hatalı";
        header("refresh:10; URL=giris.html");
        exit();
                }
 ?>