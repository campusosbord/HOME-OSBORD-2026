import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  try {
    const { url, redirect, locals } = context;
    const pathname = url.pathname;

    // 1. Omitir estáticos
    if (pathname.includes('.') || pathname.startsWith('/_')) {
      return next();
    }

    // 2. Si ya tiene prefijo, continuar
    if (pathname.startsWith("/us") || pathname.startsWith("/latam")) {
      return next();
    }

    // 3. Redirección básica
    if (pathname === "/") {
      const cf = (locals.runtime as any)?.cf;
      const country = cf?.country || "UNKNOWN";
      const locality = country === "US" ? "us" : "latam";
      
      return redirect(`/${locality}/`, 302);
    }

    return next();
  } catch (error) {
    return next();
  }
});
