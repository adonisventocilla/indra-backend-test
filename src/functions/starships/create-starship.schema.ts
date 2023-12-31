export default {
  type: "object",
  properties: {
    nombre: { type: "string" },
    modelo: { type: "string" },
    fabricante: { type: "string" },
    costo_en_creditos: { type: "string" },
    longitud: { type: "string" },
    velocidad_atmosferica_maxima: { type: "string" },
    tripulacion: { type: "string" },
    pasajeros: { type: "string" },
    capacidad_carga: { type: "string" },
    consumibles: { type: "string" },
    calificación_hiperimpulsor: { type: "string" },
    mglt: { type: "string" },
    clase_nave_estelar: { type: "string" },
    url: { type: "string" },
    pilotos: { type: "array", items: { type: "string" } },
    peliculas: { type: "array", items: { type: "string" } }
  },
  required: [
    "nombre",
    "modelo",
    "fabricante",
    "costo_en_creditos",
    "longitud",
    "velocidad_atmosferica_maxima",
    "tripulacion",
    "pasajeros",
    "capacidad_carga",
    "consumibles",
    "calificación_hiperimpulsor",
    "mglt",
    "clase_nave_estelar",
    "url",
    "pilotos"
  ]
} as const
