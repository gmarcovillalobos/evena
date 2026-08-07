# Design QA — Propuesta interactiva Evena Foods

## Evidencia

- Fuente visual de verdad: `design-references/option-1-selected.png`
- Captura final de escritorio: `qa/implementation-desktop-final.jpg`
- Captura final móvil: `qa/implementation-mobile-final.jpg`
- Comparación completa lado a lado: `qa/comparison-final-side-by-side.png`
- Comparación enfocada del hero: `qa/comparison-hero-final.png`
- Estado comparado: portada, navegación cerrada, escenario y modelo de licencia restablecidos a sus valores iniciales.

## Normalización

- Fuente: 1487 × 1058 px, PNG, densidad nominal 1×.
- Implementación de escritorio: viewport CSS 1440 × 1024 px, DPR 1, captura 1440 × 1024 px.
- La fuente se normalizó a 1440 × 1024 px. La diferencia de relación de aspecto fue menor a 0.1%, por lo que se usó un ajuste directo sin recorte material.
- La captura móvil usa viewport CSS 390 × 844 px, DPR 1, y no presenta overflow horizontal.
- La comparación completa reúne fuente e implementación en un solo lienzo de 2880 × 1024 px. La comparación enfocada reúne ambos hero en 2880 × 690 px.

## Findings

No quedan diferencias accionables P0, P1 o P2.

- [P3] Variación menor en el recorte de la bebida.
  - Ubicación: hero, extremo superior derecho.
  - Evidencia: ambas piezas usan una bebida roja vertiéndose en un vaso con máscara curva; la espuma y la posición exacta del chorro difieren porque la implementación usa un activo generado específicamente para el prototipo.
  - Impacto: no altera jerarquía, legibilidad ni dirección de arte.
  - Clasificación: diferencia aceptable.

- [P3] Diferencia óptica menor en iconos.
  - Ubicación: navegación y diagrama de arquitectura.
  - Evidencia: el concepto usa iconografía lineal dibujada en la composición; la implementación usa una familia consistente de iconos Phosphor para mantener accesibilidad, nitidez y estados interactivos.
  - Impacto: el lenguaje visual y el peso de línea se conservan.
  - Clasificación: diferencia aceptable.

## Superficies de fidelidad

- Tipografía: Cormorant Garamond reproduce el contraste editorial del título y Manrope mantiene la lectura funcional. Se verificaron peso, tamaño, interlineado, jerarquía y wrapping en 1440 px y 390 px.
- Espaciado y layout: navegación lateral, margen de contenido, arco de imagen, arquitectura, franja comercial y botones conservan la composición del concepto. No hay colisiones ni recortes.
- Colores y tokens: blanco, tinta, naranja y rojo berry corresponden al sistema visual seleccionado; los estados activos y de foco conservan contraste.
- Calidad de imagen: se usa el logotipo oficial de Evena y un activo raster generado para el hero; no hay imágenes de producto falsas, halos ni estiramiento.
- Copy: se conserva la promesa central, la recomendación Zoho CRM + SalesIQ + Books, la ruta de mayoreo con Mariana, menudeo a tienda, inversión y plazo. El contenido adicional desarrolla el alcance solicitado y separa datos de ejemplo de datos reales.
- Iconos: una sola familia de iconos lineales, tamaños coherentes, `aria-hidden` cuando son decorativos y labels accesibles en controles.
- Responsividad: verificada a 1440 × 1024 y 390 × 844; sin overflow horizontal. La navegación móvil abre, muestra todas las secciones y cierra correctamente.
- Accesibilidad: controles semánticos, navegación por botones/tabs, foco visible, texto alternativo del logotipo y soporte de `prefers-reduced-motion`.

## Comparación enfocada

Se usó `qa/comparison-hero-final.png` porque tipografía, imagen, diagrama, iconos, microcopy y controles requerían lectura a mayor tamaño. No fue necesario un segundo recorte: todos los elementos críticos del concepto están contenidos en ese hero.

## Historial de comparación

### Pass 1

- Evidencia: `qa/implementation-desktop-1440x1024.png`.
- Hallazgos P2: el título tenía wrapping y escala inconsistentes con la fuente; la navegación no mostraba todas las secciones en un viewport de baja altura.
- Fix: ajuste de tipografía editorial y regla responsiva por altura para compactar navegación sin ocultar destinos.

### Pass 2

- Evidencia: `qa/implementation-desktop-pass2.png`.
- Hallazgo P2: el margen horizontal del contenido era mayor que en el concepto y reducía la escala visual de la arquitectura.
- Fix: corrección del padding de sección y ajuste de la máscara/anchura del hero.

### Pass 3

- Evidencia: `qa/implementation-desktop-pass3.png`.
- Hallazgo P2: los cuatro canales aparecían como tarjetas separadas; la fuente visual los agrupaba en un solo contenedor.
- Fix: agrupación de canales, aumento proporcional de nodos compactos y afinación de escala tipográfica.

### Pass final

- Evidencia: `qa/implementation-desktop-final.jpg`, `qa/comparison-final-side-by-side.png` y `qa/comparison-hero-final.png`.
- Resultado: jerarquía, composición, color, tipografía, imagen, arquitectura, franja comercial y copy preservan el concepto. Solo quedan las diferencias P3 aceptables indicadas arriba.

## Pruebas funcionales

- Navegación lateral hacia Flujos, IA, Inversión y regreso al Resumen.
- Tabs de mayoreo/menudeo; “Ver menudeo” muestra el flujo correspondiente.
- Simulador IA; “Compra de menudeo” dirige a “Tienda online de Evena”.
- Calculadora; Zoho One plantilla cambia de $5,160 a $5,805 MXN al aumentar la plantilla y vuelve a $5,685 MXN al restaurar el stack recomendado.
- Menú móvil; apertura, acceso a Seguridad, cierre y regreso a la portada.
- Consola del navegador: 0 errores en escritorio y móvil.
- Build de producción: correcto.
- Pruebas de empaquetado Sites: 4/4 correctas.

## Checklist de implementación

- [x] Fuente y captura final abiertas y comparadas en una sola imagen.
- [x] P0/P1/P2 corregidos y recapturados.
- [x] Desktop y móvil verificados.
- [x] Interacciones principales verificadas.
- [x] Consola, build y pruebas verificados.

final result: passed
