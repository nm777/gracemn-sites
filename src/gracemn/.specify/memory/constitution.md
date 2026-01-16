<!--
SYNC IMPACT REPORT
==================
Version Change: Initial (none) → 1.0.0
Version Bump Rationale: Initial constitution adoption for GraceMN Laravel application

Modified Principles:
- None (initial adoption)

Added Sections:
- Core Principles (5 principles derived from AGENTS.md)
- Technology Stack Requirements
- Development Workflow
- Governance

Removed Sections:
- None

Templates Status:
- ✅ plan-template.md - No changes needed (Constitution Check section already present)
- ✅ spec-template.md - No changes needed (already flexible for requirements)
- ✅ tasks-template.md - No changes needed (already flexible for test categories)
- ✅ agent-file-template.md - No changes needed (generic placeholders)
- ✅ checklist-template.md - No changes needed (generic placeholders)

Follow-up TODOs:
- None
-->

# GraceMN Constitution

## Core Principles

### Test-First Development (NON-NEGOTIABLE)

Every change MUST be programmatically tested. Write or update a test (Unit or Feature) before implementation, ensure it FAILS, then implement to make it pass. Use Pest v4 test framework. Run tests using `php artisan test --compact` with appropriate filters. Test all happy paths, failure paths, and edge cases. Use factories and datasets to simplify test setup. Tests live in `tests/Feature` and `tests/Unit` directories.

**Rationale**: Testing-first ensures features work as designed, prevents regressions, and provides living documentation. This is critical for maintaining quality in a Laravel application with complex business logic.

### Laravel Best Practices

Follow Laravel conventions strictly. Use `php artisan make:` commands for scaffolding. Always use Eloquent relationships with proper type hints over raw queries. Prefer Model::query() over DB::. Prevent N+1 queries via eager loading. Create Form Request classes for validation. Use proper authentication/authorization (gates, policies, Sanctum). Use named routes with route() function. Configure environment variables only in config files, never use env() directly outside configs. Follow Laravel 12 structure (bootstrap/app.php for middleware, exceptions, routing).

**Rationale**: Laravel conventions provide a stable, maintainable foundation. Deviating leads to technical debt, debugging challenges, and lost productivity for future developers.

### Inertia-First Frontend

Use Inertia.js for server-side routing instead of Blade views. Place components in `resources/js/Pages`. Use `Inertia::render()` to pass data from controllers. Leverage Inertia v2 features: deferred props with empty states, infinite scrolling with WhenVisible, lazy loading, polling, prefetching. Use `<Form>` component for forms with resetOnError, resetOnSuccess. Use `useForm` helper for programmatic control. Use `router.visit()` or `<Link>` for navigation, not traditional links.

**Rationale**: Inertia provides seamless SPA experience without API complexity. Consistent use ensures maintainable, type-safe frontend with Laravel backend integration.

### Boost-Enabled Development

Leverage Laravel Boost MCP server tools for all development tasks. Use `search-docs` before writing code for Laravel ecosystem packages (Laravel, Inertia, Livewire, Filament, Pest, Tailwind, Nova). Use `list-artisan-commands` to verify Artisan parameters. Use `get-absolute-url` for sharing project URLs. Use `tinker` for PHP debugging and Eloquent queries. Use `database-query` for read-only database queries. Use `browser-logs` for frontend debugging.

**Rationale**: Boost tools provide version-specific, context-aware guidance. Using them ensures code follows best practices and reduces errors from outdated documentation or incorrect approaches.

### Code Quality Standards

Run `vendor/bin/pint --dirty` before finalizing any changes to ensure code style consistency. Use PHP 8.4 features: constructor property promotion, explicit return types, type hints for parameters. Prefer PHPDoc blocks over inline comments. Use curly braces for all control structures, even single-line. Use TitleCase for Enum keys. Follow existing code conventions when creating/editing files. Check sibling files for structure and naming patterns. Use descriptive variable names (e.g., `isRegisteredForDiscounts`, not `discount()`).

**Rationale**: Consistent code quality improves readability, reduces bugs, and makes onboarding faster. Pint enforces style automatically while PHP 8 features improve type safety and maintainability.

## Technology Stack Requirements

- **Backend**: PHP 8.4.14, Laravel 12
- **Frontend**: React 19, Inertia v2, Tailwind CSS v4
- **Authentication**: Laravel Fortify v1
- **Type Safety**: Laravel Wayfinder (TypeScript route generation)
- **Testing**: Pest v4 (Unit, Feature, Browser)
- **Code Quality**: Laravel Pint v1
- **Database**: PostgreSQL (configured in .env), Eloquent ORM
- **Development**: Laravel Boost MCP, Laravel Sail v1

**Constraint**: Do not change application dependencies without explicit approval. Stick to existing directory structure. Do not create new base folders without approval.

## Development Workflow

### Code Changes Process

1. Use `search-docs` to research correct approach for Laravel ecosystem packages
2. Write or update tests using Pest (Unit or Feature)
3. Ensure tests FAIL before implementation
4. Implement changes following Laravel conventions
5. Run `vendor/bin/pint --dirty` to format code
6. Run `php artisan test --compact` with appropriate filter
7. If frontend changes not reflected, run `npm run build`, `npm run dev`, or `composer run dev`

### Feature Development

1. Create models, factories, and seeders using `php artisan make:model`
2. Use Eloquent relationships with return type hints
3. Use queued jobs (`ShouldQueue` interface) for time-consuming operations
4. Implement Form Request classes for validation
5. Use Inertia::render() to pass data to frontend
6. Leverage Wayfinder for type-safe routes (import via `@/actions/` for controllers, `@/routes/` for named routes)

### Frontend Development

- Use Tailwind CSS v4 with `@import "tailwindcss"` (NOT `@tailwind` directives)
- Use gap utilities for spacing, not margins
- Support dark mode with `dark:` prefix if existing components do
- Use `@theme` directive for custom theme extensions
- Avoid deprecated v3 utilities (bg-opacity-_, text-opacity-_, etc.)

## Governance

This constitution supersedes all other development practices. All code reviews and implementation work MUST verify compliance with these principles.

### Amendment Process

Constitution amendments require:

1. Documentation of proposed change with rationale
2. Approval from project maintainer
3. Migration plan for existing code if breaking changes

### Versioning Policy

- MAJOR: Backward incompatible governance/principle removals or redefinitions
- MINOR: New principle/section added or materially expanded guidance
- PATCH: Clarifications, wording, typo fixes, non-semantic refinements

### Compliance Review

- Every PR/review must verify constitution compliance
- Complexity beyond constitution guidelines must be explicitly justified
- Use AGENTS.md for runtime development guidance (contains detailed Laravel Boost guidelines)

**Version**: 1.0.0 | **Ratified**: 2026-01-15 | **Last Amended**: 2026-01-15
