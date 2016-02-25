# Customizer
## Requerimientos
El proyecto cuenta con dos tipos de personas que hacen uso del sistema, los cuales son un cliente y un administrador.

El objetivo es contar con una interfaz para facilitarle al cliente la prueba de distintos materiales y acabados en ambientes domésticos.

## Historia del cliente
 - El cliente puede elegir entre dos ambientes (cocina clásica, cocina moderna).
 - El cliente puede ver una lista de elementos que puede personalizar.
 - El cliente puede ver una lista de materiales disponibles.
 - El cliente puede cambiarle el material del piso.
 - El cliente puede cambiarle el material de la pared.
 - El cliente puede cambiarle el material de la mesada.
 - El cliente puede cambiarle el material del bajo mesada y la alacena.
 - El cliente puede compartir en facebook el diseño final de la sala.
 - El cliente puede ver un resumen de los materiales empleados en el diseño de la sala.

## Historia del administrador
 - El administrador puede iniciar sesión a una sección especial del sistema.
 - El administrador puede ver una lista de materiales.
 - El administrador puede ver una lista de ambientes.
 - El administrador puede ver en detalles un ambiente.
    - nombre del ambiente
    - descripción del ambiente
    - fecha de creación
    - nombre del autor del render
    - zonas del ambiente (piso, pared, mesada, etc).
 - El administrador puede ver un listado de zonas personalizables del ambiente
    - El administrador puede modificar el nombre del ambiente.
    - El administrador puede modificar la descripción del ambiente.
    - El administrador puede ver los materiales asociados a la zona del ambiente.
    - El administrador puede asociar materiales a la zona del ambiente para generar una nueva opción de personalización al usuario.
 - El administrador puede subir nuevos materiales.
 - El administrador puede quitar materiales.

## Caminos de desarrollo
Se contemplan varias vías posibles para la implementación del proyecto. Ambas con diferencias en limitaciones, costos, beneficios y contrapartidas.

### a) Imágenes prerenderizadas superpuestas en cliente.
_Contras:_
 * Formas de muebles limitadas a estructuras rectas.
 * No se pueden elegir formas (por ejemplo: bordes biselados, etc)
 * El acabado puede no resultar fotorealista.
_Beneficios:_
 * Simple implementación
 * Menor uso de renders
 * Menor tiempo de desarrollo
 * Menor requisito de infraestructura (servidores, ancho de banda, etc)

### b) Imagenes prerenderizadas
 _Contras:_
 * El limite de personalización es el costo por render.
 * Se necesitan más renders. Un render por cada combinación posible.
_Beneficios:_
 * Se puede contar con resultados fotorealistas.
 * Sencilla implementación.

### c) Renderizado por servidor
 _Contras:_
 * Implementación compleja
 * Elevado costo de infraestructura
 * Puede haber respuesta lenta del servicio
 _Beneficios:_
 * Resultados más acabados, hasta fotorealistas.
 * Mayor capacidad de personalización


## Prueba de concepto con svg
Este demo corresponde a la opción *a*. (ver enlace)[http://avilaj.github.io/kitchen-customizer-demo/]