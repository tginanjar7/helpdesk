---
name: Civic Vanguard
colors:
  surface: '#f8f9ff'
  surface-dim: '#d0dbed'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e6eeff'
  surface-container-high: '#dee9fc'
  surface-container-highest: '#d9e3f6'
  on-surface: '#121c2a'
  on-surface-variant: '#42493c'
  inverse-surface: '#27313f'
  inverse-on-surface: '#eaf1ff'
  outline: '#72796b'
  outline-variant: '#c2c9b8'
  surface-tint: '#386a1e'
  primary: '#36671c'
  on-primary: '#ffffff'
  primary-container: '#4e8133'
  on-primary-container: '#f8ffed'
  inverse-primary: '#9dd67d'
  secondary: '#4c662e'
  on-secondary: '#ffffff'
  secondary-container: '#cbeaa4'
  on-secondary-container: '#506a32'
  tertiary: '#9d3b3d'
  on-tertiary: '#ffffff'
  tertiary-container: '#bd5353'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b8f396'
  primary-fixed-dim: '#9dd67d'
  on-primary-fixed: '#082100'
  on-primary-fixed-variant: '#215105'
  secondary-fixed: '#ceeda7'
  secondary-fixed-dim: '#b2d08d'
  on-secondary-fixed: '#0f2000'
  on-secondary-fixed-variant: '#354e19'
  tertiary-fixed: '#ffdad8'
  tertiary-fixed-dim: '#ffb3b1'
  on-tertiary-fixed: '#410007'
  on-tertiary-fixed-variant: '#81262a'
  background: '#f8f9ff'
  on-background: '#121c2a'
  surface-variant: '#d9e3f6'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  gutter-lg: 2rem
  margin: 1.5rem
  margin-sm: 1rem
  margin-lg: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system establishes an accessible, authoritative, and citizen-centered digital infrastructure tailored for public service reporting and municipal administrative management. The visual tone bridges institutional credibility with inviting clarity, dispelling the bureaucratic friction typically associated with governmental portals. 

The aesthetic is grounded in modern corporate-civic minimalism, paired with structured visual hierarchy and high legibility. Interfaces must invoke transparency, responsiveness, and trust across both ends of the product: a reassuring, effortless reporting workflow for citizens, and an efficient, high-density data management experience for municipal caseworkers and regional administrators. Visual elements rely on clear boundary containment, purposeful status signifiers, and generous target areas to ensure effortless public usability across all demographics.

## Colors

The palette establishes civic authority, high contrast, and unmistakable status recognition:

- **Primary (`#689D4B`):** Deep olive green. Anchors primary calls-to-action, active navigation states, verified statuses, and resolution indicators.
- **Secondary (`#91AE6E`):** Soft sage green. Applied to supportive badges, subtle background tints, progress stages, and secondary UI accents.
- **Tertiary / Destructive / Urgent (`#D96868`):** Warm coral red. Reserved strictly for critical escalations, rejected reports, destructive actions, and input validation errors.
- **Neutral Dark (`#1F2937`):** Primary text and dominant iconography, offering optimal legibility against light backgrounds.
- **Neutral Muted (`#4B5563`):** Secondary text, timestamps, helper descriptions, and unselected states.
- **Neutral Border (`#E5E7EB`):** Crisp structural boundaries for inputs, divider lines, and card containers.
- **Surfaces (`#FFFFFF` and `#F2F2F2`):** Base canvas in `#F2F2F2` provides separation for elevated cards, table cells, and form surfaces rendered in pure `#FFFFFF`.

### Civic Status Indicator Tokens
- **Baru (New):** Background `#EFF6FF`, Border `#BFDBFE`, Text `#1D4ED8`
- **Diverifikasi (Verified):** Background `#F4F8F0`, Border `#91AE6E`, Text `#3B6324`
- **Diproses (In Progress):** Background `#FEF3C7`, Border `#FCD34D`, Text `#B45309`
- **Selesai (Resolved):** Background `#ECFDF5`, Border `#689D4B`, Text `#166534`
- **Ditolak (Rejected):** Background `#FEF2F2`, Border `#FCA5A5`, Text `#D96868`

## Typography

The typographic hierarchy couples **Plus Jakarta Sans** for headings with **Inter** for data tables, form controls, and body copy. 

Plus Jakarta Sans brings a crisp, modern geometric authority to page titles, dashboard metrics, and citizen callouts without appearing cold. Inter provides superior horizontal efficiency and micro-level readability for dense complaint records, administrative logs, citizen tracking timelines, and input labels. For long-form descriptions in civic petitions and resolution reports, `body-md` is the standard reading size, maintaining WCAG AA compliant contrast against light backgrounds.

## Layout & Spacing

The layout is built upon an 8-point base grid within a responsive fluid containment framework.

- **Desktop (1200px+):** 12-column layout with 2rem (32px) gutters and 3rem (48px) exterior margins. Administration dashboards use a persistent 280px left sidebar alongside a 12-column content matrix.
- **Tablet (768px - 1199px):** 8-column layout with 1.5rem (24px) gutters and 2rem (32px) margins. Sidebars collapse into off-canvas drawers; tracking forms reflow into single-column modules.
- **Mobile (<768px):** 4-column layout with 1rem (16px) gutters and 1rem (16px) canvas margins. Administrative metrics stack vertically, and primary citizen actions anchor to the bottom of the viewport.

