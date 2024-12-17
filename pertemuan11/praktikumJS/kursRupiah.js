function hitungRupiah() {
    let uang2 = document.getElementById ("uang1").value;
    
    switch (mataUang) {
        case "us" :
            uang2 = 9915;
            break;
        case "singapore" :
            uang2 = 13472;
            break;
        case "ringgit" :
            uang2 = 874;
            break;
    }
    
    document.getElementById("uang2").innerHTML = uang2 / mataUang;
}

