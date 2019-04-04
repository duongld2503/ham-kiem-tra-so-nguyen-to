
var x = kiemTraSoNguyenTo(5);


function kiemTraSoNguyenTo(n) {
    let dem = 0;
    for (i=1;i<=n;i++) {
        if (n % i === 0) {
            dem++;
        }
    }
        if (dem === 2){
            document.write(n)
        }
    }


// function hoiLai() {
//
// }