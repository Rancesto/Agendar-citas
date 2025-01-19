# Agendar-citas
# Proyecto de Agenda de Citas - Barbería Moderno

Este proyecto permite a los usuarios agendar citas en línea para diferentes servicios de una barbería. Está desarrollado con HTML, CSS y JavaScript. Los usuarios pueden elegir entre varios servicios, ingresar su nombre y correo, y seleccionar la fecha y hora para su cita.

## Descripción

La aplicación cuenta con un formulario donde los usuarios pueden agendar sus citas para los siguientes servicios:

- Corte de Pelo
- Pedicure
- Manicure

Los datos ingresados se validan en el frontend antes de ser guardados en el almacenamiento local (`localStorage`).

## Funcionalidades

- **Formulario de Citas**: El formulario permite ingresar nombre, correo electrónico, fecha y hora, y seleccionar el servicio.
- **Validación de Datos**: Se valida que los campos no estén vacíos, que el nombre tenga más de 2 caracteres, y que el correo contenga el símbolo `@`.
- **Notificaciones**: Se muestran notificaciones en caso de error o éxito en la programación de citas.
- **Visualización de Citas**: Una vez que la cita se agenda correctamente, los usuarios son redirigidos a una página de confirmación. Las citas se almacenan en el `localStorage` y pueden ser consultadas más tarde.

## Requisitos

Este proyecto no requiere de servidores o bases de datos externas, ya que utiliza `localStorage` para almacenar las citas. Asegúrate de tener un navegador moderno que soporte `localStorage`.

### Requisitos de software:
- **Navegador web** (Google Chrome, Firefox, Safari, etc.)
- **Editor de texto** (Visual Studio Code recomendado)

## Instalación


Abre el proyecto en tu editor de texto favorito (Recomendado: Visual Studio Code)

code .
Abrir el proyecto en el navegador
Abre el archivo index.html en tu navegador para ver la página principal y empezar a agendar citas.

open index.html
Uso
Agendar una cita:
Accede al formulario de citas en la página principal (index.html).
Completa los campos del formulario:
Nombre: Introduce tu nombre (debe ser mayor a 2 caracteres).
Correo Electrónico: Introduce un correo válido que contenga @.
Fecha y Hora: Selecciona una fecha y hora para tu cita.
Servicio: Elige uno de los servicios disponibles (Corte de Pelo, Pedicure, Manicure).
Haz clic en el botón "Agendar Cita". Si la información es válida, tu cita se guardará en el almacenamiento local (localStorage) y serás redirigido a la página de confirmación.
Consultar citas:
Puedes ver todas las citas agendadas previamente en la página de "Ver Citas Agendadas" (view-citas.html), que leerá los datos del localStorage y los mostrará.

Validaciones:
Si un campo obligatorio está vacío, se mostrará un mensaje de error.
Si el nombre tiene 2 o menos caracteres, aparecerá un mensaje de error.
Si el correo no contiene el símbolo @, se mostrará un mensaje de error.
Notificaciones:
Al enviar el formulario, recibirás una notificación en la parte superior de la página que indicará si la cita fue agendada con éxito o si hubo algún error con los datos ingresados.

Estructura del Proyecto

agendar-citas/

── assets/              # Imágenes o recursos estáticos (si los tienes)
── css/                 # Archivos de estilo (CSS)
    style.css
── js/                  # Archivos de JavaScript
    app.js           # Lógica principal del formulario
    auth.js          # Lógica de autenticación (si aplica)
    citas.js         # Lógica para manejar las citas
── index.html           # Página principal con el formulario de citas
── view-citas.html      # Página para ver las citas agendadas
── confirmacion.html    # Página de confirmación después de agendar una cita
── README.md            # Este archivo con la documentación

Tecnologías Utilizadas
HTML5: Estructura de la página web.
CSS3: Estilos visuales para el diseño.
JavaScript: Lógica de validación y manejo del formulario.
localStorage: Almacenamiento local para guardar las citas agendadas.
Contribuciones
Las contribuciones son bienvenidas. Si deseas agregar nuevas características o corregir errores, por favor crea un fork del repositorio y envía un pull request.

Licencia
Este proyecto está bajo la Licencia MIT. Puedes usarlo, modificarlo y distribuirlo libremente.

¡Gracias por usar Barbería Moderno! Si tienes alguna pregunta o sugerencia, no dudes en abrir un issue en el repositorio.


### Resumen:

1. **Instalación**: Instrucciones para clonar el proyecto y abrirlo en tu editor y navegador.
2. **Uso**: Explicación sobre cómo agendar citas y ver las citas agendadas.
3. **Estructura**: Muestra la estructura de directorios del proyecto.
4. **Tecnologías**: Enumera las tecnologías utilizadas en el proyecto.
5. **Contribuciones**: Explica cómo otros pueden contribuir al proyecto.
6. **Licencia**: El proyecto está bajo la Licencia MIT.
