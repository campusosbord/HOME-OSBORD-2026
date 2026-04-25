import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  try {
    const { url, redirect, locals, request } = context;
    const pathname = url.pathname;

    // 1. Filtro estricto para archivos estáticos y rutas internas
    if (pathname.includes('.') || pathname.startsWith('/_')) {
      return next();
    }

    // 2. Extraer información geográfica de Netlify
    const country = request.headers.get('x-nf-country') || "UNKNOWN";
    const city = request.headers.get('x-nf-city') || "Unknown City";
    
    // Guardar en locals para uso en componentes y páginas
    locals.country = country;
    locals.city = city;

    // 3. Verificar si ya estamos en una ruta regionalizada
    const isUS = pathname === "/us" || pathname.startsWith("/us/");
    const isLatam = pathname === "/latam" || pathname.startsWith("/latam/");

    if (isUS || isLatam) {
      locals.isUS = isUS;
      return next();
    }

    // 4. Lógica de redirección basada en país
    const locality = country === "US" ? "us" : "latam";
    const region = locality;
    
    let pathWithoutInitialSlash = pathname.startsWith('/') ? pathname.slice(1) : pathname;

    if (pathWithoutInitialSlash && !pathWithoutInitialSlash.endsWith('/')) {
      pathWithoutInitialSlash += '/';
    }

    const destination = `/${region}/${pathWithoutInitialSlash}`;
    const cleanDestination = destination.replace(/\/+/g, '/');

    console.log(`[Netlify Middleware] Redirigiendo: ${pathname} -> ${cleanDestination} (País: ${country}, Ciudad: ${city})`);

    return redirect(cleanDestination, 302);
  } catch (error) {
    console.error("[Middleware Error]:", error);
    return next();
  }
});
