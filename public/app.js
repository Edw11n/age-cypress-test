document.getElementById('form-edad').addEventListener('submit', async e => {
    e.preventDefault();
    const form = e.target;
    const data = {
    nombre: form.nombre.value,
    apellido: form.apellido.value,
    sexo: form.sexo.value,
    fecha: form.fecha.value
    };
    const resp = await fetch('/calcular', {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(data)
    });
    const json = await resp.json();
    const { nombre, apellido, sexo, edad } = json;
    document.getElementById('resultado-js').innerHTML =
    `<p>Nombre: ${nombre} ${apellido}</p>
    <p>Sexo: ${sexo}</p>
    <p>Edad: ${edad.años} años, ${edad.meses} meses y ${edad.dias} días</p>`;
});