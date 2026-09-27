# Project Rules

Dashboard starter for an internal design team. Order of work is what determines quality.

## Order (required)

1. If the planning documents in `docs/` do not exist, do not write code. Use the `planning-docs` skill first.
2. If `src/styles/theme.js` is still MUI defaults, do not build components. Propose the token swap from the Visual Direction document first.
3. Define the data model in `src/data/schema.js` before any component. Data and components stay separate.
4. For any task, present a plan first and wait for the user to agree before executing.

## Style

- Use MUI components and `sx` only. Do not create separate CSS files.
- Before building a component, check whether MUI already has it. Look at the `MUI` section in Storybook and at mui.com first.
- Do not edit the files in `src/stories/mui/`. To change how something looks, change `theme.js`.
- Write documents and code in English. See the Language section below.
- Colors, type and spacing come from theme tokens only, as in `sx={{ color: 'primary.main', p: 2 }}`. Never hard-code a hex or px value.
- If charts become necessary, use `@mui/x-charts`. Its default series colors ignore the theme, so pass `theme.palette` values through `colors`. Never hard-code a hex. Which charts to use is decided in the UX Flow document.
- Import Grid as `import Grid from '@mui/material/Grid'` and use it as `size={{ xs: 12, md: 6 }}`.

## File layout

- Components: `src/components/{ComponentName}.jsx`, with `{ComponentName}.stories.jsx` beside it
- Sections: `src/sections/{SectionName}.jsx`
- Pages: `src/pages/{PageName}.jsx`
- The app shell (header, nav) is mounted once in `src/App.jsx`. Never repeated per page.
- Dummy data: under `src/data/`. Never inside a component file.

## Storybook

| Section | What goes in it |
|---|---|
| `Overview` | The status index, plus one page per planning document and the implementation plan |
| `Style` | Design tokens |
| `MUI` | MUI base components (do not edit) |
| `Components` | Project components. One story per component |
| `Sections` | Sections assembled from components |
| `Layout` | App shell, header, nav |
| `Pages` | Representative pages only (optional) |

- **Never put project components in the `MUI` section.** Mixed together, nobody can tell what was built here.
- **Do not register `schema.js` or the router.** Neither is UI. Verify routing with `pnpm dev`.
- Not every page needs a story. The full flow is checked in `pnpm dev`.
- **Register a document's body as it is.** Do not summarize it into a story. The file in `docs/` stays the source of truth, and the Storybook page is a reading surface for it. When the document changes, update the page.

### Language

- **Everything produced here is written in English.** This project is used at a US company.
- That covers the planning documents in `docs/`, Storybook section names, story titles, descriptions and dummy data, component and prop names, and code comments.
- **Talk to the user in whatever language they use.** Write to files in English regardless.

## Code conventions

- JavaScript and JSX. No TypeScript.
- camelCase for functions, PascalCase for components, one component per file.
- Destructure props, and document them in a `/** */` block above the component with required and optional marked.
- Boolean props start with `is` or `has`. Function props start with `on`.
- Semicolons, single quotes, two-space indent.

## Do not

- Build a whole screen on request when the documents do not exist. Send the request back to the document stage.
- Read or print the contents of any `.env*` file.
