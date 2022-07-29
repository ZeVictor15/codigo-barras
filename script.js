function barrasDV(boxe = []){

var somaBox   = 0
var somaBox1  = 0
var somaBox2  = 0
var somaTotal = 0

    for(let i = 1; i < 12; i+=2){
       somaBox1 += Number(boxe[i]) * 3
    }

    for(let i = 0; i < 12; i+=2){
        somaBox2 += Number(boxe[i]) 
    }
    
    somaBox = Number(~~ ((somaBox1 + somaBox2) / 10))
    
    somaTotal = Number((10*(1 + somaBox)) - (somaBox1 + somaBox2))

    if(somaTotal >= 10){
        somaTotal = 0
    }

    return  somaTotal
}

function validar(){
    var box = document.getElementById('box')
    var res = document.getElementById('res')
    var digitoDV = barrasDV(box.value)
    var ultimo = box.value.substr(-1)
    var codigoPais = box.value.substring(0,3)
    

    if(box.value.length != 13){
        res.innerHTML = `Código GTIN-13 não possui 13 dígitos`
    }else
        if (digitoDV == ultimo) {
            res.innerHTML = `Digito verificador válido ${barrasDV(box.value)}`
            JsBarcode("#barcode", box.value);
            switch (Number(codigoPais)){
                case 789:
                    res.innerHTML += ` </br> GTIN-13 origem BRASIL: ${codigoPais}`
                    break;
                case 779:
                    res.innerHTML += ` </br> GTIN-13 origem ARGENTINA: ${codigoPais}`
                    break;
                case 773:
                    res.innerHTML += ` </br> GTIN-13 origem URUGUAI: ${codigoPais}`
                    break;
                case 790:
                    res.innerHTML += ` </br> GTIN-13 origem BRASIL: ${codigoPais}`
                    break;
                case 780:
                    res.innerHTML += ` </br> GTIN-13 origem CHILE: ${codigoPais}`
                    break;
                case 784:
                    res.innerHTML += ` </br> GTIN-13 origem PARAGUAI: ${codigoPais}`
                    break;
                case 770:
                    res.innerHTML += ` </br> GTIN-13 origem COLÔMBIA: ${codigoPais}`
                    break;
                case 743:
                    res.innerHTML += ` </br> GTIN-13 origem NICARÁGUA: ${codigoPais}`
                break;
                case 600:
                    res.innerHTML += ` </br> GTIN-13 origem ÁFRICA DO SUL: ${codigoPais}`
                    break;
                case 601:
                    res.innerHTML += ` </br> GTIN-13 origem ÁFRICA DO SUL: ${codigoPais}`
                    break;
                default:
                    res.innerHTML += ` </br> VAREJOS S/A não vende para esse pais: ${codigoPais}`
                    break;
            }
        }else{
            res.innerHTML = `Digito verificador invalido: ${barrasDV(box.value)}`
    }
}

