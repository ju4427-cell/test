# Implementation Plan — Trade Area Dashboard

> Example document. Read only. Write your own at `docs/04-implementation-plan.md`.
>
> **Written after the token swap, right before assembly.** Later than the other three.
> It turns the UX Flow into a build order. No code yet.

## Phase 0 — Data model first

Everything starts from `src/data/schema.js`. One file holds every data type.

- Four entities from the UX Flow: `Region`, `Store`, `Competitor`, `AdBrief`
- Units as written in that document. Distance in meters, shares as decimals
- **Data and components stay separate.** No component holds its own data
- Dummy records live in `src/data/`, not inside component files

**Nothing else begins until this file exists.** Build a component first and its props will not match the data later.

## Phase 1 — Components with no dependencies

| Component | Notes |
|---|---|
| `AppShell` | Header, nav, content slot |
| `DataSourceNote` | Source and as-of date, one line |

## Phase 2 — Small pieces

| Component | Notes |
|---|---|
| `MetricCard` | One number and its label |
| `AgeGroupBar` | Age band shares |

## Phase 3 — Components built from the pieces

| Component | Uses |
|---|---|
| `RegionTable` | MUI `Table`, `Chip` |
| `CompetitorList` | MUI `Table` |
| `StoreDistanceList` | MUI `Table` |

## Phase 4 — Inputs

| Component | Notes |
|---|---|
| `RegionSearch` | MUI `TextField` |
| `BriefForm` | MUI `TextField`, `Button` |

**Stop here and register.** Everything above goes into Storybook's `Components` section, one story per component, kept out of the `MUI` section. This is the parts bin. Assembly is next.

## Phase 5 — Sections

| Section | Built from |
|---|---|
| `RegionOverviewSection` | `MetricCard`, `AgeGroupBar`, `DataSourceNote` |
| `CompetitorSection` | `CompetitorList`, `StoreDistanceList` |

Sections go into Storybook's `Sections` section, separate from individual components.

## Phase 6 — Pages

| Page | Route | Built from |
|---|---|---|
| `RegionComparisonPage` | `/` | `RegionSearch`, `RegionTable` |
| `RegionDetailPage` | `/regions/:regionId` | `RegionOverviewSection`, `CompetitorSection` |
| `AdBriefPage` | `/regions/:regionId/brief` | `BriefForm` |
| `StoreListPage` | `/stores` | `StoreDistanceList` |

## Phase 7 — Router and app shell

- Wire every page to its route in `src/App.jsx`
- **Mount `AppShell` once**, not per page
- Register `AppShell` in Storybook's `Layout` section
- **The router is not registered in Storybook.** It is not UI. Check it with `pnpm dev`

## Not doing

- Real data. Dummy data only in phase one
- Supabase, login, deployment
- Charts. The UX Flow calls for tables and bars, nothing that needs a chart library

## Done when

- `pnpm dev` serves every route and they navigate
- Every component in the UX Flow exists
- Storybook shows `Components`, `Sections` and `Layout` filled in
- Design QA notes are collected and sent in one batch

---

## What this document got right

- **Schema comes before components.** It is the single most expensive order to get wrong.
- **Individual components and sections are separate phases.** Parts first, assembly second. Collapse them and you build pages with nothing to put in them.
- **It says what is not being built.** Charts were considered and ruled out because the UX Flow never asked for one.
- **It is readable in one sitting.** A plan nobody reads is not a plan. Fixing a plan is cheaper than fixing components.
