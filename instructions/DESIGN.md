# Design System Strategy: High-End Editorial

## 1. Overview & Creative North Star

**Creative North Star: "The Modern Agrarian"**
This design system is built on the intersection of raw, organic textures and high-precision editorial layout. It rejects the "templated" nature of modern SaaS interfaces in favor of a bespoke, curated experience. We move beyond standard grids by employing intentional asymmetry, expansive negative space, and a hierarchy that feels as much like a luxury print monograph as it does a digital interface.

The visual soul of the system lies in **Tonal Depth**. By using the provided earth-toned palette to create soft, overlapping layers rather than rigid boxes, we achieve a "Soft Minimalism" that feels warm, professional, and expensive.

---

## 2. Colors & Surface Philosophy

The palette is rooted in nature: `primary` (#8A5024) represents rich timber, `secondary` (#2C4035) the deep forest, and the `surface` tokens provide a foundation of sun-bleached stone and linen.

### The "No-Line" Rule
**Explicit Instruction:** Prohibit the use of 1px solid borders for sectioning or containment. Traditional lines "trap" content. Instead:
- **Background Shifts:** Define areas by moving from `surface` (#FFF8F3) to `surface-container-low` (#F9F2EC).
- **Tonal Transitions:** Use `surface-variant` (#E8E1DB) for subtle sidebars or metadata blocks.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical, stacked materials.
- **Base Layer:** `surface` (#FFF8F3) for the main viewport.
- **Nesting:** Place a card using `surface-container-lowest` (#FFFFFF) on a background of `surface-container-low` (#F9F2EC) to create a soft, natural lift.
- **The Glass & Gradient Rule:** For floating navigation or modal overlays, use semi-transparent `surface` colors with a 20px backdrop-blur. Apply a subtle linear gradient from `primary` (#6D390E) to `primary-container` (#8A5024) on high-impact CTAs to provide a "hand-rubbed leather" sheen.

---

## 3. Typography: Editorial Authority

The system uses a high-contrast typographic pairing to signal professional curation.

*   **Headers (Figtree):** Modern, geometric, and authoritative. Use `text-5xl md:text-7xl lg:text-8xl` (up to 6rem) with tight letter-spacing (-0.02em) for hero moments.
*   **Body (Unna):** A sophisticated serif that provides an organic, literary feel. The "human" element of the system.

**Hierarchy Strategy:**
- Use **All-Caps** for `label-sm` using Figtree to create a "technical" contrast against the romantic Unna body text.
- Overlap `display` typography across color boundaries (e.g., text bleeding from a `surface` section into a `secondary_container` section) to break the grid.

---

## 4. Elevation & Depth

We eschew "Material" shadows in favor of **Ambient Light** and **Tonal Layering**.

*   **Layering Principle:** Depth is achieved by "stacking" container tiers. An inner container should always be lighter or darker than its parent—never the same value.
*   **Ambient Shadows:** If a floating element (like a dropdown) requires a shadow, use a blur of 40px-60px with a 5% opacity. The shadow color must be a tinted version of `on-surface` (#1E1B18), never pure black.
*   **The "Ghost Border":** If accessibility requires a stroke, use `outline-variant` (#D7C2B7) at **15% opacity**. It should be felt, not seen.
*   **Glassmorphism:** Use `surface_container_low` at 80% opacity with a `blur-xl` background filter for elements that sit "above" the content, such as sticky headers.

---

## 5. Components

### Buttons
- **Primary:** Background: #6D390E. Padding: 10px 24px. Radius: 4px.
- **Secondary:** Background: #EEE7E1. Padding: 10px 32px. Radius: 4px.
- **Outlined:** Border: 1px solid #534434. Radius: 4px. No background.
- **Outlined Dark:** Border: 1px solid #8F7F75. Radius: 4px. No background.
- **Inverted:** Background: #33302C. Radius: 4px.
- **Inverted Dark:** Background: #E8E1DB. Radius: 4px.
- **Secondary Dark:** Background: #2C2926. Radius: 4px.
- **Primary Dark:** Background: #FFB786. Radius: 4px.
- **Tertiary:** Ghost style. No background, `primary` text. Transitions to **Inverted** on hover.

> [!NOTE]
> By default, all button variants across the project transition to the **Inverted** variant (`#33302C` background with white text) on hover for high-contrast interaction.

### Input Fields
- **Container:** `surface-container-low` (#F9F2EC).
- **Border:** None. Use a bottom-only stroke of `outline-variant` (#D7C2B7) that expands to 2px `primary` on focus.
- **Label:** `label-md` using Figtree, positioned inside the container for a compact, editorial look.

### Cards & Lists
- **Rule:** **Forbidden to use divider lines.** 
- Separate list items using `spacing-6` (2rem) of vertical white space.
- For cards, use `surface-container-lowest` (#FFFFFF) with a `DEFAULT` (1rem) corner radius. Use the "Layering Principle" (Section 4) to distinguish cards from the background.

### Editorial Chips
- Use `tertiary_fixed` (#F5DFC9) background with `on_tertiary_fixed` (#25190C) text. These should be `full` (9999px) roundness, acting as soft organic pills against the more structured headers.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical margins. If the left margin is `spacing-12`, try a right margin of `spacing-24` for hero content.
*   **Do** allow images to "bleed" off the edge of the container to enhance the editorial feel.
*   **Do** use `secondary` (#4E6357) as a background for high-impact "breakout" sections to create a rhythmic shift in the scroll.

### Don’t:
*   **Don’t** use 100% black (#000000). Always use `on-surface` (#1E1B18) to maintain the organic warmth.
*   **Don’t** use sharp corners. Every container must adhere to the `ROUND_FOUR` scale (Base: 1rem).
*   **Don’t** crowd the content. If in doubt, double the spacing token (e.g., move from `spacing-10` to `spacing-20`).
*   **Don’t** use standard "Drop Shadows." If an element doesn't feel elevated enough through color alone, increase the background contrast before reaching for a shadow.