# Atlas Phase 1 Design QA

## Evidence

- Source visual truth: `%USERPROFILE%\Downloads\个人网站 · 地图志概念稿.pdf`
- The clean Ardot invitation URL was opened successfully but resolved to the phone-login screen in the isolated browser session. No canvas content was inferred from that screen; the supplied four-page PDF was used as the exact visual source.
- Rendered source frames:
  - `%USERPROFILE%\.codex\visualizations\2026\08\21\01a0243c-7c1b-7a73-9677-96644e9ae7e6\atlas-phase1-readiness\frame-1.png` — 1440 × 3171
  - `%USERPROFILE%\.codex\visualizations\2026\08\21\01a0243c-7c1b-7a73-9677-96644e9ae7e6\atlas-phase1-readiness\frame-2.png` — 390 × 3022
- Browser implementation: `http://127.0.0.1:4321/`
- Desktop implementation screenshot: `%USERPROFILE%\.codex\visualizations\2026\08\21\01a0243c-7c1b-7a73-9677-96644e9ae7e6\atlas-phase1-implementation\home-1440-final.png`
- Mobile implementation screenshot: `%USERPROFILE%\.codex\visualizations\2026\08\21\01a0243c-7c1b-7a73-9677-96644e9ae7e6\atlas-phase1-implementation\home-390-final.png`
- Focused route screenshot: `%USERPROFILE%\.codex\visualizations\2026\08\21\01a0243c-7c1b-7a73-9677-96644e9ae7e6\atlas-phase1-implementation\home-390-route-final.png`
- Focused Cartouche screenshot: `%USERPROFILE%\.codex\visualizations\2026\08\21\01a0243c-7c1b-7a73-9677-96644e9ae7e6\atlas-phase1-implementation\home-390-contact-links.png`
- Phase 1.5 desktop Hero screenshot: `%USERPROFILE%\.codex\visualizations\2026\08\21\01a0243c-7c1b-7a73-9677-96644e9ae7e6\atlas-phase1-5\home-hero-final.png`
- Phase 1.5 desktop Route screenshot: `%USERPROFILE%\.codex\visualizations\2026\08\21\01a0243c-7c1b-7a73-9677-96644e9ae7e6\atlas-phase1-5\home-route-final.png`
- Phase 1.5 combined comparisons: `compare-hero.png` and `compare-route.png` in the same directory.

## Normalization

- Desktop comparison: source cropped to 1426 × 891; implementation 1426 × 891; CSS viewport requested at 1440 × 900; device density 1×.
- Mobile comparison: source cropped to 376 × 814; implementation 376 × 814; CSS viewport requested at 390 × 844; device density 1×.
- State: initial viewport for Hero; scrolled settled state for Route and Cartouche.
- Combined comparisons:
  - `compare-desktop-final.png`
  - `compare-mobile-final.png`
  - `compare-mobile-route-final.png`
  - `compare-mobile-cartouche-final.png`

## Fidelity Review

- Fonts and typography: the Phase 1 system-serif fallback failed visual review on Windows, so the approved Phase 1.5 path is now active. The four Chinese Atlas headings use a self-hosted 11,740-byte Noto Serif SC Bold subset with `font-display: swap`, homepage-only preload, `font-synthesis: none`, and the source-matched Hero line-height/letter-spacing. The real Allura wordmark and all English typography remain unchanged.
- Spacing and layout: Hero keeps the live Vienna crop and right-side desktop copy. Route is staggered above 780px and becomes a single column at 780px and below. Marginalia and Cartouche follow the approved desktop/mobile reading order.
- Colors and tokens: existing navy, royal blue, cream, and gold tokens are retained; information text uses `--gold-text` without opacity.
- Image quality and assets: Vienna, AIGC, and project poster systems use the existing production assets and CSS. One scoped WOFF2 subset and its OFL 1.1 license were added; no bitmap changed.
- Copy and content: existing role, intro, project summaries, CTA copy, Email, and X are preserved. The mobile implementation intentionally restores X even though the concept crop omits it.
- Interaction and accessibility: whole station anchors are keyboard-focusable; focus outlines remain visible; menu, CTA, project, hobby, Email, and X links are functional. Route and grid layers do not intercept pointer events.

## Comparison History

### Pass 1

- P2: the primary Hero CTA remained outlined instead of using the concept's gold emphasis.
- P2: the existing fine-pointer cursor mark appeared in narrow responsive screenshots.
- P2: the Route line read as a generic solid timeline rather than the concept's lighter mapped path.

Fixes applied:

- Scoped the gold-filled CTA treatment to the Chinese Atlas Hero.
- Hid the pointer-only cursor mark at 780px and below.
- Changed the static Route path to a fine dashed stroke while keeping markers owned by station DOM nodes.

### Pass 2

- Desktop Hero, mobile Hero, mobile Route, and mobile Cartouche were recaptured and recombined with matching source crops.
- No actionable P0, P1, or P2 mismatch remains.
- Intentional deviations: real Allura header identity; preserved live photo crop; complete mobile intro, CTA, Email, X, and Contact copy; no optional footer scale.

### Pass 3 — Phase 1.5 typography and Route correction

