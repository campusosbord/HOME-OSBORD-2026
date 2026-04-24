/// <reference types="astro/client" />
declare namespace App {
  interface Locals {
    isUS: boolean;
    runtime: import('@astrojs/cloudflare').Runtime<Env>;
  }
}

interface Env {
  // Define here your KV, Durable Objects, etc. bindings
}
