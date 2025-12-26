let temp = 30
let tempSource = "Kelvin"
let convertTo = "Celcius"

if (tempSource === "Celcius"){
    if (convertTo === "Fahrenheit"){
        tempOut = temp * (9/5) + 32
        console.log(temp+" "+tempSource+" = "+tempOut+" "+convertTo)
    }else if (convertTo === "Reamur"){
        tempOut = temp * (4/5)
        console.log(temp+" "+tempSource+" = "+tempOut+" "+convertTo)
    }else if (convertTo === "Kelvin"){
        tempOut = temp + 273
        console.log(temp+" "+tempSource+" = "+tempOut+" "+convertTo)
    }else {
        console.log("Input Invalid")
    }
}else if (tempSource === "Fahrenheit"){
     if (convertTo === "Celcius"){
        tempOut = temp * (9/5) + 32
        console.log(temp+" "+tempSource+" = "+tempOut+" "+convertTo)
    }else if (convertTo === "Reamur"){
        tempOut = temp * (9/4) + 32
        console.log(temp+" "+tempSource+" = "+tempOut+" "+convertTo)
    }else if (convertTo === "Kelvin"){
        tempOut = 9/5 * (temp - 273) + 32
        console.log(temp+" "+tempSource+" = "+tempOut+" "+convertTo)
    }else {
        console.log("Input Invalid")
    }
}else if (tempSource === "Reamur"){
    if (convertTo === "Celcius"){
        tempOut = temp * (4/5)
        console.log(temp+" "+tempSource+" = "+tempOut+" "+convertTo)
    }else if (convertTo === "Fahrenheit"){
        tempOut = 4/9 * (temp-32)
        console.log(temp+" "+tempSource+" = "+tempOut+" "+convertTo)
    }else if (convertTo === "Kelvin"){
        tempOut = 4/5 * (temp-273)
        console.log(temp+" "+tempSource+" = "+tempOut+" "+convertTo)
    }else {
        console.log("Input Invalid")
    }
}else if (tempSource === "Kelvin"){
if (convertTo === "Celcius"){
        tempOut = temp - 273
        console.log(temp+" "+tempSource+" = "+tempOut+" "+convertTo)
    }else if (convertTo === "Fahrenheit"){
        tempOut = 9/5 * (temp-273)+32
        console.log(temp+" "+tempSource+" = "+tempOut+" "+convertTo)
    }else if (convertTo === "Reamur"){
        tempOut = 4/5 * (temp - 273)
        console.log(temp+" "+tempSource+" = "+tempOut+" "+convertTo)
    }else {
        console.log("Input Invalid")
    }
}else {
    console.log("Input Invalid")
}