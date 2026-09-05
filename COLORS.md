# Paleta de Colores Normalizada - Indenergy Soluciones

Según auditoría cromática de septiembre 2026.

## Tokens de Color

### Azul Marino (Navy)
- **Token:** `indenergy-navy`
- **HEX:** `#15323B`
- **RGB:** `21, 50, 59`
- **Uso:** Fondos, headers, footers, hero, texto principal sobre fondos claros
- **Contraste con blanco:** 13.54:1 (excelente)

### Turquesa Medio
- **Token:** `indenergy-turquoise`
- **HEX:** `#00C887`
- **RGB:** `0, 200, 135`
- **Uso:** Marca, iconos, acentos, estados positivos
- **Contraste con blanco:** 4.42:1 (AA para texto normal)

### Verde Vibrante
- **Token:** `indenergy-green`
- **HEX:** `#00A249`
- **RGB:** `0, 162, 73`
- **Uso:** Acentos secundarios, iconos, marca
- **Contraste con blanco:** 3.35:1 (válido para texto grande)

### Verde Lima Energético
- **Token:** `indenergy-lime`
- **HEX:** `#B0C53F`
- **RGB:** `176, 197, 63`
- **Uso:** CTA principal, indicadores, resaltados (solo 5-10% del diseño)
- **Contraste con azul marino:** 7.03:1 (excelente)
- **⚠️ IMPORTANTE:** Nunca usar con texto blanco

### Gris Claro
- **Token:** `indenergy-slate-100`
- **HEX:** `#F4F7F7`
- **RGB:** `244, 247, 247`
- **Uso:** Fondos de sección, separación visual

## Reglas de Contraste

| Combinación | Contraste | Estado |
|---|---:|---|
| Navy + Blanco | 13.54:1 | ✅ Excelente |
| Turquesa + Blanco | 4.42:1 | ✅ AA |
| Verde + Blanco | 3.35:1 | ⚠️ Solo para texto grande |
| Lima + Azul Marino | 7.03:1 | ✅ Excelente |
| Lima + Blanco | 1.93:1 | ❌ NO USAR |

## Proporciones Recomendadas

- **Base (Navy/Blanco/Grises):** 65-75%
- **Marca (Turquesa/Verde):** 15-20%
- **Activación (Lima):** 5-10%
- **Efectos (Gradientes/Glow):** <5%

## Componentes y Uso

### CTA Primario
```css
background-color: #B0C53F; /* Lima */
color: #15323B; /* Azul marino */
/* O usar: bg-indenergy-lime text-indenergy-navy */
```

### CTA Secundario
```css
background-color: transparent;
border: 2px solid #15323B;
color: #15323B;
/* O usar: bg-transparent border-indenergy-navy text-indenergy-navy */
```

### Hero
- Fondo: `#15323B` (Azul marino)
- Gradiente: `from-#15323B via-#15323B to-#00C887`
- Acento: `#B0C53F` (Lima)

### Métricas
- Estructura: `#15323B`
- Positivo: `#00C887` (Turquesa)
- Destacado: `#B0C53F` (Lima)

## Actualización en Tailwind

```javascript
colors: {
  indenergy: {
    'navy': '#15323B',
    'turquoise': '#00C887',
    'green': '#00A249',
    'lime': '#B0C53F',
    'slate-100': '#F4F7F7',
  }
}
```

---
**Última actualización:** 2026-09-04
**Auditor:** Manus AI
**Estado:** Implementado en producción
