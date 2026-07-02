/* ============================================================
   jesusrojasbaena.github.io — main.js
   Menú móvil, animación de capas al hacer scroll, formulario.
   Sin dependencias externas.
   ============================================================ */

(function () {
  "use strict";

  /* ---------- Menú móvil ---------- */
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* ---------- Animación de aparición (capas que se depositan) ----------
     Respeta prefers-reduced-motion: el CSS ya desactiva la transición,
     pero además aquí evitamos observar si el usuario lo pide. */
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealables = document.querySelectorAll(".reveal");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealables.forEach(function (el) { el.classList.add("visible"); });
  } else {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealables.forEach(function (el) { observer.observe(el); });
  }

  /* ---------- Formulario de contacto ----------
     Backend: Formspree (GitHub Pages no tiene servidor propio).
     Si FORM_ENDPOINT llegara a quedar vacío, el formulario muestra un aviso
     y redirige amablemente a WhatsApp/email en lugar de fallar en silencio. */
  const FORM_ENDPOINT = "https://formspree.io/f/xjgqpajv";

  const form = document.querySelector("#contact-form");
  if (form) {
    const status = form.querySelector(".form-status");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      if (!FORM_ENDPOINT) {
        status.textContent =
          "El formulario aún no está conectado. Escríbeme por WhatsApp o email (a la derecha) y te respondo enseguida.";
        status.className = "form-status error";
        return;
      }

      const data = new FormData(form);
      status.textContent = "Enviando…";
      status.className = "form-status";

      fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      })
        .then(function (res) {
          if (res.ok) {
            form.reset();
            status.textContent = "Mensaje enviado. Te responderé lo antes posible.";
            status.className = "form-status ok";
          } else {
            throw new Error("Respuesta no válida del servidor");
          }
        })
        .catch(function () {
          status.textContent =
            "No se pudo enviar el mensaje. Prueba por WhatsApp o email, o inténtalo de nuevo en unos minutos.";
          status.className = "form-status error";
        });
    });
  }
})();
