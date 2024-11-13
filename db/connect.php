<?php
$servername = "localhost"; // Server database (localhost jika di Laragon)
$username = "root";        // Username MySQL (default adalah root di Laragon)
$password = "";            // Password MySQL (default kosong di Laragon)
$dbname = "nama_database"; // Ganti dengan nama database Anda

// Membuat koneksi
$conn = new mysqli($servername, $username, $password, $dbname);

// Cek koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}
echo "Koneksi berhasil";
