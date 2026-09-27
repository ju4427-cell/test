---
name: planning-docs
description: Guides the user through writing the planning documents in order — Project Summary, UX Flow, Visual Direction, then the Implementation Plan. MUST BE USED when the user says "기획 문서 쓰자", "기획하자", "프로젝트 시작", "write the planning docs", "start a project", "UX flow", "visual direction", "/planning", or when they ask for screens, components or pages before the documents exist. Owns every step that comes before code.
---

# Planning Documents

## First principle — do not write them for the user

**Do not generate the documents. Ask questions, let the user answer, and organize what they said.**

Even when the user says "just write it for me", do not. These documents decide the data model and the screens. Any decision that did not come out of the user's head collapses during assembly.

- If the user cannot answer something, **leave it blank and mark it.** Never fill it with plausible-sounding text.
- Two or three questions at a time. Do not hand them a questionnaire.
- When an answer is vague, ask again. "The users are marketers" is not yet an answer.

## Starting

1. Check `docs/` to see which stage they are at.
2. If earlier documents exist, **read them first.** Each document's decisions drive the next one.
3. If the user wants to start at document 3, stop them. Order is what produces quality.

All four worked examples are in `docs/example/`. When the user asks what one looks like, point them there. **Do not copy sentences from them.** A different subject means different content.

**Write the documents in English.** Talk to the user in whatever language they use, but write to files in English.

## Applies to every stage

### Save the document to a file

When a stage's questions are done, **write the file at its path immediately.** Do not just summarize in conversation.

After writing, update that document's row in the status tables in `src/stories/overview/Docs.mdx` from `Not started` to `Done`. There are two tables: documents 1 through 3, and document 4. Opening Storybook then shows how far along they are.

### When the user says they do not know

"I don't know" splits two ways. Find out which.

- **Not decided yet** → help them decide now. Offer two or three options and let them pick. When they pick, get one line on why.
- **Needs checking** (actual user count, how long something takes today) → mark it `[to confirm]` in the document and move on. Fill it in later. **Never invent it.**

### How much to write

**As much as the user needs to be convinced.** Length is not the measure.

When the completion checklist is satisfied, the document is done. Do not ask for more. No document improves by being longer.

---

## Stage 1 — Project Summary (`docs/01-project-summary.md`)

### Ask

1. **Who uses this. How many of them.**
2. **How often do they open it.** Daily, weekly, once every two months?
   → This answer drives nearly every later decision. Insist on it.
   - **Rarely** (less than monthly) → it is a tool someone is always using for the first time. No internal shorthand, no symbols, no explanation hidden behind a hover. What matters is printed on screen. Search becomes the main entrance.
   - **Often** (daily or weekly) → the interface becomes muscle memory. Shorthand and dense screens are fine. What matters most becomes "what changed since last time".
   - Write the resulting premise into the document **as one line.** Stage 3 pulls it back out.
3. **How is this done today. How long does it take.**
4. **What will this not do.**
5. **What is different once it works.**

### Complete when

- [ ] The user can be described in one sentence
- [ ] Frequency is recorded, with one line of design premise drawn from it
- [ ] There is a "what it does not do" section
- [ ] **Not one line about visuals** — delete any color, layout or type talk. That is stage 3

### Common problems

- **Answering with a job title.** "The design team" is not an answer. What a team lead sees and what a working designer sees are different screens. Get to who, and how many.
- **Answering "often".** Narrow it to times per day or per week.
- **Listing features.** This document is about purpose and scope, not a feature list.

---

## Stage 2 — UX Flow (`docs/02-ux-flow.md`)

**The most important of the four.** The data model table here is what every later step depends on. Spend the most time here.

### Ask

1. **Walk me through the most common time someone uses this, start to finish.**
   → Get it as human behavior, not screen names. Not "provide search" but "two months have passed and they do not remember how it works".
2. **Is there another situation?** Two is usually enough.
3. **How many screens. What is the address of each.**
4. **What appears on those screens, with names and types.**
   → This is the data model. Put it in a table: field name, type, description.
5. **Pin the units.** Meters or kilometers. Decimals or percentages. Date format.
6. **What does the screen show when data is missing, partial, or wrong.**
7. **Split what MUI already provides from what has to be built.**
   → Have them open the `MUI` section in Storybook. Tables, buttons, inputs and tabs already exist. If it is not there, check mui.com.

