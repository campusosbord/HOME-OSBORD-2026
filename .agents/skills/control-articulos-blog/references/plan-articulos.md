# Plan de los 40 artículos pendientes — Instituto Osbord

Usa esta tabla para saber, dado un código de artículo (ej. "C1", "D6", "E3", "F10"), cuál es su título exacto, keyword principal, silo, y con qué artículos ya publicados debe enlazar internamente.

## Mapeo de silo → category (frontmatter) → carpeta del máster

| Silo | category (frontmatter) | Programa | /masters/{slug} |
|---|---|---|---|
| C | paisajismo | Máster en Diseño de Exteriores, Paisajismo y Render 3D | /masters/paisajismo |
| D | enfermeria | Curso Profesional Superior: Auxiliar de Enfermería Clínica | /masters/auxiliar-enfermeria |
| E | wedding-planner | Máster en Organización de Eventos y Wedding Planning (ampliación) | /masters/wedding-planner |
| F | interiorismo | Máster en Interiorismo, Decoración y Diseño 3D (ampliación) | /masters/interiorismo |

Si el slug real de `/masters/` para paisajismo o enfermería es distinto, pregúntale al usuario antes de generar el CTA — no lo inventes.

## Silo C — Paisajismo (10 artículos, programa nuevo)

| # | Título | Keyword principal | Prioridad | Tablero Pinterest |
|---|---|---|---|---|
| C1 | Cuánto Gana un Paisajista o Diseñador de Exteriores (Guía por País) | cuánto gana un paisajista | 1 (máxima) | Tarifas y carrera en paisajismo |
| C2 | Cómo Cobrar tus Primeros Proyectos de Diseño de Exteriores | cuánto cobrar diseño de jardín | 4 | Tarifas y carrera en paisajismo |
| C3 | Cómo Ser Paisajista sin Estudiar Arquitectura: Guía Paso a Paso | cómo ser paisajista sin título | 2 | Cómo ser paisajista |
| C4 | Diseño de Exteriores vs. Paisajismo vs. Jardinería: Diferencias Reales | diferencia entre jardinero y paisajista | 3 | Cómo ser paisajista |
| C5 | Software de Diseño de Exteriores que Todo Paisajista Debe Dominar | software para diseño de jardines | 3 | Software y render de exteriores |
| C6 | Cómo Usar Inteligencia Artificial para Diseñar Jardines y Exteriores | diseño de jardines con inteligencia artificial | 3 | Software y render de exteriores |
| C7 | Tendencias en Diseño de Exteriores y Paisajismo | tendencias en jardines y exteriores | 4 | Tendencias de exteriores |
| C8 | Máster en Paisajismo Online vs. Presencial: Cuál Conviene Más | curso de paisajismo online o presencial | 2 | Cómo ser paisajista |
| C9 | 10 Errores Comunes al Diseñar un Jardín o Espacio Exterior | errores al diseñar un jardín | 4 | Tendencias de exteriores |
| C10 | Interiorismo y Paisajismo: Por Qué Diseñar Adentro y Afuera Va Junto | diseño de interiores y exteriores | 4 (cross-sell) | Cómo ser paisajista |

**C10 es especial**: no busca tráfico nuevo, busca convertir lectores del silo de Interiorismo. Debe enlazar activamente hacia `diseno-interiores-vs-decoracion` y `software-diseno-3d-interiores` (ambos ya publicados).

**Notas YMYL/cumplimiento:** ninguna para este silo, pero sé preciso con las cifras salariales — siempre con rango y fuente (España 21.000€-30.000€/año vía Talent.com/CEAC; México 9.000-30.000 MXN/mes vía Misalario.org; freelance 3%-8% del valor de la obra vía arquitecturaydiseno.es).

## Silo D — Auxiliar de Enfermería Clínica (10 artículos, programa nuevo — YMYL)

