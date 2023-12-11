document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto
    
    // Obtener los valores de usuario y contraseña
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Lógica de autenticación (simulada)
    // Esta es una lógica básica para ejemplificar; en una aplicación real, la autenticación debe ser segura y manejada en el servidor
    if (username === 'xvaneuwu' && password === '1012990210') {// Toast de éxito
        $('.toast-success').toast('show');
        // Redirigir al usuario a dashboard.html después del inicio de sesión exitoso
        setTimeout(function() {
          window.location.href = 'dashboard.html';
        }, 3000); // Redirigir después de 3 segundos (3000 milisegundos)
      
    } else {
      // Toast de error
      $('.toast-error').toast('show');
    }
  });

