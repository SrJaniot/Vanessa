document.getElementById('downloadcarta').addEventListener('submit', function() {
    // Obtener los valores de usuario y contraseña
    var id = document.getElementById('pokemon').value;
    if (id=== '1') {
        // Crea un enlace temporal    
        var link = document.createElement('a');
        link.href = 'ruta/a/tu/archivo.pdf'; // Reemplaza con la ruta de tu archivo PDF
        link.download = 'nombre-del-archivo.pdf'; // Nombre que tendrá el archivo al descargarse
        
        // Añade el enlace al cuerpo del documento
        document.body.appendChild(link);
        
        // Simula el clic en el enlace para iniciar la descarga
        link.click();
        
        // Elimina el enlace del documento
        document.body.removeChild(link);
        
    }
    
    
    
    
    
   
  });

  