| # | Título | Keyword principal | Prioridad | Tablero |
|---|---|---|---|---|
| D1 | Cuánto Gana un Auxiliar de Enfermería (Guía por País) | cuánto gana un auxiliar de enfermería | 1 (máxima, junto a D6) | Carrera en salud |
| D2 | Cómo Ser Auxiliar de Enfermería sin Ir a la Universidad: Requisitos Reales | requisitos para ser auxiliar de enfermería | 2 | Carrera en salud |
| D3 | Auxiliar de Enfermería vs. Técnico en Enfermería: Diferencias que Debes Conocer | diferencia entre auxiliar y técnico en enfermería | 3 | Carrera en salud |
| D4 | Funciones Reales de un Auxiliar de Enfermería Clínica | funciones de un auxiliar de enfermería | 3 | Carrera en salud |
| D5 | Dónde Puede Trabajar un Auxiliar de Enfermería (Clínicas, Hospitales y Más) | dónde trabajar como auxiliar de enfermería | 4 | Carrera en salud |
| D6 | Curso de Auxiliar de Enfermería Online: Qué Debe Tener un Programa Serio | curso de auxiliar de enfermería online certificado | 1 (máxima, junto a D1) | Cómo estudiar enfermería |
| D7 | Cuánto Tiempo Toma Estudiar para Ser Auxiliar de Enfermería | cuánto dura el curso de auxiliar de enfermería | 4 | Cómo estudiar enfermería |
| D8 | Auxiliar de Enfermería sin Experiencia: Cómo Conseguir tu Primer Trabajo | auxiliar de enfermería sin experiencia | 4 | Carrera en salud |
| D9 | Curso de Auxiliar de Enfermería Online vs. Presencial: Cuál Elegir | curso auxiliar de enfermería online o presencial | 2 | Cómo estudiar enfermería |
| D10 | De Auxiliar de Enfermería a Enfermero Profesional: Cómo Seguir Creciendo | cómo pasar de auxiliar a enfermero | 4 | Carrera en salud |

**⚠️ REGLAS DE CUMPLIMIENTO OBLIGATORIAS PARA TODO EL SILO D (contenido YMYL):**
- NUNCA dar consejo clínico: nada de dosis, procedimientos médicos ni diagnósticos.
- NUNCA prometer o insinuar equivalencia legal del título entre países — la regulación de "auxiliar de enfermería" varía por país (ej. TCAE en España es un término regulado distinto a Latinoamérica).
- NUNCA garantizar empleo. Lenguaje permitido: "esto te prepara para...", "esto te da las bases para..." — nunca "esto te garantiza un puesto como...".
- Toda cifra salarial va SIEMPRE con rango y fuente citada, nunca un número único aislado. Fuentes de referencia ya investigadas: Indeed (~1.53M COP/mes en Colombia), Computrabajo (~1.21M COP/mes), rango general 1.2-1.8M COP (hasta 2M en privado con turnos extra) según edesa.edu.co, medised.edu.co, ciandco.edu.co.
- D3 debe aclarar la diferencia de terminología/regulación entre países (auxiliar vs. TCAE) para no generar expectativas que el curso no puede cumplir.
- Hay más de 200 leads sin cerrar de este programa — el CTA hacia WhatsApp con Javier debe ser natural pero puede ser algo más directo que en otros silos, sin caer en promesas de empleo.

## Silo E — Wedding Planning, ampliación de negocio (10 artículos)

