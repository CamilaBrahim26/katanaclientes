
//ADD CONTENT BUTTON
const addContent = async () => {
  let fecha = document.getElementById('fechaInput').value
  let nombre = document.getElementById('nameInput').value
  let red = document.getElementById('redInput').value
  let correo = document.getElementById('correoInput').value
  let sexo = document.getElementById('sexoInput').value
  let moto = document.getElementById('motoInput').value
  let modelo = document.getElementById('modeloInput').value
  let dominio = document.getElementById('dominioInput').value
  let telefono = document.getElementById('telefonoInput').value
  let barrio = document.getElementById('barrioInput').value
  let problema = document.getElementById('problemaInput').value
  let estado = document.getElementById('estadoInput').value
  let servicio = document.getElementById('servicioInput').value
  let mecanico = document.getElementById('mecanicoInput').value
  

  if (fecha == '', nombre == '', red == '', correo == '', sexo == '',moto == '',modelo == '',dominio == '',telefono == '',barrio == '',problema == '',estado == '',servicio == '',mecanico == '' ) {
    alert('Por favor, complete todos los campos');
  return
  } else {
    await fetch('  http://localhost:3000/clients',{
      method: 'POST',
      body: JSON.stringify({
        fecha,
        nombre,
        red,
        correo,
        sexo,
        moto,
        modelo,
        dominio,
        telefono,
        barrio,
        problema,
        estado,
        servicio,
        mecanico,
        status: false,
        spotLight: false
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
    alert ('Contenido agregado con éxito')
  }
};

//TABLE
const loadTable = async () => {
  let result = await fetch ('http://localhost:3000/clients')
  let content = await result.json ()
  content.forEach (client => {

    let tableBody = document.getElementById ('tbody')
    let tr = document.createElement ('tr')
  
    tr.innerHTML = `<th scope="row" id=${client.id}>${client.id}</th>
    <td>${client.fecha}</td>
    <td>${client.nombre}</td>
    <td>${client.red}</td>
    <td>${client.correo}</td>
    <td>${client.sexo}</td>
    <td>${client.moto}</td>
    <td>${client.modelo}</td>
    <td>${client.dominio}</td>
    <td>${client.telefono}</td>
    <td>${client.barrio}</td>
    <td>${client.problema}</td>
    <td>${client.estado}</td>
    <td>${client.servicio}</td>
    <td>${client.mecanico}</td>

    <td><button type="button" class="btn btn-link link-dark" onclick="deleteContent(this)" id=${client.id}><i class="bi bi-trash3-fill"></i></button></td>
    <td><button type="button" class="btn btn-link link-dark" onclick="editContent(this)" id=${client.id}><i class="bi bi-pencil-fill"></i></button>

    `
    tableBody.insertBefore (tr, tableBody.children [0])
  })
};

//TABLE FUNCTIONS
const publish = async (client) => {
  let result = await fetch ('http://localhost:3000/clients')
  let content = await result.json ()
  let object = content.find (para => para.id == client.id)
  await fetch (`http://localhost:3000/clients/${object.id}`,{
    method: 'PATCH',
    body: JSON.stringify({
      status: !object.status
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
  alert ('hola')
};

const deleteContent = async (client) => {
  let result = await fetch ('http://localhost:3000/clients')
  let content = await result.json ()
  let idLine = content.find (para => para.id == client.id)
  let id = idLine.id
  
  await fetch (`http://localhost:3000/clients/${id}`, {
    method: 'DELETE',
  });

};

const editContent = async (client) => {
  let result = await fetch ('http://localhost:3000/clients')
  let content = await result.json ()
  let idLine = content.find (para => para.id == client.id)
  let id = idLine.id

  let value = prompt ('Ingrese aquí el tipo de elemento que desea cambiar')
  let change = prompt ('ingrese aqui el cambio que quiere realizar')
   switch (value) {
    case 'fecha de registro':
      await fetch(`http://localhost:3000/clients/${id}`,{
        method: 'PATCH',
        body: JSON.stringify({
          fecha: change
        }),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        }
      })
    break;
    case 'nombre y apellido ':
      await fetch(`http://localhost:3000/clients/${id}`,{
        method: 'PATCH',
        body: JSON.stringify({
          nombre: change
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
    break;    
    case 'red social':
      await fetch(`http://localhost:3000/clients/${id}`,{
        method: 'PATCH',
        body: JSON.stringify({
          red: change
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
    break;    
    case 'correo':
      await fetch(`http://localhost:3000/clients/${id}`,{
        method: 'PATCH',
        body: JSON.stringify({
          correo: change
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
        })
    break;    
    case 'sexo':
      await fetch(`http://localhost:3000/clients/${id}`,{
        method: 'PATCH',
        body: JSON.stringify({
          sexo: change
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
    break;    
    case 'moto':
      await fetch(`http://localhost:3000/clients/${id}`,{
        method: 'PATCH',
        body: JSON.stringify({
          moto: change
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
    break;
    case 'modelo':
      await fetch(`http://localhost:3000/clients/${id}`,{
        method: 'PATCH',
        body: JSON.stringify({
          modelo: change
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
    break;
    case 'dominio':
      await fetch(`http://localhost:3000/clients/${id}`,{
        method: 'PATCH',
        body: JSON.stringify({
          dominio: change
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
    break;
    case 'telefono':
      await fetch(`http://localhost:3000/clients/${id}`,{
        method: 'PATCH',
        body: JSON.stringify({
          telefono: change
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
    break;
    case 'barrio o zona ':
      await fetch(`http://localhost:3000/clients/${id}`,{
        method: 'PATCH',
        body: JSON.stringify({
          barrio: change
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
    break;
    case 'problema a reparar':
      await fetch(`http://localhost:3000/clients/${id}`,{
        method: 'PATCH',
        body: JSON.stringify({
          problema: change
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
    break;
    case 'estado de la moto':
      await fetch(`http://localhost:3000/clients/${id}`,{
        method: 'PATCH',
        body: JSON.stringify({
          estado: change
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
    break;
    case 'servicio':
      await fetch(`http://localhost:3000/clients/${id}`,{
        method: 'PATCH',
        body: JSON.stringify({
          servicio: change
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
    break;
    case 'mecanico':
      await fetch(`http://localhost:3000/clients/${id}`,{
        method: 'PATCH',
        body: JSON.stringify({
          mecanico: change
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
    break;

    default:
      alert ('ingrese correctamente el tipo de elemento que quiere modificar')
      break;
   }
};

const spotLight = async (client) => {
  let result = await fetch ('http://localhost:3000/clients')
  let content = await result.json ()
  let idLine = content.find (para => para.id == client.id)
  let id = idLine.id
  
  let findSpotLight = content.find (para => para.spotLight == true)
  console.log(findSpotLight)

  if (findSpotLight.spotLight == true) {
    await fetch(`http://localhost:3000/clients/${findSpotLight.id}`,{
    method: 'PATCH',
    body: JSON.stringify({
      spotLight: false
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  });
    await fetch(`http://localhost:3000/clients/${id}`,{
      method: 'PATCH',
      body: JSON.stringify({
        spotLight: !client.spotLight
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
  } else {
    await fetch(`http://localhost:3000/clients/${id}`,{
      method: 'PATCH',
      body: JSON.stringify({
        spotLight: true
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    }) 
    alert ('seleccionado')   
  }
};

function enviarWhatsApp() {
  var url = "https://api.whatsapp.com/send?phone=+5493815411665&text=Hola%2C%20tu%moto%ya%20esta%20lista%20!";
  window.open(url, "_blank");
} 
//ONLOAD FUNCTIONS EJECUTIONS
window.onload = loadTable ();