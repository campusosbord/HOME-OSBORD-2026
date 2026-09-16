---
name: control-articulos-blog
description: Redacta artículos de blog para Instituto Osbord (Astro, Content Collections) siguiendo el frontmatter exacto, convenciones de cuerpo, ubicación precisa de CTAs, enlazado interno contextual y el plan de los 40 artículos de los silos C (Paisajismo), D (Auxiliar de Enfermería, YMYL), E (Wedding Planning) y F (Interiorismo). Mantiene actualizado controldearticulos.md tras el visto bueno del usuario.
---

# Redactor y Control Editorial de Artículos — Instituto Osbord

Esta skill define el protocolo exacto para producir artículos de blog de nivel profesional para el repositorio Astro de Instituto Osbord, asegurando máxima calidad SEO, voz 100% humana, enlazado interno estratégico y actualización del registro maestro.

---

## 1. Documentos y Rutas Reales en el Proyecto

- **Registro Maestro de Publicaciones:** [`controldearticulos.md`](file:///Users/ninocorda/Desktop/HOME%20OSBORD%20NUEVO%20OPUS/controldearticulos.md) (en la raíz del proyecto).
- **Plan Editorial Unificado:** [`src/Instituto-Osbord-40-Articulos-Pendientes-Unificado.md`](file:///Users/ninocorda/Desktop/HOME%20OSBORD%20NUEVO%20OPUS/src/Instituto-Osbord-40-Articulos-Pendientes-Unificado.md).
- **Validador de Esquema (Zod):** [`src/content.config.ts`](file:///Users/ninocorda/Desktop/HOME%20OSBORD%20NUEVO%20OPUS/src/content.config.ts).
- **Directorio de Artículos:** `src/content/blog/{slug}.md`.
- **Directorio de Imágenes:** `src/assets/blog/{slug}.webp`.
- **Rutas de Conversión y Nombres Oficiales para CTAs:**
  - **Wedding Planning:** `/masters/wedding-planner` → `Máster Profesional en Wedding Planning & Organización de Eventos`
  - **Interiorismo:** `/masters/interiorismo` → `Máster Profesional en Interiorismo, Decoración y Diseño 3D`
  - **Paisajismo:** `/masters/paisajismo` → `Máster en Diseño de Exteriores, Paisajismo y Render 3D`
  - **Auxiliar de Enfermería:** `/masters/enfermeria` → `Curso Profesional Superior: Auxiliar de Enfermería Clínica`
  *(Nota: El middleware redirige automáticamente la ruta `/masters/...` a `/latam/masters/...` o `/us/masters/...` según la geolocalización del usuario. En los artículos siempre se escribe la ruta limpia `/masters/...`).*

---

## 2. Anatomía Exacta de los 2 Bloques CTA (`articulo-recomendado`)

Basado en el análisis de los artículos ya publicados, los dos bloques CTA tienen ubicaciones y propósitos diferenciados:

### A. CTA Intermedio (Al ~45% - 50% del artículo)
- **Cuándo va:** Justo al cerrar el primer bloque conceptual fuerte (por ejemplo, inmediatamente después de la tabla comparativa, o después de explicar las tarifas clave / metodología).
- **Tag:** Siempre es idéntico: `Siguiente paso`.
- **Estructura HTML:**
```html
<a href="/masters/{slug-del-programa}" class="articulo-recomendado">
  <span class="articulo-recomendado-tag">Siguiente paso</span>
  <span class="articulo-recomendado-title">{Nombre oficial del programa} <span>→</span></span>
</a>
```

### B. CTA Final (Al 100% del artículo, cierre absoluto)
- **Cuándo va:** **Inmediatamente después de la última pregunta frecuente**. Es el último elemento del archivo.
- **Tag:** Es personalizado y contextual. Conecta el beneficio central abordado en el post con la invitación al programa. Ejemplos reales validados:
  - *"Si buscas un máster online con mentoría real y casos prácticos, conoce nuestro"*
  - *"Si quieres aprender este proceso completo aplicado a proyectos reales, conoce nuestro"*
  - *"Si quieres convertirte en wedding planner y aprender a cobrar lo que vale tu trabajo, conoce nuestro"*
- **Estructura HTML:**
```html
<a href="/masters/{slug-del-programa}" class="articulo-recomendado">
  <span class="articulo-recomendado-tag">{Frase de beneficio contextual}, conoce nuestro</span>
  <span class="articulo-recomendado-title">{Nombre oficial del programa} <span>→</span></span>
</a>
```

---

## 3. Estrategia de Enlazado Interno (Internal Linking)

Del análisis de los artículos existentes se extraen las siguientes reglas de oro:
1. **Integración Narrativa (Nunca en listas sueltas):** El enlace debe fluir dentro del razonamiento del párrafo.
   * **Fórmula de éxito probada en el blog:**
     - *"Si ya viste [los errores más comunes en un primer proyecto](/blog/interiorismo/errores-decorar-primer-proyecto), sabes que..."*
     - *"Si ya viste [qué software dominar como interiorista](/blog/interiorismo/software-diseno-3d-interiores), sabes que..."*
     - *"...tal como explicamos en nuestra [guía de tarifas para wedding planners](/blog/wedding-planner/cuanto-gana-un-wedding-planner)..."*
2. **Momento del enlace:** Colocar entre 2 y 4 enlaces internos repartidos entre el 20% y el 70% del artículo.
3. **Fuente de URLs:** Consultar siempre [`controldearticulos.md`](file:///Users/ninocorda/Desktop/HOME%20OSBORD%20NUEVO%20OPUS/controldearticulos.md). Si es un silo nuevo (como Paisajismo), enlazar con artículos complementarios de Interiorismo (cross-linking) o viceversa si hay afinidad proyectual real.
4. **Primer artículo de un silo aislado (ej. Silo D - Enfermería):** Si no existen aún otros artículos con afinidad temática dentro del blog, el primer artículo se publica sin enlaces internos forzados para preservar la coherencia contextual y las directrices YMYL. **Compromiso editorial obligatorio:** En cuanto se redacte y apruebe el segundo artículo del silo (D2), es mandatorio volver de inmediato a D1 y agregar el enlace bidireccional cruzado en ambos artículos.

---

## 4. Imágenes Obligatorias (2 Imágenes en formato `.webp`)

1. **Formatos y Rutas:** Siempre `.webp`, alojadas en `../../assets/blog/`.
2. **Imagen de Portada (Frontmatter):** La imagen definida en el frontmatter coincide con la imagen principal mostrada en el cuerpo del post.
3. **Distribución en el Cuerpo:**
   - **Imagen 1:** Aproximadamente al **25%** del post, después de un subtítulo `##`.
   - **Imagen 2:** Aproximadamente al **75%** del post, después de un subtítulo `##` o antes de Preguntas Frecuentes.
4. **Alt Text:** Específico, descriptivo y realista (ej: `"Pantalla de computadora mostrando la aplicación de materiales y texturas sobre un modelo 3D"`).

---

## 5. Frontmatter Estricto (Validado por Astro & Zod)

```yaml
---
title: "Título idéntico al H1. Máximo ~60 caracteres para evitar truncamiento en Google."
category: "wedding-planner" | "interiorismo" | "paisajismo" | "enfermeria"
publishDate: YYYY-MM-DD
excerpt: "Meta description persuasiva con la keyword principal. Límite estricto: máximo 155-190 caracteres (Zod rechaza > 200)."
image: "../../assets/blog/{slug}.webp"
author: "Instituto Osbord"
readingTime: 7
featured: false
---
```

---

## 6. Estructura Completa del Cuerpo

1. `# Título del Artículo` (H1 idéntico al frontmatter, vigilando que no supere ~60 caracteres).
2. **Párrafo de apertura directo:** Menos de 60 palabras, responde la duda principal o cifra sin rodeos introductorios.
3. **Sección comparativa o tabla:** (Si el tema compara opciones, modalidades o tarifas por país).
4. **Secciones de desarrollo con `##`:** Párrafos ágiles, prosa humana, tuteo neutro.
5. **Imagen 1 (`.webp` al ~25%):** Con alt text descriptivo.
6. **Primer CTA (`articulo-recomendado` al ~45-50%):** Con tag `"Siguiente paso"`.
7. **Enlace(s) interno(s):** Integrados de forma contextual usando [`controldearticulos.md`](file:///Users/ninocorda/Desktop/HOME%20OSBORD%20NUEVO%20OPUS/controldearticulos.md).
8. **Imagen 2 (`.webp` al ~75%):** Con alt text descriptivo.
9. **Sección `## Preguntas frecuentes`:** Exactamente 3 preguntas formateadas obligatoriamente como texto en **negrita dentro de párrafo** (`**¿Pregunta en negrita?**`), con respuesta en texto fluido normal (nunca usar encabezados `###`, nunca bullets). Este es el formato validado en todos los artículos del blog.
10. **Segundo CTA (`articulo-recomendado` al final):** Con tag contextual enfocado en el beneficio.

---

## 7. Directrices de Tono Humano y SEO

- **Title SEO:** Límite máximo de ~60 caracteres para garantizar visibilidad completa en la SERP de Google.
- **Mínimo 1.000 palabras** de contenido real.
- **Cero muletillas de IA:** Prohibido usar *"en el mundo actual"*, *"es fundamental destacar"*, *"en resumen"*, *"cabe mencionar"*, adjetivos triples vacíos o cierres cliché.
- **Sin precios numéricos de los cursos:** Los precios solo se brindan por WhatsApp con el asesor de admisiones.
- **Contenido Evergreen:** Sin año en títulos, URLs ni slugs (evitar "en 2026").
- **Fuentes reales obligatorias para salarios y mercado:** Cada vez que se mencionen cifras de ingresos o tarifas por país, es OBLIGATORIO citar fuentes reales y verificables (organismos estadísticos como BLS, asociaciones profesionales como ASLA, CPAU, CAAP, SCA, o portales de empleo como Computrabajo, Talent.com, ZipRecruiter, TuSalario.org). Prohibido colocar cifras aisladas sin fuente.
- **NUNCA usar la palabra "oficial" para cifras de dinero:** Las cifras de portales de empleo (Computrabajo, Indeed, Talent.com, ZipRecruiter, etc.) son SIEMPRE **estimaciones**, no datos regulados. Las tarifas freelance son SIEMPRE **rangos orientativos de mercado**. Solo la BLS (EE.UU.) y estadísticas de organismos gubernamentales son datos verificables de primera fuente, pero aun así NO se llaman "cifras oficiales" en el texto: se describe la fuente directamente (ej: *"según la U.S. Bureau of Labor Statistics"*). La palabra "oficial" está **prohibida** al hablar de salarios o tarifas en cualquier artículo.
- **Prohibido inventar estadísticas, porcentajes o plazos:** No crear porcentajes ficticios (como tasas de conversión estimadas), plazos temporales arbitrarios (como semanas o meses exactos sin base de estudio) ni proporciones inventadas. Si un dato no cuenta con una fuente empírica o institucional verificable, debe expresarse siempre como **criterio profesional cualitativo**, nunca como una cifra numérica.
- **Reglas YMYL (Silo D - Auxiliar de Enfermería):** Sin diagnósticos ni recomendaciones clínicas, sin promesas de homologación o empleo garantizado, cifras con rango y fuente explícita.

---

## 8. Flujo de Trabajo y Aprobación ("Visto Bueno")

1. **Redacción y Generación de Assets:** Se crea el archivo `.md` en `src/content/blog/` y se generan las imágenes en `.webp` en `src/assets/blog/`.
2. **Entrega para Revisión:** Se le presenta al usuario indicando conteo de palabras, enlaces internos aplicados y chequeos de calidad.
3. **Visto Bueno del Usuario:** Una vez que el usuario aprueba el artículo:
   - Se actualiza inmediatamente [`controldearticulos.md`](file:///Users/ninocorda/Desktop/HOME%20OSBORD%20NUEVO%20OPUS/controldearticulos.md), sumando la nueva fila con: `#`, Título, Slug, URL relativa, Fecha, Tiempo de lectura y Destacado.
   - Se actualiza el contador de artículos publicados en el resumen global.
   - Si aplica, se actualizan artículos antiguos para enlazado bidireccional.
