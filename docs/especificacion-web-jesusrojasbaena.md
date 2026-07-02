# Especificación de proyecto — jesusrojasbaena.github.io

> Documento de brief para construcción con Claude Code (modo Plan). Contiene contenido definitivo, estructura, dirección visual y notas técnicas. No es código — es el guion para construir el código.

---

## 1. Resumen del proyecto

**Quién:** Jesús Rojas Baena, consultor de IA, diseño web y branding para PYMEs, basado en Granada.

**Mensaje principal:** Jesús es un consultor de IA en activo, con una certificación oficial del Estado y casos reales entregados a clientes. Su trayectoria previa (radio, venta consultiva, instalaciones eléctricas, energía solar) no es el titular — es el cimiento que explica por qué su forma de aplicar la IA a negocios reales es distinta: entiende tanto la parte técnica como la comercial porque ha vivido las dos durante 25+ años.

**Público:** doble — PYMEs que necesiten web/branding/IA aplicada, y reclutadores o empresas evaluando su perfil. La web habla en todo momento como consultor independiente; ese registro funciona para ambos públicos sin contradicción.

**Estructura de navegación:** sitio multipágina.
- `/` — Inicio
- `/sobre-mi` — Sobre mí (trayectoria, formación)
- `/proyectos` — Listado de casos
- `/proyectos/eifagas` — Caso Eifagas
- `/proyectos/taberna-ferry` — Caso Taberna Ferry
- `/proyectos/peluqueria-enrique` — Caso Peluquería Enrique
- `/contacto` — Contacto

**Contacto:** formulario de contacto + enlace directo a WhatsApp (+34 656 580 388, confirmado). Pendiente de decidir: a qué backend/servicio envía el formulario, ver sección 6.

---

## 2. Dirección visual — "Estratos, versión acentos"

### Concepto
La trayectoria de Jesús no es una sucesión de cambios de carrera — es una acumulación de capas, donde cada oficio anterior sigue sosteniendo al que vino después (radio → venta consultiva → instalaciones eléctricas/solar → IA aplicada a negocio). El sitio usa esta metáfora de forma sutil: secciones que se presentan como estratos depositados, con un fondo oscuro neutro y acentos de color vivo que marcan información, no decoran sin motivo.

### Paleta

| Uso | Color | Hex |
|---|---|---|
| Fondo base (page) | Grafito oscuro | `#0D1117` |
| Fondo de tarjetas/secciones elevadas | Grafito medio | `#161B22` |
| Borde sutil | Gris-azulado oscuro | `#2A323D` |
| Texto principal | Casi blanco | `#E8EAED` |
| Texto secundario / muted | Gris azulado claro | `#8B98A5` / `#9FB4C4` |
| Acento primario (presente / IA) | Verde fluorescente | `#39FF8E` |
| Acento secundario (técnica / pasado) | Azul eléctrico | `#5B9CFF` (hover/variante: `#1E6FFF`) |
| Texto sobre acento verde (fondos sólidos pequeños, badges) | Verde oscuro | `#04261A` |
| Texto sobre acento azul (fondos sólidos pequeños, badges) | Azul muy claro | `#E8F0FF` |

**Regla de uso crítica:** el verde y el azul son acentos puntuales — títulos, bordes, badges, iconos, líneas de tiempo, estados hover. Nunca se usan como color de fondo de bloques grandes de texto ni como fondo de página. Máximo un acento dominante por sección (no mezclar verde y azul en el mismo bloque salvo en la línea de tiempo de trayectoria, donde cada etapa tiene su propio color para diferenciarse).

### Tipografía
- **Titulares (h1, h2, hero):** serif editorial con carácter — ej. `Georgia`, `Lora`, o `Source Serif 4` (vía Google Fonts). Transmite oficio y calidez humana, contrasta con la frialdad típica de un sitio "tech".
- **Cuerpo, navegación, datos, badges:** sans-serif técnica y limpia — ej. `Inter` o `IBM Plex Sans` (vía Google Fonts).
- Tamaños sugeridos: h1 ~40-48px, h2 ~28-32px, h3 ~20px, cuerpo 17-18px con line-height 1.6-1.7 para lectura cómoda en bloques narrativos largos.

