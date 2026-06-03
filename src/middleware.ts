import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  try {
    const { url, redirect, locals, request } = context;
    const pathname = url.pathname;

    // 1. Redirecciones de rutas legales obsoletas regionalizadas a la versión unificada
    const cleanPath = pathname.replace(/\/$/, "");
    if (cleanPath === "/us/legal" || cleanPath === "/latam/legal") {
      return redirect("/legal", 301);
    }
    if (cleanPath === "/us/privacidad" || cleanPath === "/latam/privacidad") {
      return redirect("/privacidad", 301);
    }
    if (cleanPath === "/us/cookies" || cleanPath === "/latam/cookies") {
      return redirect("/cookies", 301);
    }

    // 2. Filtro estricto para archivos estáticos, rutas internas, debug y páginas legales unificadas
    if (
      pathname.includes('.') || 
      pathname.startsWith('/_') || 
      pathname === '/debug-geo' ||
      cleanPath === '/legal' ||
      cleanPath === '/privacidad' ||
      cleanPath === '/cookies'
    ) {
      return next();
    }

    // 2. Extraer información geográfica de múltiples posibles fuentes
    const country = (
      request.headers.get('x-nf-country') || 
      request.headers.get('x-country') || 
      request.headers.get('cf-ipcountry') || 
      "UNKNOWN"
    ).toUpperCase();

    const city = request.headers.get('x-nf-city');
    const region = request.headers.get('x-nf-region');
    
    // Construir una ubicación más completa
    let geoDisplay = country;
    if (city && region) geoDisplay = `${city}, ${region} (${country})`;
    else if (region) geoDisplay = `${region} (${country})`;
    else if (city) geoDisplay = `${city} (${country})`;
    
    // Guardar en locals para uso en componentes y páginas
    locals.country = country;
    locals.city = geoDisplay || "USA (Ciudad no detectada)";

    // 3. Verificar si ya estamos en una ruta regionalizada
    const isUS = pathname === "/us" || pathname.startsWith("/us/");
    const isLatam = pathname === "/latam" || pathname.startsWith("/latam/");

    if (isUS || isLatam) {
      locals.isUS = isUS;
      return next();
    }

    // 4. Lógica de redirección basada en país
    // Aceptamos US y PR (Puerto Rico) como versión USA
    const locality = (country === "US" || country === "PR") ? "us" : "latam";
    const targetRegion = locality;
    
    let pathWithoutInitialSlash = pathname.startsWith('/') ? pathname.slice(1) : pathname;

    const destination = `/${targetRegion}/${pathWithoutInitialSlash}`;
    const cleanDestination = destination.replace(/\/+/g, '/');

    console.log(`[Netlify Middleware] Redirigiendo: ${pathname} -> ${cleanDestination} (País: ${country}, Ciudad: ${city})`);

    return redirect(cleanDestination, 302);
  } catch (error) {
    console.error("[Middleware Error]:", error);
    return next();
  }
});
