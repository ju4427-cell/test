# docs

Planning documents live here. Write them in order. **Write them in English.**

1. `01-project-summary.md` — what, for whom, why. No visual talk.
2. `02-ux-flow.md` — user scenarios, screen states, routes, data model table, component list (reuse / build new).
3. `03-visual-direction.md` — layout direction, color, information density, type principles.

Only after 3 do you change `src/styles/theme.js`. Only after the theme changes do you build components.

## One more, later

4. `04-implementation-plan.md` — written after the token swap, right before assembly.
   It turns the UX Flow into a build order. Schema first, then components in dependency order.
   **Read it and agree with it before any code is written.** Fixing a plan is cheaper than fixing components.

Worked examples live in `example/`. Read them. Do not edit them.