### Motivo de marca
Líneas o bloques horizontales apilados (referencia visual a cortes geológicos / capas de instalación eléctrica vista en sección), usados como separadores entre secciones y como elemento decorativo discreto en la sección de trayectoria. No debe ser ruidoso ni literal — un detalle, no el protagonista.

### Comportamiento de scroll
En la página de Inicio y en Sobre mí, la sección de trayectoria se presenta como una secuencia de capas horizontales que aparecen progresivamente al hacer scroll (fade-in + ligero desplazamiento vertical, parallax sutil — no exagerado). Cada capa es la etapa profesional correspondiente, ordenada de más antigua (abajo, sosteniendo) a más reciente (arriba). Si la implementación de parallax añade complejidad o riesgo de bugs en CSS/JS, es aceptable degradar a una animación simple de fade-in al entrar en viewport (usando `IntersectionObserver`); la metáfora de capas debe mantenerse visualmente incluso sin parallax.

### Accesibilidad
- Contraste mínimo AA en todo el texto sobre fondo oscuro (verificar especialmente `#8B98A5` sobre `#0D1117` y `#161B22`).
- Todo elemento interactivo (botones, enlaces de WhatsApp, formulario) debe ser navegable por teclado y tener estados de foco visibles.
- Imágenes generadas por IA (ver sección 4) deben llevar `alt` descriptivo.
- Respetar `prefers-reduced-motion` para desactivar el parallax/fade-in en usuarios que lo solicitan.

---

## 3. Contenido por página

### 3.1 Inicio (`/`)

**Hero:**
- Titular: *"Veinticinco años aprendiendo oficios. El último es la inteligencia artificial."*
- Subtítulo: *"Consultor de IA, diseño web y branding para pequeños negocios en Granada."*
- CTA primario: *"Ver proyectos"* → `/proyectos`
- CTA secundario: *"Hablemos"* → `/contacto`

**Sección "Lo que hago" (3-4 tarjetas):**
- Diseño y desarrollo web con IA
- Branding e identidad de marca
- Automatización y agentes IA para negocio
- Marketing digital y contenido con IA

**Sección de trayectoria (capas, ver dirección visual):**
Mostrar 4 capas en orden cronológico inverso visual (más reciente arriba):
1. **IA aplicada a negocio** (2024–2026) — formación oficial + proyectos reales
2. **Instalaciones eléctricas y energía solar** (2021–2022) — rigor técnico y normativa
3. **Venta consultiva de tecnología** (1999–2012, 11 años) — trato con el cliente y producto técnico
4. **Radio, comercial y publicidad** (1993–1998) — comunicación persuasiva

Cada capa con una frase corta que conecta lo aprendido entonces con lo que aporta ahora. Enlace a `/sobre-mi` para profundizar.

**Sección "Proyectos recientes" (preview de los 3 casos):**
Tarjeta por proyecto con nombre, una línea de resumen, y enlace a la página de detalle. Ver contenido exacto en sección 3.3.

**Footer:** datos de contacto, enlaces a redes/LinkedIn, enlace a `/contacto`.

---

### 3.2 Sobre mí (`/sobre-mi`)

**Introducción breve:** ampliación del titular del hero, en primera persona, presentando quién es Jesús sin sonar a CV literal.

**Trayectoria completa (versión extendida de las capas del Inicio):**

*Capa 4 — Radio, comercial y publicidad (1993-1998)*
Locutor, comercial y publicista en emisoras de radio municipales en Granada. Primeros pasos en comunicación persuasiva y trato con el público.

*Capa 3 — Venta consultiva y atención al cliente (1998-2022)*
Incluye: Promotor de productos en El Corte Inglés (1999-2001, marcas Thomson y Aiwa); 11 años en venta consultiva de tecnología en Urende (2001-2012); dependiente de electrodomésticos en Centro Hogar Sánchez (2018-2019); gestión de redes sociales en Aspaym Granada (2020).

