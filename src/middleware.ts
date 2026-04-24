import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  try {
    const { url, redirect, locals } = context;
    const pathname = url.pathname;

    // 1. Filtro estricto para archivos estáticos y rutas internas
    // Si la ruta tiene una extensión o empieza por /_, no la procesamos.
    if (pathname.includes('.') || pathname.startsWith('/_')) {
      return next();
    }

    // 2. Verificar si ya estamos en una ruta regionalizada
    // Comprobamos /us, /us/, /latam, /latam/ y sus subrutas
    const isUS = pathname === "/us" || pathname.startsWith("/us/");
    const isLatam = pathname === "/latam" || pathname.startsWith("/latam/");

    if (isUS || isLatam) {
      locals.isUS = isUS;
      return next();
    }

    // 3. Obtener ubicación desde Cloudflare (cf)
    // Fallback a "latam" si no hay datos de CF (ej: desarrollo local sin proxy)
    const cf = (locals.runtime as any)?.cf;
    const country = cf?.country || "UNKNOWN";
    const locality = country === "US" ? "us" : "latam";

    // 4. Construcción de la ruta de destino sin barras dobles
    const region = locality;
    let pathWithoutInitialSlash = pathname.startsWith('/') ? pathname.slice(1) : pathname;

    // Si la ruta no termina en / y no es un archivo, añadimos la barra para consistencia
    if (pathWithoutInitialSlash && !pathWithoutInitialSlash.endsWith('/')) {
      pathWithoutInitialSlash += '/';
    }

    // Si es la raíz, el pathWithoutInitialSlash estará vacío, el resultado será /region/
    const destination = `/${region}/${pathWithoutInitialSlash}`;

    // Limpiamos posibles barras dobles resultantes
    const cleanDestination = destination.replace(/\/+/g, '/');

    console.log(`[Middleware] Redirigiendo: ${pathname} -> ${cleanDestination} (Región: ${region}, País: ${country})`);

    return redirect(cleanDestination, 302);
  } catch (error) {
    console.error("[Middleware Error]:", error);
    return next();
  }
});
