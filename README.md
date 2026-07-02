# jesusrojasbaena.github.io

Web personal de Jesús Rojas Baena — consultor de IA, diseño web y branding para PYMEs en Granada.

Sitio estático (HTML5, CSS3, JavaScript vanilla), sin build step ni dependencias. Diseño "Estratos, versión acentos" — especificación completa en `docs/especificacion-web-jesusrojasbaena.md`.

## Estructura

```
├── index.html                      Inicio
├── sobre-mi.html                   Trayectoria y formación
├── contacto.html                   Formulario + contacto directo
├── proyectos/
│   ├── index.html                  Listado de casos
│   ├── eifagas.html
│   ├── taberna-ferry.html
│   └── peluqueria-enrique.html
├── assets/
│   ├── css/styles.css
│   ├── js/main.js
│   └── img/
│       ├── perfil/                 → añadir jesus.jpg (foto de perfil)
│       └── proyectos/              → añadir capturas (ver abajo)
└── docs/
    └── especificacion-web-jesusrojasbaena.md
```

## Tareas pendientes antes de publicar

1. ~~Foto de perfil~~ — hecho (`assets/img/perfil/jesus.jpg`, recortada a 600×600 y comprimida).
2. ~~Capturas de proyectos~~ — hecho (`assets/img/proyectos/eifagas.jpg`, `taberna-ferry.jpg`, `peluqueria-enrique.jpg`: recortadas a la cabecera de cada sitio, 1200×675, comprimidas). Se usan tanto en las tarjetas de la página de Proyectos como en cada página de caso.
3. ~~Formulario de contacto~~ — hecho, conectado a Formspree (`assets/js/main.js`, constante `FORM_ENDPOINT`).
4. **Certificado ITCT0109 (Seguridad Informática):** finaliza el 8 de julio de 2026. Añadirlo a la tabla de formación de `sobre-mi.html` solo a partir de esa fecha.

## Publicar

```bash
git add .
git commit -m "Nueva web personal"
git push
```

GitHub Pages sirve automáticamente desde la rama principal. La web queda en https://jesusrojasbaena.github.io (tarda 1-2 minutos tras el push).
