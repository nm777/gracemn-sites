# Implementation Plan: Modern Homepage with Navigation

**Branch**: `001-modern-homepage` | **Date**: January 15, 2026 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-modern-homepage/spec.md`

## Summary

Create a modern, accessible homepage with navigation to five sections (Home, Visit Us, Sermons, Music, Live Stream) using Laravel 12 with Inertia v2 and React 19. The homepage will feature a clean design with readable typography, a consistent navigation menu across all pages, and placeholder content for non-home pages. Implementation follows test-first development with Pest v4 and leverages Laravel Boost tools for version-specific guidance.

## Implementation Status

**Phase 0 (Research)**: ✅ Complete - research.md generated with decisions on navigation structure, responsive design, 404 handling, accessibility, color scheme, and testing approach

**Phase 1 (Design & Contracts)**: ✅ Complete

- data-model.md: Created (no database entities required - static pages)
- contracts/: Created (README.md noting no API contracts needed)
- quickstart.md: Generated with development setup instructions
- Agent context: Already up-to-date (all technologies documented in AGENTS.md)

**Constitution Check Post-Design**: ✅ PASSED - No violations introduced by design decisions

**Next Phase**: Phase 2 (Task Generation) - Execute `/speckit.tasks` to generate implementation tasks

## Technical Context

**Language/Version**: PHP 8.4.14
**Primary Dependencies**: Laravel 12, Inertia v2 (inertiajs/inertia-laravel, @inertiajs/react), React 19, Tailwind CSS v4, Laravel Fortify v1
**Storage**: PostgreSQL (configured in .env), Eloquent ORM
**Testing**: Pest v4 (Unit, Feature, Browser tests)
**Target Platform**: Web browsers (Chrome, Firefox, Safari, Edge - latest versions)
**Project Type**: web (single-project Laravel application with Inertia frontend)
**Performance Goals**: Pages load under 2 seconds, navigation completes in under 3 seconds
**Constraints**: Accessible via assistive technologies (screen readers, keyboard navigation), minimum viewport width 1024px for desktop
**Scale/Scope**: 5 pages (Home, Visit Us, Sermons, Music, Live Stream), responsive design for desktop/tablet/mobile

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

### Test-First Development (NON-NEGOTIABLE) ✅

**Requirement**: Every change MUST be programmatically tested using Pest v4
**Plan Compliance**: Will write Pest tests before implementation:

- Feature tests for navigation routing and page rendering
- Feature tests for 404 error page
- Browser tests for homepage layout and navigation functionality
- Tests will verify happy paths, failure paths, and edge cases
- Tests will use factories for any required models

### Laravel Best Practices ✅

**Requirement**: Follow Laravel conventions strictly (Eloquent relationships, Form Request classes, proper routing, etc.)
**Plan Compliance**:

- Use `php artisan make:` commands for scaffolding
- Use named routes with `route()` function
- Configure environment in config files only
- Follow Laravel 12 structure (bootstrap/app.php)
- Use Eloquent over raw DB queries

### Inertia-First Frontend ✅

**Requirement**: Use Inertia.js for server-side routing, place components in resources/js/Pages, use Inertia::render()
**Plan Compliance**:

- All pages will use `Inertia::render()` in controllers
- React components will be placed in `resources/js/Pages`
- Navigation will use `<Link>` component or `router.visit()`
- Will leverage Inertia v2 features as appropriate

### Boost-Enabled Development ✅

**Requirement**: Use Laravel Boost MCP server tools (search-docs, list-artisan-commands, tinker, etc.)
**Plan Compliance**:

- Will use `search-docs` before writing any code
- Will use `list-artisan-commands` to verify parameters
- Will use `tinker` for debugging
- Will use `get-absolute-url` for generating URLs

### Code Quality Standards ✅

**Requirement**: Run Pint, use PHP 8.4 features (constructor property promotion, type hints), follow conventions
**Plan Compliance**:

- Will run `vendor/bin/pint --dirty` before finalizing
- Will use PHP 8 constructor property promotion
- Will use explicit return types and type hints
- Will follow existing code conventions
- Will use descriptive variable names

**Gate Status**: ✅ PASSED - All constitution requirements met. No violations to justify.

## Project Structure

### Documentation (this feature)

```text
specs/001-modern-homepage/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output (API contracts if needed)
├── tasks.md             # Phase 2 output (NOT created by /speckit.plan)
├── checklists/
│   └── requirements.md  # Specification quality checklist
└── spec.md              # Feature specification
```

### Source Code (repository root)

```text
src/gracemn/
├── app/
│   └── Http/
│       └── Controllers/
│           ├── HomeController.php
│           ├── VisitUsController.php
│           ├── SermonsController.php
│           ├── MusicController.php
│           └── LiveStreamController.php
├── resources/
│   └── js/
│       └── Pages/
│           ├── Home/
│           │   └── Index.tsx
│           ├── VisitUs/
│           │   └── Index.tsx
│           ├── Sermons/
│           │   └── Index.tsx
│           ├── Music/
│           │   └── Index.tsx
│           └── LiveStream/
│               └── Index.tsx
└── routes/
    └── web.php           # Add routes for homepage and sections

tests/
├── Feature/
│   ├── Home/
│   │   └── HomePageTest.php
│   ├── VisitUs/
│   │   └── VisitUsPageTest.php
│   ├── Sermons/
│   │   └── SermonsPageTest.php
│   ├── Music/
│   │   └── MusicPageTest.php
│   └── LiveStream/
│       └── LiveStreamPageTest.php
└── Browser/
    └── HomepageNavigationTest.php
```

**Structure Decision**: Single-project Laravel application with Inertia frontend. Controllers in app/Http/Controllers, Inertia pages in resources/js/Pages following Laravel/Inertia conventions. Tests follow Pest structure in tests/Feature and tests/Browser directories. This is the standard Laravel+Inertia project structure and complies with all constitution requirements.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

All constitution gates passed. No violations to document.