*Capa 2 — Instalaciones técnicas y energía solar (2021-2022)*
Certificado de Profesionalidad ELES0208 — Operaciones Auxiliares de Montaje de Instalaciones Electrotécnicas y de Telecomunicaciones en Edificios, Nivel 1 (FPE Cartuja, Granada, 380h). Prácticas en Montajes Eléctricos Hermanos Plata. Diseño de proyectos de autoconsumo solar en Solar Europe Andalucía.

*Capa 1 — IA aplicada a negocio (2024-presente)*
Formación intensiva y certificación oficial en IA aplicada a desarrollo web, marketing digital y contenido multimedia. Detalle en la subsección de formación (abajo).

**Subsección "Formación oficial":**

| Título | Código | Institución | Fecha | Duración |
|---|---|---|---|---|
| Programación de Sistemas Informáticos — MF0964_3: Desarrollo de Elementos Software para Gestión de Sistemas ("Desarrollo Web con IA") — Nivel 3 | IFCT0609 | Academia Teba, Granada | 2026 | 210h |
| Operaciones Auxiliares de Montaje de Instalaciones Electrotécnicas y de Telecomunicaciones en Edificios — Nivel 1 | ELES0208 | Centro Público FPE Cartuja, Granada | 2022 | 380h |
| ChatGPT-5.5, Vibe Coding y Agentes IA Autónomos | — | BIG School Academy | 26-28 mayo 2026 | 6h |
| Desarrollo con IA — Programa con agentes | — | BIG School Academy | 24-26 junio 2026 | 6h |

**En curso (NO incluir todavía en la web publicada — finaliza el 8 de julio de 2026; añadir solo a partir de esa fecha, una vez completado):**

| Título | Código | Institución | Estado |
|---|---|---|---|
| Seguridad Informática — MF0490_3: Gestión de Servicios en el Sistema Informático ("Curso de Gestión de Servicios en el Sistema Informático") — Nivel 3 | ITCT0109 | Academia Teba, Granada | En curso — fin previsto 8 de julio de 2026 |

Contenido del IFCT0609 a destacar como bullets: ingeniería de prompt avanzada; generación de contenido multimedia con IA (imágenes, vídeo, música generativa); investigación de nichos de mercado para estrategia publicitaria; desarrollo web asistido por IA (HTML, CSS, GitHub Pages, publicación de proyectos reales).

**Nota de verificación:** los códigos ELES0208, IFCT0609 e ITCT0109 pertenecen a familias profesionales distintas (Electricidad y Electrónica / Informática y Comunicaciones) y fueron confirmados por Jesús contra los documentos físicos de cada certificado. El nivel de ELES0208 (Nivel 1) está además verificado de forma independiente contra la ficha oficial del SEPE.

**Subsección "Herramientas que uso":** ChatGPT, Claude, Copilot, Midjourney, Canva, Figma, GitHub Pages, HTML/CSS, WordPress, n8n/Make, VS Code, Claude Code.

**Nota de idiomas:** español nativo. (Decisión editorial: omitir el nivel de inglés A1 como dato destacado — no aporta a la propuesta de valor de consultoría en español para PYMEs locales; si Jesús insiste en incluirlo, colocarlo en una sección secundaria de datos personales, sin protagonismo).

---

### 3.3 Proyectos (`/proyectos`)

Listado de los 3 casos en formato tarjeta, cada uno con: nombre del negocio, sector, una imagen/captura representativa, resumen de una línea, y enlace "Ver caso completo".

**Eifagas** — Climatización y fontanería, Granada. *"Rescaté la presencia digital de un negocio cuya web anterior fue inutilizada deliberadamente, y construí desde cero una identidad de marca completa."*

**Taberna Ferry** — Hostelería, Granada Norte. *"Identidad de marca emocional para un negocio de barrio: cada momento del día tiene su propio ritual."*

**Peluquería Enrique** — Barbería tradicional, Granada (Beiro). *"Una web que traduce veinte años de confianza de barrio en presencia digital y SEO local."*

---

### 3.4 Caso: Eifagas (`/proyectos/eifagas`)

**Resumen del proyecto:**
El cliente llegó con un problema concreto: su web anterior, alojada en IONOS, había sido inutilizada deliberadamente por el proveedor que la construyó, como represalia por no contratar un servicio de mantenimiento continuado. No existía un brief estructurado ni contenido ordenado para empezar de cero.

