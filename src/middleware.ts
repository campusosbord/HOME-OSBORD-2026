import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  try {
    const { url, redirect, locals } = context;

    // 1. Evitar procesar archivos estáticos o internos de Astro
    if (url.pathname.includes('.') || url.pathname.startsWith('/_')) {
      return next();
    }

    // 2. Determinar si ya estamos en una ruta de región
    const isUSPath = url.pathname.startsWith("/us");
    const isLatamPath = url.pathname.startsWith("/latam");

    if (isUSPath || isLatamPath) {
      locals.isUS = isUSPath;
      return next();
    }

    // 3. Redirección solo en la raíz (/) para evitar bucles
    if (url.pathname === "/") {
      const cf = (locals.runtime as any)?.cf;
      const country = cf?.country || "OTHER";
      const locality = country === "US" ? "us" : "latam";
      
      console.log(`[Middleware] Redirigiendo raíz a /${locality}/ basado en país: ${country}`);
      return redirect(`/${locality}/`);
    }

    // 4. Para otras rutas sin prefijo (ej: /contacto), redirigir a la versión con prefijo
    if (!isUSPath && !isLatamPath) {
      const cf = (locals.runtime as any)?.cf;
      const country = cf?.country || "OTHER";
      const locality = country === "US" ? "us" : "latam";
      
      return redirect(`/${locality}${url.pathname}`);
    }

    return next();
  } catch (error) {
    console.error("[Middleware Error]:", error);
    return next();
  }
});
