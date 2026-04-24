import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const { url, redirect, cookies, locals } = context;

  // 1. Determinar la región basada en la URL primero
  const isUSPath = url.pathname.startsWith("/us");
  const isLatamPath = url.pathname.startsWith("/latam");

  if (isUSPath) {
    locals.isUS = true;
    cookies.set("osbord-locality", "us", { path: "/", maxAge: 60 * 60 * 24 * 30 });
    return next();
  }

  if (isLatamPath) {
    locals.isUS = false;
    cookies.set("osbord-locality", "latam", { path: "/", maxAge: 60 * 60 * 24 * 30 });
    return next();
  }

  // 2. Si estamos en la raíz (/) decidir y redirigir
  if (url.pathname === "/") {
    let locality = cookies.get("osbord-locality")?.value;
    
    if (!locality) {
      // Usar Cloudflare Runtime para detectar el país
      const country = (locals.runtime?.cf as any)?.country || "OTHER";
      locality = country === "US" ? "us" : "latam";
    }

    return redirect(`/${locality}/`);
  }

  // 3. Para otras rutas raíz (como /contacto), redirigir a la versión con prefijo
  if (!isUSPath && !isLatamPath && !url.pathname.startsWith("/_") && !url.pathname.includes(".")) {
    let locality = cookies.get("osbord-locality")?.value;
    if (!locality) {
        const country = (locals.runtime?.cf as any)?.country || "OTHER";
        locality = country === "US" ? "us" : "latam";
    }
    return redirect(`/${locality}${url.pathname}`);
  }

  return next();
});
