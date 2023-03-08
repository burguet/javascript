<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<style>.bouton{display:inline-block;padding:10px 20px;font-size:16px;font-weight:700;text-align:center;text-decoration:none;color:#fff;background-color:#4caf50;border-radius:5px;border:none;cursor:pointer}</style>
   
    <div class="test" name="test">coucou</div>
    <div class="test" name="test">coucou</div>
    <div class="test" name="test">coucou</div>

    <div class="bouton" onclick="ModifText();" >GetElementByName</div><br><br>
    <div class="bouton" onclick="ModifText2();">GetElementByTagName</div><br><br>
    <div class="bouton" onclick="ModifText3();">GetElementByClassName</div>
</body>
<script src="main.js"></script>

</html>