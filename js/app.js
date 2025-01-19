document.getElementById('agendarCita').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const fecha = document.getElementById('fecha').value;
    const servicio = document.getElementById('servicio').value;

    let errors = false;

    // Validación del nombre
    if (!nombre) {
        showError('nombre', 'Este campo no puede quedar en blanco.');
        errors = true;
    } else if (nombre.length <= 2) {
        showError('nombre', 'El nombre debe tener más de 2 caracteres.');
        errors = true;
    } else {
        hideError('nombre');
    }

    // Validación del correo
    if (!correo) {
        showError('correo', 'Este campo no puede quedar en blanco.');
        errors = true;
    } else if (!correo.includes('@')) {
        showError('correo', 'El correo electrónico debe contener "@"');
        errors = true;
    } else {
        hideError('correo');
    }

    // Validación de la fecha
    if (!fecha) {
        showError('fecha', 'Por favor selecciona una fecha y hora.');
        errors = true;
    } else {
        hideError('fecha');
    }

    // Validación del servicio
    if (!servicio) {
        showError('servicio', 'Por favor selecciona un servicio.');
        errors = true;
    } else {
        hideError('servicio');
    }

    if (errors) return; // Si hay errores, no continuar con el proceso

    // Crear una nueva cita
    const cita = {
        id: new Date().toISOString(),
        nombre,
        correo,
        fecha,
        servicio
    };

    // Guardar la cita en localStorage
    const citas = JSON.parse(localStorage.getItem('citas')) || [];
    citas.push(cita);
    localStorage.setItem('citas', JSON.stringify(citas));

    // Mostrar notificación de éxito
    mostrarNotificacion('exito', 'Cita agendada con éxito!');

    // Redirigir a la página de confirmación
    setTimeout(function() {
        window.location.href = 'confirmacion.html';
    }, 1500);
});

function showError(field, message) {
    const errorElement = document.getElementById(`${field}-error`);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function hideError(field) {
    const errorElement = document.getElementById(`${field}-error`);
    errorElement.style.display = 'none';
}

function mostrarNotificacion(tipo, mensaje) {
    const notificacion = document.getElementById('notificacion');
    const mensajeNotificacion = document.getElementById('mensaje-notificacion');
    
    mensajeNotificacion.innerText = mensaje;
    notificacion.classList.remove('hidden');
    notificacion.classList.add(tipo);

    setTimeout(function() {
        notificacion.classList.add('hidden');
    }, 3000);
}