Use `space-sm` and `space-md` for interior component spacing (form fields, status tags, list cell gaps) and `space-lg` to `space-xl` for section separation and dashboard metric blocks.

## Elevation & Depth

Depth is established through a combination of crisp container boundaries (`#E5E7EB`) and subtle, low-opacity ambient drop shadows tinted with slate. This ensures readability on low-cost displays and outdoor mobile devices without heavy skeuomorphic clutter.

- **Level 0 (Flat / Canvas):** Applied to the base canvas (`#F2F2F2`) and inline input elements. Defined by a 1px solid `#E5E7EB` border without shadow.
- **Level 1 (Cards & Data Panels):** Background `#FFFFFF`, 1px solid `#E5E7EB`, shadow `0 1px 3px 0 rgba(31, 41, 55, 0.05), 0 1px 2px -1px rgba(31, 41, 55, 0.05)`.
- **Level 2 (Dropdowns, Popovers, Hovered Cards):** Background `#FFFFFF`, 1px solid `#E5E7EB`, shadow `0 4px 6px -1px rgba(31, 41, 55, 0.08), 0 2px 4px -2px rgba(31, 41, 55, 0.05)`.
- **Level 3 (Modals, Citizen Detail Drawers):** Background `#FFFFFF`, 1px solid `#E5E7EB`, shadow `0 20px 25px -5px rgba(31, 41, 55, 0.1), 0 8px 10px -6px rgba(31, 41, 55, 0.05)`.

## Shapes

The design system employs a refined `rounded-2` scale:

- **Inputs, Buttons, and Selects:** Form elements use a standardized `0.5rem` (8px) radius to maintain an organized, dependable aesthetic.
- **Cards, Panels, and Containers:** Featured modules, dashboard cards, and report detail panels utilize `rounded-xl` (1.5rem / 24px) to soften official interfaces and create friendly, modern focal points.
- **Badges, Tags, and Chips:** Full pill radius (`9999px`) to visually differentiate metadata from actionable rectangular buttons.

## Components

### Buttons
- **Primary:** Background `#689D4B`, text `#FFFFFF`, font `Inter` 600, radius `0.5rem`. Hover state transitions to `#57853E`. Active state scales down to `0.98`. Focus ring uses a 2px offset with `#689D4B`.
- **Secondary / Outline:** Background `#FFFFFF`, 1px solid `#E5E7EB`, text `#1F2937`. Hover state transitions to `#F2F2F2` border `#91AE6E`.
- **Destructive:** Background `#D96868`, text `#FFFFFF`. Hover transitions to `#C55252`. Used for report rejections, deletions, and emergency escalation.
- **Minimum Tap Target:** Height 44px on mobile devices, 40px on desktop administration panels.

### Civic Status Chips (Badges)
- Rendered as pill shapes with `label-md` uppercase typography, containing a 6px status dot on the leading edge.
- **Baru:** Blue text (`#1D4ED8`) over `#EFF6FF` with `#BFDBFE` border.
- **Diverifikasi:** Sage green text (`#3B6324`) over `#F4F8F0` with `#91AE6E` border.
- **Diproses:** Amber text (`#B45309`) over `#FEF3C7` with `#FCD34D` border.
- **Selesai:** Dark olive text (`#166534`) over `#ECFDF5` with `#689D4B` border.
- **Ditolak:** Coral red text (`#D96868`) over `#FEF2F2` with `#FCA5A5` border.

### Input Fields & Controls
- **Text Inputs & Dropdowns:** 1px solid `#E5E7EB`, surface `#FFFFFF`, text `#1F2937`, placeholder `#9CA3AF`, radius `0.5rem`, height 42px (padding 0 12px). Active focus state transitions border to `#689D4B` with a `0 0 0 3px rgba(104, 157, 75, 0.15)` focus ring.
- **Checkboxes & Radios:** 18px size, border 1.5px solid `#D1D5DB`. Checked state uses background `#689D4B` with an inset white checkmark or center pip.

### Cards
- **Report & Dashboard Cards:** Surface `#FFFFFF`, border 1px solid `#E5E7EB`, corner radius `1.5rem` (`rounded-xl`), inner padding `1.5rem`.
- **Report List Items:** Structured row cards with vertical left-side border accents matching the report's current status color, displaying Complaint ID (monospaced tracking code), timestamp, category, citizen name, and quick-action menu.

### Civic-Specific Components
- **Complaint Timeline Tracker:** Vertical linked stepper with connected 2px solid lines. Completed steps utilize a solid `#689D4B` check icon circle; current active step displays an animated pulse ring in `#91AE6E`; upcoming steps show a hollow `#E5E7EB` circle with neutral muted numbers.
- **Evidence / Attachment Gallery:** Grid of upload thumbnails (images, PDF documents, location coordinates) surrounded by 1px dashed `#E5E7EB` borders, featuring integrated preview and verification watermark triggers.