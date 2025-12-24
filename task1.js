let r = 15
let phi = 0

if(r % 7 == 0){
     phi = 22/7
    //  console.log("Phi = 22/7")
}else{
     phi = 3.14
    //  console.log("Phi = 3.14")

}

const luas = phi*r*r
const keliling = 2*phi*r

console.log("Luas lingkaran : "+luas)
console.log("Keliling lingkaran : "+keliling)