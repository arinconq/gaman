<?php


      $myfile = fopen("prueba.js", "w") or die("Unable to open file!");
      $txt = "
      hola
      ";
      fwrite($myfile, $txt);
      echo 'archivo creado';

      header('Location: index.js');
      break;

    default:
      // code...
      break;
  }
}

/*
      "."$sentencia"." = "."$conexion."."->"."prepare('SELECT id FROM db_categorias');
      "."$sentencia"."->"."execute();
      "."$idr"." = "."$sentencia"."->fetchAll();

      foreach ("."$idr"." as "."$key"." => "."$valuer".") {
        "."$idrr"." = "."$valuer"."['id'];
      }*/



 ?>
