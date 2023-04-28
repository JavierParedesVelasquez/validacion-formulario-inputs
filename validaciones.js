// Espera a que el documento HTML se cargue completamente antes de ejecutar el código JavaScript.
// addEventListener() es un método que permite escuchar eventos que ocurren en el elemento HTML y ejecutar una función cuando eso sucede. En este caso, se está escuchando el evento de input en el elemento contrasena1Input, que se produce cuando se ingresa texto en el campo.
// DOMContentLoaded es un evento que se dispara en el objeto document cuando el árbol DOM de la página ha sido completamente cargado y analizado, sin esperar a que se descarguen todos los recursos externos (como imágenes y hojas de estilo). Esto significa que es seguro interactuar con los elementos del DOM después de que se haya disparado el evento DOMContentLoaded.
document.addEventListener('DOMContentLoaded', function () {

    // Selecciona los inputs del formulario por su ID y los almacena en variables para poder trabajar con ellos más fácilmente.
    const usuarioInput = document.getElementById('usuario');
    const nombreInput = document.getElementById('nombre');
    const contrasena1Input = document.getElementById('contrasena1');
    const contrasena2Input = document.getElementById('contrasena2');

    // Agrega un escuchador de eventos al input de usuario para validar su valor cuando cambie.
    usuarioInput.addEventListener('input', function () {

        // Obtiene el valor del input de usuario y lo limpia de espacios en blanco al inicio y al final.
        const valor = this.value.trim();

        // Verifica si el valor del input de usuario cumple con las condiciones de longitud y caracteres permitidos.
        if (valor.length < 4 || valor.length > 16 || !/^[a-zA-Z0-9_]*$/.test(valor)) {

            // Si el valor del input de usuario no cumple con las condiciones, agrega la clase 'is-invalid' para mostrar un borde rojo y quita la clase 'is-valid' si la tenía.
            this.classList.add('is-invalid');
            this.classList.remove('is-valid');

            // Muestra el icono de 'x' rojo dentro del elemento 'invalid-feedback'.
            const icono = this.parentElement.querySelector('.invalid-feedback .bi-x-circle-fill');
            icono.classList.remove('d-none');

        } else {

            // Si el valor del input de usuario cumple con las condiciones, agrega la clase 'is-valid' para mostrar un borde verde y quita la clase 'is-invalid' si la tenía.
            this.classList.add('is-valid');
            this.classList.remove('is-invalid');

            // Oculta el icono de 'x' rojo dentro del elemento 'invalid-feedback'.
            const icono = this.parentElement.querySelector('.invalid-feedback .bi-x-circle-fill');
            icono.classList.add('d-none');

        }
    });
    nombreInput.addEventListener('input', function () {
        const valor = this.value.trim(); // Obtiene el valor del input y lo limpia de espacios en blanco al principio y al final
        if (valor.indexOf(' ') !== -1) { // Si se encuentra un espacio en blanco en el valor, significa que hay nombre y apellido
            this.classList.add('is-valid'); // Agrega la clase 'is-valid' para indicar que el input es válido
            this.classList.remove('is-invalid'); // Remueve la clase 'is-invalid' por si acaso ya estaba agregada
            const icono = this.parentElement.querySelector('.valid-feedback .bi-check-circle-fill'); // Obtiene el elemento icono que indica que el input es válido
            icono.classList.remove('d-none'); // Remueve la clase 'd-none' que lo mantiene oculto
        } else { // Si no se encuentra un espacio en blanco en el valor, significa que solo se ha ingresado el nombre o el apellido
            this.classList.add('is-invalid'); // Agrega la clase 'is-invalid' para indicar que el input es inválido
            this.classList.remove('is-valid'); // Remueve la clase 'is-valid' por si acaso ya estaba agregada
            const icono = this.parentElement.querySelector('.valid-feedback .bi-check-circle-fill'); // Obtiene el elemento icono que indica que el input es válido
            icono.classList.add('d-none'); // Agrega la clase 'd-none' para ocultarlo
        }
    });

    contrasena1Input.addEventListener('input', function () {
        const valor = this.value.trim(); // obtiene el valor del input y elimina los espacios en blanco del inicio y final
        if (valor.length > 0) { // si el valor tiene una longitud mayor a cero
            this.classList.add('border-primary'); // agrega la clase 'border-primary' al elemento HTML del input
        } else {
            this.classList.remove('border-primary'); // si no, remueve la clase 'border-primary' del elemento HTML del input
        }
    });

    // Se agrega un event listener al input de la segunda contraseña que se activa cuando cambia el valor del input
    contrasena2Input.addEventListener('input', function () {
        // Se obtiene el valor ingresado en el input y se le quitan los espacios en blanco al inicio y final
        const valor = this.value.trim();
        // Se compara el valor del input con el valor del input de la primera contraseña
        if (valor !== contrasena1Input.value.trim()) {
            // Si los valores no son iguales, se agrega la clase 'is-invalid' y se remueve la clase 'is-valid' del input
            this.classList.add('is-invalid');
            this.classList.remove('is-valid');
            // Se busca el ícono de error y se remueve la clase 'd-none' para mostrarlo
            const icono = this.parentElement.querySelector('.invalid-feedback .bi-x-circle-fill');
            icono.classList.remove('d-none');
        } else {
            // Si los valores son iguales, se agrega la clase 'is-valid' y se remueve la clase 'is-invalid' del input
            this.classList.add('is-valid');
            this.classList.remove('is-invalid');
            // Se busca el ícono de error y se agrega la clase 'd-none' para ocultarlo
            const icono = this.parentElement.querySelector('.invalid-feedback .bi-x-circle-fill');
            icono.classList.add('d-none');
        }
    }); contrasena2Input.addEventListener('input', function () {
        const valor = this.value.trim();
        if (valor !== contrasena1Input.value.trim()) {
            this.classList.add('is-invalid');
            this.classList.remove('is-valid');
            const icono = this.parentElement.querySelector('.invalid-feedback .bi-x-circle-fill');
            icono.classList.remove('d-none');
        } else {
            this.classList.add('is-valid');
            this.classList.remove('is-invalid');
            const icono = this.parentElement.querySelector('.invalid-feedback .bi-x-circle-fill');
            icono.classList.add('d-none');
        }
    });
});