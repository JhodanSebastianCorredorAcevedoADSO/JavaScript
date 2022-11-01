addEventListener("DOMContentLoaded", (e) => {

    let primera = document.querySelector("#myForm");
    let resultados = document.querySelector("#resultados")
    myForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let dataInput = Object.fromEntries(new FormData(e.target));
        let numero = dataInput.numero
        let suma = 0
        resultados.innerHTML = ""
        for (let i = 1; i < numero; i++) {
            if (numero % i == 0) {
                suma += i
            }
        }
        if (suma == numero) {
            //alert(`${numero}Es perfecto`)
            resultados.insertAdjacentHTML("beforeend", `
                <h1>${numero} Es perfecto</h1>
            `)
        }
        else {
            //alert(`${numero} NO es perfecto`)
            resultados.insertAdjacentHTML("beforeend", `
                <h1>${numero} NO es perfecto</h1>
            `)
            
        }
        
    })
    
})