# Research: Modern Homepage with Navigation

**Feature**: 001-modern-homepage
**Date**: January 15, 2026

## Research Decisions

### Navigation Structure and Layout

**Decision**: Use Inertia React with a shared Layout component containing the navigation menu

**Rationale**:

- Inertia's shared layout pattern (from documentation) provides a clean way to maintain consistent navigation across all pages
- The Layout component with children pattern allows for persistent navigation state
- Using `<Link>` component from `@inertiajs/react` ensures SPA-like navigation without full page reloads
- React 19 + Inertia v2 is the established tech stack in the constitution

**Alternatives considered**:

- Blade templates with @extends: Rejected because constitution requires Inertia-first frontend
- Client-side routing only: Rejected because we need server-side routing for SEO and initial load performance
- Multiple layout components: Rejected as unnecessary complexity - single shared layout sufficient for this feature

**Implementation approach**:

- Create `resources/js/Pages/Layout.tsx` as a shared layout component
- Use persistent layouts pattern to avoid destroying/recreating layout between visits
- Navigation menu will contain all five items: Home, Visit Us, Sermons, Music, Live Stream
- Each page will use `<Link href="/">Home</Link>` pattern for navigation

### Responsive Navigation (Mobile)

**Decision**: Implement responsive navigation using Tailwind CSS v4 mobile-first approach with hamburger menu for mobile

**Rationale**:

- Tailwind CSS v4 mobile-first breakpoints (`sm:`, `md:`, `lg:`) provide responsive design capabilities
- Constitution requires Tailwind CSS v4
- Mobile-first approach means styling for mobile first, then layer on larger breakpoints
- Hamburger menu is a standard, accessible pattern for mobile navigation

**Alternatives considered**:

- Stacked links on mobile: Valid for simple sites, but hamburger menu is more scalable
- Off-canvas navigation: More complex, not necessary for 5 navigation items
- Dropdown menus: Not appropriate for top-level navigation structure

**Implementation approach**:

- Use unprefixed Tailwind classes for mobile (the default)
- Add `md:` and `lg:` variants for larger screens
- Implement hamburger menu with `hidden md:block` for desktop menu and `block md:hidden` for mobile menu toggle
- Use state management in React for mobile menu open/close
- Ensure keyboard accessibility with proper ARIA attributes

### 404 Error Page

**Decision**: Create custom Inertia 404 page using Laravel's error handling with Inertia response

**Rationale**:

- Laravel documentation shows custom error pages can be created in `resources/views/errors/404.blade.php`
- However, with Inertia, we should return an Inertia response instead of Blade
- Constitution requires Inertia-first approach
- Custom 404 page improves user experience and provides navigation back to homepage

**Alternatives considered**:

- Default Laravel error page: Not user-friendly, doesn't match site design
- Blade template error page: Doesn't fit Inertia-first architecture
- JavaScript-only 404 handling: Doesn't work on initial page load or without JS

**Implementation approach**:

- Override Laravel's 404 exception handling in `bootstrap/app.php`
- Return Inertia response with custom error page component
- Include navigation menu on 404 page for easy navigation back to homepage
- Add helpful messaging and link to homepage

### Accessibility (ARIA and Keyboard Navigation)

**Decision**: Use semantic HTML, ARIA attributes, and ensure full keyboard navigability

**Rationale**:

- Constitution requires accessibility for assistive technologies
- Tailwind CSS v4 provides ARIA state variants (aria-expanded, aria-hidden, etc.)
- Screen reader compatibility is a requirement (FR-008)
- Keyboard navigation is a requirement (FR-008)

**Alternatives considered**:

- Minimal accessibility: Fails FR-008 requirements
- JavaScript-only accessibility: Doesn't work with JS disabled
- Over-engineered ARIA: Confusing for users and maintainers

**Implementation approach**:

- Use semantic HTML elements (<nav>, <header>, <main>)
- Add proper ARIA attributes for mobile menu: `aria-expanded`, `aria-hidden`, `aria-label`
- Ensure all links are keyboard accessible with proper focus management
- Use Tailwind's `focus:` variants for visible focus states
- Test with screen reader and keyboard navigation
- Ensure navigation works with JavaScript disabled (fallback to standard links)

### Color Scheme and Typography

**Decision**: Use Tailwind CSS v4 default color palette and typography system

**Rationale**:

- Tailwind v4 provides well-designed default colors (neutral palette)
- Default typography scale meets readability requirements (14px minimum)
- Constitution requires Tailwind CSS v4
- Default values are accessible and well-tested
- FR-006 requires visual consistency, which Tailwind's system provides

**Alternatives considered**:

- Custom color palette: Not necessary for MVP, can be added later
- Google Fonts: Adds external dependency, default system fonts are sufficient
- Custom typography scale: Tailwind's defaults meet requirements

**Implementation approach**:

- Use Tailwind's neutral color palette (neutral-50 through neutral-950)
- Use default typography scale (text-sm through text-6xl)
- Ensure minimum 14px font size (text-base is 16px, text-sm is 14px)
- Use consistent spacing with Tailwind's scale (p-4, m-4, gap-4, etc.)
- Apply white space consistently between sections

### Testing Approach

**Decision**: Use Pest v4 for Feature tests and Browser tests

**Rationale**:

- Constitution requires test-first development with Pest v4
- Feature tests for routing and page rendering
- Browser tests for navigation functionality and layout
- Tests must cover happy paths, failure paths, and edge cases
- Browser tests provide realistic user interaction testing

**Alternatives considered**:

- Unit tests only: Insufficient for integration and user flow testing
- Manual testing only: Fails constitution's test-first requirement
- PHPUnit only: Constitution requires Pest v4

**Implementation approach**:

- Feature tests in `tests/Feature/` for each page (Home, VisitUs, Sermons, Music, LiveStream)
- Test that routes return successful responses
- Test that Inertia pages render correctly
- Browser tests in `tests/Browser/` for navigation functionality
- Test navigation clicks lead to correct pages
- Test responsive behavior across viewport sizes
- Test keyboard navigation
- Test 404 error page

## Technology Choices

| Technology                | Version | Justification            |
| ------------------------- | ------- | ------------------------ |
| PHP                       | 8.4.14  | Constitution requirement |
| Laravel                   | 12      | Constitution requirement |
| Inertia (Laravel adapter) | v2      | Constitution requirement |
| React                     | 19      | Constitution requirement |
| Tailwind CSS              | v4      | Constitution requirement |
| Pest                      | v4      | Constitution requirement |

## Patterns and Best Practices

### Inertia Pattern: Shared Layout with Navigation

- Create `Layout.tsx` component in `resources/js/Pages/`
- Use `<Link>` component for all navigation
- Apply layout as default in `resolve()` callback or per-page using `page.layout` property
- Use persistent layout pattern to maintain navigation state

### Tailwind Pattern: Mobile-First Responsive Design

- Write mobile styles first (unprefixed classes)
- Override for larger screens using `sm:`, `md:`, `lg:` variants
- Use container queries for component-level responsive design
- Avoid deprecated v3 utilities (bg-opacity-_, text-opacity-_)

### Laravel Pattern: Routing with Named Routes

- Define routes in `routes/web.php` with `->name()` method
- Use `route()` helper to generate URLs
- Keep routes RESTful where applicable

### Testing Pattern: Test-First Development

1. Write test (expecting failure)
2. Implement feature to make test pass
3. Run `vendor/bin/pint --dirty` to format
4. Run `php artisan test --compact` with filter
5. Repeat for each feature

## Notes

- No database models needed for this feature (static pages with navigation)
- No API contracts needed (this is frontend navigation only)
- All data is static - no dynamic content requirements
- Performance target: Pages load under 2 seconds, navigation under 3 seconds
- Accessibility is a priority - must test with screen readers and keyboard
- Dark mode support not required by spec, but should be considered for future