**Proceso:**
- Reconstrucción de la información del negocio a partir de los restos accesibles de la web rota y de búsquedas complementarias en Google, ante la ausencia de un brief estructurado del cliente.
- Diseño de una propuesta de logotipo propia, sin saber inicialmente que el cliente ya contaba con uno. Al cliente le gustó el resultado, pero decidió mantener su logo original porque ya estaba presente en el vestuario y materiales del equipo.
- Identidad visual completa desarrollada partiendo del logotipo proporcionado por el cliente.
- Generación de toda la fotografía del sitio mediante IA (no se usaron fotos de stock ni fotografía real de las instalaciones).
- Desarrollo completo del sitio: páginas de inicio, servicios (aire acondicionado, calefacción y aerotermia, fontanería, calderas, detección de fugas, instalaciones de gas), sobre nosotros, contacto, y blog.
- Integración de vías de contacto directo: formulario de presupuesto, llamada telefónica directa, WhatsApp.

**Resultado:** sitio en producción en [eifagas.com](https://eifagas.com), alojado de forma independiente del proveedor anterior.

**Lo que demuestra:** capacidad de reconstrucción y research cuando no hay información ordenada de partida; generación de contenido visual con IA aplicado de forma funcional, no decorativa; desarrollo end-to-end (no solo diseño).

**Llamada a la acción al final del caso:** *"¿Tu web depende de alguien que no responde? Hablemos."* → `/contacto`

---

### 3.5 Caso: Taberna Ferry (`/proyectos/taberna-ferry`)

**Resumen del proyecto:** Taberna Ferry necesitaba una identidad que la separara del turismo de paso y la afianzara como refugio diario de barrio en Granada Norte.

**Proceso:**
- Desarrollo del concepto "Momentos Ferry": cada franja del día (mañanas, mediodía, sobremesa, noche) con su propio carácter visual y emocional.
- Copy narrativo y cercano, evitando el tono genérico de "restaurante más en la ciudad".
- Estructura de conversión simple: reserva directa por WhatsApp con mensaje prerellenado, sin pasos intermedios.

**Resultado:** sitio en producción en [taberna-ferry.netlify.app](https://taberna-ferry.netlify.app/).

**Lo que demuestra:** capacidad de construir identidad de marca emocional, no solo funcional; diseño de la conversión pensando en cómo reserva de verdad un cliente de barrio (WhatsApp, no formularios).

**Llamada a la acción:** *"¿Tu negocio tiene alma pero no se nota en su web? Hablemos."* → `/contacto`

---

### 3.6 Caso: Peluquería Enrique (`/proyectos/peluqueria-enrique`)

**Resumen del proyecto:** más de veinte años de confianza de barrio en Beiro (Granada) que no se traducían en presencia digital ni visibilidad local.

**Proceso:**
- Estructura de conversión clásica: servicios con precios claros, testimonios reales con storytelling generacional (tres generaciones de una misma familia como clientes), llamada a la acción directa.
- Trabajo de SEO local: palabras clave de barrio y ciudad integradas de forma natural en el contenido.
- Tono de marca que prioriza la cercanía y la tradición frente a la estética de barbería "moderna".

**Resultado:** sitio en producción en [peluqueria-enrique.netlify.app](https://peluqueria-enrique.netlify.app/).

**Lo que demuestra:** adaptación de tono y estructura según el tipo de negocio (esto NO es la misma plantilla que Eifagas o Taberna Ferry); trabajo de SEO local aplicado, no solo diseño visual.

**Llamada a la acción:** *"¿Tu negocio de barrio necesita aparecer cuando lo buscan? Hablemos."* → `/contacto`

---

### 3.7 Contacto (`/contacto`)

**Titular:** *"¿Hablamos de tu proyecto?"*

**Formulario de contacto** con campos: nombre, email, tipo de proyecto (desplegable: web nueva / branding / automatización con IA / consultoría / otro), mensaje. Ver sección 6 para opciones de backend del formulario sin servidor propio.

**Bloque de contacto directo:**
- WhatsApp: enlace directo con mensaje prerellenado tipo *"Hola Jesús, me gustaría hablar sobre [tipo de proyecto]"*, al número +34 656 580 388 (confirmado).
- Email: rojasjbcc@gmail.com
- Teléfono: +34 656 580 388
- LinkedIn: enlace al perfil.

**Nota de ubicación:** Granada, España — disponible para proyectos remotos y presenciales en la provincia.

---

## 4. Imágenes y assets

- **Eifagas:** ya cuenta con fotografía generada por IA propia (visible en el sitio en producción). Para la página de caso, usar capturas de pantalla reales del sitio (`eifagas.com`) en lugar de regenerar imágenes.
- **Taberna Ferry y Peluquería Enrique:** usar capturas de pantalla reales de los sitios en producción para las páginas de caso.
- **Sección de trayectoria / capas:** no se necesitan fotografías de stock. El motivo de marca (líneas estratificadas, sección 2) cumple la función visual sin recurrir a imágenes genéricas de "IA" o "oficina".
- **Foto de perfil de Jesús:** CONFIRMADO — Jesús cuenta con una foto profesional propia (retrato de estudio). Usarla en Inicio (hero) y/o Sobre mí. Colocar el archivo en `assets/img/perfil/` al construir el repositorio.

---

## 5. Estructura de archivos sugerida (GitHub Pages, sitio estático)

```
jesusrojasbaena.github.io/
├── index.html
├── sobre-mi.html
├── contacto.html
├── proyectos/
│   ├── index.html
│   ├── eifagas.html
│   ├── taberna-ferry.html
│   └── peluqueria-enrique.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── main.js          (IntersectionObserver para fade-in de capas, validación de formulario)
│   ├── img/
│   │   ├── proyectos/       (capturas de los 3 casos)
│   │   └── perfil/          (si aplica)
│   └── fonts/                (o usar Google Fonts vía <link>, más simple para empezar)
└── README.md
```

Nota: dado que Jesús ya gestiona repos de proyectos similares vía Netlify/GitHub, esta estructura es deliberadamente simple (HTML/CSS/JS estático, sin build step) para minimizar fricción al publicar en GitHub Pages. Si en el futuro se quiere migrar a un generador de sitios estáticos (Eleventy, Astro), esta estructura de contenido se traslada igual.

---

## 6. Pendientes — estado actual

1. **Número de WhatsApp para el botón de contacto** — CONFIRMADO: `+34 656 580 388`.
2. **Backend del formulario de contacto** — sigue pendiente. Al ser GitHub Pages (sitio estático sin servidor propio), se necesita un servicio externo para recibir los envíos. Opciones habituales: Formspree, Web3Forms, o un endpoint propio si Jesús despliega algo en Railway/Render (coherente con su infraestructura ya explorada). Decidir antes de implementar el formulario.
3. **Foto de perfil** — CONFIRMADO: Jesús cuenta con una foto profesional propia (retrato de estudio, traje azul marino, camisa celeste, fondo neutro). Usar en Inicio (hero) y/o Sobre mí. Pendiente solo que Jesús la coloque en `assets/img/perfil/` del repositorio al construir.
4. **Enlaces del footer/contacto** — CONFIRMADO: LinkedIn y la propia web deben estar como enlaces activos (no solo texto). LinkedIn: `https://linkedin.com/in/jesús-rojas-baena-3abb9a54/` (verificar que la URL funcione con el carácter acentuado, o usar el slug que LinkedIn genere). Web propia: enlazar a `jesusrojasbaena.github.io` una vez publicada.
5. **Dominio:** confirmar si se queda en `jesusrojasbaena.github.io` o si en el futuro se apunta un dominio propio.

---

## 7. Cómo usar este documento con Claude Code

Sugerencia de flujo: abrir Claude Code en modo Plan dentro del repositorio `jesusrojasbaena.github.io`, pegar este documento completo como contexto inicial, y pedir un plan de construcción por fases (estructura HTML base + CSS de la paleta → página de Inicio → Sobre mí → listado y páginas de Proyectos → Contacto → ajustes de accesibilidad y responsive). Resolver los pendientes de la sección 6 antes de implementar el formulario de contacto.