| # | Título | Keyword principal | Prioridad | Tablero | Enlazar con (ya publicado) |
|---|---|---|---|---|---|
| E1 | Cómo Conseguir tus Primeros Clientes como Wedding Planner sin Gastar en Publicidad | cómo conseguir clientes wedding planner | 1 | Negocio de wedding planner | de-cero-a-wedding-planner, elegir-negociar-proveedores-eventos |
| E2 | Cómo Armar tu Portafolio de Wedding Planner sin Experiencia Previa | portafolio de wedding planner sin experiencia | 4 | Negocio de wedding planner | de-cero-a-wedding-planner |
| E3 | Contrato de Wedding Planner: Qué Debe Incluir para Protegerte | contrato de wedding planner | 3 | Negocio de wedding planner | — |
| E4 | Errores al Cotizar un Evento que Ahuyentan Clientes (y Cómo Evitarlos) | errores al cotizar una boda | 2 | Negocio de wedding planner | cuanto-cobrar-por-organizar-un-evento |
| E5 | Wedding Planner Freelance vs. Montar tu Propia Empresa de Eventos | wedding planner freelance o empresa | 4 | Negocio de wedding planner | wedding-planner-vs-organizador-eventos |
| E6 | Kit de Herramientas y Software que Todo Wedding Planner Debe Tener | herramientas para wedding planner | 3 | Negocio de wedding planner | — |
| E7 | Cómo Presentarte ante tu Primera Pareja de Novios (Guion de Primera Reunión) | primera reunión con clientes wedding planner | 4 | Negocio de wedding planner | primer-evento-pagado-wedding-planner |
| E8 | Bodas de Lujo vs. Bodas Íntimas: Cómo Elegir tu Nicho como Wedding Planner | nicho de wedding planner | 4 | Negocio de wedding planner | — |
| E9 | Cuánto Dinero Necesitas para Empezar tu Negocio de Wedding Planner | inversión inicial wedding planner | 3 | Tarifas y carrera | cuanto-gana-un-wedding-planner, rentable-wedding-planner-latinoamerica |
| E10 | ¿Vale la Pena Certificarte como Wedding Planner para Conseguir Más Clientes? | certificación wedding planner sirve | 2 | Cómo ser wedding planner | certificaciones-wedding-planner |

## Silo F — Interiorismo, ampliación de negocio (10 artículos)

| # | Título | Keyword principal | Prioridad | Tablero | Enlazar con (ya publicado) |
|---|---|---|---|---|---|
| F1 | Cómo Conseguir tus Primeros Clientes de Interiorismo sin Experiencia | cómo conseguir clientes de interiorismo | 1 | Negocio de interiorismo | de-aficionada-a-decoradora-profesional, como-ser-decorador-interiores-sin-titulo |
| F2 | Cómo Armar un Portafolio de Interiorismo sin Experiencia Previa | portafolio de interiorismo sin experiencia | 4 | Negocio de interiorismo | como-hacer-render-3d-interiores |
| F3 | Contrato de Servicios de Decoración: Qué Debe Incluir para Protegerte | contrato de servicios de decoración | 2 | Negocio de interiorismo | — |
| F4 | Errores al Cotizar un Proyecto de Decoración que Ahuyentan Clientes | errores al cotizar un proyecto de decoración | 1 | Negocio de interiorismo | como-cobrar-primeros-proyectos-decoracion |
| F5 | Interiorista Freelance vs. Montar tu Propio Estudio de Diseño | interiorista freelance o estudio propio | 4 | Negocio de interiorismo | decorador-vs-arquitecto |
| F6 | Cómo Registrar tu Negocio de Decoración e Interiorismo (Autónomo o Empresa) | cómo registrar un negocio de decoración | 2 | Negocio de interiorismo | — |
| F7 | Cómo Presentar una Propuesta de Decoración a tu Primer Cliente | propuesta de decoración para clientes | 4 | Negocio de interiorismo | — |
| F8 | Diseño de Interiores Residencial vs. Comercial: Cuál Te Conviene Más | interiorismo residencial o comercial | 4 | Negocio de interiorismo | diseno-interiores-vs-decoracion |
| F9 | Cuánto Dinero Necesitas para Empezar tu Negocio de Decoración e Interiorismo | inversión inicial interiorismo | 1 | Tarifas y carrera | cuanto-gana-un-disenador-de-interiores |
| F10 | Cómo Diferenciarte de la Competencia como Decorador sin Años de Experiencia | cómo destacar como decorador nuevo | 2 | Cómo ser decorador | vale-la-pena-diseno-interiores-online |

## Orden de publicación recomendado (los 40 en conjunto)

1. **Máxima prioridad:** D1, D6, C1, E1, F1
2. **Conversión directa:** D2, D9, C3, C8, E10, F10, E4, F4
3. **Autoridad y diferenciación:** D3, D4, C4, C5, C6, E3, F3, E9, F9
4. **Refuerzo, retención y Pinterest:** D5, D7, D8, D10, C2, C7, C9, C10, E2, E5, E6, E7, E8, F2, F5, F6, F7, F8
