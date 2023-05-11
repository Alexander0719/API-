const API_URL = 'http://localhost/api/api-rest/public/api/cuponv';
var veri = true;
const HTMLResponse2 = document.querySelector("#app2");





function logOut(){
  
 
  fetch('http://localhost/api/api-rest/public/api/logout', {

  method: 'POST',
  headers: {
    "Content-type": "application/json",
    "Authorization": `Bearer ${localStorage.getItem("token")}`,
},
  })
.then(response => response.json())
.then(json => alert("Sesion cerrada con exito"))

}
function login(){
  var email = document.getElementById('correo').value;
  var clave = document.getElementById('clave').value;
  let _datos = {
    email: `${email}`,
    password: `${clave}`, 
    
  }

  fetch('http://localhost/api/api-rest/public/api/login', {
    method: "POST",
    body: JSON.stringify(_datos),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  .then(response => response.json()) 
  .then((json) => { if(json.error){
   alert("Credenciales invalidas");

  } else{
   

    localStorage.setItem("token", `${json.access_token}`);
    location.href = "index.html";
    
    
    
   
    
  }

});

}




function busqueda(){
    var id = document.getElementById('id').value;
    
const HTMLResponse = document.querySelector("#app");


fetch(`${API_URL}/${id}`, {
 
  headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`,}
}).then((res) => res.json()).then((cupon) => {
    const tpl = `
    <h4>Datos del cupón</h4>
<table class="table table-bordered mt-4">
  <tbody>
    <tr>
      <th scope="row" class="table-dark">Oferta</th>
      <td>${cupon.cuponv.cuponr.Titulo}</td>
      <input type="hidden" id="IdCuponR" value="${cupon.cuponv.IdCupon}">
      
      
    </tr>
    <tr>
      
      <th class="table-dark">Codigo</th>
      <td>${cupon.cuponv.IdCuponV}</td>
      <input type="hidden" id="IdCuponV" value="${cupon.cuponv.IdCuponV}">
      
    </tr>
    <tr>
      
      <th class="table-dark">No. Venta</th>
      <td>${cupon.cuponv.IdVenta}</td>
      <input type="hidden" id="IdVenta" value="${cupon.cuponv.IdVenta}">
      
    </tr>
    <tr>
     
      <th class="table-dark">Dui</th>
      <td>${cupon.cuponv.cliente.Dui}</td>
      <input type="hidden" id="IdCliente" value="${cupon.cuponv.IdCliente}">
      <input type="hidden" id="cDui" value="${cupon.cuponv.cliente.Dui}">
      
    </tr>
    <tr>
      
      <th class="table-dark">Descuento</th>
      <td>${((cupon.cuponv.cuponr.PrecioOferta*100)/cupon.cuponv.cuponr.PrecioRegular).toFixed(2)}%</td>
      
    </tr>
    <tr>
      <th class="table-dark">Estado</th>
      <td>${cupon.cuponv.estado.NombreEstado}</td>
    </tr>
    
  </tbody>
</table>`;
    HTMLResponse.innerHTML = `${tpl}`;
    if(cupon.cuponv.Estado == 1){
    HTMLResponse2.innerHTML = `
    <h4>Canjear cupon</h4><br>
    <label for="">Ingrese el dui del cliente:</label>
    <input type="text" id="Dui"><br><br>
    <button type="button" class="btn btn-success" value="canjear" onclick="canjear();">Canjear cupón</button>`;}
}).catch(error => {alert("El codigo ingresado no es válido"); HTMLResponse.innerHTML = ""; HTMLResponse2.innerHTML = "";});

}

function canjear(){
    var id = document.getElementById('IdCuponV').value;
    var idv = document.getElementById('IdVenta').value;
    var idr = document.getElementById('IdCuponR').value;
    var idc = document.getElementById('IdCliente').value;
    var cdui = document.getElementById('cDui').value;
    var dui = document.getElementById('Dui').value;
    if(cdui == dui){
    fetch(`${API_URL}/${id}`, {

            method: 'PUT',
            headers: {
              "Content-type": "application/json",
              "Authorization": `Bearer ${localStorage.getItem("token")}`,
          },
            body: JSON.stringify({
                IdCuponV: `${id}`,
                IdVenta: `${idv}`,
                IdCupon: `${idr}`,
                IdCliente: `${idc}`,
                Estado: 2
 
            }),
            })
      .then(response => response.json())
      .then(json => console.log(json))

      alert("Cupon actualizado con exito")

      location.reload();
        }
        else{
            alert("El Dui ingresado es incorrecto");
        }

      
  
}





