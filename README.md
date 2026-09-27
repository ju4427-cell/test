# design-dashboard-starter

A dashboard starter for an internal design team. **Being empty is the point.**
You fill it in this order: planning documents → theme tokens → implementation plan → components → sections and pages → assembly → QA.

## Getting started

On GitHub press **Use this template** to create your own repository, then **Code → Codespaces → Create codespace**.
When setup finishes, from the terminal:

```bash
pnpm storybook   # tokens and components, piece by piece (6006)
pnpm dev         # the assembled app (5173)
claude           # Claude Code. Browser sign-in once on first run
```

To work locally instead, install Node 24 and pnpm, run `pnpm install`, then the same commands.

## What is here

| Path | Role |
|---|---|
| `docs/` | Planning documents. Written before any code |
| `docs/example/` | Four worked examples. Read only |
| `.claude/skills/planning-docs/` | The skill that walks you through writing them |
| `src/styles/theme.js` | Design tokens. MUI defaults for now. Replaced after Visual Direction |
| `src/stories/style/` | Token visualization. Changes when theme.js changes |
| `src/stories/mui/` | MUI base components. Not rebuilt |
| `src/stories/overview/` | Where the planning documents are registered |
| `src/components/` | Created during assembly. Empty for now |
| `src/data/schema.js` | The first thing created during assembly. Every data type in one file |

## Stack

React 19 · Vite · MUI · MUI X Charts · Storybook 10

## Prompt order

Start `claude` in the Codespaces terminal and work down this list.
The prompts are short on purpose. The skill and `CLAUDE.md` already know the order.

### 1. Planning — documents only, no code

```
Let's write the planning docs
```

The `planning-docs` skill asks questions. **It does not write the documents for you. You answer.**
Summary → UX Flow → Visual Direction accumulate in `docs/`.
Answer in whatever language you like. **The documents are written in English.**

When the three documents are done, put them where you can read them:

```
Register the three planning docs in Storybook's Overview section so I can read them there
```

Now Storybook alone shows what was decided. You will come back to it while assembling.

**This is half the work.** Everything after it is short.

### 2. Tokens — make the colors and type yours

```
Swap the theme tokens per the visual direction doc. Tell me what you'll change before changing it.
```

→ When it finishes, **check Storybook's `Style` section with your eyes.** Then check `MUI`.
Did the buttons and table take the new color? Is the type the right size? If something is off, name it specifically and ask again.

**Do not build components before the tokens change.**

### 3. Plan — a plan, not code

```
Plan the data model and components from the UX flow. Plan only, don't build yet.
Keep data separate from components, manage every data type in one schema.js.
Split individual components and sections/pages into separate phases.
```

```
Save that plan as docs/04-implementation-plan.md and register it in Storybook Overview
```

Read the plan. If you agree, continue. If it looks wrong, fix it here. Cheaper than fixing built components.

### 4. Assembly — small things first

```
Go ahead with the plan
```

```
Check whether every component in the UX flow has been built
```

Register the individual components in Storybook. **Keep them out of the `MUI` section.**

```
Register only the project components in Storybook's Components section, grouped by the
UX flow categories. Keep them separate from MUI, one story per component.
```

Those are the parts. Now assemble.

```
Using that structure, build the section and page components.
Register sections in Storybook's Sections section.
```

```
Wire the pages to routes and mount the app shell once. Register the shell under Layout.
```

The router and `schema.js` are not registered in Storybook. Neither is UI.

### 5. Check and QA

```
Run pnpm dev
```

→ When you spot something to fix, **collect them and send them in one batch** rather than one at a time.
Going back and forth is slow.

---

When you get stuck, this line always works.

```
Plan it first. Don't build yet.
```

## The three ordering rules

1. Tokens → components. Never build components before the theme changes.
2. Data model → components. Never build components without a schema.
3. Plan → execution. "Plan it first. Don't build yet."

## Language

Everything produced here is written in English: the planning documents, Storybook, component and prop names, code comments.
Talk to Claude in whatever language you prefer.
