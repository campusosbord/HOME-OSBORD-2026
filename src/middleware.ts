import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const { url, request, redirect } = context;

  // Solo actuar si estamos en la raíz (/)
  if (url.pathname === "/") {
    // Vercel inyecta el código de país en este header
    const country = request.headers.get("x-vercel-ip-country") || "OTHER";
    
    // Lista de códigos de país de LATAM
    const latamCountries = ["AR", "BO", "CL", "CO", "CR", "DO", "EC", "GT", "HN", "MX", "NI", "PA", "PE", "PR", "PY", "SV", "UY", "VE"];

    if (country === "US") {
      return redirect("/us");
    } else if (latamCountries.includes(country) || country !== "US") {
      // Redirigir a latam si es LATAM o cualquier otro país que no sea USA
      return redirect("/latam");
    }
  }

  // Si no es la raíz o no coincide con los criterios, continuar normalmente
  return next();
});
