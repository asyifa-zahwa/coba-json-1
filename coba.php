<?php


$coneksi = new PDO('mysql:host=localhost;dbname=json_coba', 'root', '');
$db = $coneksi->prepare('SELECT * FROM santri');
$db->execute();
$data = $db->fetchAll(PDO::FETCH_OBJ);
$hasil = json_encode($data);
echo $hasil;
// print_r($data);
