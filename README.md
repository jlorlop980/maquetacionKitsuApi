# maquetacionKitsuApi
Hay algun que otro cambio en la maquetacion, como por ejemplo los botones que mueven el listado los vi innecesarios ya que se tenian los scrolls
tambien he añadido en el index un boton que no se encontraba en el diseño pero es para que vieras que funciona el cambio de tema,
en cuanto a la pregunta sobre añadir estilos las formas que se puede hacer es mediante estilos en linea

```html
<div style="color:green;"></div>
```

Otra forma seria añadir la etiqueta style en el codigo
``` html
<style>
  h1{
  color:red;
  }
<style>
```


y la ultima es la mas recomendable, mediante la etiqueta link, las otras no son recomendables ya que alteran la especificidad sobre todo los estilos en linea
que hacen que los etilos en linnea tengan mas especificidad, por lo que podemos tener conflictos si tambien tenemos un link con una hoja de estilos ya que estos tendrian menos especificidad