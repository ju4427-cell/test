# Visual Direction — Trade Area Dashboard

> Example document. Read only. Write your own at `docs/03-visual-direction.md`.
>
> **Only after this document do you touch `src/styles/theme.js`.** Until the tokens change, no components.

## Premise — what kind of tool this is

A **reference** people open occasionally. Not a monitoring wall.

So the screen must not **create urgency.** Red warning lamps, numbers that tick, large saturated accents all say "act now". This data refreshes once a year, so that signal is a lie.

Build something **calm, readable, and easy to compare.**

## Layout direction

- **The table is the subject.** Putting regions side by side is the core action. Give the table the most room.
- **One judgment per screen.** First screen: which region. Detail: how is this one. Brief: what to execute. Do not mix them.
- **Search at the top, first.** It is the main entrance.
- **Do not scatter cards.** Put every metric in a card and nothing reads as important. Three or four key metrics at the top of the detail screen, no more.

## Color

**Do not ship MUI's default blue.** A default means nobody has decided yet.

| Role | Direction | Why |
|---|---|---|
| Primary | Deep teal | Calm, still visible enough for links and buttons |
| Secondary | Warm sand | For secondary metrics and comparison marks. Does not blend into the primary |
| Error | Keep the default | Errors are rare here. No reason to touch it |
| Grey | Widen the ramp | The table is the subject, so borders, header rows and muted text need many steps |

**Two accents at most.** Give every metric its own color and the table becomes a rainbow. Separate by order and position, not by hue.

## Information density

**Go dense.** Several regions have to be comparable in one view. Generous whitespace lengthens the scroll and makes comparison harder.

- Table rows: tight
- Card padding: normal
- Between sections: generous

**Dense, but do not tighten leading.** Misreading a number is the worst failure here.

## Typography

- **Numbers are the subject.** In tables and metric cards, digits get fixed width. Comparison breaks when columns shift.
- **Three heading levels, no more.** Page title, section title, table header. Beyond that it is decoration, not hierarchy.
- **Body text can run small.** People scan this more than they read it.
- **Pick a family where digits are unambiguous.** Zero versus letter O, one versus letter l.

## What this will not do

- **Gradients, glass effects, heavy shadows.** They sit on top of the data.
- **Animation.** Movement is noise in a tool opened twice a year. Transitions are instant.
- **Icons carrying meaning alone.** After two months nobody remembers what the icon meant. Write the word.
- **Dark mode.** Out of scope for phase one.

## Tokens to change

What this document licenses you to change in `src/styles/theme.js`:

1. `palette.primary` — deep teal
2. `palette.secondary` — warm sand
3. `palette.grey` — check whether the default ramp is enough
4. `typography.fontFamily` — legible digits
5. `typography` heading steps — trim so only three are used
6. `shape.borderRadius` — small, to match a calm read
7. Table density — `components.MuiTableCell` default padding

Then **check it with your eyes in Storybook.** Look at the `Style` section first, then `MUI`. Did the buttons and table take the new color? Is the type the right size?

---

## What this document got right

- **Every decision carries a why.** "Use teal" alone gets overturned later with no argument. "Because it has to stay calm" keeps the reasoning.
- **No hex values.** Direction only. Exact values are chosen during the token work. A document that tries to replace code leaves both stale.
- **It says what it will not do.** In visual work, subtracting is as load-bearing as adding.
- **It reuses the premise from document 1.** "A tool people open occasionally" drove the color, the density and the decision about animation.