### Complete when

- [ ] Scenarios are written as human behavior
- [ ] There is a route table
- [ ] **Every field in the data model table has a type**
- [ ] **Units are written down**
- [ ] States other than normal are decided: missing, partial, error
- [ ] Components are split into reuse and build-new, with a build order

### Common problems

- **Skipping the data model.** The most common and most expensive mistake. Without it, field names drift apart as components get built.
- **Mistaking this for code.** It is a drawing. The real files come later.
- **Wanting to build every component from scratch.** Show them what MUI already gives.

---

## Stage 3 — Visual Direction (`docs/03-visual-direction.md`)

### Before starting

**Have them re-read document 1.** Frequency of use decides the character of the screen. A reference opened twice a year should not use urgent color or motion. A wall display watched all day is the opposite.

### Ask

1. **What is the subject of the screen.** A table, cards, images?
2. **Which direction for color.** Calm or vivid. **Do not ask for hex values.** Direction only.
3. **Dense or roomy.** With the reason.
4. **Do numbers matter here.** If so, digits need fixed width.
5. **What will this not do.** Gradients, animation, icon-only meaning, dark mode.

### Complete when

- [ ] Every decision carries a **why**. A decision with no reason gets overturned later with no argument
- [ ] **No hex values.** Exact colors are chosen during the token work
- [ ] The premise from document 1 is used again here
- [ ] There is a "what this will not do" section
- [ ] **The tokens to change are listed as numbered items**

## Once the first three are done

1. Have the user read all three in one sitting. Check whether **each document's premise carries into the next.** Where it breaks is what has not been decided yet.
2. Offer a second opinion. If they want, review the documents from another discipline's point of view.
3. **Register the documents in Storybook.** See below.
4. Next is the **token work.** Change `src/styles/theme.js` according to the numbered list in document 3. Check it with your eyes in Storybook's `Style` and `MUI` sections.
5. **Do not build components before the tokens change.**

### Registering the documents

Put the document bodies where they can be read next to the components, in `src/stories/overview/`.

- One `.mdx` page per document, titled `Overview/Project Summary`, `Overview/UX Flow`, `Overview/Visual Direction`, and later `Overview/Implementation Plan`.
- **Bring the content over as it is.** Do not summarize, do not rewrite, do not drop the tables. The document is the source of truth and this is a reading surface for it.
- Tables render because `remark-gfm` is already wired into addon-docs.
- Keep `Overview/Planning Docs` as the status index and leave its tables updated.
- When a document changes later, update its page too. A stale page is worse than no page.

The point is that opening Storybook alone shows what was decided. The user will come back to it while assembling, when they need to remember what they committed to.

---

## Stage 4 — Implementation Plan (`docs/04-implementation-plan.md`)

**Written after the token swap, right before assembly.** Its timing is different from the first three.

It turns the UX Flow into a **build order**. No code yet.

### Include

1. **The data model first.** Every data type in one file, `src/data/schema.js`. Data and components stay separate.
2. **Components in dependency order.** Lowest dependency first, grouped into numbered phases.
3. **Sections and pages as their own later phases.** Assembly cannot start until the small components exist.
4. **App shell and router last.** The shell is mounted once in `App.jsx`.

### Complete when

- [ ] The schema comes before any component
- [ ] Components are grouped into phases by dependency
- [ ] Individual components and sections/pages are **separate** phases
- [ ] The user has read the plan and agrees with it

**Fixing a plan is cheaper than fixing components.** If they are not convinced, stop here and fix it.

Register this one in Storybook too, as `Overview/Implementation Plan`, the same way as the first three.

### Then — Storybook registration rules

Follow these while assembling.

- **Never mix project components into the `MUI` section.** They go in `Components`.
- **One story per component.**
- **Sections go in their own `Sections` section**, separate from individual components.
- **App shell, header and nav go in `Layout`.**
- **Do not register `schema.js` or the router.** Neither is UI. Verify routing with `pnpm dev`.
- **Only representative pages.** The full flow is checked in `pnpm dev`.

## Do not

- Write the documents for the user
- Fill a blank the user could not answer with plausible text
- Skip a stage
- Create `.jsx` files or `schema.js` during the document stages
- Let color, type or layout talk into document 1
- Write stage 4 together with stages 1 through 3 — it comes after the tokens
