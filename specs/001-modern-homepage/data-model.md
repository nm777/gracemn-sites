# Data Model: Modern Homepage with Navigation

**Feature**: 001-modern-homepage
**Date**: January 15, 2026

## Overview

This feature is a static navigation and homepage implementation with no persistent data storage requirements. All content is static and managed through Inertia.js pages and components.

## Entities

### No Database Entities Required

This feature does not require any Eloquent models or database tables. All content is static and served through:

1. **Inertia Pages**: React components in `resources/js/Pages/` that render static content
2. **Server-Side Routes**: Laravel routes in `routes/web.php` that return Inertia responses
3. **Shared Layout**: React component containing navigation menu

## Conceptual Data Structures

### Navigation Items (Runtime Only)

Navigation items are defined in the shared Layout component as static data:

```typescript
interface NavigationItem {
  title: string; // "Home", "Visit Us", "Sermons", "Music", "Live Stream"
  href: string; // "/", "/visit-us", "/sermons", "/music", "/live-stream"
}
```

**Storage**: Hardcoded in `resources/js/Pages/Layout.tsx`
**Lifecycle**: Runtime only, not persisted

### Page Props (Runtime Only)

Each page receives minimal props from the controller:

```typescript
interface PageProps {
  // No data props needed - static pages
  // Future: May include dynamic content, SEO metadata, etc.
}
```

**Storage**: Passed via `Inertia::render()` from controllers
**Lifecycle**: Request/response cycle only

## Relationships

### No Entity Relationships

Since there are no database entities, there are no Eloquent relationships to define.

**Component Relationships**:

- Layout component wraps all page components
- Navigation items are children of Layout component
- Page components are children of Layout component

## Validation Rules

### No Backend Validation Required

Since there are no user inputs or forms in this feature, no Form Request classes are needed.

**Frontend Validation**: Not applicable (no user input forms)

## State Management

### React Component State

The only state management needed is for the mobile navigation menu:

```typescript
interface LayoutState {
  mobileMenuOpen: boolean; // Controls hamburger menu visibility
}
```

**Location**: `resources/js/Pages/Layout.tsx`
**Scope**: Component-level state, not persisted

## Future Considerations

### Potential Data Entities (Not in MVP)

If the feature expands to include dynamic content, these entities may be needed:

1. **Page Content**: If pages become CMS-managed
2. **Navigation Configuration**: If navigation becomes configurable
3. **Site Settings**: If colors, fonts, etc. become user-configurable

**Decision**: Deferring to future features - keeping this feature static as per requirements.

## Summary

| Category               | Count | Details                    |
| ---------------------- | ----- | -------------------------- |
| Database Models        | 0     | No persistence required    |
| Eloquent Relationships | 0     | No entity relationships    |
| Form Requests          | 0     | No user input validation   |
| Migrations             | 0     | No database schema changes |
| React Components       | 6     | Layout + 5 page components |
| Controllers            | 5     | One per page route         |

**Data Model Complexity**: LOW - This is a static navigation feature with no database requirements.
