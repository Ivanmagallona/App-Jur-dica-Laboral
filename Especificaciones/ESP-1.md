---
id: ESP-01
estado: aceptada
---

# ESP-01 · La página del equipo

## Qué es
Una página web que presenta a los integrantes del equipo [nombre].

## Para quién
Para quien reciba el enlace: en un minuto debe saber quiénes somos y llegar al perfil de cada quien.

## Qué debe mostrar o hacer
- El nombre del equipo como título.
- Una tarjeta por integrante con los datos de su perfil en `integrantes/`: nombre, carrera, su frase y su foto.
- [Algo más que el equipo decida]

## Decisiones ya tomadas
- Un archivo `index.html` y uno `estilos.css`, los dos en la raíz del repositorio.
- HTML y CSS, sin JavaScript.
- No se descarga nada de otros sitios: sin frameworks ni fuentes externas. La única excepción son las fotos, que vienen de `https://github.com/[usuario].png`.
- Los datos salen de `integrantes/*.md`. La página no inventa ni completa datos que no estén ahí.
- Colores: [los que elija el equipo].

## Criterios de aceptación
1. `index.html` existe en la raíz y se abre en el navegador.
2. El título de la página es el nombre del equipo.
3. Hay exactamente una tarjeta por cada archivo de `integrantes/`, con nombre, carrera, frase y foto.
4. Cada tarjeta enlaza al perfil en GitHub: `https://github.com/[usuario-del-líder]/equipo-[nombre]/blob/main/integrantes/[archivo].md`.
5. No se descarga nada de otros sitios, salvo las fotos de GitHub.
6. Con 360 px de ancho no aparece barra de desplazamiento horizontal.

## Fuera de alcance
- Cambiar los perfiles, el README o cualquier archivo de `docs/`, `pruebas/` o `.github/`.
- Otras páginas, menús, animaciones o JavaScript.

## Cómo se comprueba
    sh pruebas/verificar-sitio.sh   # criterios 1, 3 (un enlace por perfil) y 5

A mano, en el navegador:
- [ ] 2. El título es el nombre del equipo
- [ ] 3. Cada tarjeta tiene nombre, carrera, frase y foto
- [ ] 4. Cada enlace lleva al perfil en GitHub
- [ ] 6. F12 → modo de dispositivo móvil → 360 px de ancho: sin barra horizontal