<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Giriş</title>
   
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" 
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"  crossorigin="anonymous">
    
    <link rel="stylesheet" href="css/giris.css">
</head>
<body>


<div class="container text-center">


  <div class="row">
    <div class="col">
    <?php 
    if ($_POST["e-nail"] == "G231210030@sakarya.edu.tr" && $_POST["password"] == "G231210030") {
         echo "Hoşgeldin " . $_POST["name"];
                
    } else {
                   
        echo "Şifre ya da e-mail hatalı";
        header("refresh:2; giris.html");
                }
     ?>
    </div>
   
   
  </div>
</div>
</body>
</html>
