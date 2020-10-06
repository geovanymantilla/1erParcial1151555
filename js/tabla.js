async function traerDatos(){
    console.log("alv");
    const data = await fetch(
        "https://www.datos.gov.co/resource/gt2j-8ykr.json"
    );
    const dataJson = await data.json();
    console.log(dataJson);
    let tbody = document.getElementById("bodyTable");
    let content = ``;
    for (let i = 0; i < 25; i++) {
        content += `<tr>
            <td>${dataJson[i].fecha_de_notificaci_n}</td>
            <td>${dataJson[i].ciudad_de_ubicaci_n}</td>  
            <td>${dataJson[i].atenci_n}</td> 
            <td>${dataJson[i].edad}</td> 
            <td>${dataJson[i].sexo}</td> 
            <td>${dataJson[i].tipo}</td>
            <td>${dataJson[i].estado}</td>
            <td>${dataJson[i].ubicaci_n_recuperado}</td>   
        </tr>`;
    }
    tbody.innerHTML = content;
}

traerDatos();