# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

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

This project is tracked in [Scrum4Me](https://github.com/madhura68/Scrum4Me) via the [scrum4me-mcp](https://github.com/madhura68/scrum4me-mcp) server, which is globally configured in Claude Code (`~/.claude/mcp_servers.json`). Use it for product context, authorized task status updates, and implementation/test/commit activity within the current assignment.

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

1. As the interactive main session, start with `mcp__scrum4me__get_context({ product_id, agent })` and repeat it after compaction before resuming substantive work. Always pass your known `agent.runtime` (CLAUDE/CODEX), even when the model ID is unknown; add `agent.model_id` only when the exact ID is known. Omit the entire `agent` object only if the runtime is unknown; never guess an identity. `model_id` selects a profile and does not switch models.
   Read `agent_guide`, check `agent_context.applied_profiles`, and apply its task allocation, subagent model selection and verification policy within the current assignment. Preserve the user-selected main model; a different guide recommendation is not an error. Pass relevant guide and task context to subagents; they do not automatically repeat the main-session startup flow.
   Only when the guide is missing or empty, call `get_agent_guide` once with the same product and agent input and read `guide_md`. A missing profile alone is not a reason for another call. If the guide remains unavailable, report it and follow the existing missing-context procedure without a retry loop.
   `get_context` returns the product and all `active_sprints`. Select only the sprint within the current assignment; read `get_sprint_context({ sprint_id })` for stories/tasks and add `task_id` only for one full task plan. Use `get_ideas_context({ product_id })` only for ideas. Preserve the assignment and authorization after compaction; context does not authorize the next story or a new claim. Claimed worker jobs first follow their kind prompt and payload, use a supplied applicable guide, and retrieve only a missing guide directly.
2. `mcp__scrum4me__update_task_status(task_id, 'in_progress')` before coding, `'done'` after
3. `mcp__scrum4me__log_implementation` / `log_test_result` / `log_commit` to keep an activity trail per story
4. `mcp__scrum4me__create_todo` for ad-hoc work that doesn't fit a story
5. Stuck on an ambiguous choice? `mcp__scrum4me__ask_user_question(story_id, question, wait_seconds?)` posts a notification to my Scrum4Me NavBar bell — I can answer in the UI without leaving Claude Code

Full tool catalogue (16 tools): see `README.md` in the scrum4me-mcp repo.
