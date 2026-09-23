# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

<!-- BEGIN scrum4me-agent-workflow v1 -->
## Scrum4Me-methodiek en MCP-queue

Volgt de globale Scrum4Me-methodiek (`~/.claude/rules/scrum4me-methodiek.md` voor Claude; de "Scrum4Me-methodiek"-sectie in `~/.codex/AGENTS.md` voor Codex). Niet-triviaal werk: plan → Sprint/PBI/Story/Taak via de `scrum4me` MCP → `update_task_status` per laag → docs in de DB. Volg de bestaande goedkeuring en hardstop na materialisatie; voor alleen documentatie/instructies geldt de doc-only-uitzondering.

**Context.** Lees `product_id` uit het Scrum4Me-productblok in de repo-`CLAUDE.md`/`AGENTS.md`. Ontbreekt het, werk normaal zonder een product-ID te raden.
`mcp__scrum4me__get_context({ product_id })` → product, alle `active_sprints` en `agent_guide`. Kies de sprint binnen de actuele opdracht; lees `get_sprint_context({ sprint_id })` voor stories/taken en voeg `task_id` alleen toe voor het volledige taakplan. Gebruik `get_ideas_context({ product_id })` alleen voor ideeën. Geef expliciet bekende `agent.runtime` en `agent.model_id` mee (CLAUDE/CODEX + exact model-ID); laat onbekende gegevens weg. Ontbreekt de guide, gebruik `get_agent_guide` met dezelfde agentinvoer. Context autoriseert geen volgende story.

**Queue gebruiken.** Volg de `s4m-queue`-skill bij queue-handelingen. Gebruik de `mcp__scrum4me__queue_*`-tools met je eigen identiteit; de CLI is fallback bij ontbrekende MCP-toegang of identiteit.
- Stuur een geautoriseerde opdracht/vraag met `queue_push({ to, type, body, ... })`: `task`, `info` of `review_request`. Voor `task`/`review_request`: `cwd` op de ontvangende host en `meta.task: { objective, verification, response_format }`; geef `meta.task.repo` expliciet mee als die niet uit `cwd` kan worden afgeleid.
- Koppel bestaand werk met het meest specifieke `task_id`, `story_id` of `sprint_id` als toolparameter. Gebruik echte IDs uit de context, geen zichtbare codes. De tool leidt `product_id` en bovenliggende IDs af naar `meta.work_item`; geef geen losse `product_id`-parameter aan `queue_push`. Zonder bestaand werkitem geen ID verzinnen.
- Bewaar `message_id`; lees antwoorden met `queue_wait_reply({ message_ids: [...] })`. Ontvang werk via `queue_next`, lees body én metadata en werk binnen `meta.task.cwd`. Rond af via `queue_done`/`queue_fail` met `message_id` en `claim_token`; sluit CLI-claims via de CLI af.

**Reviewdocumenten via metadata.** Voeg bij `review_request` de beoordeelde bronnen toe als `meta.review_documents: { version: 1, items: [...] }`, naast `meta.task`.
- Iedere referentie bevat `key`, `title`, `product_id` en `sha256` van de exacte documentinhoud. Gebruik `source: "product_doc"` met `doc_id` + `revision_id`, of `source: "git"` met relatief `.md`-`path` + volledige gepubliceerde `commit_sha`.
- Lees als reviewer de gekoppelde exacte revisie/commit en controleer de SHA-256; alleen de body of de nieuwste versie lezen volstaat niet. Ontbreekt de gepinde bron of wijkt de hash af, voer de review niet uit: meld de fout en rond een geclaimd verzoek af met `queue_fail`.
- Rapporteer tegen deze pins en antwoord via `queue_done`; het `reviewed`-antwoord blijft via `in_reply_to` gekoppeld aan de reviewdocumenten van het verzoek.
<!-- END scrum4me-agent-workflow v1 -->

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run lint     # ESLint
```

No test suite is configured.

## Architecture

Personal portfolio website for Janpeter Visser, built with **Next.js 15 App Router**, **TypeScript**, and **Tailwind CSS**. Deployed on Vercel at `jp-visser.nl`.

### Data flow

All CV content lives in a single source of truth: `lib/cv-data.ts` (`CV_DATA` const). Components import directly from there — no API calls, no state management.

### Page structure

`app/page.tsx` composes the single-page layout by stacking section components in order: `Nav → Hero → ExperienceSection → SkillsSection → AppsSection → ContactSection → Footer`.

### Adding apps to the portfolio

- **Subdomain approach**: deploy separately on Vercel and add a subdomain (e.g. `app1.jp-visser.nl`)
- **Route approach**: create `app/apps/<name>/page.tsx`, then update `components/apps.tsx` to link to it

## Scrum4Me MCP

This project is tracked in [Scrum4Me](https://github.com/madhura68/Scrum4Me) via the [scrum4me-mcp](https://github.com/madhura68/scrum4me-mcp) server, which is globally configured in Claude Code (`~/.claude/mcp_servers.json`). Use it to fetch product context and the relevant sprint details, update task status, and log implementation/test/commit activity.

**Product ID**: discover with `mcp__scrum4me__list_products` (the SCRUM4ME-product is for the Scrum4Me-app itself; create a separate `jp-visser` product in the UI if it doesn't exist yet, then put its CUID here):

```
product_id: cmojw8ega000004jpi38x3mit
```

**Bootstrap (first time)**:

If the product is empty, build the backlog from Claude Code itself:

1. `mcp__scrum4me__create_pbi(product_id, title, priority)` — top-level grouping
2. `mcp__scrum4me__create_story(pbi_id, title, priority, acceptance_criteria?)` — concrete deliverable
3. `mcp__scrum4me__create_task(story_id, title, priority, implementation_plan?)` — implementation step

Stories land in the product backlog (status=OPEN); move them into a sprint via the Scrum4Me UI when ready.

**Workflow per change**:

1. Haal context op volgens het standaardblok hierboven; kies alleen de sprint en het werk binnen de actuele opdracht.
2. `mcp__scrum4me__update_task_status(task_id, 'in_progress')` before coding, `'done'` after
3. `mcp__scrum4me__log_implementation` / `log_test_result` / `log_commit` to keep an activity trail per story
4. `mcp__scrum4me__create_todo` for ad-hoc work that doesn't fit a story
5. Stuck on an ambiguous choice? `mcp__scrum4me__ask_user_question(story_id, question, wait_seconds?)` posts a notification to my Scrum4Me NavBar bell — I can answer in the UI without leaving Claude Code

Full tool catalogue (16 tools): see `README.md` in the scrum4me-mcp repo.
