# OSHUN 4C Hair Rituals — Design Handoff

## Brand idea

**Positioning:** Luxury, tradition-rooted hair care formulated specifically for type 4C hair.

**Visual concept:** Editorial restraint with warmth. The identity pairs the authority of a high-contrast serif with a compact symbol that joins two ideas:

- Four separated gold arcs represent type **4C** coils, the four-part ritual, and continuity.
- The central cream drop represents water, nourishment, and the ritual of wash day.
- Together, the silhouette reads as an **O** for OSHUN.

The mark is intentionally simple enough to remain recognizable at favicon and product-label scale.

## Logo system

### Primary lockup

Use the mark to the left of the two-line wordmark:

- `OSHUN`: Playfair Display Semibold, uppercase, tracked.
- `4C HAIR RITUALS`: Lato Regular, uppercase, warm gold, widely tracked.

The primary lockup is implemented by `BrandLogo` in `src/App.tsx` and appears in the navigation and footer.

### Standalone mark

Asset: `public/oshun-mark.svg`

Use the standalone mark for favicons, social avatars, bottle caps, seals, and compact mobile placements. Preserve the SVG viewBox and do not redraw or rotate individual arcs.

### Clear space and minimum size

- Clear space: keep at least one central-drop width around every side of the logo.
- Standalone digital minimum: 16 px high.
- Full lockup digital minimum: 120 px wide.
- At very small sizes, use the standalone mark rather than removing the descriptor from the lockup.

### Color versions

1. **Primary dark:** gold coil and cream drop on near-black.
2. **Reversed light:** near-black coil and drop on cream.
3. **Single color:** all cream or all near-black when production allows only one ink.

Do not add gradients, shadows, outlines, enclosing badges, or alternate accent colors.

## Color

| Role | Token | Hex | Use |
| --- | --- | --- | --- |
| Near-black | `background` | `#111110` | Primary canvas, dark packaging |
| Cream | `foreground` | `#f0ebe0` | Primary copy, logo drop |
| Warm gold | `primary` | `#c9a96e` | Brand coil, labels, rules, emphasis |
| Charcoal | `card` | `#1c1c1a` | Product surfaces |
| Muted charcoal | `muted` | `#232320` | Secondary dark surfaces |
| Berry | `accent` | `#8b3a52` | Rare editorial accent only |

Gold is an accent, not a body-text color. Cream should carry primary readability on dark surfaces.

## Typography

- **Display:** Playfair Display, 400–600. Use for campaign headlines, product names, quotes, and the OSHUN wordmark.
- **Body:** Lato, 300–700. Use for body copy, prices, controls, labels, and utility content.
- Headlines use tight line height and sentence case.
- Eyebrows and utility labels use uppercase Lato with generous tracking.
- Avoid using Playfair Display for dense interface text.

Font wiring and canonical theme values live in `src/index.css`.

## Layout and composition

- Use generous negative space and strong editorial scale shifts.
- Keep content within the existing `max-w-6xl` page frame.
- Use fine gold rules instead of shadows to separate dark surfaces.
- Product imagery should feel tactile, botanical, and quietly luxurious rather than clinical.
- Mobile layouts should preserve hierarchy and reduce columns before reducing type below readable sizes.

## Interaction

- Navigation links reveal a fine gold underline on hover.
- Product cards expose a clear add-to-bag action without obscuring product identity.
- Focus states must remain visible against near-black and cream surfaces.
- Motion should be restrained: 200–300 ms fades, underline growth, and image-scale changes only.
- All icon-only controls require accessible labels.

## Voice

Confident, informed, reverent, and specific. Speak to 4C hair as worthy of care rather than as a problem to solve. Pair ingredient heritage with clear functional benefits; avoid exoticizing source cultures or making unsupported medical claims.

## Source map

- Application UI: `src/App.tsx`
- Global theme, fonts, and logo styling: `src/index.css`
- Portable standalone logo: `public/oshun-mark.svg`
- Fonts: Google Fonts — Playfair Display and Lato
