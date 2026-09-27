# UX Flow — Trade Area Dashboard

> Example document. Read only. Write your own at `docs/02-ux-flow.md`.
>
> **The most important of the four.** The data model table here is what every later step depends on.

## 1. User scenarios

### Scenario A — destination known (the common case)

A site development analyst is asked to review a candidate location in Riverside.

1. Opens the dashboard. **Two months have passed. They do not remember how it works.**
2. Types "Riverside" into the search box at the top of the first screen.
3. Lands directly on the Riverside detail screen.
4. Checks population mix, competitor count, and distance to our nearest store.
5. Leaves a review note and exports an ad brief.

**Design consequence:** search is the main entrance. It has to be the first thing on the first screen.

### Scenario B — browsing

A marketer has a quarterly ad budget and no sense of where to spend it.

1. Looks at the region comparison table on the first screen.
2. Sorts by foot traffic. Then sorts by competitor density.
3. Opens two or three regions that stand out and compares them.
4. Picks one and exports an ad brief.

**Design consequence:** the table must sort. Sorting matters more than filtering here.

### Both — trust restarts at zero every visit

Both scenarios ask **"how old is this number?"** Source and collection date sit where they can be seen without going looking.

## 2. Screen states

Drawing only the healthy state means the screen breaks later. **Decide these for every screen that shows data.**

| State | When | What it shows |
|---|---|---|
| Normal | All data present | Values and the as-of date |
| Partly missing | 11 of 15 regions collected | Values plus "11 of 15 regions". Never fill blanks with zero |
| Low confidence | Margin of error exceeds half the estimate | "Judgment withheld" instead of a number. The interface must not look more certain than the data |
| Missing | No data for this region at all | Why it is missing and what to do next |
| Error | Load failed | A retry action |

**Empty and error states are not decoration added at the end.** Skip them here and you come back after every component is built.

## 3. Information architecture (routes)

| Route | Screen | Purpose |
|---|---|---|
| `/` | Region comparison | Search box plus a table of all regions on a common basis |
| `/regions/:regionId` | Region detail | Population mix, competitors, distance to our stores |
| `/regions/:regionId/brief` | Ad brief | The review turned into something executable |
| `/stores` | Store list | Existing locations and trade area overlap |

**Header and navigation live in the app shell, once.** They are not repeated per page.

## 4. Data model

> **This table becomes `src/data/schema.js`.** It is built before any component.

### Region

| Field | Type | Notes |
|---|---|---|
| `id` | string | Identifier used in the route |
| `name` | string | Display name |
| `districtCode` | string | Administrative code |
| `population` | number | Residents |
| `floatingPopulation` | number | Average daily foot traffic |
| `ageGroups` | object | Share by age band, e.g. `{ '20s': 0.31, '30s': 0.28 }` |
| `competitorCount` | number | Competing stores within the radius |
| `rentIndex` | number | Rent index. 100 is the national average |
| `updatedAt` | string | As-of date. Shown on screen |

### Store

| Field | Type | Notes |
|---|---|---|
| `id` | string | Identifier |
| `name` | string | Store name |
| `regionId` | string | Points at `Region.id` |
| `lat` | number | Latitude |
| `lng` | number | Longitude |
| `openedAt` | string | Opening date |

### Competitor

| Field | Type | Notes |
|---|---|---|
| `id` | string | Identifier |
| `regionId` | string | Region it belongs to |
| `brand` | string | Brand name |
| `distanceFromCandidate` | number | Distance from the candidate site, in meters |

### AdBrief

| Field | Type | Notes |
|---|---|---|
| `id` | string | Identifier |
| `regionId` | string | Target region |
| `radiusKm` | number | Ad radius |
| `targetAgeGroups` | array | Target age bands |
| `note` | string | Analyst note |
| `createdAt` | string | Written at |

### Decisions

- **Distance in meters, shares as decimals between 0 and 1.** Pin units in the document or components drift apart.
- **`updatedAt` is shown on screen.** Trust restarts at zero on a tool people open twice a year.
- **Regions and stores are linked by `regionId`.** Data stays flat rather than nested.

## 5. Component list

### MUI already covers these (do not build)

`Table` · `TextField` (search) · `Button` · `Chip` · `Card` · `Tabs` · `Breadcrumbs` · `Alert`

Open the `MUI` section in Storybook to see them with this project's tokens applied.

### Build these

| Component | Purpose | Used on |
|---|---|---|
| `AppShell` | Header, nav, content slot | Every page. Mounted once in `App.jsx` |
| `RegionSearch` | Region search input | Top of `/` |
| `RegionTable` | Sortable region comparison table | `/` |
| `MetricCard` | One metric as a number and a label | `/regions/:id` |
| `AgeGroupBar` | Age band shares | `/regions/:id` |
| `CompetitorList` | Competitors and their distance | `/regions/:id` |
| `DataSourceNote` | Source and as-of date, one line | Every screen that shows data |
| `BriefForm` | Radius, target, note | `/regions/:id/brief` |
| `StoreDistanceList` | Distance to our stores | `/regions/:id`, `/stores` |

### Sections

| Section | Built from |
|---|---|
| `RegionOverviewSection` | `MetricCard`, `AgeGroupBar`, `DataSourceNote` |
| `CompetitorSection` | `CompetitorList`, `StoreDistanceList` |

### Build order (dependencies)

1. `AppShell`, `DataSourceNote` — depend on nothing
2. `MetricCard`, `AgeGroupBar` — small pieces
3. `RegionTable`, `CompetitorList`, `StoreDistanceList` — use the pieces above
4. `RegionSearch`, `BriefForm` — inputs
5. Sections — assemble the components
6. Pages — assemble the sections

**Small things first.** Build a page first and there is nothing to put in it, so you end up splitting it apart again.

---

## What this document got right

- **The data model is pinned in a table.** Without field names and types here, components invent their own as they go.
- **What is written here is a drawing, not code.** The real `schema.js` and `.jsx` files come after the token work.
- **Scenarios are written as things people do.** "Provide search" teaches you nothing. "Two months have passed and they do not remember how it works" produces a design decision.
- **Reuse and build-new are separated.** So nothing MUI already gives you gets rebuilt.
- **States other than normal are decided.** Miss them and you return after assembly is done.
- **Build order is written down.** Lowest dependency first.