- Source inspection confirmed the heading face is Noto Serif SC Bold, not an arbitrary platform Song/SimSun rendering.
- Hero line-height and tracking were calibrated against the rendered source rather than OCR output.
- The desktop Route now follows a visible long S-curve with separate low-opacity solid and round-dash layers, matching the source's two-stroke treatment. Station markers remain owned by their station anchors and align without runtime geometry measurement.
- The 780px-and-below Route intentionally remains straight, matching the mobile source rather than forcing the desktop curve into a narrow column.
- The desktop Route heading returns to the source hierarchy: eyebrow above, a constrained two-line title at left, and the all-work link at right.
- Side-by-side source/implementation inspection found no remaining actionable typography or Route mismatch for this correction.

## Browser Verification

- Responsive widths checked: 1440, 1280, 1051 side, 1050, 1024, 781 side, 780 side, 431 side, 430, 390, 320.
- Chinese and English desktop/mobile home pages checked.
- Horizontal overflow: none at tested widths.
- Mobile menu: opens, exposes Email, and closes with Escape.
- Console errors and warnings: none.
- Reduced motion: `motion-ready` is not enabled and all reveal content remains visible.
- JavaScript disabled: Hero intro, three stations, Email, X, and all main copy remain readable.
- 200% equivalent reflow: checked at a 720 CSS-pixel layout with no overflow or clipped contact links.

## Follow-up Polish

- Route stroke-on-scroll remains Phase 2 by contract. It was not silently added during this Phase 1.5 visual correction because it adds scroll-progress JavaScript, reduced-motion behavior, resize handling, and a separate acceptance pass.
- English Atlas typography remains deferred.

## English Atlas Adaptation — 2026-08-22

### Evidence and normalization

- Source visual truth: the approved Chinese Atlas homepage rendered at `http://127.0.0.1:4321/`.
- Implementation: `http://127.0.0.1:4321/en/` and `http://127.0.0.1:4321/en/projects/tb2-diagnostics/`.
- Desktop Hero comparison: `atlas-en-adaptation/15-hero-comparison.png`, combining `11-zh-hero-reference.png` and `13-en-hero-final.png`.
- Desktop Route comparison: `atlas-en-adaptation/16-route-comparison.png`, combining `12-zh-route-reference.png` and `14-en-route-final.png`.
- English TB2 continuation: `atlas-en-adaptation/07-en-tb2-continuation.png`.
- Mobile navigation and Route: `atlas-en-adaptation/09-en-mobile-menu.png` and `atlas-en-adaptation/10-en-mobile-route.png`.
- Desktop CSS viewport: 1440 × 1000; captured pixels: 1426 × 990; device density 1×.
- Mobile CSS viewport: 390 × 844; captured pixels: 376 × 814; device density 1×.
- State: settled initial Hero; scrolled Route with reveal transitions completed; expanded mobile navigation; settled TB2 evidence/continuation section.

### Fidelity review

- Fonts and typography: English Atlas headings use an editorial serif stack (`Iowan Old Style`, `Palatino Linotype`, `Book Antiqua`, `Georgia`) while retaining the existing sans-serif body and navigation. The longer English Hero wraps to three lines by design; hierarchy and copy column remain aligned with the Chinese source.
- Spacing and layout rhythm: English now uses the same Atlas grid, staggered three-station Route, Marginalia section, and Cartouche. Desktop and 390px mobile captures show no clipped headings, collapsed cards, or horizontal overflow.
- Colors and tokens: English uses the same navy, cream, royal blue, and gold system as the approved Chinese page. No new color tokens were introduced.
- Image quality and asset fidelity: the existing Vienna photo, AIGC image, and project-poster system are reused without raster modification. Route, poster, and Cartouche treatments remain shared CSS.
- Copy and content: Atlas vocabulary is adapted rather than translated literally (`Plate`, `Station`, `Marginalia`, `Cartouche`). The TB2 overview retains its existing evidence boundaries and now exposes the previously Chinese-only Diagnosis Walkthrough links, continuation card, and language-correct back/overview routes.
- Interaction and accessibility: English mobile menu opens and exposes Home, Work, Hobbies, About, and Email; station links route to `/en/projects/*`; the English TB2 subnavigation exposes Overview, Diagnosis Walkthrough, and GitHub. Browser console warnings/errors: none.

### Comparison history

- Pass 1 finding (P1): English homepage remained on the legacy three-card branch, creating a visible language mismatch. Fixed by sharing the Atlas Hero, Route, Marginalia, and Cartouche structure across both languages.
- Pass 1 finding (P1): English TB2 excluded the earlier Diagnosis Walkthrough integration. Fixed by removing the language gate and making ProjectSubnav language-aware.
- Pass 2: same-viewport Hero and Route comparisons found no remaining actionable P0/P1/P2 differences. The English three-line Hero and longer station titles are expected localization differences, not design drift.
- Pass 2 mobile: menu and staggered Route remain readable at 390px; no actionable P0/P1/P2 issues remain.

### Follow-up polish

- The English display serif is intentionally a stable system stack. A later typography-only pass may bundle a licensed Latin face if identical cross-platform metrics become necessary.

final result: passed
