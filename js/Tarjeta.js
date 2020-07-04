 function generar(){

    document.getElementById("tarjeta").style.display='block';
  
    var titulo = document.getElementById("titulom").value;
    document.getElementById("titulo").innerHTML = titulo;
  
    var subtitulo =document.getElementById("subtitulom").value;
    document.getElementById("subtitulo").innerHTML = subtitulo;
  
    var autor = document.getElementById("autorm").value;
    document.getElementById("autor").innerHTML = autor;
  
    var mensaje = document.getElementById("mensajem").value;
    document.getElementById("mensaje").innerHTML = mensaje;

    var i;
  
    var a = document.getElementsByName("a");
    var b = document.getElementsByName("b");
    var c = document.getElementsByName("color");
  
  
    for( i = 0; i < a.length; i++){
      if(a[i].checked){
        var e = a[i].value;
      } 
    }
  
    for( i = 0; i < b.length; i++){
      if(b[i].checked){
        var n = b[i].value;
      } 
    }
  
    for( i = 0; i < c.length; i++){
      if(c[i].checked){
        var m = c[i].value;
      } 
    }
  
  
    switch (n) {
      case 'a':
        document.getElementById("img").src="imagenes/San Valentin.jpg";
        break;
        case 'b':
          document.getElementById("img").src="imagenes/Feliz Cumpleaños.jpg";
          break;
          case 'c':
            document.getElementById("img").src="imagenes/Motivacion.jpg";
            break;
    
      default:
        imgop='nada';
        break;
    }
  
    switch (m) {
      case 'a':
        document.getElementById("tarjeta").style.backgroundColor="rgb(230, 230, 250)";
        break;
        case 'b':
          document.getElementById("tarjeta").style.backgroundColor="rgb(255, 192, 203)";
          break;
            case 'd':
              document.getElementById("tarjeta").style.backgroundColor="rgb(255, 222, 173)";
              break;
  
  
    
      default:
        colorop='nada';
        break;
    }
  
    
  
    
  }