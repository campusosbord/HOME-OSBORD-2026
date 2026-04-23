import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const { url, request, redirect, cookies, locals } = context;

  // 1. Obtener localidad (prioridad: Cookie > Header Vercel)
  let locality = cookies.get("osbord-locality")?.value;
  
  if (!locality) {
    const country = request.headers.get("x-vercel-ip-country") || "OTHER";
    locality = country === "US" ? "us" : "latam";
    // Guardar en cookie por 30 días
    cookies.set("osbord-locality", locality, { path: "/", maxAge: 60 * 60 * 24 * 30 });
  }

  // 2. Establecer variable global para componentes
  locals.isUS = locality === "us";

  // 3. Redirección solo en la raíz (/) para enviar al "Home" correspondiente
  if (url.pathname === "/") {
    if (locality === "us") {
      return redirect("/us");
    } else {
      return redirect("/latam");
    }
  }

  return next();
});
