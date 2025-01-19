// citas.js
document.addEventListener('DOMContentLoaded', function() {
    // Simulando que el usuario ya ha agendado citas
    const citas = JSON.parse(localStorage.getItem('citas')) || [];

    const listaCitas = document.getElementById('citas-lista');

    if (citas.length > 0) {
        listaCitas.innerHTML = ''; // Limpiar mensaje de "no hay citas"
        citas.forEach(cita => {
            const citaDiv = document.createElement('div');
            citaDiv.classList.add('cita');
            citaDiv.innerHTML = `
                <p><strong>${cita.nombre}</strong> - ${cita.servicio} - ${cita.fecha}</p>
                <button onclick="eliminarCita('${cita.id}')">Eliminar</button>
            `;
            listaCitas.appendChild(citaDiv);
        });
    } else {
        listaCitas.innerHTML = '<p>No tienes citas agendadas.</p>';
    }
});

function eliminarCita(id) {
    const citas = JSON.parse(localStorage.getItem('citas')) || [];
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    localStorage.setItem('citas', JSON.stringify(nuevasCitas));
    window.location.reload();
}
