# Project Summary — Trade Area Dashboard

> Example document. Read only. Write your own at `docs/01-project-summary.md`.

## One line

An internal reference tool a small cafe franchise uses to decide **where to open next and which areas to advertise in**.

## Who uses it

**Five or six people at head office: site development and marketing.**

One premise matters more than the rest. **They do not open this every day.** They open it when a candidate site comes up, when the quarterly ad budget is due, or when a franchisee asks how their neighborhood is doing. Two months can pass between visits.

So it is designed as a tool **someone is always using for the first time.** Whatever they learned last time is gone. No internal shorthand, no symbols, no explanation hidden behind a hover. What they need to know is printed on the screen.

## Why build it

Today an analyst repeats the same work by hand. Download public census data, open it in a spreadsheet, count competitors one by one on a map service, eyeball whether the site overlaps an existing store. Half a day per area.

The point of this project is to **pull scattered sources into one screen and let areas be compared on the same basis.**

## What it does

1. Lists trade area metrics per region on a common basis so they can be compared.
2. Lets you open one region and see its population mix, competitors, and distance to our nearest store.
3. Turns that review into something that can be handed to whoever buys the ads.

## What it does not do

- **No real-time data.** Census figures refresh once a year. This is not a tool for what is happening right now.
- **No automatic site recommendations.** People decide. The tool assembles the evidence.
- **No sales data.** Out of scope for phase one. Trade area only.

## Success criteria

Reviewing one area drops from **half a day to ten minutes.**
And someone returning after two months can **use it without being re-taught.**

## Scope

Phase one ends at **screens with dummy data.** Real data and deployment come later.

---

## What this document got right

- **Not one line about visuals.** Color, layout and type belong in document 3. Raising them here muddies the decision.
- **It says what is out of scope.** A sentence that narrows the work is what stops "could we also add…" later.
- **If you cannot describe the user in one sentence, it is not settled yet.** "Five or six people, not daily" is specific enough to design against.
- **Length is not the measure.** It says as much as the author needed to be convinced.
