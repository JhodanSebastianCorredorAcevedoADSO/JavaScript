addEventListener("DOMContentLoaded", (e) => {

    let primera = document.querySelector("#myForm");

    myForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let dataInput = Object.fromEntries(new FormData(e.target));
        let horas = dataInput.horas
        
        let resultados = document.querySelector("#tablaResul")
        resultados.insertAdjacentHTML("beforeend",`
        
        <tr>
            <td>${horas}</td>
            <td>${horas*5208.33}</td>
        </tr>
        
        `)
    })

})