//buat fungsi
//nilai username
//nilai password
//cek username dan password
//benar beri alert berhasil login
//jika username dan password kosong di berikan alert
//jika username dan pw salah beri alert username dan password salah

function login(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    if (username == "straykids" && password == "stay08") {
        alert("Berhasil Login");
        window.location="index.html"
        return false;
    }
    else if (username == "" || password == "") {
        alert("Usermane dan Password tidak boleh kosong");
    }
    else {
        alert ("Username dan Password salah");
    }

}